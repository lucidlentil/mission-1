const projectsArray = [{
    name: 'Weather app', 
    image: "images/weatherapp.png", 
    description: 'A responsive weather app utilising the OpenWeatherMap API.',
}, {
    name: 'Another impressive project', 
    image: "images/genericimg.jpeg",
    description: 'A really cool project that I definitely know how to build.',
}, {
    name: 'The best project you\'ve ever seen', 
    image: "images/genericimg.jpeg", 
    description: 'I am an amazing web developer.',
}
];

const titleElement = document.querySelector('#project-title');
titleElement.innerHTML = projectsArray[0].name; 

const descriptionElement = document.querySelector('#project-description');
descriptionElement.innerHTML = projectsArray[0].description; 

const imageElement = document.querySelector('#project-image');
imageElement.setAttribute("src", projectsArray[0].image); 
imageElement.setAttribute("alt", `A screenshot of ${projectsArray[0].name}`); 

const nextElement = document.querySelector('#next-project'); 
 

function displayProjects(event) {
    event.preventDefault(); 
    for (let i = 0; i < projectsArray.length; i++) {
        titleElement.innerHTML = projectsArray[i].name; 
        descriptionElement.innerHTML = projectsArray[i].description; 
        imageElement.setAttribute("src", projectsArray[i].image);
        imageElement.setAttribute("alt", `A screenshot of ${projectsArray[i].name}`);
    }
}
nextElement.addEventListener('click', displayProjects);