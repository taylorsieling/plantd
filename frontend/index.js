const plantsAdapter = new PlantsAdapter
const caresAdapter = new CaresAdapter

const plantForm = document.getElementById('plant-form')
const plantFormContainer = document.getElementById('plant-form-container')
const plantFormBtn = document.getElementById('new-plant-form-btn')
const searchSubmit = document.getElementById('search-submit')
const careForm = document.getElementById('care-form')
const careFormContainer = document.getElementById('care-form-container');

document.addEventListener('DOMContentLoaded', () => {
    plantsAdapter.fetchPlants()
    caresAdapter.fetchCares()
    plantForm.addEventListener('submit', plantsAdapter.handlePlantFormSubmit)
}) 