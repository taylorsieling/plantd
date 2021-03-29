// Contain Plant Class

class Plant {

    static all = []
    
    constructor(species, nickname, description, pot, id) {
        this.species = species
        this.nickname = nickname
        this.description = description
        this.pot = pot
        this.id = id

        this.element = document.createElement('div')
        this.element.id = `plant-${this.id}`

        Plant.all.push(this)
    }
}