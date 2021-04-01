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

        this.careButtons = document.getElementById('plant-buttons')

        // this.careList = document.getElementById(`plant-${this.id}-care-list`)

        Care.all.push(this)
    }

    addEventListeners() {
        this.careButtons.addEventListener('click', this.handleListClick)
        // this.careList.addEventListener('click', this.handleListClick)
        // this.element.addEventListener('click', this.handleListClick)
    }

    addCaresToDom() {
        // this.careList.append(this.careFullRender())
        // this.addEventListeners()
    }

    careFullRender() {
        
        this.element.innerHTML = `
            <li>
            <span class="care-type">${this.care_type}</span><br>
            <span class="care-type">${this.date}</span><br>
            <span class="care-type">${this.notes}</span>
            </li>
            <button class="update button" name="update-care" data-id="${this.id}">Update</button>
            <button class="delete button" name="delete-care" data-id="${this.id}">Delete</button>
            <br><br>
        `
        return this.element
    }

    renderNewCareForm(id) {
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


    handleListClick = (e) => {
        // if (e.target.className === "view-care button") {
        //     let id = e.target.dataset.id
        //     console.log('clicked view care')
        //     this.addCaresToDom(id)
        // }
        // } else if(e.target.name === "update-care") {
        //     let careId = e.target.dataset.id
        //     e.target.className = "save button"
        //     e.target.innerHTML = "Save"
        //     this.addUpdateForm(careId)
        // } else if(e.target.className === "save button") {
        //     let careId = e.target.dataset.id
        //     e.target.className = "update button"
        //     e.target.innerHTML = "Update"
        //     caresAdapter.updatecare(careId)
        // }
        // } else if(e.target.className="give-care") {
        //     let careId = e.target.dataset.id
        //     this.renderNewCareForm(careId)
        // }

     }
    
}