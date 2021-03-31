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

        this.careDiv = document.createElement('div')
        this.careDiv.id = `plant-${this.id}-care`

        this.giveCareDiv = document.createElement('div')
        this.giveCareDiv.id = `plant-${this.id}-care-form`

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
        // const plantTabs = document.getElementById('plant-tab-buttons')
        this.plantList.append(this.plantFullRender())
        this.element.appendChild(this.giveCareDiv)
        this.element.appendChild(this.careDiv)
        
        // this.plantTabs.append(this.plantTabsRender())
        this.addEventListeners()
    }
    
    plantFullRender() {
        this.element.innerHTML = `
            <div id="plant-${this.id}-card">
                <li> 
                    <span class="nickname"><strong>${this.nickname}</strong></span> <br>
                    <span class="species"> Species: ${this.species}</span><br>
                    <span class="description"> Description: ${this.description}</span><br>
                    <span class="description"> Current Planter: ${this.pot}</span>
                </li>
                <button class="update button" data-id="${this.id}">Update</button> 
                <button class="delete button" data-id="${this.id}">Delete</button>
                <button class="give-care button" data-id="${this.id}">Care for ${this.nickname}!</button>
            </div>
            <br>
        `
        return this.element
    }

    // plantTabsRender() {
    //     console.log('attempting to add tabs')
    //     this.element.innerHTML = `
    //         <button class="tablinks">${this.nickname}</button>
    //     `
    //     return this.element
    // }

    updatePlantOnDom({nickname, species, description, pot}) {
        this.nickname = nickname
        this.species = species
        this.description = description
        this.pot = pot
        this.plantFullRender()
    }

    addUpdateForm(plantId) {
        let plant = document.querySelector(`#plant-${plantId} li`)
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

    // renderNewCareForm(plantId) {
    //     let careForm = `

    //         <form id="care-form">

    //         <label for="care">Care Type:</label><br>

    //         <input type="radio" name="care-type" id="care-type">
    //         <label for="watering">Watering</label><br>
            
    //         <input type="radio" name="care-type" id="repotting" value="repotting">
    //         <label for="repotting">Repotting</label><br>

    //         <input type="radio" name="care-type" id="propagation" value="propagation">
    //         <label for="propagation">Propagation</label><br><br>

    //         <input type="radio" name="care-type" id="other" value="other">
    //         <label for="other">Other</label> <input type="text" name="other_care"><br><br>

    //         <label for="care-notes">Notes:</label>
    //         <input type="text" name="care-notes" id="care-notes"><br><br>

    //         <label for="care-date">Date:</label>
    //         <input type="date" name="care-date" id="care-date"><br><br>

    //         <input type="hidden" id="care-plantId" value="${this.id}">

    //         <input type="submit" value="Tend to Plant!">

    //         </form>
    //     `
    //     let div = document.getElementById(`plant-${this.id}-care-form`)
    //     div.innerHTML = careForm
    // }



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
        // } else if(e.target.className="give-care") {
        //     let plantId = e.target.dataset.id
        //     this.renderNewCareForm(plantId)
        // }

     }

    
     
}