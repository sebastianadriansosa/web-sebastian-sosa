/* =========================================
   SEBASTIAN SOSA — AI CHATBOT WIDGET
   Powered by Google Gemini API (Free)
   =========================================
   
   INSTRUCCIONES DE USO:
   1. Reemplazá "TU_API_KEY_AQUI" con tu Gemini API key
   2. Copiá este archivo a tu repositorio de GitHub
   3. Agregá esta línea ANTES de </body> en tu index.html:
      <script src="chatbot.js"></script>
   ========================================= */

// ⚠️ REEMPLAZÁ ESTO CON TU API KEY DE GEMINI
const GEMINI_API_KEY = "AIzaSyDOsbtYbIHbZFjAfJLnAGEIi7gRnDz0jZY";

// =========================================
// CONTEXTO COMPLETO DEL PORTFOLIO
// (extraído automáticamente de tu web)
// =========================================
const SEBASTIAN_CONTEXT = `
Tu nombre es AIDA (AI Interactive Digital Assistant), el asistente virtual del portfolio profesional de Sebastian Adrián Sosa.
Si alguien te pregunta cómo te llamás, respondés que sos AIDA.
Respondés preguntas sobre el perfil, experiencia, habilidades y proyectos de Sebastian.
Detectás automáticamente si el visitante escribe en inglés o español y respondés en el mismo idioma.
Sos profesional, concisa y amigable. Nunca inventás información que no esté en el contexto.
Si no sabés algo, decís que pueden contactar a Sebastian directamente.

=== INFORMACIÓN DE SEBASTIAN SOSA ===

PERFIL GENERAL:
- Nombre: Sebastian Adrián Sosa
- Rol: Senior Presales & Solution Architect
- Experiencia: 14+ años en IT
- Ubicación: Villa Devoto, CABA, Argentina
- Trabaja actualmente con una empresa de USA
- Disponible para nuevas oportunidades
- Email: ssosa17@gmail.com
- LinkedIn: linkedin.com/in/ssosa17
- Trailblazer: salesforce.com/trailblazer/sebastianadriansosa

RESUMEN PROFESIONAL:
Senior Presales & Solution Architect con más de 14 años diseñando soluciones de Unified Communications y Contact Center en 5 países. Expandiéndose hacia el ecosistema Salesforce, GenAI, Dialogflow CX y desarrollo full-stack.

MÉTRICAS CLAVE:
- 14+ años en IT
- Proyectos en 5 países diferentes
- 131 badges en Salesforce Trailhead (Ranger)
- 4 Superbadges de Salesforce
- 91,125 puntos en Trailhead
- 20 trails completados
- Agentblazer Champion '26

EXPERTISE TÉCNICO:

1. UC & Contact Center:
   - Plataformas: Avaya Aura, Genesys Cloud, Five9, Microsoft Teams, Collab
   - Deployments cloud, on-premise e híbridos
   - Arquitectura y diseño de plataformas enterprise
   - Presales champion para todas estas plataformas

2. Salesforce:
   - Flow Builder, SOQL/SOSL, Apex development
   - Trailhead Ranger con 131 badges y 4 Superbadges
   - Superbadges: Apex Callouts (May 2026), Flow Fundamentals (May 2026), Record-Triggered Flow (May 2026), Object Relationships (Mar 2026)
   - Agentblazer Champion '26

3. GenAI & Dialogflow CX:
   - Proyectos personales de conversational AI con Google Dialogflow CX
   - Integración de capacidades GenAI en workflows de negocio
   - NLP, automatización

4. Ciberseguridad:
   - Fortinet, Checkpoint
   - Sistemas de detección de fraude
   - Network security frameworks

5. Cloud & Networking:
   - AWS Cloud Practitioner certificado
   - Azure / Microsoft 365
   - Cisco Meraki, VLANs, subnetting
   - Arquitecturas de alta disponibilidad

6. Desarrollo:
   - Frontend: HTML, CSS, JavaScript
   - Python, Node.js, Apex
   - TalentTech certificado
   - Automatización e integraciones con IA

EXPERIENCIA LABORAL:

1. Avaya (Ago 2023 – Presente) — APS Technical Consultant, UC & CC Solutions — Buenos Aires, Argentina
   - Diseño de soluciones Avaya Contact Center y UC: Communication Manager, Call Center Elite, WFO, Avaya Infinity, Cloud Office
   - Implementaciones end-to-end de plataformas de telefonía complejas
   - Migraciones y upgrades con mínimo downtime
   - Soporte técnico L3, troubleshooting con ingeniería de Avaya
   - Workshops y training para clientes

2. DirMOD S.A. (Jun 2022 – Jul 2023) — Solution Design Presales — Buenos Aires, Argentina
   - Reuniones técnicas, presentaciones y demos para clientes corporativos
   - Propuestas técnicas, specs, respuestas a RFIs y RFPs
   - Relaciones estratégicas con cuentas clave como trusted advisor

3. Lumen Technologies (Ago 2021 – Jun 2022) — UC & CC Solution Architect LatAm — Argentina (Regional)
   - Frameworks de arquitectura para soluciones nuevas de la empresa
   - Implementación de soluciones UC (MS Teams, Avaya) y CC (Collab, Genesys, Five9) en LatAm
   - Referente técnico regional para UC y CC

4. Inside One S.A. (Ago 2014 – Jul 2021, 6 años 11 meses) — Engineering & Solutions Manager → Presales Engineer — Buenos Aires, Argentina
   - Creció de Presales Engineer a Engineering & Solutions Manager liderando un equipo completo de ingeniería
   - Frameworks arquitectónicos para nuevas soluciones (robustez, escalabilidad, alta disponibilidad)
   - Surveys técnico-comerciales, cotizaciones, demos de Avaya Aura, IP Office, Cisco Meraki, Extreme, Collab
   - Desarrollo de sistemas de detección de fraude
   - Manuales técnicos, materiales de training, soporte L3

5. Avaya (Sep 2009 – Dic 2011) — Customer Support Engineer — Buenos Aires, Argentina
   - Soporte L3 para clientes Avaya
   - Administración de sistemas de telefonía: TDM, IP, SIP, trunks
   - Linux admin: gestión de usuarios, análisis de trazas de red, instalación y configuración

6. Techint (Ene 2005 – Ago 2009, 4 años 8 meses) — IT Project Manager → Help Desk Supervisor — Argentina, Houston, New York, Calgary
   - Proyectos internacionales de migración IT en Argentina, USA, Canadá y Venezuela
   - Migraciones masivas de OS (Novell a Windows), deployments de servidores, implementaciones de Active Directory
   - Supervisión de equipo Help Desk, SOPs, training, soporte L1-L3

LOGROS DESTACADOS:
1. 5-Country Rollout: Implementación de nodos de Contact Center y UC en 5 países
2. AON Global Board Approval: Cloud Solutions Architect para AON, arquitectura aprobada por el board global de directores
3. Sistema de Detección de Fraude: Desarrollo e implementación desde cero
4. Zero-Downtime Migrations: Múltiples migraciones complejas sin interrupciones de servicio

CERTIFICACIONES:
- AWS Cloud Practitioner — Amazon Web Services (2023)
- Microsoft M100 / Microsoft Teams — Microsoft (2022)
- Avaya Services Data Practitioner — Analytics Specialist II — Avaya (2025)
- Cybersecurity Fundamentals: Networks (2021)
- Scrum Fundamentals — SCRUMstudy (2021)
- GCBA TalentTech — Salesforce Developer — TalentTech/Salesforce (2026)
- GCBA TalentTech — Salesforce Administrator — TalentTech/Salesforce (2025)
- GCBA TalentTech — Introduction to Python (2025)
- GCBA TalentTech — Backend Node.js Developer (2025)
- Frontend Developer — Digital House (2024)

EDUCACIÓN:
- System Analyst — Universidad de Belgrano (2016 – Presente)
- Frontend Developer — Digital House (2024 – 2026)
- Salesforce Administrator — GCBA TalentTech (2025 – 2026)

PROYECTOS PERSONALES:
1. Dialogflow CX Conversational Agent (En progreso): Agente de IA conversacional enterprise con Google Dialogflow CX. Explorando NLU flows, integraciones webhook y diseño de conversaciones multi-turn para Contact Center.
2. Salesforce Automation & Dev (En progreso): Org personal de Salesforce con Flow automations, Apex triggers y modelos de datos. Trabajando hacia certificaciones avanzadas.
3. Technical Portfolio Website (Live): Este mismo sitio — HTML, CSS y JS vanilla. Bilingüe EN/ES, responsive, con analytics persistente, exportación PDF y estética dark tech.

STACK TECNOLÓGICO COMPLETO:
Avaya Aura, Genesys Cloud, Five9, Salesforce, Dialogflow CX, Microsoft Teams, AWS Cloud, Python, Node.js, Apex, Fortinet, Cisco Meraki, Flow Builder, GenAI

NIVEL DE HABILIDADES:
- Avaya Aura / IP Office: 98%
- Genesys / Five9: 88%
- Microsoft Teams UC: 85%
- Collab / Asterisk: 80%
- Salesforce / Apex: 82%
- Python: 70%
- Node.js: 68%
- AWS Cloud: 75%
- Presales / Deal Closure: 97%
- Technical Presentations: 95%
- RFI/RFP Responses: 93%
- English (Advanced): 90%

IDIOMAS: Español (nativo), Inglés (avanzado)

APERTURA LABORAL: Abierto a roles de Presales, Solution Architecture y Salesforce/GenAI
`;

