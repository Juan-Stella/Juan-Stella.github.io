// CONFIGURATION
// ==========================================
// TODO: Reemplaza 'octocat' con tu nombre de usuario de GitHub real
const GITHUB_USERNAME = 'Juan-Stella'; 

// Datos manuales para enriquecer el portfolio
const localProjectData = {
    "Reconocimiento-de-imagenes": {
        image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1620712948343-008423671ea2?auto=format&fit=crop&q=80&w=800",
        fullText: `
            <h2>Inteligencia Artificial 2</h2>
            <p>Repositorio contenedor de las prácticas avanzadas cursadas en la asignatura de IA2, desarrollado principalmente en Jupyter Notebooks.</p>
            <p>Incluye implementaciones prácticas y experimentación activa con distintos modelos de redes neuronales, machine learning y técnicas analíticas de datos.</p>
        `
    },
    "Automatica-y-maquinas-electricas-final": {
         image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800",
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
         fullText: `
            <h2>Control y Sistemas</h2>
            <p>Repositorio enfocado en implementaciones robustas en lenguaje <code>C</code> para el control de sistemas electrónicos y microcontroladores.</p>
            <p>Los algoritmos desarrollados apuntan a la interacción con hardware de bajo nivel, abarcando desde el procesamiento de señales de sensores en tiempo real hasta la actuación sobre plantas físicas empleando teorías del control clásico.</p>
         `
    },
    "Multiple-Linear-Regression": {
         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
         fullText: `
            <h2>Regresión Lineal Múltiple Manual</h2>
            <p>Mi primera inmersión profunda en el análisis de variables múltiples construyendo un modelo de regresión lineal completamente manual en Python.</p>
            <p>El objetivo de este proyecto es desglosar la "caja negra" detrás del modelo estadístico, entendiendo paso a paso cómo interaccionan múltiples variables predictoras con el resultado final.</p>
         `
    },
    "Multiple-Linear-with-Scikitlearn": {
         image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
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
        // Fetch public repositories, sorted by updated time
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error('Network response was not ok');
        const repos = await response.json();

        grid.innerHTML = ''; // Clear loading spinner

        // Filter out forks if you only want original projects
        const originalRepos = repos.filter(repo => !repo.fork);

        if (originalRepos.length === 0) {
            grid.innerHTML = '<p class="text-muted" style="grid-column: 1/-1; text-align: center;">No se encontraron repositorios públicos originales.</p>';
            return;
        }

        originalRepos.forEach((repo, index) => {
            // Adding a slight animation delay for a cascading entrance effect
            const delay = index * 0.1;
            
            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.animation = `fadeInUp 0.6s ease ${delay}s backwards`;

            // Format date
            const updateDate = new Date(repo.updated_at).toLocaleDateString('es-ES', {
                year: 'numeric', month: 'short', day: 'numeric'
            });

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
                <p class="project-desc">${repo.description || 'Sin descripción disponible para este repositorio.'}</p>
                <div class="project-tech">
                    ${repo.language ? `<span class="tech-tag">${repo.language}</span>` : '<span class="tech-tag">Varios</span>'}
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
