const plantList = document.getElementById('plant-list')
const careList = document.getElementById('care-list')
const plantForm = document.getElementById('plant-form')
// const plantTabs = document.getElementById('plant-tab-buttons')
const plantsAdapter = new PlantsAdapter
const caresAdapter = new CaresAdapter


document.addEventListener('DOMContentLoaded', () => {
    plantsAdapter.fetchPlants()
    caresAdapter.fetchCares()
    plantForm.addEventListener('submit', plantsAdapter.handlePlantFormSubmit)
    plantList.addEventListener('click', plantsAdapter.handleListClick)
}) 