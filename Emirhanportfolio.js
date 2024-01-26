// Define your content variables
var contactContent = "<p>Email: emir5314@outlook.com<br>Telefoonnummer: 0627920251</p>";
var educationContent = "<p>ik heb op de middelbare school Avicenna college gezeten en ik heb mijn vmbo/kader diploma gehaal.</p>";
var skillsContent = "<p>mijn vaardigheden zijn css, html, javascript, php en sql, Ik wil mezelf nog meer dingen te laten doen zodat ik meer kan voor mijn toekomst.</p>";
var hobbiesContent = "<p>mijn hobbies zijn naar buiten gaan met mijn vrienden, gamen en series en films kijken.</p>";
var werkervaringContent = "<p>Ik werk nu ongeveer 4 maanden bij de Albert Heijn</p>";

// Function to display content based on button click
function showContent(contentType) {
    var display = document.getElementById("display");
    switch(contentType) {
        case 'contact':
            display.innerHTML = contactContent;
            break;
        case 'education':
            display.innerHTML = educationContent;
            break;
        case 'skills':
            display.innerHTML = skillsContent;
            break;
        case 'hobbies':
            display.innerHTML = hobbiesContent;
            break;
        case 'werkervaring' :
            display.innerHTML = werkervaringContent;
             break;
        default:
            display.innerHTML = "";
    }
}