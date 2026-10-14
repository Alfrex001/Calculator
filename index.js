
let solutions = "" || localStorage.getItem('calculations')

let btn = document.querySelector('.button-js')

let container= document.querySelector('.container1-js')


container.innerHTML=solutions

function calcufun(p) {
solutions = solutions + p
localStorage.setItem('calculations', solutions)
container.innerHTML=solutions

}



function evalfun() {
 solutions = eval(solutions)
 localStorage.setItem('calculations', solutions)
container.innerHTML=solutions

}




function clearfun() {
    
solutions = "";
localStorage.setItem('calculations', solutions)
container.innerHTML=0
console.log (solutions)
}



console.log(localStorage.getItem("calculations"))

