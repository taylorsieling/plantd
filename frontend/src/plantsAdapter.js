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
            response.data.forEach(element => {
                let plant = new Plant(element.attributes)
                plant.addPlantsToDOM(element)
            })
        })
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
    
}


