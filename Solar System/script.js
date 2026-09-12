document.addEventListener("DOMContentLoaded", () => {

    const planets = document.querySelectorAll('.planet');
    const infoBox = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infoFact = document.getElementById('info-fact');

    const planetData = {
        mercury:{
            name: "Mercury",
            fact: "Mercury's day is 800deg and Mercury's night is -290deg "
        },
        venus:{
            name: "Venus",
            fact: "Venus has very thick air and very hot "
        },
        earth:{
            name: "Earth",
            fact: "Earth has 8,300,000,000 people in population"
        },
        mars:{
            name: "Mars",
            fact: "Mars has the biggest mountain in the solar system"
        },
        jupiter:{
            name: "Jupiter",
            fact: "Jupiter is the biggest planet in the Solar System"
        },
        saturn:{
            name: "Saturn",
            fact: "Saturn's rings are made of rock and ice"
        },
        uranus:{
            name: "Uranus",
            fact: "Uranus's rotation axle is 97.77deg"
        },
        neptune:{
            name: "Neptune",
            fact: "Neptune used to be closer than Uranus"
        }
    };

    function showInfo(event){
        const planetId = event.target.dataset.planet;
        const data = planetData[planetId];

        if (data) {

            infoTitle.textContent = data.name;
            infoFact.textContent = data.fact;


            infoBox.classList.remove('hidden');
        }

    }

    function hideInfo(){

    }



    planets.forEach(planet => {
        planet.addEventListener('mouseenter', showInfo);
        planet.addEventListener('mouseleave', hideInfo);
    });
});