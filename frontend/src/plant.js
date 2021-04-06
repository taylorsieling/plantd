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

        Plant.all.push(this)
    }

    get plantList() {
        return document.getElementById('plant-list')
    }

    get panel() {
        return document.getElementById(`plant-${this.id}-panel`)
    }

    get cares() {
        return Care.all.filter(el => el.plant_id == this.id)
    }

    addEventListeners() {
        plantFormBtn.addEventListener("click", this.showNewPlantForm);
        this.element.addEventListener('click', this.handleListClick)
    }

    showNewPlantForm() {
        if (plantFormContainer.style.display === 'none') {
            plantFormContainer.style.display = 'block';
        } else {
            plantFormContainer.style.display = 'none';
        }
    }

    addPlantsToDom() {
        this.plantList.append(this.plantFullRender())
        this.addEventListeners()
    }
    
    plantFullRender() {
        this.element.innerHTML = `
            <div>
                <div class="flip" id="plant-${this.id}-flip">
                    <h3>${this.nickname}</h3>
                </div>
                <div class="panel" id="plant-${this.id}-panel">
                    <div id="plant-info">
                        <p><strong>Species:</strong> ${this.species}</p>
                        <p><strong>Description:</strong> ${this.description}</p>
                        <p><strong>Current Planter:</strong> ${this.pot}</p>
                    </div>
                    <div id="plant-buttons">
                        <button class="view-care button" data-id="${this.id}">View Care History</button>
                        <button class="give-care button" data-id="${this.id}">Give Care</button>
                        <button class="update button" data-id="${this.id}">Update</button> 
                        <button class="delete button" data-id="${this.id}">Delete</button>
                    </div>
                </div>
            </div>
        `
        return this.element
    }

    updatePlantOnDom({nickname, species, description, pot}) {
        this.nickname = nickname
        this.species = species
        this.description = description
        this.pot = pot
        this.plantFullRender()
    }

    addUpdateForm(plantId) {
        let plant = document.getElementById(`plant-${plantId}-panel`)
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
        } else if (e.target.className === "view-care button") {
            e.target.className = "close button"
            e.target.innerHTML = "Close Care History"
            this.cares.forEach(c => {
                console.log(c)
                c.addCaresToDom();
            });
        }

        // } else if(e.target.className === "view-care button") {
        //     console.log('clicked view care')
        //     let plantId = e.target.dataset.id
        //     // not sure what to call addCareToDom on
        //     console.log(this)
        //     this.cares.forEach(careFullRender())
        // } else if(e.target.className === "give-care button") {
        //     console.log('clicked give care')
    }

    
 
}