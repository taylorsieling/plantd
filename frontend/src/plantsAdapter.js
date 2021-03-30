// Communicate with Backend
// Post, Patch, Delete Requests

class PlantsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/plants'
    }

    fetchPlants() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let plant = new Plant(el.attributes)
                plant.addPlantsToDom(el)
            })
        })
    }

    handlePlantFormSubmit = (e) => {
        e.preventDefault()

        const plantSpecies = document.getElementById('plant-species')
        const plantNickname = document.getElementById('plant-nickname')
        const plantDesc = document.getElementById('plant-description')
        const plantPot = document.getElementById('plant-pot')
    
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
    
        fetch(this.baseUrl, configObj)
        .then(res => res.json())
        .then(response => {
            let plant = new Plant(response.data.attributes)
            plant.addPlantsToDom()
        })
    
        console.log("Created a new plant!")
        plantForm.reset()
    }

    deletePlant(id) {

        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    
        fetch(this.baseUrl + `/${id}`, configObj)
        .then(res => res.json())
        .then(response => {
            alert(response.message)
        })

        let plant = document.getElementById(`plant-${id}`)
        plant.remove()
 
        console.log("Deleted Successfully!")
    }
    
    updatePlant(plantId) {

        //similar to creating a plant
        const species = document.getElementById(`update-species-${plantId}`).value
        const nickname = document.getElementById(`update-nickname-${plantId}`).value
        const description = document.getElementById(`update-description-${plantId}`).value
        const pot = document.getElementById(`update-pot-${plantId}`).value

        let itemObj = {
            species,
            nickname,
            description,
            pot
        }

        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(itemObj)
        }

        fetch(this.baseUrl + `/${plantId}`, configObj)
        .then(res => res.json())
        .then(response => {
            let plant = Plant.all.find(p => p.id == response.data.attributes.id)
            plant.updatePlantOnDom(response.data.attributes)
        })
            // let plant = Plant.all.find(p => p.id == response.data.attributes.id)
            // plant.updatePlantOnDom(response.data.attributes)

        console.log("Plant Updated!")

    }
}


