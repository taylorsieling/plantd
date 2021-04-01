class CaresAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/cares'
    }

    fetchCares() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let care = new Care(el.attributes)
                Care.all.push(care)
            })
        })
    }

    handleCareFormSubmit = (e) => {
        e.preventDefault()

        const careType = document.querySelector('input[name="care-type"]:checked').value
        const careNotes = document.getElementById('cares-notes').value
        const careDate = document.getElementById('care-date').value
        const carePlantId = document.getElementById('')

        let newCareObj = {
            careType,
            careNotes,
            careDate,
            carePlantId

        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            body: JSON.stringify(newCareObj)
        }

        fetch(this.baseUrl, configObj)
        .then(res => res.json())
        .then(response => {
            let care = new Care(response.data.attributes)
            care.addCareToDom()
        })
        
    }

}


