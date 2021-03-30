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

    handleCareFormSubmit = (e) => {
        e.preventDefault()

        const careType = document.querySelector('input[name="care-type"]:checked').value
        const careNotes = document.getElementById('cares-notes').value
        const careDate = document.getElementById('care-date').value

        let newCareObj = {

        }
    }

}


