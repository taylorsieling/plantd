class Care {

    static all = []

    constructor({care_type, notes, date, id, plant_id}) {
        this.care_type = care_type
        this.notes = notes
        this.date = date
        this.id = id
        this.plant_id = plant_id
        
        this.element = document.createElement('div')
        this.element.id = `care-${this.id}`

        Care.all.push(this)
    }

    addEventListeners() {
        this.element.addEventListener('click', this.handleListClick)
    }

    addCaresToDom() {
        let careContainer = document.createElement('div')
        this.careContainer.id = `care-container-${this.plant_id}`
        let plantCareDiv = document.getElementById(`plant-card-${this.plant_id}`).appendChild(careContainer)
        this.plantCareDiv.append(this.careFullRender())
        this.addEventListeners()
    }

    careFullRender() {
        
        this.element.innerHTML = `
            <li>
            <span class="care-type">${this.care_type}</span>
            <span class="care-type">${this.care_date}</span>
            <span class="care-type">${this.care_notes}</span>
            </li>
            <button class='delete" data-id="${this.id}">Delete</button>
            <button class='update" data-id="${this.id}">Update</button>
        `
        return this.element
    }
}