// =========================================
// ESTILOS DEL CHATBOT
// =========================================
const CHATBOT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;600&display=swap');

  #ss-chat-toggle {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #38bdf8, #22d3ee);
    border: none;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 30px rgba(56,189,248,0.4), 0 4px 20px rgba(0,0,0,0.5);
    transition: transform 0.2s, box-shadow 0.2s;
    font-size: 22px;
    color: #030712;
  }
  #ss-chat-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 0 50px rgba(56,189,248,0.6), 0 4px 24px rgba(0,0,0,0.6);
  }
  #ss-chat-toggle .chat-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 18px;
    height: 18px;
    background: #6ee7b7;
    border-radius: 50%;
    font-size: 9px;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    color: #030712;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #030712;
  }

  #ss-chat-window {
    position: fixed;
    bottom: 96px;
    right: 28px;
    width: 380px;
    height: 520px;
    background: #070f1f;
    border: 1px solid rgba(99,179,237,0.2);
    border-radius: 16px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 60px rgba(56,189,248,0.15), 0 20px 60px rgba(0,0,0,0.7);
    transform: translateY(20px) scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
  }
  #ss-chat-window.open {
    transform: translateY(0) scale(1);
    opacity: 1;
    pointer-events: all;
  }

  #ss-chat-header {
    padding: 16px 18px;
    background: rgba(10,18,40,0.95);
    border-bottom: 1px solid rgba(99,179,237,0.12);
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }
  .ss-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #38bdf8, #6ee7b7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    font-size: 13px;
    color: #030712;
    flex-shrink: 0;
    position: relative;
  }
  .ss-avatar::after {
    content: '';
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 9px;
    height: 9px;
    background: #6ee7b7;
    border-radius: 50%;
    border: 2px solid #070f1f;
  }
  .ss-header-info {
    flex: 1;
  }
  .ss-header-name {
    font-size: 14px;
    font-weight: 600;
    color: #e2e8f0;
    font-family: 'JetBrains Mono', monospace;
  }
  .ss-header-status {
    font-size: 11px;
    color: #6ee7b7;
    margin-top: 1px;
  }
  #ss-chat-close {
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    font-size: 18px;
    padding: 4px;
    line-height: 1;
    transition: color 0.2s;
  }
  #ss-chat-close:hover { color: #38bdf8; }

  #ss-chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    scrollbar-width: thin;
    scrollbar-color: rgba(56,189,248,0.3) transparent;
  }
  #ss-chat-messages::-webkit-scrollbar { width: 3px; }
  #ss-chat-messages::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.3); border-radius: 2px; }

  .ss-msg {
    display: flex;
    flex-direction: column;
    max-width: 88%;
    animation: ss-fadeIn 0.25s ease;
  }
  @keyframes ss-fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .ss-msg.user { align-self: flex-end; align-items: flex-end; }
  .ss-msg.bot { align-self: flex-start; align-items: flex-start; }

  .ss-bubble {
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 13px;
    line-height: 1.55;
    max-width: 100%;
  }
  .ss-msg.user .ss-bubble {
    background: linear-gradient(135deg, rgba(56,189,248,0.2), rgba(34,211,238,0.15));
    border: 1px solid rgba(56,189,248,0.3);
    color: #e2e8f0;
    border-bottom-right-radius: 4px;
  }
  .ss-msg.bot .ss-bubble {
    background: rgba(10,18,40,0.9);
    border: 1px solid rgba(99,179,237,0.15);
    color: #e2e8f0;
    border-bottom-left-radius: 4px;
  }
  .ss-msg-time {
    font-size: 10px;
    color: #64748b;
    margin-top: 4px;
    font-family: 'JetBrains Mono', monospace;
  }

  .ss-typing {
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 12px 14px;
    background: rgba(10,18,40,0.9);
    border: 1px solid rgba(99,179,237,0.15);
    border-radius: 12px;
    border-bottom-left-radius: 4px;
    width: fit-content;
  }
  .ss-typing span {
    width: 6px; height: 6px;
    background: #38bdf8;
    border-radius: 50%;
    animation: ss-bounce 1.2s infinite;
    opacity: 0.6;
  }
  .ss-typing span:nth-child(2) { animation-delay: 0.2s; }
  .ss-typing span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes ss-bounce {
    0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
    40% { transform: translateY(-5px); opacity: 1; }
  }

  .ss-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }
  .ss-suggestion-btn {
    background: rgba(56,189,248,0.08);
    border: 1px solid rgba(56,189,248,0.2);
    color: #38bdf8;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 11px;
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    transition: background 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .ss-suggestion-btn:hover {
    background: rgba(56,189,248,0.18);
    border-color: rgba(56,189,248,0.5);
  }

  #ss-chat-footer {
    padding: 12px 14px;
    border-top: 1px solid rgba(99,179,237,0.12);
    display: flex;
    gap: 8px;
    align-items: flex-end;
    background: rgba(10,18,40,0.95);
    flex-shrink: 0;
  }
  #ss-chat-input {
    flex: 1;
    background: rgba(3,7,18,0.8);
    border: 1px solid rgba(99,179,237,0.2);
    border-radius: 10px;
    padding: 10px 14px;
    color: #e2e8f0;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    resize: none;
    outline: none;
    line-height: 1.4;
    max-height: 80px;
    transition: border-color 0.2s;
  }
  #ss-chat-input::placeholder { color: #64748b; }
  #ss-chat-input:focus { border-color: rgba(56,189,248,0.45); }

  #ss-chat-send {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #030712;
    font-size: 15px;
    flex-shrink: 0;
    transition: opacity 0.2s, transform 0.15s;
  }
  #ss-chat-send:hover { opacity: 0.85; transform: scale(1.05); }
  #ss-chat-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

  .ss-powered {
    text-align: center;
    font-size: 10px;
    color: #64748b;
    padding: 4px 0 8px;
    font-family: 'JetBrains Mono', monospace;
    flex-shrink: 0;
    background: rgba(10,18,40,0.95);
  }
  .ss-powered a { color: #38bdf8; text-decoration: none; }

  @media (max-width: 440px) {
    #ss-chat-window {
      right: 12px;
      left: 12px;
      width: auto;
      bottom: 88px;
    }
    #ss-chat-toggle {
      right: 18px;
      bottom: 20px;
    }
  }
