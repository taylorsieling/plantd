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

        Care.all.push(this)
    };

    addCaresToDom() {
        this.careFullRender();
        // add event listeners for updating and deleting
    }

    careFullRender() {
        let plant = document.getElementById(`plant-${this.plant_id}-panel`)
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


    // get addEventListeners() {
    //     let plantButtons = document.getElementsById('plant-buttons')
    //     plantButtons.addEventListener('click', this.handleButtonClick)
    // }

    // handleButtonClick () {
    //     if (e.target.className === "view-care button") {
    //         console.log('clicked view care')
    //         console.log(this)
    //         this.cares.forEach(careFullRender())
    //     } else if(e.target.className === "give-care button") {
    //         console.log('clicked give care')
    //         console.log(this)
    //     }
    // }


    // renderCares() {
    //     console.log('inside renderCares')
    // }

    // renderNewCareForm() {
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

    
}