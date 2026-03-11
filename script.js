// CONFIGURATION
// ==========================================
// TODO: Reemplaza 'octocat' con tu nombre de usuario de GitHub real
const GITHUB_USERNAME = 'Juan-Stella'; 

// Datos manuales para enriquecer el portfolio
const localProjectData = {
    "Reconocimiento-de-imagenes": {
        image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800",
        languages: ["Python", "OpenCV", "NumPy", "Scikit-Learn"],
        shortDescription: "Sistema de IA y visión computacional para clasificar objetos y planificar su transporte mediante algoritmos avanzados.",
        fullText: `
            <h2>Reconocimiento de Imágenes y Planificación</h2>
            <p>Este proyecto integra varias técnicas de inteligencia artificial y visión por computadora para clasificar y organizar objetos.</p>
            <h3>Características principales:</h3>
            <ul>
                <li><strong>Procesamiento visual:</strong> Pre-procesamiento y extracción de características utilizando algoritmos <code>KNN</code> y <code>KMeans</code>.</li>
                <li><strong>Planificación lógica:</strong> Utilización del algoritmo <strong>STRIPS</strong> para determinar cómo acomodar cajas conteniendo los objetos detectados.</li>
                <li><strong>Pathfinding:</strong> Implementación del algoritmo <strong>A*</strong> para encontrar la ruta óptima de transporte de las cajas al área objetivo.</li>
            </ul>
        `
    },
    "Proyecto-Final-Robotica-1": {
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        languages: ["MATLAB", "Simulink", "Robotics Toolbox"],
        shortDescription: "Análisis exhaustivo de cinemática directa/inversa y control de trayectorias desarrollado en MATLAB para el brazo robótico Franka Emika Panda.",
        fullText: `
            <h2>Control de Franka Emika Panda</h2>
            <p>Análisis exhaustivo de cinemática desarrollado en MATLAB para el manipulador robótico de 7 grados de libertad "Franka Emika Panda".</p>
            <h3>Desarrollo del proyecto:</h3>
            <ul>
                <li><strong>Cinemática Directa e Inversa:</strong> Modelado matemático para determinar la posición del efector final y los ángulos necesarios de cada articulación.</li>
                <li><strong>Análisis Jacobiano:</strong> Estudio de las velocidades, el mapeo de fuerzas y las posibles singularidades mecánicas del brazo.</li>
                <li><strong>Generación de Trayectorias:</strong> Planificación de movimientos suaves y óptimos en su espacio operativo.</li>
            </ul>
        `
    },
    "Breast-Cancer-Classification---Logistic-Regression-main": {
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
        languages: ["Python", "Pandas", "Matplotlib", "NumPy"],
        shortDescription: "Implementación matemática desde cero de un modelo predictivo basado en Regresión Logística usando Python.",
        fullText: `
            <h2>Clasificación de Cáncer de Mama</h2>
            <p>Implementación desde cero en Python de un modelo predictivo basado en Regresión Logística.</p>
            <h3>Detalles clave:</h3>
            <ul>
                <li>Desarrollo de las matemáticas fundamentales utilizando la función Sigmoide.</li>
                <li>Entrenamiento iterativo de pesos y sesgos mediante el algoritmo de descenso de gradiente.</li>
                <li>Evaluación del rendimiento y precisión (Accuracy) del modelo para distinguir tejidos malignos de benignos.</li>
            </ul>
        `
    },
    "IA2": {
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        languages: ["Jupyter Notebook", "Python", "Deep Learning"],
        shortDescription: "Repositorio principal de prácticas avanzadas de IA. Incluye experimentación con redes neuronales y machine learning.",
        fullText: `
            <h2>Inteligencia Artificial 2</h2>
            <p>Repositorio contenedor de las prácticas avanzadas cursadas en la asignatura de IA2, desarrollado principalmente en Jupyter Notebooks.</p>
            <p>Incluye implementaciones prácticas y experimentación activa con distintos modelos de redes neuronales, machine learning y técnicas analíticas de datos.</p>
        `
    },
    "Automatica-y-maquinas-electricas-final": {
         image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800",
         languages: ["MATLAB", "Simulink", "Control Systems"],
         shortDescription: "Simulaciones y control automático de plantas físicas y sistemas eléctricos desarrollados íntegramente en MATLAB/Simulink.",
         fullText: `
            <h2>Automática y Máquinas Eléctricas</h2>
            <p>Resolución práctica, simulaciones y reporte final correspondientes a la materia Automática y Máquinas Eléctricas.</p>
            <h3>Herramientas:</h3>
            <ul>
                <li><strong>MATLAB / Simulink:</strong> Utilizados en profundidad para modelar, simular plantas físicas y analizar la respuesta en el tiempo y la frecuencia de diversos sistemas de control eléctricos.</li>
            </ul>
         `
    },
    "Control-y-Sistemas": {
         image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
         languages: ["C", "Microcontroladores", "Hardware Dev"],
         shortDescription: "Algoritmos robustos en lenguaje C para el control de sistemas electrónicos y hardware de microcontroladores.",
         fullText: `
            <h2>Control y Sistemas</h2>
            <p>Repositorio enfocado en implementaciones robustas en lenguaje <code>C</code> para el control de sistemas electrónicos y microcontroladores.</p>
            <p>Los algoritmos desarrollados apuntan a la interacción con hardware de bajo nivel, abarcando desde el procesamiento de señales de sensores en tiempo real hasta la actuación sobre plantas físicas empleando teorías del control clásico.</p>
         `
    },
    "Multiple-Linear-Regression": {
         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
         languages: ["Python", "Math"],
         shortDescription: "Construcción manual desde cero de un modelo estadístico de regresión lineal múltiple para predicción de variables.",
         fullText: `
            <h2>Regresión Lineal Múltiple Manual</h2>
            <p>Mi primera inmersión profunda en el análisis de variables múltiples construyendo un modelo de regresión lineal completamente manual en Python.</p>
            <p>El objetivo de este proyecto es desglosar la "caja negra" detrás del modelo estadístico, entendiendo paso a paso cómo interaccionan múltiples variables predictoras con el resultado final.</p>
         `
    },
    "Multiple-Linear-with-Scikitlearn": {
         image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
         languages: ["Python", "Scikit-Learn", "Machine Learning"],
         shortDescription: "Abordaje predictivo optimizado empleando el poder de la librería Scikit-Learn para modelos de regresión lineal.",
         fullText: `
            <h2>Regresión Lineal con Scikit-Learn</h2>
            <p>El mismo abordaje predictivo abordado en mi regresión lineal manual, pero implementado aprovechando el poder de <strong>scikit-learn</strong>.</p>
            <p>Este proyecto demuestra la optimización de código, eficiencia escalable, y lo expone preparado para integrarse fácilmente a flujos de trabajo profesionales como cross-validation y data pipelines.</p>
         `
    }
};
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    fetchGitHubProfile();
    fetchGitHubProjects();
    setupModalListeners();
    setupBackToTop();
});

