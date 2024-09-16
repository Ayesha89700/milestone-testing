//Refer to the display area
var form = document.getElementById(`resume-form`) as HTMLFormElement;
var resumeDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement;
var shareablelinkContainer = document.getElementById(`shareable-link container`) as HTMLDivElement;
var sharebableLinkElement = document.getElementById(`shareable-link`) as HTMLAnchorElement;
var downloadPdfButton = document.getElementById(`download-pdf`) as HTMLButtonElement;


//form submission
form.addEventListener(`submit`,(event:Event) => {
    event.preventDefault();//it will prevent page reloading

//it will collect input values
const Username = (document.getElementById(`name`)as HTMLInputElement).value;
const name = (document.getElementById(`name`)as HTMLInputElement).value;
const email = (document.getElementById(`email`)as HTMLInputElement).value;
const contact = (document.getElementById(`contact`)as HTMLInputElement).value;
const qualification = (document.getElementById(`qualification`)as HTMLTextAreaElement).value;
const skills = (document.getElementById(`skills`)as HTMLTextAreaElement).value;
const experience = (document.getElementById(`experience`)as HTMLTextAreaElement).value;

//save data in localstorage as resume key
const resumeData = {
    name,
    email,
    contact,
    qualification,
    skills,
    experience,
};
localStorage.setItem(Username, JSON.stringify(resumeData)); //save data locally


//now generate resume content dynamically
const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span><p>
<p><b>Email:</b><span contenteditable="true">${email}</span><p>
<p><b>Contact:</b><span contenteditable="true">${contact}</span><p>

<h3>Qualification</h3>
<p contenteditable="true">${qualification}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>
`;
//display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;

//It will generate a sharesable url with the username only
const shareableURL = 
`${window.location.origin}?username=${encodeURIComponent(Username)}`;

//It will display the shareable link
shareablelinkContainer.style.display = `block`;
sharebableLinkElement.href = shareableURL;
sharebableLinkElement.textContent = shareableURL;
});
//Handle pdf download
downloadPdfButton.addEventListener(`click`,() => {
    window.print(); //It will open the print page and alllow user to save pdf file
});

//it will prefill the form based on the username in the url
window.addEventListener(`DOMContentLoaded`,() => {
    const urlParams = new URLSearchParams(window.location.search);
    const Username = urlParams.get(`username`);
    if(Username) {
        //it will autofill form if data is not found
        const savedResumeData = localStorage.getItem(Username);

        if(savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById(`Username`)as HTMLInputElement).value =
Username;       

            (document.getElementById(`Username`)as HTMLInputElement).value =      
resumeData.name;

            (document.getElementById(`Username`)as HTMLInputElement).value =
resumeData.email;
            (document.getElementById(`Username`)as HTMLInputElement).value =
resumeData.contact;            

            (document.getElementById(`Username`)as HTMLInputElement).value =
resumeData.qualification;            

            (document.getElementById(`Username`)as HTMLInputElement).value =
resumeData.skills;
            (document.getElementById(`Username`)as HTMLInputElement).value =
resumeData.experience;           
        }
    }
});

