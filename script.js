// ==========================================
// CONFIGURATION
// ==========================================
const GITHUB_USERNAME = 'Juan-Stella';

// ==========================================
// TRANSLATIONS
// ==========================================
const T = {
    es: {
        nav_about:      'Sobre mí',
        nav_experience: 'Experiencia',
        nav_skills:     'Skills',
        nav_projects:   'Proyectos',
        nav_contact:    'Contacto',
        hero_role:      'Ingeniería Mecatrónica',
        hero_bio:       'Interés en robótica e inteligencia artificial. Experiencia profesional en automatización industrial y oil & gas: PLC, SCADA/HMI y puesta en marcha de plantas.',
        hero_contact_btn: 'Contacto',
        about_title:    'Sobre mí',
        about_p1:       'Soy estudiante de Ingeniería Mecatrónica con interés en Robótica e Inteligencia Artificial. Me interesa la intersección entre software y sistemas físicos: manipuladores robóticos, visión por computadora y algoritmos de control embebido.',
        about_p2:       'Además, cuento con experiencia profesional en automatización industrial: programación de PLC, sistemas SCADA/HMI y puesta en marcha de plantas en la industria embotelladora y de oil & gas. Busco sumarme a un equipo donde pueda seguir formándome y aportar valor.',
        tag_degree:     'Ing. Mecatrónica',
        edu_title:      'Educación',
        edu_degree:     'Ingeniería Mecatrónica',
        edu_school:     'Universidad Nacional de Cuyo · Mendoza, Argentina',
        edu_period:     'En curso',
        course_1: 'Robótica', course_2: 'Inteligencia Artificial', course_3: 'Control de Sistemas',
        course_4: 'Visión por Computadora', course_5: 'Microcontroladores', course_6: 'Máquinas Eléctricas',
        experience_title: 'Experiencia',
        exp1_role:      'Pasante',
        exp1_period:    '2026 – Presente',
        exp1_b1:        'Participación en proyectos de investigación y mejora continua de procesos en el área de inspección no destructiva (NDT), aplicando criterios de control de calidad y automatización.',
        exp2_role:      'Ingeniería en Automatización',
        exp2_period:    '2024 – 2025',
        exp2_b1:        'Programación y configuración de sistemas automatizados con PLCs (Rockwell, Schneider), incluyendo integración de sensores y actuadores.',
        exp2_b2:        'Implementación de sistemas SCADA y HMI en iFix, FactoryTalk y Studio 5000.',
        exp2_b3:        'Puesta en marcha en sitio y configuración de dispositivos industriales (Exemys, Prosoft, Moxa).',
        exp3_role:      'Diseñador e Instructor de Actividades Educativas',
        exp3_period:    '2021',
        exp3_b1:        'Desarrollo de contenidos y actividades de robótica básica para estudiantes de nivel primario.',
        skills_title:   'Skills',
        skills_lang:    'Lenguajes y Software',
        skills_robotics:'Robótica y Control',
        skills_automation: 'Automatización Industrial',
        skill_kinematics: 'Cinemática directa/inversa',
        skill_trajectory: 'Planificación de trayectorias',
        skill_control:    'Control Clásico',
        skill_python_libs: 'Python data stack (académico): NumPy · Pandas · OpenCV · Scikit-Learn',
        projects_title: 'Proyectos',
        filter_all:     'Todos',
        filter_robotics:'Robótica',
        filter_ai:      'IA y ML',
        filter_control: 'Control',
        contact_title:  'Contacto',
        contact_sub:    'Estoy abierto a oportunidades en robótica, IA, automatización industrial y sistemas embebidos.',
        details_btn:    'Ver detalles',
        github_btn:     'Ver Código',
        live_btn:       'Visitar Web',
    },
    en: {
        nav_about:      'About',
        nav_experience: 'Experience',
        nav_skills:     'Skills',
        nav_projects:   'Projects',
        nav_contact:    'Contact',
        hero_role:      'Mechatronics Engineering',
        hero_bio:       'Interest in robotics and artificial intelligence. Professional experience in industrial automation and oil & gas: PLC, SCADA/HMI, and plant commissioning.',
        hero_contact_btn: 'Contact',
        about_title:    'About',
        about_p1:       "Mechatronics Engineering student with interest in Robotics and AI. I'm drawn to the intersection between software and physical systems: robotic manipulators, computer vision, and embedded control.",
        about_p2:       "I also have professional experience in industrial automation: PLC programming, SCADA/HMI systems, and on-site commissioning in the bottling and oil & gas industries. Looking to join a team where I can keep learning and adding value.",
        tag_degree:     'Mechatronics Eng.',
        edu_title:      'Education',
        edu_degree:     'Mechatronics Engineering',
        edu_school:     'Universidad Nacional de Cuyo · Mendoza, Argentina',
        edu_period:     'In progress',
        course_1: 'Robotics', course_2: 'Artificial Intelligence', course_3: 'Control Systems',
        course_4: 'Computer Vision', course_5: 'Microcontrollers', course_6: 'Electric Machines',
        experience_title: 'Experience',
        exp1_role:      'Intern',
        exp1_period:    '2026 – Present',
        exp1_b1:        'Contributed to research and continuous improvement projects in non-destructive testing (NDT), applying quality control and automation criteria.',
        exp2_role:      'Automation Engineering',
        exp2_period:    '2024 – 2025',
        exp2_b1:        'Programmed and configured automated systems using PLCs (Rockwell, Schneider), including sensor and actuator integration.',
        exp2_b2:        'Implemented SCADA and HMI systems on iFix, FactoryTalk, and Studio 5000.',
        exp2_b3:        'On-site commissioning and configuration of industrial devices (Exemys, Prosoft, Moxa).',
        exp3_role:      'Educational Activities Designer & Instructor',
        exp3_period:    '2021',
        exp3_b1:        'Developed basic robotics content and activities for primary school students.',
        skills_title:   'Skills',
        skills_lang:    'Languages & Software',
        skills_robotics:'Robotics & Control',
        skills_automation: 'Industrial Automation',
        skill_kinematics: 'Forward/Inverse Kinematics',
        skill_trajectory: 'Trajectory Planning',
        skill_control:    'Classical Control',
        skill_python_libs: 'Python data stack (academic): NumPy · Pandas · OpenCV · Scikit-Learn',
        projects_title: 'Projects',
        filter_all:     'All',
        filter_robotics:'Robotics',
        filter_ai:      'AI & ML',
        filter_control: 'Control',
        contact_title:  'Contact',
        contact_sub:    "Open to opportunities in robotics, AI, industrial automation, and embedded systems.",
        details_btn:    'View details',
        github_btn:     'View Code',
        live_btn:       'Live Site',
    }
};

