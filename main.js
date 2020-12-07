let search = document.querySelector('.search');
let char = document.getElementById('char');
let results = document.getElementById('results');
let resultH2 = document.getElementById('result_h2');

// Debounce funkcijos panaudojimas
const debounce = (func, wait) => {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };


// ..........................................................................................................
// Kaip atsispausdinti duomenis is masyvo
// suksime per for 
 for ( let i = 0; i< data.length; i++){
//   pirmaiusia turime susikurti carda i kuri kelsime visus duomenis
 let card = document.createElement('div');
 card.classList.add('card');

// Sukuriame elementa paveikslelemas ir juos sukrauname i style 6 JS budu
 let cardImage = document.createElement('div');
 cardImage.classList.add('card__image');
 cardImage.style.backgroundImage = `url(${ data[i].url})`;

//  surenkame vardus ir juos sukrauname i java script 6 js budu
let cardContent = document.createElement('div');
cardContent.classList.add('card__content');
cardContent = `<h2>${data[i].breeds[0].name}</h2><p>Bred for: ${data[i].breeds[0].bred_for}<br>Breed group: ${data[i].breeds[0].breed_group}</p>`;

 card.appendChild(cardImage);
 card.innerHTML += cardContent
 results.appendChild(card);
 };


// ............................................................................................................
// 2 padaryti, kad veiktu search mygtukas
search.addEventListener('keyup', debounce(function(e){
logika();
}, 1000));


// ....................................................................................................................
// 3 kad musu char mygtukas veiktu ir pasirinkus tam tikra  charakteri ji isfiltravus is masyvo istrauktu duomenis
 char.addEventListener('change', function(){
     logika();
    // let niekoNeranda = 0;
    // data.forEach((item,index) => {
    //     results.children[index].style.display = 'none';
    //     if(item.breeds[0].temperament.toLowerCase().includes(char.value.toLowerCase())){
    //        results.children[index].style.display = 'block';
    //        niekoNeranda++;
    //     };
    // });
    // if(niekoNeranda == 0){
    //     resultH2.style.display = 'block';
    // }else {
    //     resultH2.style.display = 'none';
    // }


 }); 

// ...................................................................................................
// Viska sudedame i funkcija, nes visa tai bus naudojama kelis kartus
function logika(){
    let niekoNeranda = 0;
    data.forEach((item,index) => {
        // paslepsti visus elementus kai veikia forEach metodas kai vedam kazkoki veisles pavadinima
        results.children[index].style.display = 'none';

        // ir kai vedamu duomenu i inputa  sutampa su esanciais masyve 
        if(item.breeds[0].name.toLowerCase().includes(search.value.toLowerCase()) && item.breeds[0].temperament.toLowerCase().includes(char.value.toLowerCase())){
            // graziname blokus
           results.children[index].style.display = 'block';
           niekoNeranda++;
        };
 

    });
//  susikuriame nauja kintamaji ir kai eis per forEacha jis skaiciuos,
//   jei neranda pagal paieska kintamasis lieka 0 ir pasirodo nera rezultatu blokas, o jei randa 
//   tada kintamasis virsta i none;
    if(niekoNeranda == 0){
        resultH2.style.display = 'block';
    }else {
        resultH2.style.display = 'none';
    }

}