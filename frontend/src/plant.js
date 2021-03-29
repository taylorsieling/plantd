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
        this.plantList.append(this.plantFullRender)
    }
    
    plantFullRender(plant) {
        plantList.innerHTML += `
            <div id="plant-${plant.id}">
                <li> <span class="nickname"><strong>${plant.attributes.nickname}</strong></span> <br>
                    <span class="species"> Species: ${plant.attributes.species}</span><br>
                    <span class="description"> Description: ${plant.attributes.description}</span><br>
                    <span class="description"> Current Planter: ${plant.attributes.pot}</span>
                </li>
                <button class="update" data-id="${plant.id}">Update</button> 
                <button class="delete" data-id="${plant.id}">Delete</button> 
            </div>`
    }
}