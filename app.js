console.log("Hii");

class customer {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    let customer1 = new customer("John Doe", 30, "123 Main St");
console.log(customer1);

let customer2 = {
    name: "Jane Smith",
    age: 25,
    address: "456 Elm St"

}
console.log(customer2);