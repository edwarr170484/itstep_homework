// let myHeaders = new Headers();
// myHeaders.append("apikey", "SomeApiKey");

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
//   };

// fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,RUB,BYN", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result));

const usdInput = document.getElementById("usdInput");
const eurInput = document.getElementById("eurInput");
const bynInput = document.getElementById("bynInput");
const rubInput = document.getElementById("rubInput");
const cnyInput = document.getElementById("cnyInput");

function setDefaultValue() {
    const usdValue = 1;
    const eurValue = currencyExchange.USD.EUR * usdValue;
    const bynValue = currencyExchange.USD.BYN * usdValue;
    const rubValue = currencyExchange.USD.RUB * usdValue;
    const cnyValue = currencyExchange.USD.CNY * usdValue;

    console.log({ usdValue, eurValue, bynValue, rubValue, cnyValue});

    usdInput.value = usdValue.toFixed(2);
    eurInput.value = eurValue.toFixed(2);
    bynInput.value = bynValue.toFixed(2);
    rubInput.value = rubValue.toFixed(2);
    cnyInput.value = cnyValue.toFixed(2);
}	

const currencyExchange = {
  USD: {
    EUR: 0.8583,
    BYN: 2.895,
    RUB: 77.51,
    CNY: 6.8929
  },
  BYN: {
    USD: 0.3454,
    EUR: 0.2965,
    RUB: 26.7763,
    CNY: 2.381
  },
  EUR: {
    USD: 1.1651,
    BYN: 3.373,
    RUB: 90.3079,
    CNY: 8.031
  },
  RUB: {
    USD: 0.0129,
    EUR: 0.0111,
    BYN: 0.0374,
    CNY: 0.0889
  },
  CNY: {
    USD: 0.1451,
    EUR: 0.1245,
    BYN: 0.42,
    RUB: 11.245
  }
}

usdInput.addEventListener('keyup', (event) => {
    const usdValue = Number(usdInput.value);
    const eurValue = currencyExchange.USD.EUR * usdValue;
    const bynValue = currencyExchange.USD.BYN * usdValue;
    const rubValue = currencyExchange.USD.RUB * usdValue;
    const cnyValue = currencyExchange.USD.CNY * usdValue;

    console.log({ key: event.key, usdValue, eurValue, bynValue, rubValue, cnyValue});

    eurInput.value = eurValue.toFixed(2);
    bynInput.value = bynValue.toFixed(2);
    rubInput.value = rubValue.toFixed(2);
    cnyInput.value = cnyValue.toFixed(2);
});

eurInput.addEventListener('keyup', (event) => {
    const eurValue = Number(eurInput.value);
    const usdValue = currencyExchange.EUR.USD * eurValue;
    const bynValue = currencyExchange.EUR.BYN * eurValue;
    const rubValue = currencyExchange.EUR.RUB * eurValue;
    const cnyValue = currencyExchange.EUR.CNY * eurValue;

    console.log({ key: event.key, usdValue, eurValue, bynValue, rubValue, cnyValue });

    usdInput.value = usdValue.toFixed(2);
    bynInput.value = bynValue.toFixed(2);
    rubInput.value = rubValue.toFixed(2);
    cnyInput.value = cnyValue.toFixed(2);
});

bynInput.addEventListener('keyup', (event) => {
    const bynValue = Number(bynInput.value); 
    const usdValue = currencyExchange.BYN.USD * bynValue;
    const eurValue = currencyExchange.BYN.EUR * bynValue;
    const rubValue = currencyExchange.BYN.RUB * bynValue;
    const cnyValue = currencyExchange.BYN.CNY * bynValue;

    console.log({ key: event.key, usdValue, eurValue, bynValue, rubValue, cnyValue });

    usdInput.value = usdValue.toFixed(2);
    eurInput.value = eurValue.toFixed(2);
    rubInput.value = rubValue.toFixed(2);
    cnyInput.value = cnyValue.toFixed(2);
});

rubInput.addEventListener('keyup', (event) => {
    const rubValue = Number(rubInput.value); 
    const usdValue = currencyExchange.RUB.USD * rubValue;
    const eurValue = currencyExchange.RUB.EUR * rubValue;
    const bynValue = currencyExchange.RUB.BYN * rubValue;
    const cnyValue = currencyExchange.RUB.CNY * rubValue;

    console.log({ key: event.key, usdValue, eurValue, bynValue, rubValue, cnyValue });

    usdInput.value = usdValue.toFixed(2);
    eurInput.value = eurValue.toFixed(2);
    bynInput.value = bynValue.toFixed(2);
    cnyInput.value = cnyValue.toFixed(2);
});

cnyInput.addEventListener('keyup', (event) => {
    const cnyValue = Number(cnyInput.value); 
    const usdValue = currencyExchange.CNY.USD * cnyValue;
    const eurValue = currencyExchange.CNY.EUR * cnyValue;
    const bynValue = currencyExchange.CNY.BYN * cnyValue;
    const rubValue = currencyExchange.CNY.RUB * cnyValue;

    console.log({ key: event.key, usdValue, eurValue, bynValue, rubValue, cnyValue });

    usdInput.value = usdValue.toFixed(2);
    eurInput.value = eurValue.toFixed(2);
    bynInput.value = bynValue.toFixed(2);
    rubInput.value = rubValue.toFixed(2);
});

window.onload = function(){
    setDefaultValue();
};