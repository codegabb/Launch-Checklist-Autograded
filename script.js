// Write your JavaScript code here!

// const { addDestinationInfo, pickPlanet, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
//task3 only
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    // }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets); 
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageUrl);   
});




    //task 2 code
    //eventlistener- copy and paste from the book
    let list = this.document.getElementById("faultyItems");
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    // document = 
    // list = 
    pilot = document.querySelector("input[name=pilotName]").value;
    copilot = document.querySelector("input[name=copilotName]").value;
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    cargoLevel = document.querySelector("input[name=cargoMass]").value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    });
   
    let button = document.getElementById("submit");
    button.addEventListener("click", function (event) {
    event.preventDefault();

 })

});