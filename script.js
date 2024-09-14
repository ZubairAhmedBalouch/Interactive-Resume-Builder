//Getting button and skill sections elements from HTML
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
//// Using eventlistener & Ananonymous Function to toggle the visibility of the skills section
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
