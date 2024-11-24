import { getCountryFlag } from './flags.js';
const url = 'https://countriesnow.space/api/v0.1/countries/population';

async function getPopulationData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error('Error fetching data:', data.msg);
            return [];
        }

        return data.data.map(country => {
            const population2018 = country.populationCounts.find(pop => pop.year === 2018);
            return {
                country: country.country,
                population: population2018 ? population2018.value : 'Data not available'
            };
        });
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

async function generatePopulationTable() {
    const populationData = await getPopulationData();
    if (!Array.isArray(populationData)) {
        console.error('Expected populationData to be an array, but got:', typeof populationData);
        return;
    }
    const tableBody = document.querySelector('#population-table tbody');

    for (let i = 46; i < populationData.length; i++) {
        const country = populationData[i];
        tableBody.innerHTML += `
            <tr>
            <td><img src="${getCountryFlag(country.country)}" alt="Flag of ${country.country}" class="flag"></td>
            <td>${country.country}</td>
            <td>${country.population}</td>
            </tr>`;
    }
}

function filterTable() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const tableRows = document.querySelectorAll('#population-table tbody tr');

    tableRows.forEach(row => {
        const countryCell = row.querySelector('td:nth-child(2)');
        const countryName = countryCell.textContent.toLowerCase();
        if (countryName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

document.getElementById('search-bar').addEventListener('input', filterTable);

generatePopulationTable();
