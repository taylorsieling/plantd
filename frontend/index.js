const plantList = document.getElementById('plant-list')
const plantForm = document.getElementById('plant-form')
const plantSpecies = document.getElementById('plant-species')
const plantNickname = document.getElementById('plant-nickname')
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
            <button class="update" data-id="${plant.id}">Update</button> 
            <button class="delete" data-id="${plant.id}">Delete</button> 
        </div>`
}

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

function handleListClick(e) {
   if (e.target.className === "delete") {
       
       //remove from database
       let id = e.target.dataset.id
        deletePlant(id)

        //remove from DOM
       let plant = document.getElementById(`plant-${id}`)
       plant.remove()

       console.log("Deleted Successfully!")
   }
   

   
}

function deletePlant(id) {

    let configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    fetch(`http://localhost:3000/plants/${id}`, configObj)
    .then(res => res.json())
    .then(response => {
        alert(response.message)
    })
}


document.addEventListener('DOMContentLoaded', () => {
    fetchPlants()
    plantForm.addEventListener('submit', handleCreatePlantSubmit)
    plantList.addEventListener('click', handleListClick)
})
