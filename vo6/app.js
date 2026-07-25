console.log("Hii");

// localStorage.clear()

// localStorage.setItem("name","ranil");
// localStorage.setItem("name","wimal");
// localStorage.setItem("name1","kamal");


// localStorage.removeItem("name1");

// let custName = localStorage.getItem("name");

// console.log(custName);
// --------------------------------------------------

// localStorage.clear();

// let customer ={
//     name:"kamal",
//     age:12,
//     isActive:true
// }

// let stringCustomer = JSON.stringify(customer);

// localStorage.setItem("customer",stringCustomer);

// let retCustomer = localStorage.getItem("customer");

// let jsonCustoemr = JSON.parse(retCustomer);

// console.log(jsonCustoemr.name);

// console.log(customer);

// ---------------------------------------------------

const customerList = JSON.parse(localStorage.getItem("customerList"));

function btnAddCustomerOnAction() {
    //  let customerList = JSON.parse(localStorage.getItem("customerList"));
    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }
    console.log(customer);

    customerList.push(customer);

    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();

    // alert("add customer")
}

function btnSearchByIdOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customer = customerList.find(customer => {
        return customer.id === document.getElementById("txtCustomerId").value
    });


    document.getElementById("txtCustomerName").value = customer.name;
    document.getElementById("txtCustomerAge").value = customer.age;
    document.getElementById("txtCustomerAddress").value = customer.address;


    // alert("search customer")
}

function btnDeleteByIdOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customerId = document.getElementById("txtCustomerId").value;

    let index = customerList.findIndex(customer => {
        return customer.id === customerId;
    })

    customerList.splice(index, 1);

    localStorage.setItem("customerList", JSON.stringify(customerList));

    console.log(customerList);
}


function btnUpdateByIdOnAction() {
    alert("update customer");
}

function btnClearStorageOnAction() {
    localStorage.clear();
}

function btnLoadTableOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let body = `
      <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
        </tr>
    `;
    customerList.forEach(element => {
        body += `
                <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.address}</td>
        </tr>
        `
    });

    document.getElementById("tblCustomer").innerHTML = body;

    console.log(body);


}