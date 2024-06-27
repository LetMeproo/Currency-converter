let input = document.querySelector("input");
let result = document.createElement('p')

input.oninput= function(){
    result.innerHTML = `${input.value} USD  = ${(input.value * 48.05).toFixed(2)}  EGP ` // Api 
    document.body.appendChild(result) 
}