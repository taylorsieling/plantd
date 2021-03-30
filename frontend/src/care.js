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
        this.element.className = "care"

        this.careDiv = document.getElementById(`plant-${this.plant_id}-care`)

        Care.all.push(this)
    }

    addEventListeners() {
        this.element.addEventListener('click', this.handleListClick)
    }

    addCaresToDom() {
        this.careDiv.append(this.careFullRender())
        this.addEventListeners()
    }

    careFullRender() {
        
        this.element.innerHTML = `
            <li>
            <span class="care-type">${this.care_type}</span><br>
            <span class="care-type">${this.date}</span><br>
            <span class="care-type">${this.notes}</span>
            </li>
            <button class="delete "data-id="${this.id}">Delete</button>
            <button class="update "data-id="${this.id}">Update</button>
            <br><br>
        `
        return this.element
    }
    
}