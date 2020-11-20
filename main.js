// helloMessage = ('Занзибара');
// window.alert('Hello');
//---------------------------------------------
// var helloMessageId;
// var helloMessageElement;


// helloMessageId = 'hello-message';
// helloMessageElement = document. getElementById (helloMessageId);

// window.alert(helloMessageElement.value);
//---------------------------------------------


//ОБЪЯВИЛИ ПЕРЕМЕННЫЕ


function alertFirstnameElVAlues() {
    
}

function alertLastnameElVAlues() {
    
}






var firstnameId = 'first-Name';
var firstnameEl = document.getElementById(firstnameId);
console.log(firstnameEl.value);
console.log(firstnameEl.className);

// КАК ПРИМЕР. ОБЬЯВИТЬ ППЕРЕМЕННУЮ И ПРИСВОИТЬ ЗНАЧЕНИЕ МОЖНО В 2 СТРОКИ
// var firstnameId = 'first-Name';
// var firstnameEl = document.getElementById (firstnameId);

var lastnameId = 'last-Name';
var lastnameEl = document.getElementById(lastnameId);
console.log(lastnameEl.value);
console.log(lastnameEl.className);

var adressId = 'adress';
var adressEl = document.getElementById(adressId);
console.log(adressEl.value);
console.log(adressEl.className);

var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
console.log(citiesEl.value);
console.log(citiesEl.className);

var hobbyId = 'hobby';
var hobbyEl = document.getElementById(hobbyId);
console.log(hobbyEl.value);
console.log(hobbyEl.className);


// ЭТО DIV- У НЕГО НЕТ ПАРАМЕТРА VALUE- ОН СВОЕГО РОДА КОНТЕЙНЕР
// var imgCatId = 'cat';
// var imgCatEl = document.getElementById(imgCatId);
// console.log(imgCatEl.value);


// ЭТО ССЫЛКА
// var catPhotoId = 'catPhoto';
// var catPhotoEl = document. getElementById(catPhotoId);
// console.log(catPhotoEl.value);


//ПРИСВОИЛИ ID
// firstnameId = 'first-Name';
// lastnameId = 'last-Name';
// adressId = 'adress';
// citiesId = 'cities';
// hobbyId = 'hobby';
// imgCatId = 'cat';
// catPhotoId = 'catPhoto';




//ПРИСВОИЛИ EL
// firstnameEl = document.getElementById(firstnameId);
// lastnameEl = document.getElementById(lastnameId);
// adressEl = document.getElementById(adressId);
// citiesEl = document.getElementById(citiesId);
// hobbyEl = document.getElementById(hobbyId);
// imgCatEl = document.getElementById(imgCatId);
// catPhotoEl = document.getElementById(catPhotoId);


// ВЫВЕЛИ НА ЭКРАН СООБЩЕНИЕ
// window.alert(firstnameEl.value);
// window.alert(lastnameEl.value);
// window.alert(adressEl.value);
// window.alert(citiesEl.value);
// window.alert(hobbyEl.value);
// window.alert(imgCatEl.innerHTML);
// window.alert(catPhotoEl.innerHTML);
// window.alert(catPhotoEl.src);


//ИЗМНЕНИЕ ДАННЫХ С ПОМОЩЬЮ JS НЕТРОГАЯ HTML


firstnameEl.value = 'Андрей';
console.log(firstnameEl.value);
console.log(firstnameEl.className);



lastnameEl.className = 'last-Name default-input error-input';
console.log(lastnameEl.value);
console.log(lastnameEl.className);


lastnameEl.title = 'Wrong last name';
console.log(lastnameEl.value);
console.log(lastnameEl.className);


firstnameEl.className = 'new-class';
console.log(firstnameEl.value);
console.log(firstnameEl.className);



catPhoto.src = 'https://vplate.ru/images/article/orig/2019/04/interesnye-fakty-o-koshkah-i-kotah-40.jpg';

// ПРИ НАВЕДЕНИИ НА КАРТИНКУ ПОЯВЛЯЕТСЯ НАДПИСЬ:
catPhoto.title = 'Котики они же такие милые';



//---------------------------------------------------------------------------------------------------------------

//ФУНКЦИИ-набор команд находящихся в ней, + имеет значение когда её вызывать и куда вставлять азвание функции
//в данный момент это "allertvalue"


//определение функции
// function allertvalue() {

//     window.alert(1);
//     window.alert(2);
//     window.alert(3);

// }
// вызвать данную функцию
// allertvalue();
//
