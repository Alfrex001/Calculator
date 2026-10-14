
let solutions = ""

let btn = document.querySelector('.button-js')

let container= document.querySelector('.container1-js')


container.innerHTML=solutions

function calcufun(p) {
solutions = solutions + p
container.innerHTML=solutions

}



function evalfun() {
 solutions = eval(solutions)
container.innerHTML=solutions

}




function clearfun() {
    
solutions = "";
container.innerHTML=0
console.log (solutions)
}