// ==========================================
// PROJECT DATA (no stock images — text only)
// ==========================================
const localProjectData = {
    "Reconocimiento-de-imagenes": {
        category: "ai",
        languages: ["Python", "OpenCV", "NumPy", "Scikit-Learn"],
        shortDescription: {
            es: "Sistema de IA y visión por computadora para clasificar objetos y planificar su transporte (KNN, KMeans, STRIPS, A*).",
            en: "AI and computer vision system to classify objects and plan their transport (KNN, KMeans, STRIPS, A*)."
        },
        fullText: `
            <h1>Reconocimiento de Imágenes y Planificación</h1>
            <p>Integración de técnicas de IA y visión por computadora para clasificar y organizar objetos de forma autónoma.</p>
            <h2>Características</h2>
            <ul>
                <li><strong>Procesamiento visual:</strong> extracción de características con <code>KNN</code> y <code>KMeans</code>.</li>
                <li><strong>Planificación lógica:</strong> algoritmo <strong>STRIPS</strong> para acomodar cajas con los objetos detectados.</li>
                <li><strong>Pathfinding:</strong> <strong>A*</strong> para encontrar la ruta óptima de transporte.</li>
            </ul>
        `
    },
    "Proyecto-Final-Robotica-1": {
        category: "robotics",
        languages: ["MATLAB", "Simulink", "Robotics Toolbox"],
        shortDescription: {
            es: "Cinemática directa/inversa y control de trayectorias para el brazo robótico Franka Emika Panda (7 DOF) en MATLAB.",
            en: "Forward/inverse kinematics and trajectory control for the Franka Emika Panda robotic arm (7 DOF) in MATLAB."
        },
        fullText: `
            <h1>Control del Franka Emika Panda</h1>
            <p>Análisis de cinemática para el manipulador robótico de 7 grados de libertad Franka Emika Panda en MATLAB.</p>
            <h2>Desarrollo</h2>
            <ul>
                <li><strong>Cinemática directa e inversa:</strong> modelado matemático de la posición del efector final y ángulos articulares.</li>
                <li><strong>Análisis Jacobiano:</strong> velocidades, mapeo de fuerzas y singularidades mecánicas.</li>
                <li><strong>Generación de trayectorias:</strong> planificación de movimientos suaves en el espacio operativo.</li>
            </ul>
        `
    },
    "Breast-Cancer-Classification---Logistic-Regression-main": {
        category: "ai",
        languages: ["Python", "Pandas", "Matplotlib", "NumPy"],
        shortDescription: {
            es: "Implementación desde cero de un modelo de Regresión Logística para clasificación de cáncer de mama.",
            en: "From-scratch implementation of a Logistic Regression model for breast cancer classification."
        },
        fullText: `
            <h1>Clasificación de Cáncer de Mama</h1>
            <p>Implementación desde cero en Python de un modelo predictivo basado en Regresión Logística.</p>
            <h2>Detalles</h2>
            <ul>
                <li>Desarrollo de la función Sigmoide y matemáticas del modelo.</li>
                <li>Entrenamiento iterativo con descenso de gradiente.</li>
                <li>Evaluación de precisión para distinguir tejidos malignos de benignos.</li>
            </ul>
        `
    },
    "IA2": {
        category: "ai",
        languages: ["Python", "Deep Learning"],
        shortDescription: {
            es: "Prácticas avanzadas de IA: redes neuronales, machine learning y análisis de datos.",
            en: "Advanced AI practices: neural networks, machine learning, and data analysis."
        },
        fullText: `
            <h1>Inteligencia Artificial 2</h1>
            <p>Repositorio con prácticas avanzadas de la materia IA2.</p>
            <p>Implementaciones y experimentación con modelos de redes neuronales, machine learning y técnicas analíticas de datos.</p>
        `
    },
    "Automatica-y-maquinas-electricas-final": {
        category: "control",
        languages: ["MATLAB", "Simulink", "Control Systems"],
        shortDescription: {
            es: "Simulaciones y control automático de plantas físicas y sistemas eléctricos en MATLAB/Simulink.",
            en: "Simulations and automatic control of physical plants and electrical systems in MATLAB/Simulink."
        },
        fullText: `
            <h1>Automática y Máquinas Eléctricas</h1>
            <p>Resolución práctica, simulaciones y reporte final de la materia.</p>
            <h2>Herramientas</h2>
            <ul>
                <li><strong>MATLAB / Simulink:</strong> modelado, simulación y análisis de respuesta en tiempo/frecuencia de sistemas de control eléctricos.</li>
            </ul>
        `
    },
    "Control-y-Sistemas": {
        category: "control",
        languages: ["C", "Microcontroladores"],
        shortDescription: {
            es: "Algoritmos en C para el control de sistemas electrónicos y microcontroladores de bajo nivel.",
            en: "C algorithms for electronic systems and low-level microcontroller control."
        },
        fullText: `
            <h1>Control y Sistemas</h1>
            <p>Repositorio enfocado en implementaciones en <code>C</code> para el control de sistemas electrónicos y microcontroladores.</p>
            <p>Los algoritmos abarcan desde procesamiento de señales de sensores en tiempo real hasta actuación sobre plantas físicas con teoría de control clásico.</p>
        `
    },
    "Multiple-Linear-Regression": {
        category: "ai",
        languages: ["Python", "Math"],
        shortDescription: {
            es: "Construcción manual desde cero de un modelo de regresión lineal múltiple.",
            en: "From-scratch manual construction of a multiple linear regression model."
        },
        fullText: `
            <h1>Regresión Lineal Múltiple Manual</h1>
            <p>Análisis de variables múltiples construyendo un modelo de regresión lineal completamente manual en Python.</p>
            <p>El objetivo es desglosar el modelo estadístico y entender cómo interactúan las variables predictoras con el resultado.</p>
        `
    },
    "Multiple-Linear-with-Scikitlearn": {
        category: "ai",
        languages: ["Python", "Scikit-Learn", "Machine Learning"],
        shortDescription: {
            es: "Abordaje predictivo optimizado con Scikit-Learn: modelos de regresión listos para flujos profesionales.",
            en: "Optimized predictive approach with Scikit-Learn: regression models ready for professional workflows."
        },
        fullText: `
            <h1>Regresión Lineal con Scikit-Learn</h1>
            <p>El mismo abordaje predictivo de la regresión lineal manual, implementado con <strong>scikit-learn</strong>.</p>
            <p>Optimización de código, eficiencia escalable y preparación para flujos profesionales (cross-validation, data pipelines).</p>
        `
    }
};

