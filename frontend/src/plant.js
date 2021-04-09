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
        this.element.className = "column"

        Plant.all.push(this)
    }

    get plantList() {
        return document.getElementById('plant-list')
    }

    get plantShow() {
        return document.getElementById('plant-show')
    }

    get cares() {
        return Care.all.filter(el => el.plant_id == this.id)
    }

    addEventListeners() {
        plantFormBtn.addEventListener("click", this.showNewPlantForm);
        this.element.addEventListener('click', this.viewPlantInfo)
        // need to add additional listeners on plant show page
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
            <div class='card'>
                <div class="card-header" id="plant-${this.id}-name">
                    <h2>${this.nickname}</h2>
                    <h3>${this.species}</h3>
                </div>
                <div class="card-body" id="plant-${this.id}-info">
                    <p>${this.description}</p>
                    <p><strong>Current Planter:</strong> ${this.pot}</p>
                </div>
            </div>
        `
        return this.element
    }

    viewPlantInfo() {
        // hide all plants
        const plants = document.getElementById('plant-list');
        plants.style.display = 'none';
        console.log('hid plants')

        // create singlular plants view in separate function
        const show = document.getElementById('plant-show')
        show.style.display = 'block';
        console.log('blocked show')

        show.append(this.plantShowRender())
        // show div

    }

    plantShowRender() {
        console.log('plants show render')
        show.innerHTML = `
            <div class='show'> 
                <div class='plant">
                    <h2>${this.nickname}</h2>
                    <p><strong>Species:</strong> ${this.species}</p>
                    <p><strong>Description:</strong> ${this.description}</p>
                    <p><strong>Current Planter:</strong> ${this.pot}</p>
                </div>
                <div class='care'>
            </div>
        `
    }

    // <button class="give-care button" data-id="${this.id}">Give Care</button>
    // <button class="update button" data-id="${this.id}">Update</button> 
    // <button class="delete button" data-id="${this.id}">Delete</button>


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
    }   
 
}