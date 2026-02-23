let container = document.querySelector(".container");

let img = document.createElement('img');
img.src = 'gear-spinner.png';
img.classList.add('loader');
img.alt = 'loader';

let h2 = document.createElement('h2');
h2.classList.add('loaderMessage');
h2.innerText = "Loading Beer...";

let message = document.createElement('div');
message.setAttribute('style', 'display: contents;')

container.append(img);
container.append(h2);

// async функция вызывающая promise как результат своей работы:
async function load(){
    try {
        let response = await fetch ('https://punkapi.online/v3/beers/random');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const { image, name, description  } = data;
        
        console.log({ data });
        //return `<img style='height: 400px; width: auto;' src="https://punkapi.online/v3/images/${image}" alt="${name}">`;
        return `<img class="beerImg" src="https://punkapi.online/v3/images/${image}" alt="${name}">
                <h5>${name}</h5>
                <p>${description}</p>`;
        
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

// await останавливает выполнение кода до выполнения промиса, работает внутри async функции:
setTimeout(async () => {
    try {
        //let r = new WWWWww(); // потенциально опасный код
        // let result = await load();
        // container.append(message);

        const beer_html = await load();
        message.innerHTML = beer_html;
        //container.append(message);

    } catch (error) {
        // console.log(error.message);
        message.innerText = error.message;
        // container.append(message);
    } finally {
        container.append(message);
        document.querySelector(".loader").remove();
        document.querySelector(".loaderMessage").remove();
    }
}, 1000);

// TODO: add "Next One / Next Beer / Skip" button (?)


// let promise = new Promise(function(resolve, reject){
//     let time = 7;
    
//     setTimeout(() => {
//         if(time == 5){
//             resolve(`Время выполнения операции внутри промиса ${time} секунд`);
//         } else {
//             let error = new Error ("Время не соответствует заданному");
//             reject(error);
//         }   
//     }, 5000);
// });

// function load(){
//     return new Promise(function(resolve, reject){
//         let time = 7;
        
//         setTimeout(() => {
//             if(time == 5){
//                 resolve(`Время выполнения операции внутри промиса ${time} секунд`);
//             } else {
//                 let error = new Error ("Время не соответствует заданному");
//                 reject(error);
//             }   
//         }, 5000);
//     });
// }

// setTimeout(() => {
//     load().then((result) =>{
//         message.innerText = result;
//         container.append(message);
    
//         console.log(message);
//         // let h2 = `<h2> Wait 5 seconds </h2>`;
//     }).catch((error) => {
//         message.innerText = error.message;
//         container.append(message);
//         console.log(error.message);
//     }).finally(() => {
//         document.querySelector(".loader").remove();
//     });
// }, 5000);

// let promise = load();

//обработчик положительного результата:
// load().then((result) =>{
//     message.innerText = result;
//     container.append(message);

//     console.log(message);
//     // let h2 = `<h2> Wait 5 seconds </h2>`;
// }).catch((error) => {
//     message.innerText = error.message;
//     container.append(message);
//     console.log(error.message);
// }).finally(() => {
//     document.querySelector(".loader").remove();
// });

// async function rand(){
//     return Math.random();
// }

// //console.log(rand());
// rand().then((result) => {console.log(result)});