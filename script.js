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
        nav_skills:     'Skills',
        nav_projects:   'Proyectos',
        nav_contact:    'Contacto',
        hero_badge:     '✦ Disponible para oportunidades',
        hero_role:      'Ing. Mecatrónica',
        hero_focus:     'Robótica & IA',
        hero_bio:       'Estudiante apasionado por construir sistemas inteligentes que perciben, razonan y actúan.',
        hero_contact_btn: 'Contacto',
        about_title:    'Sobre mí',
        about_p1:       'Soy estudiante de Ingeniería Mecatrónica con un interés particular en Robótica e Inteligencia Artificial. Me interesa la intersección entre el software y los sistemas físicos — desde manipuladores robóticos y visión por computadora hasta algoritmos de control embebido.',
        about_p2:       'Busco sumarme a un equipo donde pueda formarme y crecer en un entorno profesional real, aplicando lo que aprendí y aprendiendo de quienes ya están construyendo tecnología de punta.',
        tag_degree:     'Ing. Mecatrónica',
        tag_focus:      'Robótica & IA',
        edu_title:      'Educación',
        edu_degree:     'Ingeniería Mecatrónica',
        edu_school:     'Universidad Nacional de Cuyo · Mendoza, Argentina',
        edu_period:     'En curso',
        course_1: 'Robótica', course_2: 'Inteligencia Artificial', course_3: 'Control de Sistemas',
        course_4: 'Visión por Computadora', course_5: 'Microcontroladores', course_6: 'Máquinas Eléctricas',
        stat_repos:     'Repositorios',
        stat_stars:     'GitHub Stars',
        stat_robotics:  'Proyectos Robóticos',
        stat_ml:        'Modelos de ML',
        skills_title:   'Skills',
        skills_lang:    'Lenguajes',
        skills_robotics:'Robótica & Control',
        skills_ai:      'IA & Visión',
        skill_kinematics: 'Cinemática',
        skill_trajectory: 'Trayectorias',
        skill_control:    'Control Clásico',
        projects_title: 'Proyectos',
        filter_all:     'Todos',
        filter_robotics:'Robótica',
        filter_ai:      'IA & ML',
        filter_control: 'Control',
        contact_title:  '¿Hablamos?',
        contact_sub:    'Estoy abierto a oportunidades en robótica, IA y sistemas embebidos. No dudes en escribirme.',
        footer_text:    'Hecho con CSS Vanilla',
        details_btn:    'Ver detalles',
        github_btn:     'Ver Código',
        live_btn:       'Visitar Web',
    },
    en: {
        nav_about:      'About',
        nav_skills:     'Skills',
        nav_projects:   'Projects',
        nav_contact:    'Contact',
        hero_badge:     '✦ Open to opportunities',
        hero_role:      'Mechatronics Eng.',
        hero_focus:     'Robotics & AI',
        hero_bio:       'Student passionate about building intelligent systems that can perceive, reason, and act.',
        hero_contact_btn: 'Contact',
        about_title:    'About me',
        about_p1:       "I'm a Mechatronics Engineering student with a particular interest in Robotics and Artificial Intelligence. I'm drawn to the intersection between software and physical systems — from robotic manipulators and computer vision to embedded control algorithms.",
        about_p2:       "I'm looking to join a team where I can grow and develop in a real professional environment, applying what I've learned and learning from those already building cutting-edge technology.",
        tag_degree:     'Mechatronics Eng.',
        tag_focus:      'Robotics & AI',
        edu_title:      'Education',
        edu_degree:     'Mechatronics Engineering',
        edu_school:     'Universidad Nacional de Cuyo · Mendoza, Argentina',
        edu_period:     'In progress',
        course_1: 'Robotics', course_2: 'Artificial Intelligence', course_3: 'Control Systems',
        course_4: 'Computer Vision', course_5: 'Microcontrollers', course_6: 'Electric Machines',
        stat_repos:     'Repositories',
        stat_stars:     'GitHub Stars',
        stat_robotics:  'Robotics Projects',
        stat_ml:        'ML Models',
        skills_title:   'Skills',
        skills_lang:    'Languages',
        skills_robotics:'Robotics & Control',
        skills_ai:      'AI & Vision',
        skill_kinematics: 'Kinematics',
        skill_trajectory: 'Trajectory Planning',
        skill_control:    'Classical Control',
        projects_title: 'Projects',
        filter_all:     'All',
        filter_robotics:'Robotics',
        filter_ai:      'AI & ML',
        filter_control: 'Control',
        contact_title:  "Let's talk!",
        contact_sub:    "I'm open to opportunities in robotics, AI, and embedded systems. Feel free to reach out.",
        footer_text:    'Built with Vanilla CSS',
        details_btn:    'View details',
        github_btn:     'View Code',
        live_btn:       'Live Site',
    }
};

