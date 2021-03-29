const plantList = document.getElementById('plant-list')
const plantForm = document.getElementById('plant-form')
const plantSpecies = document.getElementById('plant-species')
const plantNickname = document.getElementById('plant-nickname')
const plantDesc = document.getElementById('plant-description')
const plantPot = document.getElementById('plant-pot')
const plantsAdapter = new PlantsAdapter


function handleCreatePlantSubmit(e) {
    e.preventDefault()

    let newPlantObj = {
        nickname: plantNickname.value,
        species: plantSpecies.value,
        description: plantDesc.value,
        pot: plantPot.value
    }

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPlantObj)
    }

    fetch('http://localhost:3000/plants/', configObj)
    .then(res => res.json())
    .then(response => {
        addPlantToDOM(response.data)
    })

    console.log("Created a new plant!")
    plantForm.reset()
}


document.addEventListener('DOMContentLoaded', () => {
    plantsAdapter.fetchPlants()
    plantForm.addEventListener('submit', handleCreatePlantSubmit)
    plantList.addEventListener('click', plantsAdapter.handleListClick)
})
