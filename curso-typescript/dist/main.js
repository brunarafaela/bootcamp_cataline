"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1 String, Number & Boolean
var message = 'Ola bruna';
message.toUpperCase();
console.log(message);
var total;
total = 10.5;
console.log(total);
var isOpen;
isOpen = true;
console.log(isOpen);
//2 Any, void, never
var stock = 89;
stock = null;
var strock;
strock = undefined;
function showInformation(name) {
    if (name === void 0) { name = "Bruna"; }
    console.log(name);
}
function error() {
    throw new Error('error');
}
//3 Array, Tuple & Enum
var items;
items = [1, 2, 3, 4, 5];
var itens;
itens = [1, 'bruna', false];
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
var white = Colors.white;
console.log(white);
//4 Type Union
var age;
age = 20;
age = 'vinte';
function showPet(pet) {
    console.log(pet);
}
showPet('cat');
function displayPet(pet) {
    console.log(pet);
}
displayPet('dog');
//6 Type Inference
var mensagem = 'Cataline';
// window.addEventListener('click', (event) => {
//   console.log(event.target)
// })
//7 Type Assertion
// const inputName = document.querySelector('#name') as HTMLInputElement
// inputName.value 
var calculator_js_1 = require("./calculator.js");
console.log((0, calculator_js_1.sum)(5, 5));
//Dependencias
var axios_1 = __importDefault(require("axios"));
axios_1.default.get('/todos', {});
var simplebar_1 = __importDefault(require("simplebar"));
var content = document.querySelector('#content');
var simplebar = new simplebar_1.default(content, { autoHide: true });
var onscreen = require('onscreen');
//Decorator 