// ==========================================
// STATE
// ==========================================
let currentLang = 'es';
let allRepos = [];
let currentFilter = 'all';

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    applyTranslations();
    fetchGitHubProfile();
    fetchGitHubProjects();
    setupLangToggle();
    setupNavbar();
    setupMobileMenu();
    setupModal();
    setupBackToTop();
    setupScrollReveal();
    setupFilterTabs();
});

// ==========================================
// LANGUAGE TOGGLE
// ==========================================
function setupLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        document.getElementById('lang-es').classList.toggle('active', currentLang === 'es');
        document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
        applyTranslations();
        if (allRepos.length > 0) renderProjects(allRepos);
    });
}

function applyTranslations() {
    const t = T[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.documentElement.lang = currentLang;
}

function t(key) {
    return T[currentLang][key] || key;
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
function setupNavbar() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
}

// ==========================================
// MOBILE MENU
// ==========================================
function setupMobileMenu() {
    const btn  = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => menu.classList.remove('open'));
    });
}

// ==========================================
// GITHUB PROFILE
// ==========================================
async function fetchGitHubProfile() {
    try {
        const res  = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error();
        const user = await res.json();

        const img  = document.getElementById('profile-img');
        const name = document.getElementById('profile-name');
        const link = document.getElementById('github-link');

        if (img)  img.src = user.avatar_url;
        if (name) name.textContent = user.name || user.login;
        if (link) link.href = user.html_url;
        document.title = `${user.name || user.login} | Ing. Mecatrónica`;
    } catch {
        console.warn('Could not load GitHub profile.');
    }
}

