// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fetch profile data from API (keeping backend API usage intact)
fetch("/api/profile")
.then(response => response.json())
.then(data => {
    // Update hero section if elements exist
    const heroTitle = document.querySelector(".hero h1");
    if (heroTitle) heroTitle.textContent = data.name || heroTitle.textContent;

    const roleElement = document.querySelector(".role");
    if (roleElement) roleElement.textContent = data.role || roleElement.textContent;

    // Update about section if element exists
    const aboutText = document.getElementById("about-text");
    if (aboutText) aboutText.textContent = data.about || aboutText.textContent;

    // Update skills if container exists
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer && data.skills) {
        skillsContainer.innerHTML = '';
        data.skills.forEach(skill => {
            let skillDiv = document.createElement("div");
            skillDiv.className = "skill-card";
            skillDiv.textContent = skill;
            skillsContainer.appendChild(skillDiv);
        });
    }

    // Update projects if container exists
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer && data.projects) {
        projectsContainer.innerHTML = '';
        data.projects.forEach(project => {
            let card = document.createElement("div");
            card.className = "project-card";
            card.innerHTML = "<h3>" + project.title + "</h3><p>" + project.description + "</p>";
            projectsContainer.appendChild(card);
        });
    }

    // Update contact if elements exist
    const emailElement = document.getElementById("email");
    if (emailElement && data.contact) {
        emailElement.textContent = "Email: " + (data.contact.email || '');
    }

    const linkedinElement = document.getElementById("linkedin");
    if (linkedinElement && data.contact) {
        linkedinElement.innerHTML = '<a href="' + (data.contact.linkedin || '#') + '">LinkedIn Profile</a>';
    }
})
.catch(error => {
    console.log("API not available or error:", error);
    // Continue with static content
});

// Add scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(1, 28, 64, 0.95)';
    } else {
        navbar.style.background = 'rgba(1, 28, 64, 0.9)';
    }
});