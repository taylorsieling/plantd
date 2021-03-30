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
            <button class="delete button" data-id="${this.id}">Delete</button>
            <button class="update button" data-id="${this.id}">Update</button>
            <br><br>
        `
        return this.element
    }

    renderNewCareForm() {
        let careForm = `
            <input type="hidden" id="care-plantId" value="${this.id}">
    
            <label for="care-type">Care Type:</label><br><br>
            <input type="radio" name="care-type" id="watering" value="watering">

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

            <input type="submit" value="Tend to Plant!">
        `
        let div = document.getElementById(`plant-${this.id}-care-form`)
        this.div.innerHTML = careForm
    }
    
}