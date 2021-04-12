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

    updateCare(careId) {
    
        const care_type = document.getElementById(`update-care-type-${careId}`).value
        const date = document.getElementById(`update-date-${careId}`).value
        const notes = document.getElementById(`update-notes-${careId}`).value

        let itemObj = {
            care_type,
            date,
            notes
        }

        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(itemObj)
        }

        fetch(this.baseUrl + `/${careId}`, configObj)
        .then(res => res.json())
        .then(response => {
            let care = Care.all.find(c => c.id == response.data.attributes.id)
            care.updateCareOnDom(response.data.attributes)
        })

        console.log("Care Updated!")
    }

    deleteCare(id) {

        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    
        fetch(this.baseUrl + `/${id}`, configObj)
        .then(res => res.json())
        .then(response => {
            alert(response.message)
        });

        // remove plant from all array and remove plant div from DOM

        // let plant = document.getElementById(`card-${id}`);
        // let plantDiv = document.getElementById(`plant-${id}`);
        // let findIndex = Plant.all.findIndex(p => p.id == plant.dataset.id)
        // Plant.all.splice(findIndex, 1)
        // plantDiv.remove();

        // re-render plant index
        // let plants = Plant.all
        // plants.forEach(p => {
        //     console.log(p)
        //     p.addPlantsToDom();
        // });
 
        console.log("Deleted Successfully!")
    }

    // handleCareFormSubmit = (e) => {
    //     e.preventDefault()

    //     const careType = document.querySelector('input[name="care-type"]:checked').value
    //     const careNotes = document.getElementById('cares-notes').value
    //     const careDate = document.getElementById('care-date').value
    //     const carePlantId = document.getElementById('')

    //     let newCareObj = {
    //         careType,
    //         careNotes,
    //         careDate,
    //         carePlantId

    //     }

    //     let configObj = {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },

    //         body: JSON.stringify(newCareObj)
    //     }

    //     fetch(this.baseUrl, configObj)
    //     .then(res => res.json())
    //     .then(response => {
    //         let care = new Care(response.data.attributes)
    //         care.addCareToDom()
    //     })
    

}


