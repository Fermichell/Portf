document.addEventListener('DOMContentLoaded', function() {
    const currencyList = document.getElementById('currency-list');
  
    function fetchCurrencyRates() {
      fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(response => response.json())
        .then(data => {
          currencyList.innerHTML = ''; //Очищаємо список перед оновленням
          data.forEach(currency => {
            const currencyItem = document.createElement('div');
            currencyItem.classList.add('currency-item');
            currencyItem.innerHTML = `<strong>${currency.cc}</strong>: ${currency.rate} ${currency.txt}`;
            currencyList.appendChild(currencyItem);
          });
        })
        .catch(error => console.error('Помилка отримання даних:', error));
    }
  
    //Оновлюємо курс валют кожні 10 секунд
    setInterval(fetchCurrencyRates, 10000);
  
    //Отримуємо курс валют при завантаженні сторінки
    fetchCurrencyRates();
  });
  