//Refer to the display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareablelinkContainer = document.getElementById("shareable-link container");
var sharebableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
//form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //it will prevent page reloading
    //it will collect input values
    var Username = document.getElementById("name").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var qualification = document.getElementById("qualification").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    //save data in localstorage as resume key
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        qualification: qualification,
        skills: skills,
        experience: experience,
    };
    localStorage.setItem(Username, JSON.stringify(resumeData)); //save data locally
    //now generate resume content dynamically
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span><p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span><p>\n<p><b>Contact:</b><span contenteditable=\"true\">").concat(contact, "</span><p>\n\n<h3>Qualification</h3>\n<p contenteditable=\"true\">").concat(qualification, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n");
    //display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    //It will generate a sharesable url with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(Username));
    //It will display the shareable link
    shareablelinkContainer.style.display = "block";
    sharebableLinkElement.href = shareableURL;
    sharebableLinkElement.textContent = shareableURL;
});
//Handle pdf download
downloadPdfButton.addEventListener("click", function () {
    window.print(); //It will open the print page and alllow user to save pdf file
});
//it will prefill the form based on the username in the url
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var Username = urlParams.get("username");
    if (Username) {
        //it will autofill form if data is not found
        var savedResumeData = localStorage.getItem(Username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("Username").value =
                Username;
            document.getElementById("Username").value =
                resumeData.name;
            document.getElementById("Username").value =
                resumeData.email;
            document.getElementById("Username").value =
                resumeData.contact;
            document.getElementById("Username").value =
                resumeData.qualification;
            document.getElementById("Username").value =
                resumeData.skills;
            document.getElementById("Username").value =
                resumeData.experience;
        }
    }
});
