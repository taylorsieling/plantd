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
        let showDiv = document.getElementById(`plant-care-row`)
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
        this.deleteButton.addEventListener('click', this.deleteCareClick)
    }

    deleteCareClick = (e) => {
        // delete care
        console.log('clicked delete care')
        let careId = e.target.dataset.id
        caresAdapter.deleteCare(careId)
    }

}