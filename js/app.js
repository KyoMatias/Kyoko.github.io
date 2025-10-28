// Global state
let projectsData = null;

// Load projects data
async function loadProjectsData() {
  try {
    const response = await fetch('data/projects.json');
    projectsData = await response.json();
  } catch (error) {
    console.error('Error loading projects data:', error);
  }
}

// Router functionality
function router() {
  const hash = window.location.hash || '#/';
  const pages = document.querySelectorAll('.page');
  
  // Hide all pages
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // Update navigation active state
  updateNavigation(hash);

  // Route to the appropriate page
  if (hash === '#/' || hash === '') {
    showHomePage();
  } else if (hash === '#/about') {
    showAboutPage();
  } else if (hash.startsWith('#/project/')) {
    const projectId = hash.replace('#/project/', '');
    showProjectDetail(projectId);
  } else {
    // Default to home if route not found
    window.location.hash = '#/';
  }
}

// Update navigation active state
function updateNavigation(hash) {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    if (hash === '#/' && link.getAttribute('data-page') === 'home') {
      link.classList.add('active');
    } else if (hash === '#/about' && link.getAttribute('data-page') === 'about') {
      link.classList.add('active');
    }
  });
}

// Show Home Page
function showHomePage() {
  const homePage = document.getElementById('home-page');
  homePage.style.display = 'block';
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Show About Page
function showAboutPage() {
  const aboutPage = document.getElementById('about-page');
  aboutPage.style.display = 'block';
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Show Project Detail Page
function showProjectDetail(projectId) {
  if (!projectsData || !projectsData[projectId]) {
    console.error('Project not found:', projectId);
    window.location.hash = '#/';
    return;
  }

  const project = projectsData[projectId];
  const detailPage = document.getElementById('project-detail-page');
  
  // Populate project details
  document.getElementById('project-status').textContent = project.details.status;
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-subtitle').textContent = project.subtitle;
  document.getElementById('project-description').textContent = project.description;
  
  const projectImage = document.getElementById('project-image');
  projectImage.src = project.image;
  projectImage.alt = project.title;
  
  document.getElementById('project-role').textContent = project.details.role;
  document.getElementById('project-duration').textContent = project.details.duration;
  
  // Populate technologies
  const technologiesContainer = document.getElementById('project-technologies');
  technologiesContainer.innerHTML = '';
  project.details.technologies.forEach(tech => {
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.textContent = tech;
    technologiesContainer.appendChild(tag);
  });
  
  // Populate features
  const featuresContainer = document.getElementById('project-features');
  featuresContainer.innerHTML = '';
  project.features.forEach((feature, index) => {
    const featureDiv = document.createElement('div');
    featureDiv.className = 'feature-item';
    featureDiv.innerHTML = `
      <div class="feature-number">${index + 1}</div>
      ${feature}
    `;
    featuresContainer.appendChild(featureDiv);
  });
  
  document.getElementById('project-challenges').textContent = project.challenges;
  document.getElementById('project-outcome').textContent = project.outcome;
  
  detailPage.style.display = 'block';
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Initialize the app
async function init() {
  await loadProjectsData();
  
  // Set up event listeners
  window.addEventListener('hashchange', router);
  
  // Initial route
  router();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
