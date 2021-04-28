// Contain Plant Class

class Plant {

    static all = []

    constructor({species, nickname, description, pot, image_url, id}) {
        this.species = species
        this.nickname = nickname
        this.description = description
        this.pot = pot
        this.image_url = image_url
        this.id = id

        this.element = document.createElement('div')
        this.element.id = `plant-${this.id}`
        this.element.className = "column"

        this.showElement = document.createElement('div')
        this.showElement.id = `plant-${this.id}-show`

        this.plantIndex = document.getElementById('plant-index')
        this.plantList = document.getElementById('plant-list')
        this.plantShow = document.getElementById('plant-show')

        Plant.all.push(this)
    }

    // Getter Methods //

    get allCares() {
        return Care.all.filter(el => el.plant_id == this.id)
    }

    get card() {
        return document.getElementById(`plant-${this.id}-button`)
    }

    get plantEditButtons() {
        return document.getElementById('plant-edit-buttons')
    }

    get giveCareButton() {
        return document.getElementById('care-button')
    }

    get backToIndex() {
        return document.getElementById('back-to-index')
    }

    // Render Index Page //

    addPlantsToDom() {
        this.plantList.append(this.plantIndexRender())
        this.addEventListeners()
    }

    // Index Page Listeners //

    addEventListeners() {
        plantFormBtn.addEventListener("click", this.showNewPlantForm);
        searchSubmit.addEventListener("click", this.searchPlants);
        this.card.addEventListener("click", this.viewPlantInfo);  
    }

    searchPlants = (e) => {
        e.preventDefault()
        let searchInput = document.getElementById('search-field').value.toLowerCase();
        let filteredPlants = Plant.all.filter(plant => plant.nickname.toLowerCase().includes(searchInput))
        this.plantList.innerHTML = '';
        filteredPlants.forEach(plant => {
            plant.addPlantsToDom();
        });
    }

    showNewPlantForm() {
        if (plantFormContainer.style.display === 'none') {
            plantFormContainer.style.display = 'block';
        } else if (plantFormContainer.style.display = 'block') {
            document.getElementById('plant-form').reset()
            plantFormContainer.style.display = 'none';
        }
    }

    viewPlantInfo = (e) => {
        this.plantShow.append(this.plantShowRender())
        this.addPlantCares()
        this.addButtonListeners()
    }
    
    plantIndexRender() {
        this.plantIndex.style.display = 'block';
        this.plantShow.style.display = 'none';
        this.element.innerHTML = `
            <div class='card' data-id='${this.id}' id='card-${this.id}'>
                <div class="card-header" id="plant-${this.id}-name">
                    <img class="cardimg" src="${this.image_url}" alt="${this.species}" width="100%">
                </div>
                <div class="card-body" id="plant-${this.id}-info">
                    <h2>${this.nickname}</h2>
                    <h3>${this.species}</h3>
                    <p>${this.description}</p>
                    <p><strong>Current Planter:</strong> ${this.pot}</p>
                </div>
                <div class="card-footer" id="plant-${this.id}-button">
                    <button class="card-button button" data-id="${this.id}">View Details</button>
                </div>
            </div>
        `
        return this.element
    }

    // Show Page //
    
    addButtonListeners() {
        this.backToIndex.addEventListener('click', this.viewIndex)
        this.plantEditButtons.addEventListener('click', this.handlePlantEdits)
        this.giveCareButton.addEventListener('click', this.givePlantCare)
    }

    viewIndex = (e) => {
        if (e.target.id === "back-to-index") {
            this.showElement.remove()
            this.plantIndex.style.display = 'block';
            this.plantShow.style.display = 'none';
        }    
    }

