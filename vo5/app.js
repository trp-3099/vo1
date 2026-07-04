console.log("Hii");

// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(name){
//         this.name = name;
//     }
// }

// let customer1 = new Customer("Sharadha", 20, "Bangalore");
// console.log(customer1);
// console.log(customer1.getName());

// ---------------------------------------------

// document.write("<h2>Hello, World! 02</h2>");

console.log(document.title);
// console.log(document.title);


let heading = document.getElementById("heading");
// let heading = document.getElementById("heading");

// heading.innerText = "Sharada";
// // heading.innerText = "Sharada";

// console.log(heading.);
let number = 0;
function increaseValue() {
    heading.innerText = "Sharada" + (++number);
    console.log("Clicked");
    // // console.log(heading.);
    // let number = 0;
    // function increaseValue() {
    //     heading.innerText = "Sharada"+(++number);
    //     console.log("Clicked");

}
// }

function decreaseValue() {
    heading.innerText = "Sharada" + (--number);
}
// function decreaseValue() {
//     heading.innerText = "Sharada"+(--number);
// }


function changeHeading() {

    let txtInput = document.getElementById("inputText");

    let userInput = txtInput.value;

    console.log(userInput);

    let heading = document.getElementById("heading");

    heading.innerText = userInput;


}