const plantList = document.getElementById('plant-list')

function fetchPlants() {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(data)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPlants()
})