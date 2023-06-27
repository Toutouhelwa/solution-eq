//ex1  calcule moyenne
// afficher les notes
const notes = [10,15,20,14, 5];
function afficher (){
    for(let i = 0; i<notes.length;i++) {
        console.log(notes[i])
    }
}
afficher()
// function min 
function min (){
    let min = notes[0]
    for(let i=0;i< notes.length;i++){
        if (notes[i]<min){
            min = notes[i]
        }
    }
    console.log(`the minimum is ${min}`)
}
min()
// the maximum function 
function max (){
    let max = notes[0]
    for(let i=0;i< notes.length;i++){
        if (notes[i]> max){
            max = notes[i]
        }
    }
    console.log(`the minimum is ${max}`)
}
max()
// notes elli lezm taawedhom fi controle 
function controle(){
    let ch = "hedhom elli bech taawedhom"
    for(let i=0; i<notes.length;i++){
        if (notes[i]< 10) {
            ch+= " "+notes[i] + ","
            
        }

    }
    console.log(ch)
}
controle();
// reverse mohsen ex2
let  nameTOreverse  = "mohsen";
function reverse (){
    let ch = ""
    for (let i = 0;i<nameTOreverse.length;i++){
        ch = nameTOreverse[i]+ch
    }
    console.log(ch)
}
reverse()
// function to calculate the solutions of second degree function 
const result = document.getElementById("result");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let textA = document.getElementById("textA");
let textB = document.getElementById("textB");
let textC =  document.getElementById("textC");
const ParentA = document.getElementById("aboutA");
const ParentB = document.getElementById("aboutB");
const ParentC = document.getElementById("aboutC")
function solution() {
    const result = document.getElementById("result");
    let varB = b.value 
    let varA =  a.value
    let =varC = b.value
    let delta  = varB*varB- (4*varA*varC)
    console.log(delta)
    if (delta > 0 ){
        x1 = (- varB + Math.sqrt(delta))/2*varA
        x2 = (-varB- Math.sqrt(delta))/2*varA
        if(x1 === x2) {
            result.innerHTML = `double solution :  ${x1}`;
        }else{
            result.innerHTML = `les solution sont:  ${x1} , ${x2}`;

        }


    }else if (delta < 0){
        result.innerHTML = "pas de solution"
    }
    

}
// change fucntion 
function change(){
    if(a.value === "0"){
        ParentA.style.display = "none";
    }else{
        textA.innerHTML = a.value
        ParentA.style.display = "inline";
    }
    if(b.value ==="0") {
        ParentB.style.display = "none"
    }else{
        textB.innerHTML = b.value
        ParentB.style.display = "inline"

    }
    if (c.value === "0") {
        ParentC.parentNode.removeChild(ParentC);
    }else{
        textC.innerHTML = c.value

    }
}


