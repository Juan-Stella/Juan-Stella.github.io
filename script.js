// ==========================================
// CONFIGURATION
// ==========================================
// TODO: Reemplaza 'octocat' con tu nombre de usuario de GitHub real
const GITHUB_USERNAME = 'Juan-Stella'; 
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
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
        if (!response.ok) throw new Error('Network response was not ok');
        const repos = await response.json();

        grid.innerHTML = ''; // Clear loading spinner

        // Filter out forks if you only want original projects, and slice to top 6
        const originalRepos = repos.filter(repo => !repo.fork).slice(0, 6);

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
    
    try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`);
        if (!response.ok) {
            throw new Error('README not found');
        }
        
        const data = await response.json();
        // GitHub API returns Base64 encoded content
        // using decodeURIComponent and escape handles special UTF-8 characters properly
        const markdown = decodeURIComponent(escape(atob(data.content)));
        
        // Parse markdown and sanitize HTML
        const htmlContent = DOMPurify.sanitize(marked.parse(markdown));
        modalBody.innerHTML = htmlContent;
        
    } catch (error) {
        console.warn('Error fetching README:', error);
        modalBody.innerHTML = `
            <h2>${repoName}</h2>
            <p>No se encontró un archivo README detallado para este repositorio, o no se pudo cargar.</p>
            <p>Puedes visitar el repositorio directamente en GitHub para ver el código fuente y más detalles.</p>
        `;
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
