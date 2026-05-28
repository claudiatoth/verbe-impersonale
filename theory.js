// ============================================
// TEORIE — Verbe IMPERSONALE (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · A2/B1
// 6 subsecțiuni · 5 MP3 vocea Claudia (din repo vechi)
// Audio cu PLAY + STOP separate (Regula 16)
// ============================================

const theoryHTML = `
    <!-- Sub 0: Ce sunt verbele impersonale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Ce sunt verbele impersonale? — structura cu „es"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <button class="audio-btn audio-stop" onclick="stopAudio(event, 'audio-0')" title="Stop și resetează la început">⏹</button>
                    <audio id="audio-0" preload="metadata"><source src="audio/01_introducere.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Ascultă introducerea — vocea Claudiei</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Verbele <strong>IMPERSONALE</strong> sunt verbele care folosesc OBLIGATORIU pronumele <strong>„es"</strong> ca subiect — nu se conjugă pe persoane (eu, tu, el, noi etc.). Au DOAR forma persoanei a 3-a singulară (es regnet, es schneit, es klingelt). În română traducerea e adesea fără subiect explicit: „plouă", „ninge", „sună". Sunt clasificate în 4 categorii: A. Wetter (meteo) · B. Timp & lumină · C. Sunete & senzații · D. Stări & situații generale. 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🎯 Caracteristica principală</h4>
                <p>Verbele impersonale au DOAR forma <strong>„es"</strong> — NU se conjugă cu ich/du/wir/ihr/sie:</p>
                <ul style="margin-top:6px;">
                    <li>✅ <strong style="color:#10b981;">Es regnet.</strong> (Plouă.) — Präsens</li>
                    <li>✅ <strong style="color:#10b981;">Es regnete.</strong> (Ploua.) — Präteritum</li>
                    <li>✅ <strong style="color:#10b981;">Es hat geregnet.</strong> (A plouat.) — Perfekt</li>
                    <li>❌ INTERZIS: <em>Ich regne</em>, <em>du regnest</em>, <em>wir regnen</em> — NU există!</li>
                </ul>
            </div>

            <div class="theory-box" style="background:#fef3c7;">
                <h4>⚠️ 3 capcane mari</h4>
                <ol style="margin-top:6px;">
                    <li style="margin-bottom:8px;"><strong>„es" e OBLIGATORIU</strong> — nu poate fi omis. <em>Regnet</em> singur (fără es) e GREȘIT.</li>
                    <li style="margin-bottom:8px;"><strong>Es gibt vs es ist</strong> — <em>es gibt</em> + Akkusativ = există / există; <em>es ist</em> + Nominativ = este (vorbim despre ceva specific).<br>
                    <em>Es gibt Schnee.</em> (Există zăpadă.) vs <em>Es ist Schnee.</em> (Asta e zăpadă.)</li>
                    <li><strong>Verbe IMPERSONALE vs PERSONALE cu același radical</strong> — unele verbe pot fi AMBELE: <em>es klingelt</em> (sună soneria — impersonal) vs <em>ich klingle</em> (eu sun la cineva — personal).</li>
                </ol>
            </div>
        </div>
    </div>

    <!-- Sub 1: A. Wetter -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🌧️ 2. A. Wetter — Fenomene meteo (11 verbe)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <button class="audio-btn audio-stop" onclick="stopAudio(event, 'audio-1')" title="Stop">⏹</button>
                    <audio id="audio-1" preload="metadata"><source src="audio/02_wetter.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Tabelul A — Fenomene meteo — vocea Claudiei</span>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Verb impersonal</th><th>Traducere RO</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td><strong>es regnet</strong></td><td>plouă</td><td><em>Heute regnet es stark.</em> (Azi plouă tare.)</td></tr>
                    <tr><td><strong>es schneit</strong></td><td>ninge</td><td><em>Im Winter schneit es oft.</em> (Iarna ninge des.)</td></tr>
                    <tr><td><strong>es hagelt</strong></td><td>cade grindină</td><td><em>Plötzlich hagelte es.</em> (Brusc a căzut grindină.)</td></tr>
                    <tr><td><strong>es donnert</strong></td><td>tună</td><td><em>Es donnert und blitzt.</em> (Tună și fulgeră.)</td></tr>
                    <tr><td><strong>es blitzt</strong></td><td>fulgeră</td><td><em>Es blitzt am Himmel.</em> (Fulgeră pe cer.)</td></tr>
                    <tr><td><strong>es stürmt</strong></td><td>e furtună</td><td><em>Draußen stürmt es.</em> (Afară e furtună.)</td></tr>
                    <tr><td><strong>es windet</strong></td><td>bate vântul</td><td><em>Es windet seit gestern.</em> (Bate vântul de ieri.)</td></tr>
                    <tr><td><strong>es nieselt</strong></td><td>burnițează</td><td><em>Es nieselt leicht.</em> (Burnițează ușor.)</td></tr>
                    <tr><td><strong>es friert</strong></td><td>îngheață</td><td><em>Nachts friert es.</em> (Noaptea îngheață.)</td></tr>
                    <tr><td><strong>es taut</strong></td><td>se topește (zăpada)</td><td><em>Im Frühling taut es.</em> (Primăvara se topește.)</td></tr>
                    <tr><td><strong>es ist neblig</strong></td><td>e ceață</td><td><em>Heute ist es neblig.</em> (Azi e ceață.)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#dbeafe; margin-top:14px;">
                <h4>💡 Întrebare clasică</h4>
                <p>„Cum e vremea?" = <strong>Wie ist das Wetter?</strong></p>
                <p>Răspuns: <em>Es regnet.</em> · <em>Es ist sonnig.</em> · <em>Es schneit.</em></p>
            </div>
        </div>
    </div>

    <!-- Sub 2: B. Timp & lumină -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🌅 3. B. Timp & lumină — fenomene naturale (4 verbe)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <button class="audio-btn audio-stop" onclick="stopAudio(event, 'audio-2')" title="Stop">⏹</button>
                    <audio id="audio-2" preload="metadata"><source src="audio/03_timp_lumina.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Tabelul B — Timp & lumină — vocea Claudiei</span>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Expresie impersonală</th><th>Traducere RO</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td><strong>es wird hell</strong></td><td>se luminează</td><td><em>Am Morgen wird es hell.</em> (Dimineața se luminează.)</td></tr>
                    <tr><td><strong>es wird dunkel</strong></td><td>se întunecă</td><td><em>Am Abend wird es dunkel.</em> (Seara se întunecă.)</td></tr>
                    <tr><td><strong>es dämmert</strong></td><td>se înserează / amurg</td><td><em>Es dämmert schon.</em> (Deja se înserează.)</td></tr>
                    <tr><td><strong>es tagt</strong></td><td>se luminează de ziuă</td><td><em>Es tagt am Horizont.</em> (Se face ziuă la orizont.) — formal/literar</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7; margin-top:14px;">
                <h4>📌 Atenție la structura cu „werden"</h4>
                <p><em>es wird hell / dunkel</em> = <strong>werden</strong> (a deveni) folosit impersonal + adjectiv. Aici werden se conjugă la P3 sg „wird". La Perfekt: <em>es ist hell geworden</em> (cu sein, ca werden!).</p>
            </div>
        </div>
    </div>

    <!-- Sub 3: C. Sunete & senzații -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔔 4. C. Sunete & senzații (6 verbe)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <button class="audio-btn audio-stop" onclick="stopAudio(event, 'audio-3')" title="Stop">⏹</button>
                    <audio id="audio-3" preload="metadata"><source src="audio/04_sunete_senzatii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Tabelul C — Sunete & senzații — vocea Claudiei</span>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Verb impersonal</th><th>Traducere RO</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td><strong>es klopft</strong></td><td>se bate la ușă</td><td><em>Es klopft an der Tür.</em> (Se bate la ușă.)</td></tr>
                    <tr><td><strong>es klingelt</strong></td><td>sună soneria</td><td><em>Es klingelt an der Tür.</em> (Sună la ușă.)</td></tr>
                    <tr><td><strong>es riecht (nach)</strong></td><td>miroase (a ...)</td><td><em>Es riecht nach Kaffee.</em> (Miroase a cafea.)</td></tr>
                    <tr><td><strong>es schmeckt (mir)</strong></td><td>îmi place (gustul)</td><td><em>Es schmeckt mir gut.</em> (Îmi place / E bun.)</td></tr>
                    <tr><td><strong>es brennt</strong></td><td>arde</td><td><em>Es brennt im Wald!</em> (Arde în pădure!)</td></tr>
                    <tr><td><strong>es läutet</strong></td><td>sună clopotul</td><td><em>Es läutet zur Messe.</em> (Sună clopotul pentru slujbă.)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7; margin-top:14px;">
                <h4>⚠️ Capcana „es schmeckt MIR" vs „es schmeckt MICH"</h4>
                <p><em>es schmeckt</em> cere <strong>DATIV</strong>: „<strong>mir</strong>, <strong>dir</strong>, <strong>ihm</strong>, <strong>uns</strong>, etc." — Verb cu Dativ pentru persoana care simte/percepe gustul. NU se zice „es schmeckt mich" (acuzativ).</p>
            </div>

            <div class="theory-box" style="background:#dbeafe; margin-top:14px;">
                <h4>💡 IMPERSONAL vs PERSONAL — capcana clasică</h4>
                <p>Multe din aceste verbe pot fi FOLOSITE și PERSONAL (cu subiect explicit):</p>
                <ul style="margin-top:6px;">
                    <li><em>Es klingelt.</em> (Sună soneria — impersonal.) vs <em>Ich klingle bei meinem Freund.</em> (Eu sun la prietenul meu — personal.)</li>
                    <li><em>Es klopft.</em> (Se bate.) vs <em>Sie klopft an die Tür.</em> (Ea bate la ușă.)</li>
                    <li><em>Es brennt.</em> (Arde.) vs <em>Das Haus brennt.</em> (Casa arde — cu subiect explicit.)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Sub 4: D. Stări & situații generale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🌟 5. D. Stări & situații generale (5 expresii cheie)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <button class="audio-btn audio-stop" onclick="stopAudio(event, 'audio-4')" title="Stop">⏹</button>
                    <audio id="audio-4" preload="metadata"><source src="audio/05_stari_situatii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🎙️ Tabelul D — Stări & situații — vocea Claudiei</span>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Expresie impersonală</th><th>Traducere RO</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td><strong>es geht (mir)</strong></td><td>(îmi) merge / mă simt</td><td><em>Wie geht es dir? — Mir geht es gut.</em> (Cum îți merge? — Mi-e bine.)</td></tr>
                    <tr><td><strong>es gibt (+ Akk)</strong></td><td>există · este (loc)</td><td><em>Es gibt viele Möglichkeiten.</em> (Există multe posibilități.)</td></tr>
                    <tr><td><strong>es fehlt (mir an)</strong></td><td>(îmi) lipsește</td><td><em>Es fehlt mir an Zeit.</em> (Îmi lipsește timpul.)</td></tr>
                    <tr><td><strong>es handelt sich um</strong></td><td>este vorba despre</td><td><em>Es handelt sich um eine Frage.</em> (Este vorba despre o întrebare.)</td></tr>
                    <tr><td><strong>es kommt darauf an</strong></td><td>depinde</td><td><em>Es kommt darauf an, wann du kommst.</em> (Depinde de când vii.)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7; margin-top:14px;">
                <h4>🚨 Capcana cea mai mare — „es gibt" vs „es ist"</h4>
                <p><strong>es gibt + Akkusativ</strong> = exprimă <em>existența</em> sau <em>disponibilitatea</em>:</p>
                <ul style="margin-top:6px;">
                    <li><em>Es gibt <strong>einen</strong> Park.</em> (Există un parc. — Akk masc: einen)</li>
                    <li><em>Es gibt <strong>viele</strong> Möglichkeiten.</em> (Există multe posibilități. — Akk pl)</li>
                </ul>
                <p style="margin-top:8px;"><strong>es ist + Nominativ</strong> = exprimă <em>identitatea / starea</em>:</p>
                <ul style="margin-top:6px;">
                    <li><em>Es ist <strong>ein</strong> Park.</em> (E un parc. — Nom masc: ein)</li>
                    <li><em>Es ist kalt.</em> (E frig.)</li>
                </ul>
            </div>

            <div class="theory-box" style="background:#dbeafe; margin-top:14px;">
                <h4>💡 Întrebări cheie B1</h4>
                <p>→ <em>Worum handelt es sich?</em> (Despre ce e vorba?)</p>
                <p>→ <em>Was gibt es Neues?</em> (Ce mai e nou? — literalmente „ce există nou?")</p>
                <p>→ <em>Worauf kommt es an?</em> (De ce depinde?)</p>
            </div>
        </div>
    </div>

    <!-- Sub 5: Sinteză gramaticală -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>📐 6. Sinteză gramaticală — conjugare la cele 3 timpuri + capcane</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <h4>🎯 Conjugarea verbelor impersonale — DOAR forma „es"</h4>
                <p>Verbele impersonale NU se conjugă cu ich/du/wir/ihr/sie — au DOAR persoana 3 singular cu „es":</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">📖 Cele 3 timpuri (exemplu: regnen)</h4>
            <table class="grammar-table">
                <thead><tr><th>Timp</th><th>Forma</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td><strong>Präsens</strong></td><td><strong style="color:#10b981;">es regnet</strong></td><td>plouă (acum)</td></tr>
                    <tr><td><strong>Präteritum</strong> (imperfect)</td><td><strong style="color:#10b981;">es regnete</strong></td><td>ploua (atunci)</td></tr>
                    <tr><td><strong>Perfekt</strong> (perfect compus)</td><td><strong style="color:#10b981;">es hat geregnet</strong></td><td>a plouat</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7; margin-top:14px;">
                <h4>🚨 La Perfekt — auxiliarul HABEN (cele mai multe) sau SEIN (rar)</h4>
                <p>Majoritatea verbelor impersonale folosesc <strong>haben</strong> la Perfekt:</p>
                <ul style="margin-top:6px;">
                    <li><em>Es <strong>hat</strong> geregnet.</em> (A plouat.)</li>
                    <li><em>Es <strong>hat</strong> geschneit.</em> (A nins.)</li>
                    <li><em>Es <strong>hat</strong> geklopft.</em> (S-a bătut la ușă.)</li>
                </ul>
                <p style="margin-top:8px;">Excepții cu <strong>sein</strong> (schimbare de stare):</p>
                <ul style="margin-top:6px;">
                    <li><em>Es <strong>ist</strong> hell geworden.</em> (S-a luminat.)</li>
                    <li><em>Es <strong>ist</strong> dunkel geworden.</em> (S-a întunecat.)</li>
                </ul>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">📌 Rezumat capcane</h4>
            <table class="grammar-table">
                <thead><tr><th>Capcană</th><th>❌ Greșit</th><th>✅ Corect</th></tr></thead>
                <tbody>
                    <tr><td>„es" obligatoriu</td><td><em>Regnet.</em></td><td><em>Es regnet.</em></td></tr>
                    <tr><td>Nu se conjugă pe persoane</td><td><em>Ich regne.</em></td><td><em>Es regnet.</em> (eu nu pot „să plouă")</td></tr>
                    <tr><td>es gibt + Akk</td><td><em>Es gibt ein Park.</em></td><td><em>Es gibt einen Park.</em></td></tr>
                    <tr><td>es schmeckt + DATIV</td><td><em>Es schmeckt mich.</em></td><td><em>Es schmeckt mir.</em></td></tr>
                    <tr><td>es vs Nom (pentru identitate)</td><td><em>Gibt es kalt.</em></td><td><em>Es ist kalt.</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#ecfdf5; border-color:#10b981; margin-top:18px; text-align:center;">
                <h4>🦋 Felicitări — ai învățat verbele IMPERSONALE!</h4>
                <p>Acum cunoști <strong>26 verbe și expresii impersonale</strong> grupate pe 4 categorii (Wetter, Timp, Sunete, Stări), <strong>regula „es" obligatoriu</strong>, <strong>conjugarea la 3 timpuri</strong> (doar forma „es") și cele <strong>5 capcane cheie</strong> (es gibt + Akk, es schmeckt + Dativ, impersonal vs personal).</p>
            </div>
        </div>
    </div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (!container) return;
    container.innerHTML = theoryHTML;
}

function toggleSubSection(i) {
    const c = document.getElementById('sub-section-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#theory-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildTheory();