// ==========================================
// GITHUB PROJECTS
// ==========================================
async function fetchGitHubProjects() {
    const grid = document.getElementById('projects-grid');
    try {
        const res   = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (!res.ok) throw new Error();
        const repos = await res.json();

        const portfolioName = `${GITHUB_USERNAME}.github.io`.toLowerCase();
        allRepos = repos.filter(r => !r.fork && r.name.toLowerCase() !== portfolioName);

        renderProjects(allRepos);
    } catch {
        if (grid) grid.innerHTML = '<p style="grid-column:1/-1;color:var(--text-muted);font-size:0.9rem">No se pudieron cargar los proyectos.</p>';
    }
}

function renderProjects(repos) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (repos.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1;color:var(--text-muted);font-size:0.9rem">No se encontraron repositorios.</p>';
        return;
    }

    repos.forEach((repo) => {
        const custom      = localProjectData[repo.name];
        const category    = custom?.category || 'other';
        const desc        = custom?.shortDescription
            ? (typeof custom.shortDescription === 'object' ? custom.shortDescription[currentLang] : custom.shortDescription)
            : (repo.description || (currentLang === 'es' ? 'Sin descripción disponible.' : 'No description available.'));

        let langsHTML = '';
        if (custom?.languages?.length) {
            langsHTML = custom.languages.map(l => `<span class="tech-tag">${l}</span>`).join('');
        } else if (repo.language) {
            langsHTML = `<span class="tech-tag">${repo.language}</span>`;
        } else {
            langsHTML = '';
        }

        const date = new Date(repo.updated_at).toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric', month: 'short'
        });

        const isHidden = currentFilter !== 'all' && category !== currentFilter;

        const card = document.createElement('div');
        card.className = `project-card reveal${isHidden ? ' hidden' : ''}`;
        card.setAttribute('data-category', category);

        card.innerHTML = `
            <div class="project-header">
                <i class="far fa-folder-open"></i>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank" title="GitHub" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" title="Live" aria-label="Live site"><i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            </div>
            <h3 class="project-title">${repo.name.replace(/-/g, ' ')}</h3>
            <p class="project-desc">${desc}</p>
            <div class="project-tech">${langsHTML}</div>
            <button class="view-details-btn" data-repo="${repo.name}">${t('details_btn')}</button>
            <div class="project-stats">
                <span><i class="far fa-star"></i> ${repo.stargazers_count}</span>
                <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                <span style="margin-left:auto"><i class="far fa-clock"></i> ${date}</span>
            </div>
        `;

        grid.appendChild(card);
    });

    grid.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const repoName = e.currentTarget.getAttribute('data-repo');
            const repo     = allRepos.find(r => r.name === repoName);
            if (repo) openModal(repo.name, repo.html_url, repo.homepage);
        });
    });

    setupScrollReveal();
}

