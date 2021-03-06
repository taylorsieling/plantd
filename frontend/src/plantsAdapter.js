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

        const species = document.getElementById('plant-species').value
        const nickname = document.getElementById('plant-nickname').value
        const description = document.getElementById('plant-description').value
        const pot = document.getElementById('plant-pot').value
        const image_url = document.getElementById('plant-image-url').value
    
        let newPlantObj = {
            species,
            nickname,
            description,
            pot,
            image_url
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
            console.log(response)
            let plant = new Plant(response.data.attributes)
            plant.addPlantsToDom()
        })
    
        plantForm.reset();
        plantFormContainer.style.display = 'none';

        console.log("Created a new plant!");
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
        });

        Plant.all = Plant.all.filter(p => p.id != id)

        let plant = document.getElementById(`plant-${id}`)
        plant.remove()

        let plants = Plant.all
        plants.forEach(p => {
            p.addPlantsToDom();
        });
 
        console.log("Plant Deleted!")
    }
    
    updatePlant(plantId) {

        //similar to creating a plant
        const species = document.getElementById(`update-species-${plantId}`).value
        const nickname = document.getElementById(`update-nickname-${plantId}`).value
        const description = document.getElementById(`update-description-${plantId}`).value
        const pot = document.getElementById(`update-pot-${plantId}`).value
        const image_url = document.getElementById(`update-image-url-${plantId}`).value

        let updateObj = {
            species,
            nickname,
            description,
            pot,
            image_url
        }

        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updateObj)
        }

        fetch(this.baseUrl + `/${plantId}`, configObj)
        .then(res => res.json())
        .then(response => {
            let plant = Plant.all.find(p => p.id == response.data.attributes.id)
            plant.updatePlantOnDom(response.data.attributes)
        })

        console.log("Plant Updated!")
    }
}


