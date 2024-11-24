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
            const population2018 = country.populationCounts.find(pop => pop.year === 2018);//chose 2018 as the year to display as it is the most recent year in the data
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
    if (!Array.isArray(populationData)) {//makes sure that the data is an array, was added during development to fish out possible errors I was experiencing
        console.error('Expected populationData to be an array, but got:', typeof populationData);
        return;
    }
    const tableBody = document.querySelector('#population-table tbody');

    for (let i = 46; i < populationData.length; i++) {//starts at 46 as when the data is fetched the first 45 entries are not countries but rather a mix of regions and demographics
        const country = populationData[i];
        tableBody.innerHTML += `
            <tr>
            <td><img src="${getCountryFlag(country.country)}" alt="Flag of ${country.country}" class="flag"></td>
            <td>${country.country}</td>
            <td>${country.population}</td>
            </tr>`;
    }//this is supposed to show an image of the countries flag in question however I was unable to get the images to show correctly
}

function filterTable() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase(); //sets the search to lowercase to prevent case sensitivity issues
    const tableRows = document.querySelectorAll('#population-table tbody tr');

    tableRows.forEach(row => {
        const countryCell = row.querySelector('td:nth-child(2)'); //searches the second column of the table
        const countryName = countryCell.textContent.toLowerCase(); //sets to lowercase to prevent case sensitivity issues
        if (countryName.includes(searchTerm)) { //if the country's name has relevance to the search term then it will display the row
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

document.getElementById('search-bar').addEventListener('input', filterTable); 

generatePopulationTable();
