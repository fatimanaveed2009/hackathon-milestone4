// Select form and display area elements
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.querySelector('.resume-display');
// Function to generate the resume based on form data
function generateResume(data) {
    resumeDisplay.innerHTML = "\n        <h2>Editable Resume</h2>\n        <p><strong>Email:</strong><span contenteditable=\"true\" >".concat(data.email, "</span></p>\n        <p><strong>Phone:</strong><span contenteditable=\"true\" > ").concat(data.phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(data.education, "</span></p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\"> ").concat(data.experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(data.skills, "</p>\n    ");
}
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    // Collect input values and typecast
    var name = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create ResumeData object
    var formData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
    // Generate the resume using collected data
    generateResume(formData);
}
// Event listener for form submission
resumeForm.addEventListener('submit', handleSubmit);
