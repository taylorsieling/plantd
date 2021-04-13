class CaresAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/cares'
    };

    fetchCares() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                new Care(el.attributes)
            })
        })
    };

    deleteCare(careId) {

        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    
        fetch(this.baseUrl + `/${careId}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        });

        Care.all = Care.all.filter(c => c.id != careId)

        let care = document.getElementById(`care-${careId}`)
        care.remove()

        console.log("Deleted Successfully!")

    }

    // updateCare(careId) {
    
    //     const care_type = document.getElementById(`update-care-type-${careId}`).value
    //     const date = document.getElementById(`update-date-${careId}`).value
    //     const notes = document.getElementById(`update-notes-${careId}`).value

    //     let itemObj = {
    //         care_type,
    //         date,
    //         notes
    //     }

    //     let configObj = {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(itemObj)
    //     }

    //     fetch(this.baseUrl + `/${careId}`, configObj)
    //     .then(res => res.json())
    //     .then(response => {
    //         let care = Care.all.find(c => c.id == response.data.attributes.id)
    //         care.updateCareOnDom(response.data.attributes)
    //     })
    // }
        

    handleCareFormSubmit = (e) => {
        e.preventDefault()

        const care_type = document.getElementById('care-type').value
        const notes = document.getElementById('care-notes').value
        const date = document.getElementById('care-date').value
        const plant_id = document.getElementById('care-plantId').value

        let newCareObj = {
            care_type,
            notes,
            date,
            plant_id
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
            console.log(response)
            let care = new Care(response.data.attributes.plant_id)
            care.addCaresToDom()
        })

        console.log("Gave some tender loving care!");
        careForm.reset();
        careFormContainer.style.display = 'none';
    }

}


