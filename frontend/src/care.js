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
        this.careList.append(this.careFullRender())
        this.addEventListeners()
    }

    careFullRender() {
        this.element.innerHTML = `
            
        `
    }
}