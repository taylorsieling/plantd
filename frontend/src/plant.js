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

    get plantCareButtons() {
        return document.getElementById('plant-care-buttons')
    }

    get backToIndex() {
        return document.getElementById('back-to-index')
    }

    // Render Index Page //

    addPlantsToDom() {
        console.log(this)
        this.plantList.append(this.plantIndexRender())
        this.addEventListeners()
    }

    // Index Page Listeners //

    addEventListeners() {
        plantFormBtn.addEventListener("click", this.showNewPlantForm);
        this.card.addEventListener('click', this.viewPlantInfo)
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
        console.log(e)
        const plant = Plant.all.find(p => p.id == e.target.dataset.id)
        const plantCares = Care.all.filter(el => el.plant_id == plant.id)
        this.plantShow.append(plant.plantShowRender())
        this.careShow.append(plantCares.addCaresToDom())
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
        this.plantEditButtons.addEventListener('click', this.handlePlantEdits)
        this.plantCareButtons.addEventListener('click', this.handleCareOptions)
        this.backToIndex.addEventListener('click', this.viewIndex)
    }

    viewIndex = (e) => {
        console.log(e)
        if (e.target.id === "back-to-index") {
            this.plantIndex.style.display = 'block';
            this.plantShow.style.display = 'none';
        }    
    }

    plantShowRender() {
        console.log('plants show render')
        this.plantIndex.style.display = 'none';
        this.plantShow.style.display = 'block';
        this.plantShow.innerHTML = `

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
            </div>
        `
    }

    // <div class="plant-row" id="plant-care-buttons">
    //                     <button class="view-care button" data-id="${this.id}">View Care History</button>
    //                     <button class="give-care button" data-id="${this.id}">Give Care</button>
    //                 </div>
    //                 <div class="plant-row" id="plant-edit-buttons">
                        
    //                 </div>

    // Updating Plants //

    updatePlantOnDom({nickname, species, description, pot}) {
        this.nickname = nickname
        this.species = species
        this.description = description
        this.pot = pot
        this.plantShowRender()
        this.addButtonListeners()
        // 
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
    
    renderNewCareForm(plantId) {
        let plant = document.getElementById(`plant-${this.id}-care-info`)
        let careForm = `
            <form id="care-form">
                <label for="care-type">Care Type:</label>
                <input type="text" name="care-type" id="care-type">
                <label for="care-notes">Notes:</label>
                <input type="text" name="care-notes" id="care-notes">
                <label for="care-date">Date:</label>
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

    handleCareOptions = (e) => {
        // view care history
        if (e.target.className === "view-care button") {
            e.target.className = "close button"
            e.target.innerHTML = "Close Care History"
            this.allCares.forEach(c => {
                console.log(c)
                c.addCaresToDom();
            });
            document.getElementById("plant-care").style.display = 'block';
        // close care history
        } else if (e.target.className === "close button") {
            let careDiv = document.getElementById("plant-care")
            e.target.className = "view-care button"
            e.target.innerHTML = "View Care History"
            careDiv.style.display = 'none'
        // give care form
        } else if (e.target.className === "give-care button") {
            let plantId = e.target.dataset.id
            this.renderNewCareForm(plantId);
        } 
    }
}