    plantShowRender() {
        this.plantIndex.style.display = 'none';
        this.plantShow.style.display = 'block';
        this.showElement.innerHTML = `
            <div class="section" id="top-button">
                <button id="back-to-index" class="button">Back to All Plants</button>
            </div>
            
            <div class="plant-row" id="plant-info-row">
                <div class="plant-col" id="plant-${this.id}-image">
                    <img class="displayimg" src="${this.image_url}" alt="${this.species}" width="100%">  
                </div>
                <div class="plant-col" id="plant-${this.id}-care-info">
                    <h2>${this.nickname}</h2>
                    <h3>${this.species}</h3>
                    <p>${this.description}</p>
                    <p><strong>Current Planter:</strong> ${this.pot}</p>
                    <div id="plant-edit-buttons">
                        <button class="update button" data-id="${this.id}">Update</button> 
                        <button class="delete button" data-id="${this.id}">Delete</button>
                    </div>
                </div>
            </div>

            <div class="section" id="plant-care-row">
                <div class="section" id="care-button-container">
                    <button id="care-button" class="give-care button" data-id="${this.id}">Give Plant Care</button>
                </div>
                <div class="care-title">
                    <h2>Plant Care History</h2>
                </div>
            </div>`
       
        return this.showElement
    }

    addPlantCares() {
        this.allCares.forEach(c => {
            c.addCaresToDom();
        });
    }

    // Updating Plants //

    updatePlantOnDom({nickname, species, description, pot, image_url}) {
        this.nickname = nickname
        this.species = species
        this.description = description
        this.pot = pot
        this.image_url = image_url
        this.plantIndexRender()
        this.addEventListeners()
        this.plantShowRender()
        this.addButtonListeners()
        this.addPlantCares()
    }

    addUpdateForm(plantId) {
        let plant = document.getElementById(`plant-${this.id}-care-info`)
        let updateForm = `
            <input type="text" value="${this.image_url}" name="image_url" id="update-image-url-${plantId}">
            <input type="text" value="${this.nickname}" name="nickname" id="update-nickname-${plantId}">
            <input type="text" value="${this.species}" name="species" id="update-species-${plantId}">
            <input type="text" value="${this.description}" name="description" id="update-description-${plantId}">
            <input type="text" value="${this.pot}" name="pot" id="update-pot-${plantId}">
        `
        let formDiv = document.createElement('div')
        formDiv.id = `update-form-${plantId}`
        formDiv.className = 'plant-update-form'
        formDiv.innerHTML = updateForm
        plant.append(formDiv)
    } 

    // Event Handlers //

    handlePlantEdits = (e) => {
        // delete plant
        if (e.target.className === "delete button") {
            let id = e.target.dataset.id
            plantsAdapter.deletePlant(id)
        // update plant
        } else if(e.target.className === "update button") {
            let plantId = e.target.dataset.id
            e.target.className = "save button"
            e.target.innerHTML = "Save"
            this.addUpdateForm(plantId)
            // save updated plant
        } else if(e.target.className === "save button") {
            let plantId = e.target.dataset.id
            e.target.className = "update button"
            e.target.innerHTML = "Update"
            plantsAdapter.updatePlant(plantId)
        }
    }

    givePlantCare = (e) => {
        if (e.target.className === "give-care button") {
            let plantId = e.target.dataset.id;
            e.target.className = "collapse button";
            this.renderNewCareForm(plantId);
        } else {
            e.target.className = "give-care button";
            const careForm = document.getElementById('care-form')
            const careFormContainer = document.getElementById('care-form-container');
            careForm.reset();
            careFormContainer.remove();
        }
        
    }

    renderNewCareForm(plantId) {
        let plant = document.getElementById('care-button-container')
        let careForm = `
            <form id="care-form">
                <label for="care-type">Care Type:</label>
                <input type="text" name="care-type" id="care-type">
                <label for="care-notes">Notes:</label>
                <input type="text" name="care-notes" id="care-notes">
                <label for="care-date">Date:</label><br>
                <input type="date" name="care-date" id="care-date"><br><br>
                <input type="hidden" id="care-plantId" value="${plantId}">
                <input type="submit" class="button" value="Tend to Plant!">
            </form>
        `
        let formDiv = document.createElement('div')
        formDiv.id = "care-form-container"
        formDiv.className = 'new-care-form'
        formDiv.innerHTML = careForm
        plant.append(formDiv)
        formDiv.addEventListener('submit', caresAdapter.handleCareFormSubmit)
    }
}
