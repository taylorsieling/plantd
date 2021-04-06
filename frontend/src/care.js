class Care {

    static all = []

    constructor({care_type, notes, date, id, plant_id}) {
        this.care_type = care_type
        this.notes = notes
        this.date = date
        this.id = id
        this.plant_id = plant_id
        
        this.element = document.createElement('div')
        this.element.id = `care-list-${this.plant_id}`
        this.element.className = "care"

        this.buttons = document.getElementById('plant-buttons')

        Care.all.push(this)
    }

    // get careList() {
    //     return document.getElementById(`plant-${this.id}-care-list`)
    // }
    
    // get buttons() {
    //     return document.getElementById('plant-buttons')
    // }

    // buttons.addEventListener("click", this.handleButtonClick) {
    //     console.log('button was clicked');
    // }

    addCareToDom(plantId) {
        let cares = Care.all.filter(el => el.plant_id == plantId)
            cares.careFullRender()
    }

    careFullRender() {
        let plant = document.getElementById(`plant-${plantId}-panel`)
        let care = `
            <div id="care-${this.id}">
            <span class="care-type">${this.care_type}</span><br>
            <span class="care-type">${this.date}</span><br>
            <span class="care-type">${this.notes}</span>
            
            <button class="update button" name="update-care" data-id="${this.id}">Update</button>
            <button class="delete button" name="delete-care" data-id="${this.id}">Delete</button>
            </div>
            <br><br>
        `
        let careDiv = document.createElement('div')
        careDiv.id = `plant-${this.plant_id}-care`
        careDiv.innerHTML = care
        plant.append(careDiv)
    }

    renderNewCareForm() {
        let careForm = `

            <form id="care-form">

            <label for="care">Care Type:</label><br>

            <input type="radio" name="care-type" id="care-type">
            <label for="watering">Watering</label><br>
            
            <input type="radio" name="care-type" id="repotting" value="repotting">
            <label for="repotting">Repotting</label><br>

            <input type="radio" name="care-type" id="propagation" value="propagation">
            <label for="propagation">Propagation</label><br><br>

            <input type="radio" name="care-type" id="other" value="other">
            <label for="other">Other</label> <input type="text" name="other_care"><br><br>

            <label for="care-notes">Notes:</label>
            <input type="text" name="care-notes" id="care-notes"><br><br>

            <label for="care-date">Date:</label>
            <input type="date" name="care-date" id="care-date"><br><br>

            <input type="hidden" id="care-plantId" value="${this.id}">

            <input type="submit" value="Tend to Plant!">

            </form>
        `
        let div = document.getElementById(`plant-${this.id}-care-form`)
        div.innerHTML = careForm

    }

        // addEventListeners() {    
    //     buttons.addEventListener('click', this.handleButtonClick)
    //     // this.careButtons.addEventListener('click', this.handleListClick)
    //     // this.careList.addEventListener('click', this.handleListClick)
    //     // this.element.addEventListener('click', this.handleListClick)
    

    // handleButtonClick = (e) => {
    //     if (e.target.className === "view-care button") {
    //         // let id = e.target.dataset.id
    //         console.log('clicked view care')
    //         this.addCaresToDom()
    //     // } else if(e.target.name === "update-care") {
    //     //     let careId = e.target.dataset.id
    //     //     e.target.className = "save button"
    //     //     e.target.innerHTML = "Save"
    //     //     this.addUpdateForm(careId)
    //     }
    // }

}