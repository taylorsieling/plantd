// Contain Plant Class

class Plant {

    static all = []

    constructor({species, nickname, description, pot, id}) {
        this.species = species
        this.nickname = nickname
        this.description = description
        this.pot = pot
        this.id = id

        this.element = document.createElement('div')
        this.element.id = `plant-${this.id}`

        Plant.all.push(this)
    }

    get plantList() {
        return document.getElementById('plant-list')
    }

    addPlantsToDOM() {
        this.plantList.append(this.plantFullRender())
    }
    
    plantFullRender() {
        this.element.innerHTML = `
            <li> 
                <span class="nickname"><strong>${this.nickname}</strong></span> <br>
                <span class="species"> Species: ${this.species}</span><br>
                <span class="description"> Description: ${this.description}</span><br>
                <span class="description"> Current Planter: ${this.pot}</span>
            </li>
            <button class="update" data-id="${this.id}">Update</button> 
            <button class="delete" data-id="${this.id}">Delete</button> 
        `

        return this.element
    }
}