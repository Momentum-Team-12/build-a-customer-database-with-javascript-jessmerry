console.log(customers)

{/* <div class="person">
<img src=" https://place-puppy.com/300x300 " alt="Sophia Burns">
        <h3>Sophia Burns</h3>
            <div class="attr">
                <div>Email</div> 
                <div>Address</div> 
                <div>DOB:</div> 
                <div>Customer since:</div> 
            </div>
</div>
</div>     */}
// asking the js to build one of these for each customer

const allCustomersDiv = document.querySelector('#allCustomers')

for  (let customer of customers) {
    console.log(`${customer.name.first} ${customer.name.last}`)
    let custDiv = document.createElement('div')
    custDiv.classList.add("person")

    let imgCard = document.createElement('img')
    imgCard.src = `${customer.picture.large}`
    custDiv.appendChild(imgCard)
    allCustomersDiv.appendChild(custDiv)

    let nameEl = document.createElement('h3')
    nameEl.innerText = `${customer.name.first} ${customer.name.last}`
    custDiv.appendChild(nameEl)
    allCustomersDiv.appendChild(custDiv)

    let locationEl = document.createElement('div1')
    locationEl.innerText = `${customer.location.street.number} ${customer.location.street.name}`
    custDiv.appendChild(locationEl)
    allCustomersDiv.appendChild(custDiv)

    let stateEl = document.createElement('div4')
    stateEl.innerText = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    custDiv.appendChild(stateEl)
    allCustomersDiv.appendChild(custDiv)

    let phoneEl = document.createElement('div3')
    phoneEl.innerText = `${customer.phone} ${customer.cell}`
    custDiv.appendChild(phoneEl)
    allCustomersDiv.appendChild(custDiv)

    let birthEl = document.createElement('div2')
    birthEl.innerText = `${customer.dob.date}`
    custDiv.appendChild(birthEl)
    allCustomersDiv.appendChild(custDiv)
}