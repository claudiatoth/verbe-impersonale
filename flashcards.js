// ============================================
// FLASHCARDS — Verbe IMPERSONALE (refactor mai 2026)
// Claudia Toth · A2/B1 · 32 carduri
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== 11 VERBE WETTER (Tabel A) =====
    { de: "es regnet", ro: "plouă · fenomen meteo · Perfekt: es hat geregnet", audio: "audio/cards/01-es-regnet.wav" },
    { de: "es schneit", ro: "ninge · fenomen meteo · Perfekt: es hat geschneit", audio: "audio/cards/02-es-schneit.wav" },
    { de: "es hagelt", ro: "cade grindină · Perfekt: es hat gehagelt", audio: "audio/cards/03-es-hagelt.wav" },
    { de: "es donnert", ro: "tună · Perfekt: es hat gedonnert", audio: "audio/cards/04-es-donnert.wav" },
    { de: "es blitzt", ro: "fulgeră · Perfekt: es hat geblitzt", audio: "audio/cards/05-es-blitzt.wav" },
    { de: "es stürmt", ro: "e furtună · Perfekt: es hat gestürmt", audio: "audio/cards/06-es-stuermt.wav" },
    { de: "es windet", ro: "bate vântul · Perfekt: es hat gewindet", audio: "audio/cards/07-es-windet.wav" },
    { de: "es nieselt", ro: "burnițează · ploaie ușoară", audio: "audio/cards/08-es-nieselt.wav" },
    { de: "es friert", ro: "îngheață · temperatura sub 0", audio: "audio/cards/09-es-friert.wav" },
    { de: "es taut", ro: "se topește zăpada · primăvară", audio: "audio/cards/10-es-taut.wav" },
    { de: "es ist neblig", ro: "e ceață · es ist + adjectiv meteo", audio: "audio/cards/11-neblig.wav" },

    // ===== 4 VERBE TIMP & LUMINĂ (Tabel B) =====
    { de: "es wird hell", ro: "se luminează · werden + adjectiv · Perfekt: es ist hell geworden", audio: "audio/cards/12-wird-hell.wav" },
    { de: "es wird dunkel", ro: "se întunecă · werden + adjectiv · Perfekt: es ist dunkel geworden", audio: "audio/cards/13-wird-dunkel.wav" },
    { de: "es dämmert", ro: "se înserează · amurg", audio: "audio/cards/14-es-daemmert.wav" },
    { de: "es tagt", ro: "se face ziuă · formal / literar", audio: "audio/cards/15-es-tagt.wav" },

    // ===== 6 VERBE SUNETE & SENZAȚII (Tabel C) =====
    { de: "es klopft", ro: "se bate la ușă · Perfekt: es hat geklopft", audio: "audio/cards/16-es-klopft.wav" },
    { de: "es klingelt", ro: "sună soneria · Perfekt: es hat geklingelt", audio: "audio/cards/17-es-klingelt.wav" },
    { de: "es riecht nach", ro: "miroase a · es riecht nach Kaffee", audio: "audio/cards/18-es-riecht.wav" },
    { de: "es schmeckt mir", ro: "îmi place gustul · 🚨 cere DATIV (mir, NU mich!)", audio: "audio/cards/19-es-schmeckt.wav" },
    { de: "es brennt", ro: "arde · Perfekt: es hat gebrannt (TARE: brennen)", audio: "audio/cards/20-es-brennt.wav" },
    { de: "es läutet", ro: "sună clopotul · biserică / școală", audio: "audio/cards/21-es-laeutet.wav" },

    // ===== 5 EXPRESII STĂRI & SITUAȚII (Tabel D) =====
    { de: "es geht mir gut", ro: "mi-e bine · răspuns la Wie geht es dir?", audio: "audio/cards/22-geht-mir-gut.wav" },
    { de: "es gibt + Akkusativ", ro: "există · Es gibt einEN Park (Akk masc!)", audio: "audio/cards/23-es-gibt.wav" },
    { de: "es fehlt mir an", ro: "îmi lipsește · es fehlt mir an Zeit", audio: "audio/cards/24-es-fehlt.wav" },
    { de: "es handelt sich um", ro: "este vorba despre · structură formală B1", audio: "audio/cards/25-handelt-sich.wav" },
    { de: "es kommt darauf an", ro: "depinde · es kommt auf X an", audio: "audio/cards/26-kommt-darauf-an.wav" },

    // ===== 6 PROPOZIȚII CHEIE cu „es" =====
    { de: "Wie ist das Wetter?", ro: "Cum e vremea? · întrebarea clasică", audio: "audio/cards/27-wie-wetter.wav" },
    { de: "Es regnet stark.", ro: "Plouă tare · adverb stark = tare", audio: "audio/cards/28-regnet-stark.wav" },
    { de: "Es ist kalt.", ro: "E frig · es ist + adjectiv stare", audio: "audio/cards/29-ist-kalt.wav" },
    { de: "Es hat geregnet.", ro: "A plouat · Perfekt cu haben + geregnet", audio: "audio/cards/30-hat-geregnet.wav" },
    { de: "Worum handelt es sich?", ro: "Despre ce e vorba? · întrebare B1", audio: "audio/cards/31-worum-handelt.wav" },
    { de: "Was gibt es Neues?", ro: "Ce mai e nou? · es gibt + Akk neutru", audio: "audio/cards/32-was-gibt-neues.wav" }
];

let currentCardIndex = 0;
let currentFlashAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 32 carduri verbe IMPERSONALE</strong> — 11 Wetter + 4 Timp/lumină + 6 Sunete/senzații + 5 Stări/situații + 6 propoziții cheie.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentFlashAudio) {
        currentFlashAudio.pause();
        currentFlashAudio.currentTime = 0;
    }
    if (card.audio) {
        currentFlashAudio = new Audio(card.audio);
        currentFlashAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
