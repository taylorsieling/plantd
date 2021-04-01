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

        // this.flip = document.getElementsByClassName('flip')

        this.careList = document.createElement('div')
        this.careList.id = 'care-list'

        this.giveCareDiv = document.createElement('div')
        this.giveCareDiv.id = `plant-${this.id}-care-list`

        this.plantList = document.getElementById('plant-list')

        Plant.all.push(this)
    }

    // get plantList() {
    //     return document.getElementById('plant-list')
    // }

    addEventListeners() {
        this.element.addEventListener('click', this.handleListClick)
        // this.flip.addEventListener('click', this.openPanel)
    }

    addPlantsToDom() {
        // const plantTabs = document.getElementById('plant-tab-buttons')
        this.plantList.append(this.plantFullRender())
        this.element.appendChild(this.giveCareDiv)
        this.element.appendChild(this.careList)
        
        // this.plantTabs.append(this.plantTabsRender())
        this.addEventListeners()
    }
    
    plantFullRender() {
        this.element.innerHTML = `
                <div class="flip" id="${this.id}-flip">
                    <h3>${this.nickname}</h3>
                </div>
                <div class="panel" id="${this.id}-panel">
                    <span class="species"><strong>Species:</strong> ${this.species}</span><br><br>
                    <span class="description"><strong>Description:</strong> ${this.description}</span><br><br>
                    <span class="description"><strong>Current Planter</strong> ${this.pot}</span><br><br><br>
                
                    <button class="update button" data-id="${this.id}">Update</button> 
                    <button class="delete button" data-id="${this.id}">Delete</button>
                    <button class="give-care button" data-id="${this.id}">Care for ${this.nickname}!</button>
                    <button class="view-care button" data-id="${this.id}">View ${this.nickname}'s Care History!</button>
                </div>
        `
        return this.element
    }

    openPanel = (e) => {
        document.getElementById("panel").style.display = "block";
    }

    updatePlantOnDom({nickname, species, description, pot}) {
        this.nickname = nickname
        this.species = species
        this.description = description
        this.pot = pot
        this.plantFullRender()
    }

    addUpdateForm(plantId) {
        let plant = document.getElementById(`${plantId}-panel`)
        let updateForm = `
            <input type="text" value="${this.nickname}" name="nickname" id="update-nickname-${plantId}">
            <input type="text" value="${this.species}" name="species" id="update-species-${plantId}">
            <input type="text" value="${this.description}" name="description" id="update-description-${plantId}">
            <input type="text" value="${this.pot}" name="pot" id="update-pot-${plantId}">
        `
        let formDiv = document.createElement('div')
        formDiv.id = `update-form-${plantId}`
        formDiv.innerHTML = updateForm
        plant.append(formDiv)
    }

    handleListClick = (e) => {
        if (e.target.className === "delete button") {
            let id = e.target.dataset.id
            plantsAdapter.deletePlant(id)
        } else if(e.target.className === "update button") {
            let plantId = e.target.dataset.id
            e.target.className = "save button"
            e.target.innerHTML = "Save"
            this.addUpdateForm(plantId)
        } else if(e.target.className === "save button") {
            let plantId = e.target.dataset.id
            e.target.className = "update button"
            e.target.innerHTML = "Update"
            plantsAdapter.updatePlant(plantId)
        }
     }

    
     
}