async function fetchGitHubProfile() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const user = await response.json();

        document.getElementById('profile-img').src = user.avatar_url;
        document.getElementById('profile-name').innerHTML = user.name || user.login;
        document.getElementById('profile-bio').textContent = user.bio || 'Desarrollador de Software | Apasionado por la tecnología';
        document.getElementById('github-link').href = user.html_url;
        
        // Update page title
        document.title = `${user.name || user.login} | Portfolio GitHub`;

    } catch (error) {
        console.error('Error fetching profile:', error);
        document.getElementById('profile-name').innerHTML = 'Usuario: ' + GITHUB_USERNAME;
        document.getElementById('profile-bio').innerHTML = 'Edita script.js para cambiar el nombre de usuario de GitHub.<br>Ejemplo: const GITHUB_USERNAME = "tu-usuario"';
    }
}

async function fetchGitHubProjects() {
    const grid = document.getElementById('projects-grid');
    
    try {
        // Fetch public repositories, sorted by updated time. Added &per_page=100 and a cache-busting timestamp
        const cacheBuster = new Date().getTime();
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&cb=${cacheBuster}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const repos = await response.json();

        grid.innerHTML = ''; // Clear loading spinner

        console.log("Total repos fetched:", repos.length);
        
        // Filter out forks and hide the portfolio repo itself
        const portfolioRepoName = `${GITHUB_USERNAME}.github.io`.toLowerCase();
        const originalRepos = repos.filter(repo => !repo.fork && repo.name.toLowerCase() !== portfolioRepoName);
        
        console.log("Repos sorted after removing forks and github.io:", originalRepos.map(r=>r.name));

        if (originalRepos.length === 0) {
            grid.innerHTML = '<p class="text-muted" style="grid-column: 1/-1; text-align: center;">No se encontraron repositorios públicos originales.</p>';
            return;
        }

        originalRepos.forEach((repo, index) => {
            const card = document.createElement('div');
            card.className = 'project-card reveal';

            // Format date
            const updateDate = new Date(repo.updated_at).toLocaleDateString('es-ES', {
                year: 'numeric', month: 'short', day: 'numeric'
            });

            // Add logic to get custom language tags, or fallback to github language
            const customData = localProjectData[repo.name];
            let languageTagsHTML = '';
            
            if (customData && customData.languages && customData.languages.length > 0) {
                languageTagsHTML = customData.languages.map(lang => `<span class="tech-tag">${lang}</span>`).join('');
            } else if (repo.language) {
                languageTagsHTML = `<span class="tech-tag">${repo.language}</span>`;
            } else {
                languageTagsHTML = '<span class="tech-tag">Varios</span>';
            }

            card.innerHTML = `
                <div class="project-header">
                    <i class="far fa-folder-open"></i>
                    <div class="project-links">
                        <a href="${repo.html_url}" target="_blank" title="Ver en GitHub" aria-label="GitHub Repo">
                            <i class="fab fa-github"></i>
                        </a>
                        ${repo.homepage ? `
                        <a href="${repo.homepage}" target="_blank" title="Sitio en vivo" aria-label="Live Site" style="margin-left: 10px;">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                    </div>
                </div>
                <h3 class="project-title">
                    <a href="#" class="view-details-link" data-repo="${repo.name}">${repo.name}</a>
                </h3>
                <p class="project-desc">${(customData && customData.shortDescription) ? customData.shortDescription : (repo.description || 'Sin descripción disponible para este repositorio.')}</p>
                <div class="project-tech" style="gap: 0.4rem; padding-bottom: 0.5rem;">
                    ${languageTagsHTML}
                </div>
                <button class="view-details-btn glow-button" data-repo="${repo.name}" style="margin-bottom: 1rem; font-size: 0.85rem; padding: 0.4rem 1rem; align-self: flex-start; background: transparent; color: var(--text-main);">Ver detalles</button>
                <div class="project-stats">
                    <span title="Estrellas"><i class="far fa-star"></i> ${repo.stargazers_count}</span>
                    <span title="Forks"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                    <span style="margin-left: auto; font-size: 0.8rem;"><i class="far fa-clock"></i> ${updateDate}</span>
                </div>
            `;

            grid.appendChild(card);
        });

        // Attach event listeners to open modal
        grid.querySelectorAll('.view-details-link, .view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const repoName = e.currentTarget.getAttribute('data-repo');
                const repoInfo = originalRepos.find(r => r.name === repoName);
                if (repoInfo) {
                    openModal(repoInfo.name, repoInfo.html_url, repoInfo.homepage);
                }
            });
        });

        // Initialize new UX features
        setupScrollReveal();
        setup3DTilt(document.querySelectorAll('.project-card'));

    } catch (error) {
        console.error('Error fetching repos:', error);
        grid.innerHTML = '<p class="text-muted" style="grid-column: 1/-1; text-align: center;">Error al cargar los proyectos desde GitHub. Asegúrate de configurar un nombre de usuario válido.</p>';
    }
}

// ==========================================
// MODAL LOGIC
// ==========================================

async function openModal(repoName, repoHtmlUrl, repoHomepage) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalLinks = document.getElementById('modal-links');
    
    modalBody.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center;">Cargando detalles del proyecto...</p>';
    modalLinks.innerHTML = '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Check if we have rich manual data for this project
    const localData = localProjectData[repoName];

    if (localData) {
        // Use our beautiful manual data instead of the raw README
        modalBody.innerHTML = `
            ${localData.image ? `<img src="${localData.image}" alt="${repoName} Banner" style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">` : ''}
            <div>${localData.fullText}</div>
        `;
    } else {
        // Fallback to fetch README from GitHub API for unknown repositories
        try {
            const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`);
            if (!response.ok) {
                throw new Error('README not found');
            }
            
            const data = await response.json();
            const markdown = decodeURIComponent(escape(atob(data.content)));
            const htmlContent = DOMPurify.sanitize(marked.parse(markdown));
            modalBody.innerHTML = htmlContent;
            
        } catch (error) {
            console.warn('Error fetching README:', error);
            modalBody.innerHTML = `
                <h2>${repoName}</h2>
                <p>No hay una descripción detallada configurada para este repositorio.</p>
                <p>Puedes visitar el enlace de GitHub directamente para ver el código fuente y más detalles.</p>
            `;
        }
    }
    
    // Set Footer Links
    modalLinks.innerHTML = `
        <a href="${repoHtmlUrl}" target="_blank" title="Ver en GitHub" class="glow-button" style="font-size: 0.9rem; padding: 0.5rem 1rem;">
            <i class="fab fa-github"></i> Ver Código
        </a>
        ${repoHomepage ? `
        <a href="${repoHomepage}" target="_blank" title="Sitio en vivo" class="glow-button" style="font-size: 0.9rem; padding: 0.5rem 1rem; border-color: var(--secondary); color: var(--secondary);">
            <i class="fas fa-external-link-alt"></i> Visitar Web
        </a>` : ''}
    `;
}

function setupModalListeners() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside of the content box
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ==========================================
// PREMIUM UX FEATURES
// ==========================================

function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => observer.observe(el));
}

function setup3DTilt(cards) {
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Ignore if we are hovering over a button
            if (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'a' || e.target.closest('.view-details-btn')) {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.02, 1.02, 1.02)`;
                return;
            }

            const rect = card.getBoundingClientRect();
            // Calculate center point of the card
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Calculate rotation based on distance from center
            const rotateX = (y / rect.height) * -15; // Max 15 deg
            const rotateY = (x / rect.width) * 15;   // Max 15 deg
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset to default on leave
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}