// ==========================================
// PROJECT DATA
// ==========================================
const localProjectData = {
    "Reconocimiento-de-imagenes": {
        category: "ai",
        image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800",
        languages: ["Python", "OpenCV", "NumPy", "Scikit-Learn"],
        shortDescription: {
            es: "Sistema de IA y visión computacional para clasificar objetos y planificar su transporte mediante algoritmos avanzados (KNN, KMeans, STRIPS, A*).",
            en: "AI and computer vision system to classify objects and plan their transport using advanced algorithms (KNN, KMeans, STRIPS, A*)."
        },
        fullText: `
            <h1>Reconocimiento de Imágenes y Planificación</h1>
            <p>Este proyecto integra técnicas de IA y visión por computadora para clasificar y organizar objetos de forma autónoma.</p>
            <h2>Características principales</h2>
            <ul>
                <li><strong>Procesamiento visual:</strong> Pre-procesamiento y extracción de características usando algoritmos <code>KNN</code> y <code>KMeans</code>.</li>
                <li><strong>Planificación lógica:</strong> Algoritmo <strong>STRIPS</strong> para determinar cómo acomodar cajas con los objetos detectados.</li>
                <li><strong>Pathfinding:</strong> Implementación de <strong>A*</strong> para encontrar la ruta óptima de transporte.</li>
            </ul>
        `
    },
    "Proyecto-Final-Robotica-1": {
        category: "robotics",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        languages: ["MATLAB", "Simulink", "Robotics Toolbox"],
        shortDescription: {
            es: "Análisis de cinemática directa/inversa y control de trayectorias para el brazo robótico Franka Emika Panda (7 DOF) en MATLAB.",
            en: "Forward/inverse kinematics analysis and trajectory control for the Franka Emika Panda robotic arm (7 DOF) in MATLAB."
        },
        fullText: `
            <h1>Control del Franka Emika Panda</h1>
            <p>Análisis exhaustivo de cinemática para el manipulador robótico de 7 grados de libertad "Franka Emika Panda" en MATLAB.</p>
            <h2>Desarrollo</h2>
            <ul>
                <li><strong>Cinemática Directa e Inversa:</strong> Modelado matemático para determinar la posición del efector final y los ángulos de cada articulación.</li>
                <li><strong>Análisis Jacobiano:</strong> Estudio de velocidades, mapeo de fuerzas y singularidades mecánicas.</li>
                <li><strong>Generación de Trayectorias:</strong> Planificación de movimientos suaves y óptimos en el espacio operativo.</li>
            </ul>
        `
    },
    "Breast-Cancer-Classification---Logistic-Regression-main": {
        category: "ai",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
        languages: ["Python", "Pandas", "Matplotlib", "NumPy"],
        shortDescription: {
            es: "Implementación matemática desde cero de un modelo predictivo de Regresión Logística para clasificación de cáncer de mama.",
            en: "Mathematical implementation from scratch of a Logistic Regression predictive model for breast cancer classification."
        },
        fullText: `
            <h1>Clasificación de Cáncer de Mama</h1>
            <p>Implementación desde cero en Python de un modelo predictivo basado en Regresión Logística.</p>
            <h2>Detalles clave</h2>
            <ul>
                <li>Desarrollo de la función Sigmoide y matemáticas fundamentales del modelo.</li>
                <li>Entrenamiento iterativo mediante descenso de gradiente.</li>
                <li>Evaluación de precisión (Accuracy) para distinguir tejidos malignos de benignos.</li>
            </ul>
        `
    },
    "IA2": {
        category: "ai",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        languages: ["Python", "Deep Learning"],
        shortDescription: {
            es: "Repositorio de prácticas avanzadas de IA: redes neuronales, machine learning y técnicas analíticas de datos.",
            en: "Advanced AI practices repository: neural networks, machine learning and data analytics techniques."
        },
        fullText: `
            <h1>Inteligencia Artificial 2</h1>
            <p>Repositorio contenedor de las prácticas avanzadas de la materia IA2.</p>
            <p>Incluye implementaciones prácticas y experimentación con distintos modelos de redes neuronales, machine learning y técnicas analíticas de datos.</p>
        `
    },
    "Automatica-y-maquinas-electricas-final": {
        category: "control",
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800",
        languages: ["MATLAB", "Simulink", "Control Systems"],
        shortDescription: {
            es: "Simulaciones y control automático de plantas físicas y sistemas eléctricos desarrollados en MATLAB/Simulink.",
            en: "Simulations and automatic control of physical plants and electrical systems developed in MATLAB/Simulink."
        },
        fullText: `
            <h1>Automática y Máquinas Eléctricas</h1>
            <p>Resolución práctica, simulaciones y reporte final de la materia Automática y Máquinas Eléctricas.</p>
            <h2>Herramientas</h2>
            <ul>
                <li><strong>MATLAB / Simulink:</strong> Modelado, simulación de plantas físicas y análisis de respuesta en tiempo/frecuencia de sistemas de control eléctricos.</li>
            </ul>
        `
    },
    "Control-y-Sistemas": {
        category: "control",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        languages: ["C", "Microcontroladores"],
        shortDescription: {
            es: "Algoritmos robustos en C para el control de sistemas electrónicos y hardware de microcontroladores de bajo nivel.",
            en: "Robust C algorithms for controlling electronic systems and low-level microcontroller hardware."
        },
        fullText: `
            <h1>Control y Sistemas</h1>
            <p>Repositorio enfocado en implementaciones en lenguaje <code>C</code> para el control de sistemas electrónicos y microcontroladores.</p>
            <p>Los algoritmos abarcan desde el procesamiento de señales de sensores en tiempo real hasta la actuación sobre plantas físicas usando teorías del control clásico.</p>
        `
    },
    "Multiple-Linear-Regression": {
        category: "ai",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        languages: ["Python", "Math"],
        shortDescription: {
            es: "Construcción manual desde cero de un modelo de regresión lineal múltiple para predicción de variables.",
            en: "Manual from-scratch construction of a multiple linear regression model for variable prediction."
        },
        fullText: `
            <h1>Regresión Lineal Múltiple Manual</h1>
            <p>Primera inmersión profunda en el análisis de variables múltiples construyendo un modelo de regresión lineal completamente manual en Python.</p>
            <p>El objetivo es desglosar la "caja negra" del modelo estadístico, entendiendo paso a paso cómo interactúan múltiples variables predictoras con el resultado final.</p>
        `
    },
    "Multiple-Linear-with-Scikitlearn": {
        category: "ai",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
        languages: ["Python", "Scikit-Learn", "Machine Learning"],
        shortDescription: {
            es: "Abordaje predictivo optimizado con Scikit-Learn: modelos de regresión preparados para flujos de trabajo profesionales.",
            en: "Optimized predictive approach using Scikit-Learn: regression models ready for professional workflows."
        },
        fullText: `
            <h1>Regresión Lineal con Scikit-Learn</h1>
            <p>El mismo abordaje predictivo de la regresión lineal manual, implementado con <strong>scikit-learn</strong>.</p>
            <p>Demuestra la optimización de código, eficiencia escalable, y preparación para integrarse a flujos profesionales como cross-validation y data pipelines.</p>
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
        // Re-render project descriptions if loaded
        if (allRepos.length > 0) renderProjects(allRepos);
    });
}

function applyTranslations() {
    const t = T[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    // Update html lang attribute
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
        const bio  = document.getElementById('profile-bio');
        const link = document.getElementById('github-link');

        if (img)  img.src = user.avatar_url;
        if (name) name.textContent = user.name || user.login;
        if (link) link.href = user.html_url;
        // Keep translated bio instead of GitHub bio
        document.title = `${user.name || user.login} | Ing. Mecatrónica`;

        // Stats
        const reposStat = document.getElementById('stat-repos');
        if (reposStat) reposStat.textContent = user.public_repos ?? '–';

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

        // Calculate total stars
        const totalStars = allRepos.reduce((acc, r) => acc + r.stargazers_count, 0);
        const starsStat  = document.getElementById('stat-stars');
        if (starsStat) starsStat.textContent = totalStars;

        renderProjects(allRepos);

    } catch {
        if (grid) grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted)">No se pudieron cargar los proyectos.</p>';
    }
}

function renderProjects(repos) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (repos.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted)">No se encontraron repositorios.</p>';
        return;
    }

    repos.forEach((repo, i) => {
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
            langsHTML = `<span class="tech-tag">–</span>`;
        }

        const date = new Date(repo.updated_at).toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        });

        const isHidden = currentFilter !== 'all' && category !== currentFilter;

        const card = document.createElement('div');
        card.className = `project-card reveal${isHidden ? ' hidden' : ''}`;
        card.setAttribute('data-category', category);
        card.style.transitionDelay = `${i * 60}ms`;

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
                <span style="margin-left:auto;font-size:0.78rem"><i class="far fa-clock"></i> ${date}</span>
            </div>
        `;

        grid.appendChild(card);
    });

    // Bind detail buttons
    grid.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const repoName = e.currentTarget.getAttribute('data-repo');
            const repo     = allRepos.find(r => r.name === repoName);
            if (repo) openModal(repo.name, repo.html_url, repo.homepage);
        });
    });

    setupScrollReveal();
    setup3DTilt(grid.querySelectorAll('.project-card'));
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

    body.innerHTML   = '<p style="text-align:center;color:var(--text-muted);padding:2rem">Cargando…</p>';
    footer.innerHTML = '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const custom = localProjectData[repoName];

    if (custom) {
        body.innerHTML = `
            ${custom.image ? `<img src="${custom.image}" alt="${repoName}" style="width:100%;height:220px;object-fit:cover;border-radius:10px;margin-bottom:1.5rem">` : ''}
            <div>${custom.fullText}</div>
        `;
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
        <a href="${repoUrl}" target="_blank" class="btn btn-outline" style="font-size:0.88rem;padding:0.45rem 1rem">
            <i class="fab fa-github"></i> ${t('github_btn')}
        </a>
        ${homepage ? `<a href="${homepage}" target="_blank" class="btn btn-primary" style="font-size:0.88rem;padding:0.45rem 1rem">
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
// 3D TILT
// ==========================================
function setup3DTilt(cards) {
    cards.forEach(card => {
        let ticking = false;
        card.addEventListener('mousemove', e => {
            if (e.target.closest('.view-details-btn') || e.target.tagName === 'A') {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.01, 1.01, 1.01)';
                return;
            }
            if (!ticking) {
                requestAnimationFrame(() => {
                    const r  = card.getBoundingClientRect();
                    const x  = e.clientX - r.left  - r.width  / 2;
                    const y  = e.clientY - r.top   - r.height / 2;
                    const rX = (y / r.height) * -12;
                    const rY = (x / r.width)  *  12;
                    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
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
