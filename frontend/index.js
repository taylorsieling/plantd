const plantList = document.getElementById('plant-list')
const plantForm = document.getElementById('plant-form')
const plantSpecies = document.getElementById('plant-species')
const PlantNickname = document.getElementById('plant-nickname')
const plantDesc = document.getElementById('plant-description')
const plantPot = document.getElementById('plant-pot')


function fetchPlants() {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(data => addPlants(data))
}

function addPlants(response) {
    response.data.forEach(plant => addPlantToDOM(plant))
}

function addPlantToDOM(plant) {
    plantList.innerHTML += `
        <div id="plant-${plant.id}">
            <li> <span class="nickname"><strong>${plant.attributes.nickname}</strong></span> <br>
                <span class="species">${plant.attributes.species}</span><br>
                <span class="description">${plant.attributes.description}</span>
            </li>
        </div>`
}

function handleCreatePlantSubmit(e) {
    e.preventDefault()

    let newPlantObj = {
        nickname: planeNickname.value,
        species: plantSpecies.value,
        description: plantDesc.value,
        pot: plantPot.value
    }

    let configObj = {
        method: 'POST
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
    }

    fetch('http://localhost:3000/plants', )


}

document.addEventListener('DOMContentLoaded', () => {
    fetchPlants()
    plantForm.addEventListener('submit', handleCreatePlantSubmit)
})
