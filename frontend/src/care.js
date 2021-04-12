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

        this.plantShow = document.getElementById('plant-show')

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
        let showDiv = document.getElementById(`plant-care`)
        let careInfo = `
            <div class="care-card" id="care-card-${this.id}">
                <div id="care-${this.id}-info">
                    <h2>${this.care_type}</h2>
                    <p>
                        ${this.notes}<br><br>
                        <strong>Date:</strong> ${this.date}
                    </p>
                </div>
                <div id="care-buttons">
                    <button class="update-care button" name="update-care-${this.id}" data-id="${this.id}">Update</button>
                    <button class="delete-care button" name="delete-care-${this.id}" data-id="${this.id}">Delete</button>
                <div>
            </div>
        `
        let careDiv = document.createElement('div')
        careDiv.className = `care-${this.id}`
        careDiv.id = `care-${this.id}`
        careDiv.innerHTML = careInfo
        showDiv.append(careDiv)
    }

    renderUpdatedCare() {
        let careInfo = document.getElementById(`care-${this.id}-info`)
        careInfo.innerHTML = `
                <h2>${this.care_type}</h2>
                <p>
                    ${this.notes}<br><br>
                    <strong>Date:</strong> ${this.date}
                </p>
        `
        let careFormDiv = document.getElementById(`care-update-form-${this.id}`)
        if (careFormDiv.style.display === 'none') {
            careFormDiv.style.display = 'block';
        } else if (careFormDiv.style.display = 'block') {
            careFormDiv.reset()
            careFormDiv.style.display = 'none';
        }
    }

    updateCareOnDom({care_type, date, notes}) {
        this.care_type = care_type
        this.date = date
        this.notes = notes
        this.renderUpdatedCare()
    }

    addUpdateCareForm(id) {
        let care = document.getElementById(`care-card-${id}`)
        let updateCareForm = `
            <input type="text" value="${this.care_type}" name="care-type" id="update-care-type-${id}">
            <input type="text" value="${this.date}" name="date" id="update-date-${id}">
            <input type="text" value="${this.notes}" name="notes" id="update-notes-${id}">
        `
        let careFormDiv = document.createElement('div')
        careFormDiv.id = `care-update-form-${id}`
        careFormDiv.className = 'care-update-form'
        careFormDiv.innerHTML = updateCareForm
        care.append(careFormDiv)

        let saveButton = document.getElementsByClassName('update-care button')
        saveButton.className = 'save-button button'
        saveButton.innerHTML = 'Save'
    }
    

    addEventListeners() {
        this.careButtons.addEventListener('click', this.handleButtonClick)
    }

    handleButtonClick = (e) => {
        // delete care
        if (e.target.className === "delete-care button") {
            console.log('clicked delete care')
            let id = e.target.dataset.id
            caresAdapter.deleteCare(id)
        // update care
        } else if (e.target.className === "update-care button") {
            console.log('clicked update care')
            let careId = e.target.dataset.id
            e.target.className = "save-care button"
            e.target.innerHTML = "Save"
            this.addUpdateCareForm(careId)
         // save updated care
        } else if (e.target.className === "save-care button") {
            let careId = e.target.dataset.id
            e.target.className = "update-care button"
            e.target.innerHTML = "Update"
            caresAdapter.updateCare(careId)
        }
    }

    renderNewCareForm() {
        let careForm = `

            <form id="care-form">

            <label for="care">Care Type:</label><br>
            <input type="text" name="care-type" id="care-type">

            <label for="care-notes">Notes:</label>
            <input type="text" name="care-notes" id="care-notes"><br><br>

            <label for="care-date">Date:</label>
            <input type="date" name="care-date" id="care-date"><br><br>

            <input type="hidden" id="care-plantId" value="${this.id}">

            <input type="submit" value="Tend to Plant!">

            </form>
        `
        let formDiv = document.createElement('div')
        formDiv.id = "care-form"
        formDiv.className = 'new-care-form'
        formDiv.innerHTML = careForm
        plantShow.append(formDiv)
    }

    
}