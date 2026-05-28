// ============================================
// VERB-KONJUGATION — Verbe IMPERSONALE (refactor mai 2026)
// Claudia Toth · A2/B1 · 4 verbe-cheie
// Toate PONS-verified · Präteritum → RO IMPERFECT
// Flag `impersonal: true` (regulă §verbs.js)
// ============================================

const verbsData = [
    {
        inf: 'regnen', ro: 'a ploua', typ: 'regulat (impersonal)', aux: 'haben', part: 'geregnet', impersonal: true,
        praes: [['es','regnet','plouă']],
        praet: [['es','regnete','ploua']],
        perf: [['es','hat geregnet','a plouat']],
        note: '🌧️ Verb IMPERSONAL — DOAR forma „es" la toate timpurile. NU se conjugă cu ich/du/wir/ihr/sie. „Es regnet" = plouă (acum). „Es regnete" = ploua (atunci). „Es hat geregnet" = a plouat.'
    },
    {
        inf: 'schneien', ro: 'a ninge', typ: 'regulat (impersonal)', aux: 'haben', part: 'geschneit', impersonal: true,
        praes: [['es','schneit','ninge']],
        praet: [['es','schneite','ningea']],
        perf: [['es','hat geschneit','a nins']],
        note: '❄️ Verb IMPERSONAL — DOAR „es". <em>Im Winter schneit es oft.</em> (Iarna ninge des.) <em>Gestern hat es geschneit.</em> (Ieri a nins.)'
    },
    {
        inf: 'hageln', ro: 'a cădea grindină', typ: 'regulat (impersonal)', aux: 'haben', part: 'gehagelt', impersonal: true,
        praes: [['es','hagelt','cade grindină']],
        praet: [['es','hagelte','cădea grindină']],
        perf: [['es','hat gehagelt','a căzut grindină']],
        note: '🧊 Verb IMPERSONAL pur — DOAR „es". <em>Plötzlich hagelte es.</em> (Brusc a căzut grindină.) Fenomen meteo rar dar important pentru vocabular Wetter.'
    },
    {
        inf: 'klingeln', ro: 'a suna (soneria/telefonul)', typ: 'regulat (impersonal + personal)', aux: 'haben', part: 'geklingelt',
        praes: [['ich','klingle','sun (la cineva)'],['du','klingelst','suni'],['er/sie/es','klingelt','sună (soneria)'],['wir','klingeln','sunăm'],['ihr','klingelt','sunați'],['sie/Sie','klingeln','sună']],
        praet: [['ich','klingelte','sunam'],['du','klingeltest','sunai'],['er/sie/es','klingelte','suna'],['wir','klingelten','sunam'],['ihr','klingeltet','sunați'],['sie/Sie','klingelten','sunau']],
        perf: [['ich','habe geklingelt','am sunat'],['du','hast geklingelt','ai sunat'],['er/sie/es','hat geklingelt','a sunat'],['wir','haben geklingelt','am sunat'],['ihr','habt geklingelt','ați sunat'],['sie/Sie','haben geklingelt','au sunat']],
        note: '🔔 Verb DUAL — poate fi IMPERSONAL „es klingelt" (sună soneria) SAU PERSONAL „ich klingle" (eu sun la cineva). Singurul verb din lecție cu 2 paradigme. Atenție: ich klingle (NU klingele), pentru că -el se contracta natural.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function(x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[0];
    if (v.impersonal) {
        return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
            '<h4>Perfekt (perfect compus / timp vorbit)</h4>' +
            '<p style="margin:0;">🚨 Verb IMPERSONAL — doar forma „<strong>es</strong>": <em>' + ex[0] + ' <strong>' + ex[1] + '</strong></em> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
            '<small style="color:#6b7280;">NU se conjugă cu ich/du/wir/ihr/sie — există DOAR forma a 3-a sg cu „es".</small></p></div>';
    }
    var ex2 = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (perfect compus / timp vorbit)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex2[0] + ' <strong>' + ex2[1] + '</strong> · <em style="color:#6b7280;">' + ex2[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '<div class="exercise-instruction"><strong>🔁 4 verbe IMPERSONALE-cheie:</strong> regnen, schneien, hageln (pur impersonale — DOAR „es") + klingeln (DUAL: poate fi impersonal SAU personal). Toate PONS-verified.</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">Cele 3 verbe meteo (<em>regnen, schneien, hageln</em>) sunt PUR impersonale — NU spunem niciodată „ich regne" sau „du schneist". Au DOAR persoana 3 sg cu „es". A 4-a, <em>klingeln</em>, e capcana — poate fi <em>es klingelt</em> (sună soneria, impersonal) SAU <em>ich klingle</em> (eu sun la cineva, personal). Atenție: ich klingle (NU klingele) pentru că -el se contracta. 🦋</div>' +
        '</div></div>';

    verbsData.forEach(function(v, i) {
        let badge;
        if (v.impersonal) badge = '#f59e0b';
        else if (v.typ.indexOf('auxiliar') >= 0) badge = '#7c3aed';
        else if (v.typ.indexOf('tare') >= 0) badge = '#dc2626';
        else badge = '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
