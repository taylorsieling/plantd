const plantList = document.getElementById('plant-list')

function fetchPlants() {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(data => addPlants(data))
}

function addPlants(response) {
    console.log(response)
    response.data.forEach(plant => addPlantToDOM(plant))
}

function addPlantToDOM(plant) {
    console.log(plant)
    plantList.innerHTML += `
        <div id="plant-${plant.id}>
            <li> 
            </li>
        </div>`
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPlants()
})

// Nickname - bold, Species, Description, Pot