// ==========================================
// FILTER TABS
// ==========================================
function setupFilterTabs() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            filterCards(currentFilter);
        });
    });
}

function filterCards(filter) {
    document.querySelectorAll('.project-card').forEach(card => {
        const cat = card.getAttribute('data-category');
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
    });
}

// ==========================================
// MODAL
// ==========================================
function setupModal() {
    const overlay  = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');

    const close = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay)  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay?.classList.contains('active')) close(); });
}

async function openModal(repoName, repoUrl, homepage) {
    const overlay   = document.getElementById('project-modal');
    const body      = document.getElementById('modal-body');
    const footer    = document.getElementById('modal-links');
    if (!overlay || !body || !footer) return;

    body.innerHTML   = '<p style="color:var(--text-muted);padding:1rem 0">Cargando…</p>';
    footer.innerHTML = '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const custom = localProjectData[repoName];

    if (custom) {
        body.innerHTML = `<div>${custom.fullText}</div>`;
    } else {
        try {
            const res  = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`);
            if (!res.ok) throw new Error();
            const data = await res.json();
            const md   = decodeURIComponent(escape(atob(data.content)));
            body.innerHTML = DOMPurify.sanitize(marked.parse(md));
        } catch {
            body.innerHTML = `<h2>${repoName}</h2><p style="color:var(--text-muted)">No hay descripción detallada disponible. Visitá el repositorio en GitHub para ver el código.</p>`;
        }
    }

    footer.innerHTML = `
        <a href="${repoUrl}" target="_blank" class="btn btn-outline">
            <i class="fab fa-github"></i> ${t('github_btn')}
        </a>
        ${homepage ? `<a href="${homepage}" target="_blank" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i> ${t('live_btn')}
        </a>` : ''}
    `;
}

// ==========================================
// SCROLL REVEAL
// ==========================================
function setupScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('active');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
}

// ==========================================
// BACK TO TOP
// ==========================================
function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 350);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
