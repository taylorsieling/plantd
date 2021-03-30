class CaresAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/cares'
    }

    fetchCares() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let care = new care(el.attributes)
                care.addCaresToDom(el)
            })
        })
    }
}

