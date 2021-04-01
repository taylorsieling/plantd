const plantsAdapter = new PlantsAdapter
const caresAdapter = new CaresAdapter

// const plantList = document.getElementById('plant-list')
const plantForm = document.getElementById('plant-form')


document.addEventListener('DOMContentLoaded', () => {
    plantsAdapter.fetchPlants()
    caresAdapter.fetchCares()
    plantForm.addEventListener('submit', plantsAdapter.handlePlantFormSubmit)
}) 