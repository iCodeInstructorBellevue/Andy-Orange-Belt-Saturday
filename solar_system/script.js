document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    const infoBox = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoFact = document.getElementById('info-fact');

    const planetData = {
        mercury:{
            name: "Mercury",
            fact: "Mercury is the closest planet to the sun."
        },
        venus:{
            name: "Venus",
            fact: "Venus has the most volcanoes."
        },
        earth:{
            name: "Earth",
            fact: "Earth's population is 8.3 billion people."
        },
        mars:{
            name: "Mars",
            fact: "Scientists believe that there was life on Mars."
        },
        jupiter:{
            name: "Jupiter",
            fact: "Jupiter is the largest planet in the solar system."
        },
        saturn:{
            name: "Saturn",
            fact: "Saturn's rings are made out of billions of pieces of water and ice."
        },
        uranus:{
            name: "Uranus",
            fact: "It rotates in a retrograde."
        },
        neptune:{
            name: "Neptune",
            fact: "Neptune has the strongest winds out of all the planets in our Solar System."
        }  
    };

    function showInfo(event){
        const planetId = event.target.dataset.planet;
        const data = planetData[planetId];

        if(data) {
            infoTitle.textContent = data.name;
            infoFact.textContent = data.fact;

            infoBox.classList.remove('hidden');
        }
    }

    function hideInfo(){
        infoBox.classList.add('hidden');
    }

    planets.forEach(planet => {
        planet.addEventListener('mouseenter', showInfo);
        planet.addEventListener('mouseLeave', hideInfo);
    });
});