import './style.scss'
// keep the line above and write your code below.
// for typescript unknown bugs roght after the annoying line  {// @ts-ignore}


const exchangeRateEndpoint = 'https://currency-ror1.vercel.app/api/currency';
const datesCurrenciesArrayEndpoint = 'https://currency-ror1.vercel.app/api/dates-table';

const currencyCodes = {
  USD: '01',
  EUR: '27',
  GBP: '02',
  CAD: '06',
  AUD: '18',
  GPY: '31',
};

/**
 * Use these strings in the form select (drop-down) -
 * you can copy-paste into the HTML
 * and/or use them programmatically
 */

const currencyNames = [
  'USD (United States Dollar)',
  'EUR (Euro)',
  'GBP (Great Britain Pound)',
  'CAD (Canadian Dollar)',
  'AUD (Australian Dollar)',
  'GPY (Japanese Yen)'
];

window.addEventListener('DOMContentLoaded', (event) => {
  attachListeners();
  populateTable()
  return populateTable();
});


function attachListeners() {
  const currencyConverterForm = document.getElementById('currency-converter-form');
  currencyConverterForm.onsubmit = getExchangeRateFromForm;
}



/**
 * Complete the function below to get the exchange rate from the API
 */

async function getExchangeRateFromApi(dateCode: string, currencyCode: string) {
    const response = await fetch(`https://currency-ror1.vercel.app/api/currency?rdate=${dateCode}&curr=${currencyCode}`);
    const data = await response.json()
    const rate = data.CURRENCIES.CURRENCY.RATE
    return String(rate)
    

}


/**
 * Complete the function below to get the data from the form,
 * send it to the API, present the result, and show/hide the spinner.
 * The two event methods prevent the form submission from reloading the page.
 */

async function getExchangeRateFromForm(event) {
  event.preventDefault();
  event.stopPropagation();
//   create a func to add spinner
//   take the form values
//   call getExchangeRateFromApi with values
//   the result div.innerHTML = return data from getExchangeRateFromApi
//  remove the spinner probably would have made a function and give a condition on the innerHTML
// if inner typeof(Number) call spinner remover


}

/**
 * Complete the function below to get the array of dates and currencies,
 * create table rows, get the exchange rates from the API,
 * present the results, and show/hide the spinner
 */

async function populateTable() {

    async function getData() {
        /*function to get the array of objects */
        const response = await fetch('https://currency-ror1.vercel.app/api/dates-table');
        const data = await response.json();
        console.log(data)
    }
    const objArr = await getData()

    for (const obIdx in objArr) {
        const obj = objArr[obIdx]
        const date = obj.date;
        const curr = obj.currency;
        const rate = getExchangeRateFromApi(date, curr)
        createTableRow(date, curr, rate)
    }

    function createTableRow(date: string, currency:string, exchange:number) {
        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerHTML = date;
        td2.innerHTML = currency;
        td3.innerHTML = exchange.toString();
            
        }

    


  return null;
}