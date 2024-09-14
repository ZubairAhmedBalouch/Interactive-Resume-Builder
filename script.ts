
//Getting button and skill sections elements from HTML
const toggleButton = document.getElementById('toggle-skills') as HTMLElement
const skills = document.getElementById('skills') as HTMLElement

//// Using eventlistener & Ananonymous Function to toggle the visibility of the skills section
toggleButton.addEventListener('click', ()=> {
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});



