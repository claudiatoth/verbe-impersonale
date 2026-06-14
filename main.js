// ============================================
// MAIN.JS — Verbul WERDEN
// Claudia Toth · Annettes Deutschkurs · A2/B1
// Audio cu PĂSTRARE poziție + RESUME (Regula 16 — 27 mai 2026)
// ============================================

function toggleMainSection(i) {
    const content = document.getElementById('main-section-' + i);
    const arrow = document.querySelectorAll('.arrow')[i];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function openSection(index) {
    const contents = document.querySelectorAll('.section-content');
    const arrows = document.querySelectorAll('.arrow');
    if (contents[index] && !contents[index].classList.contains('active')) {
        contents[index].classList.add('active');
        if (arrows[index]) arrows[index].classList.add('rotated');
    }
}

// ============================================
// AUDIO — Play / Pause cu PĂSTRARE poziție + RESUME (Regula 16)
// localStorage per lecție × audio → cursantul reia de unde a rămas
// chiar și după închidere browser/tab
// ============================================
let currentAudioId = null;

function audioPositionKey(audioId) {
    return 'lesson-audio-pos::' + window.location.pathname + '::' + audioId;
}

function saveAudioPosition(audioId, time) {
    try { localStorage.setItem(audioPositionKey(audioId), String(time)); } catch (e) {}
}

function loadAudioPosition(audioId) {
    try {
        const v = localStorage.getItem(audioPositionKey(audioId));
        return v ? parseFloat(v) : 0;
    } catch (e) { return 0; }
}

function clearAudioPosition(audioId) {
    try { localStorage.removeItem(audioPositionKey(audioId)); } catch (e) {}
}

function formatAudioTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return m + ':' + s;
}

function toggleAudio(event, audioId) {
    event.stopPropagation();

    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;

    // Dacă alt audio cântă, îl PAUZĂM (păstrăm poziția — nu mai resetăm)
    if (currentAudioId && currentAudioId !== audioId) {
        const prevAudio = document.getElementById(currentAudioId);
        const prevBtn = document.getElementById('btn-' + currentAudioId);
        if (prevAudio) {
            prevAudio.pause();
            saveAudioPosition(currentAudioId, prevAudio.currentTime);
        }
        if (prevBtn) prevBtn.textContent = '▶';
    }

    if (audio.paused) {
        // RESUME de la poziția salvată (dacă există + e validă)
        const savedTime = loadAudioPosition(audioId);
        const tryResume = () => {
            if (savedTime > 1 && audio.duration && savedTime < audio.duration - 1) {
                audio.currentTime = savedTime;
            }
        };
        if (audio.readyState >= 1) {
            tryResume();
        } else {
            audio.addEventListener('loadedmetadata', tryResume, { once: true });
        }
        audio.play().then(() => {
            btn.textContent = '⏸';
            currentAudioId = audioId;
        }).catch(err => {
            console.log('Audio nu poate fi redat:', err);
            alert('Fișierul audio nu este disponibil. Verifică dacă MP3-ul a fost încărcat în folderul audio/.');
            btn.textContent = '▶';
        });
    } else {
        // PAUZĂ — păstrăm poziția în localStorage
        audio.pause();
        saveAudioPosition(audioId, audio.currentTime);
        btn.textContent = '▶';
        currentAudioId = null;
    }

    audio.onended = function() {
        btn.textContent = '▶';
        currentAudioId = null;
        clearAudioPosition(audioId);
    };
}

// STOP — buton separat care OPREȘTE complet + resetează la 0
function stopAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    audio.pause();
    audio.currentTime = 0;
    clearAudioPosition(audioId);
    btn.textContent = '▶';
    if (currentAudioId === audioId) currentAudioId = null;
    const tc = document.getElementById('time-' + audioId);
    if (tc && audio.duration) tc.textContent = '0:00 / ' + formatAudioTime(audio.duration);
}

// ============================================
// INIȚIALIZARE AUDIO — timecode vizibil + auto-save la 3s + beforeunload
// ============================================
function initLessonAudios() {
    document.querySelectorAll('audio[id^="audio-"]').forEach(audio => {
        const player = audio.closest('.audio-player');
        if (player && !player.querySelector('.audio-timecode')) {
            const tc = document.createElement('span');
            tc.className = 'audio-timecode';
            tc.id = 'time-' + audio.id;
            tc.textContent = '—:—';
            tc.style.cssText = 'font-size: 0.85rem; color: #5A5147; margin-left: 10px; font-family: \'Courier New\', monospace; font-weight: 600; white-space: nowrap;';
            player.appendChild(tc);
        }

        let lastSave = -10;
        audio.addEventListener('timeupdate', () => {
            const tc = document.getElementById('time-' + audio.id);
            if (tc) tc.textContent = formatAudioTime(audio.currentTime) + ' / ' + formatAudioTime(audio.duration);
            if (Math.abs(audio.currentTime - lastSave) >= 3) {
                saveAudioPosition(audio.id, audio.currentTime);
                lastSave = audio.currentTime;
            }
        });

        audio.addEventListener('loadedmetadata', () => {
            const tc = document.getElementById('time-' + audio.id);
            if (tc) {
                const savedTime = loadAudioPosition(audio.id);
                const startTime = (savedTime > 1 && savedTime < audio.duration - 1) ? savedTime : 0;
                tc.textContent = formatAudioTime(startTime) + ' / ' + formatAudioTime(audio.duration);
            }
        });

        window.addEventListener('beforeunload', () => {
            if (!audio.paused) saveAudioPosition(audio.id, audio.currentTime);
        });
    });
}

if (document.readyState !== 'loading') {
    initLessonAudios();
} else {
    document.addEventListener('DOMContentLoaded', initLessonAudios);
}
