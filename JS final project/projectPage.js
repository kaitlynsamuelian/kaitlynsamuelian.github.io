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
    let filename = window.location.pathname.split("/").pop();
    let subdomain = filename.replace(".html", "");

    let project = proj.projects.find(p => p.subdomain === subdomain);

    if (project) {
        // Set the page title and content
        document.title = project.name;

        // Inject carousel HTML with abstract below images
        document.getElementById('project-content').innerHTML = `
            <div class="project-head">
                <h1>${project.name}</h1>
                <h2>${project.subtitle}</h2>
            </div>
            <div class="project-carousel">
                <div class="main-image">
                    <img id="main-img" src="images/${project.mainimg}" alt="${project.name}">
                </div>
                <div class="thumbnail-images">
                    ${project.images.map(img => `<img class="thumbnail" src="images/${img}" alt="${project.name}">`).join('')}
                </div>
            </div>
            <div class="project-abstract">
                <p>Abstract:${project.abstract}</p>
            </div>
            <div class="citations">
                ${renderCitations(project.citations)}
            </div>
            
            `;

        // Add click event listeners to thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImg = document.getElementById('main-img');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
                mainImg.src = this.src;  // Change main image source to the clicked thumbnail's source
            });
        });
    } else {
        document.getElementById('project-content').innerHTML = "<p>Project not found.</p>";
    }
}
function renderCitations(citations) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;  // Match URLs
    return citations.map(citation => {
        // Replace the URL with an anchor tag
        return citation.replace(urlRegex, function(match) {
            return `<a href="${match}" target="_blank">${match}</a>`;  // Create a clickable link
        });
    }).join('<br>');  // Join multiple citations with line breaks
}