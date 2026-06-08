// ============================================
// TEST FINAL — Verbe IMPERSONALE (refactor mai 2026)
// Claudia Toth · A2/B1 · 15 întrebări mixte
// Cu secțiunea „Greșelile tale" post-test
// ============================================

function normalizeTestAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim()
        .trim();
}

const finalTestData = [
    // ===== 4 WETTER =====
    { type: 'luckentext', category: '🌧️ Wetter', question: 'Completează:', sentence: 'Im Winter ____ es oft.', translation: 'Iarna ninge des.', accept: ['schneit'], correct: 'schneit', explanation: 'schneien = a ninge. Impersonal pur, doar forma „es".' },
    { type: 'luckentext', category: '🌧️ Wetter', question: 'Completează (Präteritum):', sentence: 'Gestern ____ es stark.', translation: 'Ieri a plouat tare.', accept: ['regnete'], correct: 'regnete', explanation: 'regnen Präteritum P3 sg: es regnete (imperfect — ploua).' },
    { type: 'multiple', category: '🌧️ Wetter', question: 'Ce înseamnă „es hagelt"?', options: ['ninge', 'cade grindină', 'plouă', 'tună'], correct: 'cade grindină', explanation: 'hagelt = grindină (pietre de gheață care cad).' },
    { type: 'translate', category: '🌧️ Wetter', question: 'Traduceți în germană:', ro: 'Plouă tare.', accept: ['es regnet stark', 'es regnet stark.'], correct: 'Es regnet stark.', explanation: 'Es regnet + adverb stark (tare). Impersonal cu „es" obligatoriu.' },

    // ===== 3 SUNETE & SENZAȚII =====
    { type: 'multiple', category: '🔔 Sunete', question: 'Care e cazul corect după „es schmeckt"?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], correct: 'Dativ', explanation: '🚨 es schmeckt cere DATIV: mir, dir, ihm, uns. NU „mich" (acuzativ).' },
    { type: 'translate', category: '🔔 Sunete', question: 'Traduceți:', ro: 'Miroase a cafea.', accept: ['es riecht nach kaffee', 'es riecht nach kaffee.'], correct: 'Es riecht nach Kaffee.', explanation: 'riechen + nach + Dativ = a mirosi a ceva.' },
    { type: 'luckentext', category: '🔔 Sunete', question: 'Completează:', sentence: 'Es ____ an der Tür.', translation: 'Se bate / sună la ușă.', accept: ['klopft', 'klingelt'], correct: 'klopft', explanation: 'klopft (se bate) sau klingelt (sună soneria) — ambele OK pentru contexte similare.' },

    // ===== 4 STĂRI & SITUAȚII =====
    { type: 'multiple', category: '🌟 Stări', question: 'Care e cazul corect după „es gibt"?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], correct: 'Akkusativ', explanation: '🚨 es gibt cere AKKUSATIV: es gibt einEN Park (masc.), eine Frau (fem.), ein Haus (neutru).' },
    { type: 'translate', category: '🌟 Stări', question: 'Traduceți:', ro: 'Există un parc.', accept: ['es gibt einen park', 'es gibt einen park.'], correct: 'Es gibt einen Park.', explanation: 'es gibt + Akk masc: einen Park (NU ein Park).' },
    { type: 'translate', category: '🌟 Stări', question: 'Traduceți:', ro: 'Mi-e bine.', accept: ['es geht mir gut', 'es geht mir gut.', 'mir geht es gut', 'mir geht es gut.'], correct: 'Es geht mir gut.', explanation: 'es geht + Dativ + adverb. Răspunsul clasic la „Wie geht es dir?"' },
    { type: 'multiple', category: '🌟 Stări', question: 'Ce înseamnă „es handelt sich um eine Frage"?', options: ['Este o întâmplare.', 'Este vorba despre o întrebare.', 'Acesta este un comerț.', 'Mă întreb ceva.'], correct: 'Este vorba despre o întrebare.', explanation: 'es handelt sich um + Akk = este vorba despre. Construcție formală B1.' },

    // ===== 4 CAPCANE GRAMATICALE =====
    { type: 'multiple', category: '🚨 Capcană', question: 'Care e CORECT?', options: ['Ich regne.', 'Du regnest.', 'Es regnet.', 'Wir regnen.'], correct: 'Es regnet.', explanation: 'regnen e IMPERSONAL pur — DOAR forma „es". Niciodată ich/du/wir/ihr/sie.' },
    { type: 'luckentext', category: '🚨 Capcană', question: 'Completează cu auxiliarul corect (Perfekt):', sentence: 'Es ____ den ganzen Tag geregnet.', translation: 'A plouat toată ziua.', accept: ['hat'], correct: 'hat', explanation: 'Verbe meteo (regnen, schneien, hageln) folosesc HABEN la Perfekt: es HAT geregnet (NU ist).' },
    { type: 'multiple', category: '🚨 Capcană', question: 'Care e corect: „es wird hell" la Perfekt?', options: ['es hat hell geworden', 'es ist hell geworden', 'es hat geworden hell', 'es wird hell gewesen'], correct: 'es ist hell geworden', explanation: '🚨 werden + Perfekt cere SEIN (schimbare de stare). „es IST hell geworden" — s-a luminat.' },
    { type: 'translate', category: '🚨 Capcană', question: 'Traduceți corect (atenție Dativ!):', ro: 'Îmi place cafeaua. (gust)', accept: ['der kaffee schmeckt mir', 'der kaffee schmeckt mir.', 'es schmeckt mir', 'es schmeckt mir.'], correct: 'Der Kaffee schmeckt mir.', explanation: 'schmecken + DATIV: mir (nu mich!). Subiect = lucrul gustat (Kaffee), Dativ = persoana care simte gustul.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const c = document.getElementById('final-test-container');
    if (!c) return;
    c.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>15 întrebări mixte</strong>: 4 Wetter + 3 Sunete + 4 Stări/expresii + 4 capcane gramaticale.</p>
            <ul class="test-info-list">
                <li>📋 <strong>Format:</strong> o întrebare pe pagină</li>
                <li>✅ <strong>Verificare:</strong> feedback instant + recapitulare greșeli la final</li>
                <li>🎓 <strong>Prag promovare:</strong> 70%</li>
                <li>⏱️ <strong>Timp estimat:</strong> 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers = {};
    showQuestion(0);
}

function showQuestion(idx) {
    const q = finalTestData[idx];
    if (!q) return;
    const container = document.getElementById('question-container');
    const progressText = document.getElementById('progress-text');
    const progressCategory = document.getElementById('progress-category');
    const progressFill = document.getElementById('progress-fill');
    if (progressText) progressText.textContent = `Întrebarea ${idx + 1} / ${finalTestData.length}`;
    if (progressCategory) progressCategory.textContent = q.category;
    if (progressFill) progressFill.style.width = `${((idx + 1) / finalTestData.length) * 100}%`;
    let inputHTML = '';
    if (q.type === 'multiple') {
        inputHTML = '<div class="test-options">';
        q.options.forEach((opt) => {
            const checked = userAnswers[idx] === opt ? 'checked' : '';
            inputHTML += `<label class="test-option"><input type="radio" name="test-q${idx}" value="${opt}" ${checked}><span>${opt}</span></label>`;
        });
        inputHTML += '</div>';
    } else if (q.type === 'luckentext') {
        const sentence = q.sentence.replace('____', `<input type="text" id="test-input" value="${userAnswers[idx] || ''}" placeholder="completează" style="width:160px; margin:0 6px;">`);
        inputHTML = `<p style="font-size:1.1rem; margin-bottom:8px;">${sentence}</p><p style="color:#6b7280; font-style:italic;">🇷🇴 ${q.translation || ''}</p>`;
    } else {
        const ro = q.ro ? `<p style="margin-bottom:8px;">🇷🇴 ${q.ro}</p>` : '';
        inputHTML = `${ro}<input type="text" id="test-input" value="${userAnswers[idx] || ''}" placeholder="răspunsul tău..." style="width:100%; padding:10px; font-size:1rem;">`;
    }
    container.innerHTML = `<div class="test-question"><h4>${q.question}</h4>${inputHTML}</div>`;
    const fb = document.getElementById('test-feedback');
    if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    const prevBtn = document.getElementById('test-prev-btn');
    const nextBtn = document.getElementById('test-next-btn');
    if (prevBtn) prevBtn.style.display = idx === 0 ? 'none' : 'inline-block';
    if (nextBtn) nextBtn.textContent = idx === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const radio = document.querySelector(`input[name="test-q${currentQuestionIndex}"]:checked`);
        userAnswer = radio ? radio.value : '';
    } else {
        const inp = document.getElementById('test-input');
        userAnswer = inp ? inp.value : '';
    }
    userAnswers[currentQuestionIndex] = userAnswer;
    const fb = document.getElementById('test-feedback');
    if (!userAnswer) {
        fb.className = 'feedback incorrect';
        fb.innerHTML = '⚠️ Te rog să dai un răspuns.';
        return;
    }
    let ok = false;
    if (q.type === 'multiple') {
        ok = userAnswer === q.correct;
    } else {
        const u = normalizeTestAnswer(userAnswer);
        ok = q.accept.some(a => normalizeTestAnswer(a) === u);
    }
    fb.className = ok ? 'feedback correct' : 'feedback incorrect';
    fb.innerHTML = ok
        ? `✓ Corect! <em>${q.explanation}</em>`
        : `✗ Greșit. Răspuns corect: <strong>${q.correct}</strong>. <em>${q.explanation}</em>`;
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
        return;
    }
    saveCurrentAnswer();
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

function prevQuestion() {
    if (currentQuestionIndex === 0) return;
    saveCurrentAnswer();
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
}

function saveCurrentAnswer() {
    const q = finalTestData[currentQuestionIndex];
    if (q.type === 'multiple') {
        const radio = document.querySelector(`input[name="test-q${currentQuestionIndex}"]:checked`);
        if (radio) userAnswers[currentQuestionIndex] = radio.value;
    } else {
        const inp = document.getElementById('test-input');
        if (inp) userAnswers[currentQuestionIndex] = inp.value;
    }
}

function finishTest() {
    saveCurrentAnswer();
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => {
        const userAnswer = userAnswers[i] || '';
        let isCorrect = false;
        if (q.type === 'multiple') isCorrect = userAnswer === q.correct;
        else {
            const u = normalizeTestAnswer(userAnswer);
            isCorrect = q.accept.some(a => normalizeTestAnswer(a) === u);
        }
        if (isCorrect) correct++;
    });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    document.getElementById('test-wizard').style.display = 'none';
    const r = document.getElementById('test-results');
    r.style.display = 'block';

    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => {
        const userAnswer = userAnswers[i] || '';
        let isCorrect = false;
        if (q.type === 'multiple') isCorrect = userAnswer === q.correct;
        else {
            const u = normalizeTestAnswer(userAnswer);
            isCorrect = q.accept.some(a => normalizeTestAnswer(a) === u);
        }
        if (!isCorrect) mistakes.push({ idx: i + 1, q, userAnswer });
    });

    if (mistakes.length > 0) {
        mistakesHTML = '<div style="margin-top:30px; padding:20px; background:#fef2f2; border:2px solid #fca5a5; border-radius:12px;">' +
            '<h4 style="color:#991b1b; margin-bottom:12px;">📝 Greșelile tale — recapitulare cu răspunsuri corecte</h4>';
        mistakes.forEach(m => {
            const userShow = m.userAnswer ? `<em>„${m.userAnswer}"</em>` : '<em>(fără răspuns)</em>';
            mistakesHTML += '<div style="background:#fff; padding:12px 14px; margin-bottom:10px; border-left:4px solid #dc2626; border-radius:6px;">' +
                `<div style="font-weight:bold; color:#065f46; margin-bottom:6px;">Întrebarea ${m.idx} <span style="color:#6b7280; font-weight:normal; font-size:0.85rem;">· ${m.q.category}</span></div>` +
                `<div style="margin-bottom:6px; color:#374151;">${m.q.question}` +
                (m.q.sentence ? ` <em style="color:#6b7280;">${m.q.sentence}</em>` : '') +
                (m.q.ro && !m.q.sentence ? ` <em style="color:#6b7280;">🇷🇴 ${m.q.ro}</em>` : '') +
                '</div>' +
                `<div style="color:#dc2626; font-size:0.92rem;">❌ Răspunsul tău: ${userShow}</div>` +
                `<div style="color:#047857; font-size:0.92rem; margin-top:4px;">✓ Răspuns corect: <strong>${m.q.correct}</strong></div>` +
                `<div style="color:#6b7280; font-size:0.88rem; font-style:italic; margin-top:6px; padding-top:6px; border-top:1px dashed #e5e7eb;">💡 ${m.q.explanation}</div>` +
                '</div>';
        });
        mistakesHTML += '</div>';
    } else {
        mistakesHTML = '<div style="margin-top:24px; padding:16px; background:#ecfdf5; border:2px solid #10B981; border-radius:12px; text-align:center;">' +
            '<p style="color:#065f46; font-weight:bold;">🏆 Toate răspunsurile corecte — fără greșeli!</p></div>';
    }

    r.innerHTML = `
        <h3 style="color:#065f46; text-align:center;">${passed ? '🏆 Felicitări — Test trecut!' : '📖 Mai exersează puțin'}</h3>
        <div style="text-align:center; font-size:2rem; font-weight:bold; color:${passed ? '#047857' : '#dc2626'}; margin:20px 0;">${correct} / ${total} <span style="font-size:1.2rem;">(${pct}%)</span></div>
        <p style="text-align:center; color:#6b7280;">${passed ? 'Stăpânești verbele impersonale și expresiile cu „es"!' : 'Recitește subsecțiunile și încearcă din nou.'}</p>
        ${mistakesHTML}
        <div style="text-align:center; margin-top:20px;">
            <button class="btn btn-check" onclick="resetTest()">↻ Reia testul</button>
        </div>
    `;
}

function resetTest() {
    currentQuestionIndex = 0;
    userAnswers = {};
    testCompleted = false;
    document.getElementById('test-results').style.display = 'none';
    document.getElementById('test-intro').style.display = 'block';
}

buildFinalTest();
