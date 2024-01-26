    // Define your content variables
    var contactContent = "<p>Email: 9018253@student.zadkine.nl>Telefoonnummer: 0687241625</p>";
    var educationContent = "<p>ik ben naar de middelbareschool zuidermavo gegaan en me diploma gehaald</p>";
    var skillsContent = "<p>de vardigheden die ik bezit zijn html, css, java, php en sql, ook ben ik bezig met het leren van c# en c++</p>";
    var hobbiesContent = "<p>mijn hobbies bestaan uit game, sporten met vrienden en fitness</p>";
    var werkervaringContent = "<p>ik ben bij een verkoop bedrijf doucheconcurrent en de supermarkt alberthein.</p>";

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