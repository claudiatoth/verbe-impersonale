// ============================================
// EXERCIȚII — Verbe IMPERSONALE (refactor mai 2026)
// Claudia Toth · A2/B1 · 5 patterns
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim()
        .trim();
}

// ============================================
// EX 1: Fill-in cu verbul impersonal potrivit (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Im Winter ____ es oft.', accept: ['schneit'], correct: 'schneit', hint: 'fenomen alb iarna' },
    { id: 'b', sentence: 'Heute ____ es stark.', accept: ['regnet'], correct: 'regnet', hint: 'fenomen meteo cu picături' },
    { id: 'c', sentence: 'Plötzlich ____ es!', accept: ['hagelt'], correct: 'hagelt', hint: 'pietre de gheață cad' },
    { id: 'd', sentence: 'Es ____ und blitzt.', accept: ['donnert'], correct: 'donnert', hint: 'zgomot puternic cer' },
    { id: 'e', sentence: 'Am Abend wird es ____ .', accept: ['dunkel'], correct: 'dunkel', hint: 'lumina scade' },
    { id: 'f', sentence: 'Es ____ an der Tür.', accept: ['klingelt', 'klopft'], correct: 'klingelt', hint: 'sonerie sau bate la ușă (ambele OK)' },
    { id: 'g', sentence: 'Es ____ nach Kaffee.', accept: ['riecht'], correct: 'riecht', hint: 'percepție olfactivă' },
    { id: 'h', sentence: 'Es ____ mir gut.', accept: ['geht'], correct: 'geht', hint: 'starea cuiva' },
    { id: 'i', sentence: 'Es ____ viele Möglichkeiten.', accept: ['gibt'], correct: 'gibt', hint: 'existență (+ Akk)' },
    { id: 'j', sentence: 'Es ____ darauf an, wann du kommst.', accept: ['kommt'], correct: 'kommt', hint: 'depinde de ceva' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Completează cu verbul impersonal potrivit.</strong><br>Toate propozițiile au „es" — alege verbul din vocabular (regnet, schneit, hagelt, donnert, geht, gibt, etc.).</div>';
    ex1Data.forEach((item, i) => {
        const parts = item.sentence.split('____');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${parts[0]}<input type="text" id="ex1-${item.id}" placeholder="${item.hint}" style="width:160px; margin:0 4px;">${parts[1]}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex1-${item.id}`).value);
        const f = document.getElementById(`ex1-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct} (${item.hint})`;
        if (ok) correct++;
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: Traducere RO → DE (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', ro: 'Plouă.', accept: ['es regnet', 'es regnet.'], correct: 'Es regnet.' },
    { id: 'b', ro: 'Ninge.', accept: ['es schneit', 'es schneit.'], correct: 'Es schneit.' },
    { id: 'c', ro: 'E frig.', accept: ['es ist kalt', 'es ist kalt.'], correct: 'Es ist kalt.' },
    { id: 'd', ro: 'Există un parc.', accept: ['es gibt einen park', 'es gibt einen park.'], correct: 'Es gibt einen Park.' },
    { id: 'e', ro: 'Mi-e bine.', accept: ['mir geht es gut', 'mir geht es gut.', 'es geht mir gut', 'es geht mir gut.'], correct: 'Es geht mir gut.' },
    { id: 'f', ro: 'Se înserează.', accept: ['es daemmert', 'es dämmert', 'es daemmert.', 'es dämmert.'], correct: 'Es dämmert.' },
    { id: 'g', ro: 'Cum e vremea?', accept: ['wie ist das wetter', 'wie ist das wetter?'], correct: 'Wie ist das Wetter?' },
    { id: 'h', ro: 'A plouat.', accept: ['es hat geregnet', 'es hat geregnet.'], correct: 'Es hat geregnet.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Traducere RO → DE.</strong><br>Folosește „es" + verbul potrivit. Pentru existență „există" → es gibt + Akkusativ.</div>';
    ex2Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>🇷🇴 ${item.ro}</label><input type="text" id="ex2-${item.id}" placeholder="în germană..." style="width:100%; margin-top:6px;"></div><div class="feedback" id="ex2-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex2-${item.id}`).value);
        const f = document.getElementById(`ex2-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct}`;
        if (ok) correct++;
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: Corectează greșelile (6 itemi · capcana es-personal)
// ============================================
const ex3Data = [
    { id: 'a', greseala: 'Ich regne im Winter.', accept: ['es regnet im winter', 'es regnet im winter.'], correct: 'Es regnet im Winter.', hint: '🚨 regnen e IMPERSONAL — DOAR „es"' },
    { id: 'b', greseala: 'Regnet.', accept: ['es regnet', 'es regnet.'], correct: 'Es regnet.', hint: '„es" e OBLIGATORIU' },
    { id: 'c', greseala: 'Es schmeckt mich gut.', accept: ['es schmeckt mir gut', 'es schmeckt mir gut.'], correct: 'Es schmeckt mir gut.', hint: 'es schmeckt cere DATIV (mir, NU mich)' },
    { id: 'd', greseala: 'Es gibt ein Park.', accept: ['es gibt einen park', 'es gibt einen park.'], correct: 'Es gibt einen Park.', hint: 'es gibt + Akkusativ → einen (masc.)' },
    { id: 'e', greseala: 'Du regnest.', accept: ['es regnet', 'es regnet.'], correct: 'Es regnet.', hint: 'NU se conjugă cu „du" — DOAR „es"' },
    { id: 'f', greseala: 'Mihai gibt es im Park.', accept: ['es gibt mihai im park', 'es gibt mihai im park.'], correct: 'Es gibt Mihai im Park.', hint: '„es gibt" e construcție fixă — „es" la început' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Corectează greșelile.</strong><br>Toate propozițiile au o greșeală (lipsește „es", greșit cazul, conjugare nepotrivită etc.). Scrie forma corectă.</div>';
    ex3Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>❌ <em style="color:#dc2626;">${item.greseala}</em></label><input type="text" id="ex3-${item.id}" placeholder="${item.hint}" style="width:100%; margin-top:6px;"></div><div class="feedback" id="ex3-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex3-${item.id}`).value);
        const f = document.getElementById(`ex3-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct} (${item.hint})`;
        if (ok) correct++;
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Click-match expresie DE ↔ sens RO (6 perechi)
// ============================================
const ex4Pairs = [
    { de: 'es geht mir gut', ro: 'mi-e bine' },
    { de: 'es gibt einen Park', ro: 'există un parc' },
    { de: 'es kommt darauf an', ro: 'depinde' },
    { de: 'es handelt sich um', ro: 'este vorba despre' },
    { de: 'es fehlt mir an Zeit', ro: 'îmi lipsește timpul' },
    { de: 'es schmeckt mir', ro: 'îmi place gustul' }
];

let ex4Selected = { de: null, ro: null };
let ex4Matched = [];

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    ex4Selected = { de: null, ro: null };
    ex4Matched = [];
    const deShuffled = shuffle(ex4Pairs.map((p, i) => ({ ...p, idx: i })));
    const roShuffled = shuffle(ex4Pairs.map((p, i) => ({ ...p, idx: i })));
    let html = '<div class="exercise-instruction"><strong>📝 Potrivește expresia DE cu sensul RO.</strong><br>Click pe expresia germană, apoi click pe traducerea corectă.</div>';
    html += '<div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-top:16px;">';
    html += '<div><h4 style="color:#065f46; margin-bottom:8px;">🇩🇪 Germană</h4>';
    deShuffled.forEach((p) => {
        html += `<button class="ex4-btn" data-side="de" data-idx="${p.idx}" onclick="ex4Click(this)" style="display:block; width:100%; text-align:left; margin-bottom:8px; padding:10px 14px; border:2px solid #d1d5db; border-radius:8px; background:#fff; cursor:pointer; font-size:0.95rem;">${p.de}</button>`;
    });
    html += '</div><div><h4 style="color:#065f46; margin-bottom:8px;">🇷🇴 Română</h4>';
    roShuffled.forEach((p) => {
        html += `<button class="ex4-btn" data-side="ro" data-idx="${p.idx}" onclick="ex4Click(this)" style="display:block; width:100%; text-align:left; margin-bottom:8px; padding:10px 14px; border:2px solid #d1d5db; border-radius:8px; background:#fff; cursor:pointer; font-size:0.95rem;">${p.ro}</button>`;
    });
    html += '</div></div>';
    c.innerHTML = html;
}

function ex4Click(btn) {
    if (btn.classList.contains('ex4-matched')) return;
    const side = btn.dataset.side;
    const idx = parseInt(btn.dataset.idx);
    document.querySelectorAll(`.ex4-btn[data-side="${side}"]`).forEach(b => {
        if (!b.classList.contains('ex4-matched')) b.style.background = '#fff';
    });
    btn.style.background = '#fef3c7';
    ex4Selected[side] = { btn, idx };
    if (ex4Selected.de && ex4Selected.ro) {
        const ok = ex4Selected.de.idx === ex4Selected.ro.idx;
        if (ok) {
            ex4Selected.de.btn.classList.add('ex4-matched');
            ex4Selected.ro.btn.classList.add('ex4-matched');
            ex4Selected.de.btn.style.background = '#d1fae5';
            ex4Selected.ro.btn.style.background = '#d1fae5';
            ex4Selected.de.btn.style.borderColor = '#10b981';
            ex4Selected.ro.btn.style.borderColor = '#10b981';
            ex4Matched.push(ex4Selected.de.idx);
        } else {
            ex4Selected.de.btn.style.background = '#fee2e2';
            ex4Selected.ro.btn.style.background = '#fee2e2';
            setTimeout(() => {
                if (!ex4Selected.de.btn.classList.contains('ex4-matched')) ex4Selected.de.btn.style.background = '#fff';
                if (!ex4Selected.ro.btn.classList.contains('ex4-matched')) ex4Selected.ro.btn.style.background = '#fff';
            }, 1000);
        }
        ex4Selected = { de: null, ro: null };
    }
}

function checkEx4() {
    return { correct: ex4Matched.length, total: ex4Pairs.length };
}

// ============================================
// EX 5: Richtig oder Falsch (6 itemi conceptual)
// ============================================
const ex5Data = [
    { id: 'a', text: 'Verbele impersonale se pot conjuga cu „ich" și „du".', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Greșit! Au DOAR forma „es" (3 sg). NU există „ich regne" sau „du regnest".' },
    { id: 'b', text: '„Es gibt" cere Akkusativ (es gibt einEN Park).', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Da! es gibt + Akk → einen (masc.), eine (fem.), ein (neutru), pluralul rămâne identic.' },
    { id: 'c', text: '„Es schmeckt mich gut" este corect gramatical.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Greșit! es schmeckt cere DATIV: „es schmeckt MIR gut" (nu „mich").' },
    { id: 'd', text: 'La Perfekt, verbele meteo folosesc auxiliarul „haben" (es hat geregnet).', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Da! Majoritatea cu haben: es hat geregnet, es hat geschneit, es hat geklopft.' },
    { id: 'e', text: '„Klingeln" e DOAR impersonal — nu poate avea subiect personal.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Greșit! klingeln poate fi AMBELE: „es klingelt" (sună soneria — impersonal) SAU „ich klingle bei dir" (eu sun la tine — personal).' },
    { id: 'f', text: 'Putem spune „Regnet" fără „es" la început.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Greșit! „es" e OBLIGATORIU. Numai cu „es" formăm propoziția impersonală corectă: „Es regnet".' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Richtig oder Falsch?</strong><br>Scrie R (Richtig = adevărat) sau F (Falsch = fals) pentru fiecare afirmație despre verbele impersonale.</div>';
    ex5Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${item.text}</label><input type="text" id="ex5-${item.id}" placeholder="R sau F" style="width:80px;"></div><div class="feedback" id="ex5-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex5-${item.id}`).value);
        const f = document.getElementById(`ex5-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.innerHTML = ok ? `✓ ${item.correct} — ${item.exp}` : `Corect: ${item.correct} — ${item.exp}`;
        if (ok) correct++;
    });
    return { correct, total: ex5Data.length };
}

// ============================================
// Build + dispatchers
// ============================================
function checkExercise(n) {
    let result;
    if (n === 1) result = checkEx1();
    else if (n === 2) result = checkEx2();
    else if (n === 3) result = checkEx3();
    else if (n === 4) result = checkEx4();
    else if (n === 5) result = checkEx5();
    if (!result) return;
    const score = document.getElementById(`score-${n}`);
    if (score) {
        const pct = Math.round((result.correct / result.total) * 100);
        const emoji = pct === 100 ? '🏆' : pct >= 60 ? '👍' : '📖';
        score.className = 'score show';
        score.innerHTML = `${emoji} <strong>${result.correct} / ${result.total}</strong> corect (${pct}%)`;
    }
}

function resetExercise(n) {
    let data;
    if (n === 1) data = ex1Data;
    else if (n === 2) data = ex2Data;
    else if (n === 3) data = ex3Data;
    else if (n === 4) { buildEx4(); const s = document.getElementById('score-4'); if (s) { s.className='score'; s.innerHTML=''; } return; }
    else if (n === 5) data = ex5Data;
    if (!data) return;
    data.forEach(item => {
        const inp = document.getElementById(`ex${n}-${item.id}`);
        const fb = document.getElementById(`ex${n}-f${item.id}`);
        if (inp) inp.value = '';
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
    const s = document.getElementById(`score-${n}`);
    if (s) { s.className = 'score'; s.innerHTML = ''; }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
