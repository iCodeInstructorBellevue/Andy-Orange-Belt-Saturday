document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    const infoBox = document.getElementById("info-box");
    const infoTitle = document.getElementById("info-title");
    const infoFact = document.getElementById("info-fact");

    const planetData = {
        mercury: {
            name: "ball of rock hurtling through space",
            fact: "its a rock",
        },
        venus: {
            name: "very hot ball of rock hurtling through space",
            fact: "its a very hot rock",
        },
        earth: {
            name: "wet ball of rock hurtling through space",
            fact: "its a wet rock",
        },
        mars: {
            name: "cold ball of rock hurtling through space",
            fact: "its a very cold rock",
        },
        jupiter: {
            name: "bigbig ball of gas hurtling through space",
            fact: "its a bigbig ball of gas",
        },
        saturn: {
            name: "bigbig ball of gas with rocks around it hurtling through space",
            fact: "its a bigbig ball of gas with pet rocks",
        },
        uranus: {
            name: "cold ball of gas hurtling through space",
            fact: "its a cold ball of gas",
        },
        neptune: {
            name: "far away ball of gas hurtling through space",
            fact: "its a far away ball of gas",
        },
    };

    function showInfo(eventIn) {
        const planetId = eventIn.target.dataset.planet;
        const data = planetData[planetId];
    }

    function hideInfo() {}

    planets.forEach(curPlanet => {
        curPlanet.addEventListener("mouseenter", showInfo);
        curPlanet.addEventListener("mouseleave", hideInfo);
    });
});