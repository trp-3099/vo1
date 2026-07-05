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

// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20

//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 200
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300
//         }
//     ],
//     father: {
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[2].name);
// console.log(customer2.father.name);

// DOM (Document Object Model) Manipulation -----------------------------------------------

// document.write("<h2>Hello, World! 02</h2>");

// console.log(document.title);


// let heading = document.getElementById("heading");

// // heading.innerText = "Sharada";

// // console.log(heading.);
// let number = 0;
// function increaseValue() {
//     heading.innerText = "Sharada"+(++number);
//     console.log("Clicked");

// }

// function decreaseValue() {
//     heading.innerText = "Sharada"+(--number);
// }


// function changeHeading() {

//     let txtInput = document.getElementById("inputText");

//     let userInput = txtInput.value;

//     console.log(userInput);

//     let heading = document.getElementById("heading");

//     heading.innerText = userInput;


// }

// function btnSumOnAction() {
//     let input01 = document.getElementById("txtInput01").value;
//     let input02 = document.getElementById("txtInput02").value;

//     let sum = parseInt(input01)+parseInt(input02);
//     // let sum = Number(input01)+Number(input02);

//     document.getElementById("heading").innerText="SUM : "+sum



//     console.log(input01);
//     console.log(input02);
//     console.log(sum);

// }

let customerList = [];

function btnAddCustomerOnAction() {
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    let customer = {
        name: txtName,
        address: txtAddress,
        age: txtAge,
        email: txtEmail,
        salary: txtSalary
    }

    customerList.push(customer);
    loadTable();

    console.log(customerList);

}

function loadTable() {
    let tblCustomers = document.getElementById("tblCustomers");

    let body = "";

    for (let i = 0; i < customerList.length; i++) {
        body += `<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`;
    }

    tblCustomers.innerHTML = body;

    console.log(tblCustomers);

}