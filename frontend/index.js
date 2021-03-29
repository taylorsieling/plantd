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
        <div id="plant-${plant.id}">
            <li> <span class="nickname"><strong>${plant.attributes.nickname}</strong></span> <br>
                <span class="species">${plant.attributes.species}</span><br>
                <span class="description">${plant.attributes.description}</span>
            </li>
        </div>`
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPlants()
})

