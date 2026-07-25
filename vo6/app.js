console.log("Hii");

localStorage.clear()

localStorage.setItem("name", "ranil");
localStorage.setItem("name", "wimal");
localStorage.setItem("name1", "kamal");


localStorage.removeItem("name1");

let custName = localStorage.getItem("name");

console.log(custName);
// --------------------------------------------------

localStorage.clear();

let customer = {
    name: "kamal",
    age: 12,
    isActive: true
}

let stringCustomer = JSON.stringify(customer);

localStorage.setItem("customer", stringCustomer);

let retCustomer = localStorage.getItem("customer");

let jsonCustoemr = JSON.parse(retCustomer);

console.log(jsonCustoemr.name);

console.log(customer);

// ---------------------------------------------------

