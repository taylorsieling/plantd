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
}