`;

// =========================================
// LÓGICA DEL CHATBOT
// =========================================

const SUGGESTIONS_EN = [
  "Experience?", "Salesforce skills?", "Contact Sebastian", "Certifications?"
];
const SUGGESTIONS_ES = [
  "¿Experiencia?", "¿Skills Salesforce?", "Contactar a Sebastian", "¿Certificaciones?"
];

let chatHistory = [];
let isOpen = false;

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function detectLang(text) {
  const esWords = /\b(hola|qué|cuál|cómo|dónde|cuándo|tienes|tiene|trabajas|trabaja|puedes|puede|eres|es|soy|años|experiencia|habilidades|certificaciones|proyectos)\b/i;
  return esWords.test(text) ? 'es' : 'en';
}

function createWidget() {
  // Inject styles
  const style = document.createElement('style');
  style.textContent = CHATBOT_STYLES;
  document.head.appendChild(style);

  // Toggle button
  const toggle = document.createElement('button');
  toggle.id = 'ss-chat-toggle';
  toggle.title = 'Chat with AIDA';
  toggle.innerHTML = `
    <span class="chat-badge">AI</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  `;
  document.body.appendChild(toggle);

  // Chat window
  const win = document.createElement('div');
  win.id = 'ss-chat-window';
  win.setAttribute('role', 'dialog');
  win.setAttribute('aria-label', 'AIDA — Sebastian Sosa AI Assistant');
  win.innerHTML = `
    <div id="ss-chat-header">
      <div class="ss-avatar">AI</div>
      <div class="ss-header-info">
        <div class="ss-header-name">AIDA</div>
        <div class="ss-header-status">● Online · AI Interactive Digital Assistant</div>
      </div>
      <button id="ss-chat-close" aria-label="Close chat">✕</button>
    </div>
    <div id="ss-chat-messages"></div>
    <div id="ss-chat-footer">
      <textarea id="ss-chat-input" placeholder="Ask AIDA anything..." rows="1" maxlength="500"></textarea>
      <button id="ss-chat-send" aria-label="Send message">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
        </svg>
      </button>
    </div>
    <div class="ss-powered">Powered by <a href="https://ai.google.dev" target="_blank">Google Gemini</a></div>
  `;
  document.body.appendChild(win);

  // Events
  toggle.addEventListener('click', toggleChat);
  document.getElementById('ss-chat-close').addEventListener('click', toggleChat);
  document.getElementById('ss-chat-send').addEventListener('click', handleSend);
  document.getElementById('ss-chat-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // Auto-resize textarea
  document.getElementById('ss-chat-input').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 80) + 'px';
  });

  // Welcome message
  addBotMessage(
    "Hi! I'm AIDA — Sebastian's AI Interactive Digital Assistant. Ask me anything about his experience, skills, certifications or projects — in English or Spanish 🤙",
    true
  );
}

function toggleChat() {
  const win = document.getElementById('ss-chat-window');
  isOpen = !isOpen;
  win.classList.toggle('open', isOpen);
  if (isOpen) {
    setTimeout(() => document.getElementById('ss-chat-input').focus(), 300);
  }
}

function addBotMessage(text, showSuggestions = false) {
  const msgs = document.getElementById('ss-chat-messages');

  const div = document.createElement('div');
  div.className = 'ss-msg bot';

  const bubble = document.createElement('div');
  bubble.className = 'ss-bubble';
  bubble.textContent = text;

  const time = document.createElement('div');
  time.className = 'ss-msg-time';
  time.textContent = getTime();

  div.appendChild(bubble);
  div.appendChild(time);

  if (showSuggestions) {
    const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
    const suggestions = lang === 'es' ? SUGGESTIONS_ES : SUGGESTIONS_EN;
    const sugg = document.createElement('div');
    sugg.className = 'ss-suggestions';
    suggestions.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'ss-suggestion-btn';
      btn.textContent = s;
      btn.addEventListener('click', () => {
        document.getElementById('ss-chat-input').value = s;
        handleSend();
      });
      sugg.appendChild(btn);
    });
    div.appendChild(sugg);
  }

  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMessage(text) {
  const msgs = document.getElementById('ss-chat-messages');
  const div = document.createElement('div');
  div.className = 'ss-msg user';
  div.innerHTML = `
    <div class="ss-bubble">${escapeHtml(text)}</div>
    <div class="ss-msg-time">${getTime()}</div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('ss-chat-messages');
  const typing = document.createElement('div');
  typing.className = 'ss-msg bot';
  typing.id = 'ss-typing-indicator';
  typing.innerHTML = `
    <div class="ss-typing">
      <span></span><span></span><span></span>
    </div>
  `;
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('ss-typing-indicator');
  if (t) t.remove();
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function handleSend() {
  const input = document.getElementById('ss-chat-input');
  const sendBtn = document.getElementById('ss-chat-send');
  const text = input.value.trim();
  if (!text || sendBtn.disabled) return;

  // Check API key
  if (GEMINI_API_KEY === "TU_API_KEY_AQUI") {
    addBotMessage("⚠️ AIDA no está configurada aún. Editá chatbot.js y reemplazá 'TU_API_KEY_AQUI' con tu Gemini API key de aistudio.google.com");
    return;
  }

  // Clear input
  input.value = '';
  input.style.height = 'auto';

  // Add user message
  addUserMessage(text);
  chatHistory.push({ role: "user", parts: [{ text }] });

  // Disable send
  sendBtn.disabled = true;
  showTyping();

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SEBASTIAN_CONTEXT }]
          },
          contents: chatHistory,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 400,
          }
        })
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || 'API error');
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that. Please try again.";

    chatHistory.push({ role: "model", parts: [{ text: reply }] });

    removeTyping();
    addBotMessage(reply);

  } catch (err) {
    removeTyping();
    console.error('Chatbot error:', err);
    const isEs = detectLang(text) === 'es';
    addBotMessage(
      isEs
        ? `Error al conectar con la API: ${err.message}. Verificá tu API key en aistudio.google.com`
        : `API connection error: ${err.message}. Please check your API key at aistudio.google.com`
    );
  } finally {
    sendBtn.disabled = false;
    input.focus();
  }
}

// =========================================
// INICIALIZACIÓN
// =========================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createWidget);
} else {
  createWidget();
}
