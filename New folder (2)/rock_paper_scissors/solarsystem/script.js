document.addEventListener('DOMContentLoaded', () => {

    const planets = document.querySelectorAll('.planet');
    const infoBox = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infofact = document.getElementById('info-fact');

    const planetData = {
        mercury:{
            name: "mercury",
            fact: "A year on mercury is just 88 earth days long, but a single day lasts for nearly 59 Earth days!"
        },
        venus:{
            name: "venus",
            fact: "Hottest Planet: Surface temperatures reach a scorching 872°F (467°C), making it hotter than Mercury due to a runaway greenhouse effect.Crushing Pressure: The surface atmospheric pressure is 93 times greater than Earth's sea level, similar to being deep underwater.Backward Spin: Venus rotates in a retrograde (clockwise) direction, meaning the Sun rises in the west and sets in the east.Extreme Skies: Thick clouds of corrosive sulfuric acid blanket the planet, reflecting sunlight and making Venus the third brightest object in the sky after the Sun and Moon.!"
        },
        earth:{
            name: "earth",
            fact: "people live on the planet and it is the only on in the intire solar system"
        },
        mars:{
            name: "mars",
            fact: "Mars is the fourth planet from the Sun and is commonly known as the Red Planet due to iron-rich minerals oxidizing on its surface."
        },
        jupiter:{
            name: "jupiter",
            fact: "Jupiter is the largest planet in our solar system, with a mass more than twice that of all other planets combined."
        },
        saturn:{
            name: "saturn",
            fact: "It Would Float: Saturn has the lowest density of any planet. Its average density is less than water, meaning it would float in a giant pool. Its famous rings are not solid. They consist of billions of pieces of ice, dust, and rock ranging from tiny grains to giant boulders. A unique, six-sided geometric weather pattern spins constantly at Saturn's north pole. Saturn holds the record for the most confirmed moons in the solar system, including the smoggy, lake-filled Titan and the ocean-bearing Enceladus."
        },
        uranus:{
            name: "uranus",
            fact: "Uranus is the seventh planet from the Sun and the coldest planet in our solar system."
        },
        neptune:{
            name: "neptune",
            fact: "Neptune has the stronges winds in the solar system"
        }
    };

    function showinfo(event){
        const planetid = event.target.dataset.planet;
        const data = planetData[planetData];

        if (data) {
            infoTitle.textContent = data.name;
            infofact.textContent = data.fact;

            infoBox.classList.remove('hidden');

            infoBox.classList.remove('hidden');
        }
    }

    function hideinfo(){
        infoBox.classList.add('hidden');
    }

    planets.forEach(planet => {
        planet.addEventListener('mouseenter', showinfo);
        planet.addEventListener('mouseleave', hideinfo);
    });
});