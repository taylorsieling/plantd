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

    get deleteButton() {
        return document.getElementById(`delete-care-${this.id}`)
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
                    <button class="delete-care button" id="delete-care-${this.id}" data-id="${this.id}">Delete</button>
                <div>
            </div>
        `
        let careDiv = document.createElement('div')
        careDiv.className = `care-${this.id}`
        careDiv.id = `care-${this.id}`
        careDiv.innerHTML = careInfo
        showDiv.append(careDiv)
    }

    addEventListeners() {
        this.deleteButton.addEventListener('click', this.handleButtonClick)
    }

    handleButtonClick = (e) => {
        // delete care
            console.log('clicked delete care')
            let careId = e.target.dataset.id
            caresAdapter.deleteCare(careId)
        // update care
        // } else if (e.target.className === "update-care button") {
        //     console.log('clicked update care')
        //     let careId = e.target.dataset.id
        //     e.target.className = "save-care button"
        //     e.target.innerHTML = "Save"
        //     this.addUpdateCareForm(careId)
         // save updated care
        // } else if (e.target.className === "save-care button") {
        //     let careId = e.target.dataset.id
        //     e.target.className = "update-care button"
        //     e.target.innerHTML = "Update"
        //     caresAdapter.updateCare(careId)
        
    }

    // renderUpdatedCare() {
    //     let careInfo = document.getElementById(`care-${this.id}-info`)
    //     careInfo.innerHTML = `
    //             <h2>${this.care_type}</h2>
    //             <p>
    //                 ${this.notes}<br><br>
    //                 <strong>Date:</strong> ${this.date}
    //             </p>
    //     `
    //     let careFormDiv = document.getElementById(`care-update-form-${this.id}`)
    //     if (careFormDiv.style.display === 'none') {
    //         careFormDiv.style.display = 'block';
    //     } else if (careFormDiv.style.display = 'block') {
    //         careFormDiv.reset()
    //         careFormDiv.style.display = 'none';
    //     }
    // }

    // updateCareOnDom({care_type, date, notes}) {
    //     this.care_type = care_type
    //     this.date = date
    //     this.notes = notes
    //     this.renderUpdatedCare()
    // }

    // addUpdateCareForm(id) {
    //     let care = document.getElementById(`care-card-${id}`)
    //     let updateCareForm = `
    //         <input type="text" value="${this.care_type}" name="care-type" id="update-care-type-${id}">
    //         <input type="text" value="${this.date}" name="date" id="update-date-${id}">
    //         <input type="text" value="${this.notes}" name="notes" id="update-notes-${id}">
    //     `
    //     let careFormDiv = document.createElement('div')
    //     careFormDiv.id = `care-update-form-${id}`
    //     careFormDiv.className = 'care-update-form'
    //     careFormDiv.innerHTML = updateCareForm
    //     care.append(careFormDiv)

    //     let saveButton = document.getElementsByClassName('update-care button')
    //     saveButton.className = 'save-button button'
    //     saveButton.innerHTML = 'Save'
    // }
    

}