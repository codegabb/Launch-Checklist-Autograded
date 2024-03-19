// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    missionTarget = document.getElementById("missionTarget");
    // Here is the HTML formatting for our mission target div.
        missionTarget.innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
             
            
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else {
    return "Is a Number";
    }
};
    
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list = document.getElementById("faultyItems");

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("input can't be empty")//double check what this should say, do validate input oon all 4
    } else if (!isNaN(pilot) || !isNaN(copilot)) {
        alert("Error: Please enter a valid name");
    } else if (isNaN(fuelLevel) || isNaN(cargoLevel)) {
        alert("Please enter a valid number");
    } else {

    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible";
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }
    if (cargoLevel > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("faultyItems").style.visibility = "visible";
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("faultyItems").style.visibility = "visible";
    }

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`
 }
}
 //task 3
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
       .then(function(response) { 
            return response.json();
         });
    
     return planetsReturned;
    };
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
 };

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;