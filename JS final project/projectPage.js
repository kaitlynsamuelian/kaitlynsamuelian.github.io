let proj;

fetch('port.json')
    .then(response => response.json())
    .then(projects => {
        proj = projects;  // Assigning the JSON data to the 'proj' variable
        loadProjectPage();  // Call the function to render the individual page
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

function loadProjectPage() {
    // Get the current page's filename (e.g., 'project1.html', 'project2.html', etc.)
    let filename = window.location.pathname.split("/").pop();
    let subdomain = filename.replace(".html", "");  // Extract the project name from filename

    // Find the project data based on the filename
    let project = proj.projects.find(p => p.subdomain === subdomain);

    if (project) {
        // Inject project data into the HTML page
        document.title = project.name;  // Set the page title
        document.getElementById('project-content').innerHTML = `
        <div class="project-head">
            <h1>${project.name}</h1>
            <h2>${project.subtitle}</h2>
            
            
            <p><strong>Abstract:</strong> ${project.abstract}</p>
            </div>
            </div>
            <div class="project-images">
                <img src="images/${project.images[0]}" alt="${project.name}">
            </div>
            <div class="project-description">
                <p>${project.description.join('</p><p>')}</p>
            </div>
            <div class="citations">
                ${(project.citations)}
            </div>
        `;
    } else {
        // If the project isn't found, display a 404-like message
        document.getElementById('project-content').innerHTML = "<p>Project not found.</p>";
    }
}

