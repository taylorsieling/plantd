const plantsAdapter = new PlantsAdapter
const caresAdapter = new CaresAdapter

const plantForm = document.getElementById('plant-form')
const plantFormContainer = document.getElementById('plant-form-container')
const plantFormBtn = document.getElementById('new-plant-form-btn')
const viewCare = document.getElementsByClassName('view-care button')

document.addEventListener('DOMContentLoaded', () => {
    plantsAdapter.fetchPlants()
    caresAdapter.fetchCares()
    plantForm.addEventListener('submit', plantsAdapter.handlePlantFormSubmit)
}) 