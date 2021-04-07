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

    get careButtons() {
        return document.getElementById("care-buttons")
    }

    addCaresToDom() {
        this.careFullRender();
        this.addEventListeners();
    }

    careFullRender() {
        let plant = document.getElementById(`plant-${this.plant_id}-panel`)

        let care = `
            <div id="care-${this.id}">
                <div id="care-info">
                <p class="label"><strong>${this.care_type}</strong></p>
                <p>
                    <strong>Date:</strong> ${this.date}<br>
                    <strong>Notes:</strong> ${this.notes}
                </p><br>
                </div>
                <div id="care-buttons">
                    <button class="update-care button" name="update-care" data-id="${this.id}">Update</button>
                    <button class="delete-care button" name="delete-care" data-id="${this.id}">Delete</button>
                <div>
            </div>
            <br><br>
        `
        let careDiv = document.createElement('div')
        careDiv.id = `plant-${this.plant_id}-care`
        careDiv.innerHTML = care
        plant.append(careDiv)
    }

    updateCareOnDom({care_type, date, notes}) {
        this.care_type = care_type
        this.date = date
        this.notes = notes
        this.careFullRender()
    }

    addEventListeners() {
        this.careButtons.addEventListener('click', this.handleButtonClick)
    }

    handleButtonClick = (e) => {
        if (e.target.className === "update-care button") {
            console.log('clicked update care')
            let id = e.target.dataset.id
            e.target.className = "save-care button"
            e.target.innerHTML = "Save"
            this.addUpdateForm(id)
        } else if(e.target.className === "delete-care button") {
            console.log('clicked delete care')
            let id = e.target.dataset.id
            caresAdapter.deleteCare(id)
        }
    }


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