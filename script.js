// Масив для зберігання автомобілів
const cars = [];

// Функція для додавання автомобіля до таблиці
function addCarToTable(car) {
    const tableBody = document.getElementById('carTableBody');
    const row = document.createElement('tr');

    Object.keys(car).forEach(key => {
        const cell = document.createElement('td');
        cell.textContent = car[key];
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
}

// Функція для оновлення таблиці за результатами пошуку
function updateTable(filteredCars) {
    const tableBody = document.getElementById('carTableBody');
    tableBody.innerHTML = '';

    filteredCars.forEach(car => {
        addCarToTable(car);
    });
}

// Обробка подання форми
document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const car = {
        make: document.getElementById('carMake').value,
        model: document.getElementById('carModel').value,
        year: document.getElementById('carYear').value,
        color: document.getElementById('carColor').value
    };

    cars.push(car);
    updateTable(cars);

    // Очищення форми
    document.getElementById('carForm').reset();
});

// Пошук автомобілів
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredCars = cars.filter(car => 
        car.make.toLowerCase().includes(query) || 
        car.model.toLowerCase().includes(query)
    );
    updateTable(filteredCars);
});
