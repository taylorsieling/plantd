const plantList = document.getElementById('plant-list')
const plantForm = document.getElementById('plant-form')
const plantsAdapter = new PlantsAdapter


document.addEventListener('DOMContentLoaded', () => {
    plantsAdapter.fetchPlants()
    plantForm.addEventListener('submit', plantsAdapter.handleCreatePlantSubmit)
    plantList.addEventListener('click', plantsAdapter.handleListClick)
})