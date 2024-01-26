    // Define your content variables
    var contactContent = "<p>Email: degravefarai@gmail.com<br>Telefoonnummer: 0612223165</p>";
    var educationContent = "<p>ik heb op de middelbare school zuidrand college gezeten en daar heb ik mijn vmbo diploma gehaald. </p>";
    var skillsContent = "<p>mijn vaardigheden zijn css, html, javascript, php en sql, ik ben nu bezig met het leren van c# omdat ik later games wil maken.</p>";
    var hobbiesContent = "<p>mijn hobbies zijn naar buiten gaan met mijn vrienden, gamen en series en films kijken.</p>";
    var werkervaringContent = "<p>ik heb in totaal bij een bedrijf gewerkt en dat was arty ik heb 1 jaar lang gewerkt bij arty</p>";

    // Function to display content based on button click
    function showContent(contentType) {
        var display = document.getElementById("display");
        switch(contentType) {
            case 'photo':
              display.innerHTML =  "<img src='/img/farai.jpg' alt='Photo' class='farai'>";
                break;
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