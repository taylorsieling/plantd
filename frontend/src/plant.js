// Contain Plant Class

class Plant {

    static all = []

    constructor({species, nickname, description, pot, id}) {
        this.species = species
        this.nickname = nickname
        this.description = description
        this.pot = pot
        this.id = id

        this.element = document.createElement('div')
        this.element.id = `plant-${this.id}`

        this.plantList = document.getElementById('plant-list')

        Plant.all.push(this)
    }

    // get plantList() {
    //     return document.getElementById('plant-list')
    // }

    addEventListeners() {
        this.element.addEventListener('click', this.handleListClick)
    }

    addPlantsToDom() {
        this.plantList.append(this.plantFullRender())
        this.addEventListeners()
    }
    
    plantFullRender() {
        this.element.innerHTML = `
            <li> 
                <span class="nickname"><strong>${this.nickname}</strong></span> <br>
                <span class="species"> Species: ${this.species}</span><br>
                <span class="description"> Description: ${this.description}</span><br>
                <span class="description"> Current Planter: ${this.pot}</span>
            </li>
            <button class="update" data-id="${this.id}">Update</button> 
            <button class="delete" data-id="${this.id}">Delete</button>
        `
        return this.element
    }

    updatePlantOnDom(nickname, species, description, pot) {
        this.nickname = nickname
        this.species = species
        this.description = description
        this.pot = pot
        this.plantFullRender()
    }

    addUpdateForm(plantId) {
        let plant = document.querySelector(`#plant-${plantId} li`)
        let updateForm = `
            <input type="text" value="${this.nickname} name="nickname" id="update-nickname-${plantId}">
            <input type="text" value="${this.species} name="species" id="update-species-${plantId}">
            <input type="text" value="${this.description} name="description" id="update-desc-${plantId}">
            <input type="text" value="${this.pot} name="pot" id="update-pot-${plantId}">
        `
        let formDiv = document.createElement('div')
        formDiv.id = `update-form-${plantId}`
        formDiv.innerHTML = updateForm
        plant.append(formDiv)
    }

    handleListClick = (e) => {
        if (e.target.className === "delete") {
            let id = e.target.dataset.id
            plantsAdapter.deletePlant(id)
        } else if(e.target.className === "update") {
            let plantId = e.target.dataset.id
            this.addUpdateForm(plantId)
        }
     }

    
     
}