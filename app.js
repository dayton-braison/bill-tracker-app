class Bill {
    constructor(billName, amount, dueDate) {
        this.billName = billName
        this.amount = amount
        this.dueDate = dueDate
    }
}

class UI {
    // Add bill to list
    addBillToList(bill) {
        const list = document.getElementById('bill-list')

        //create table row element
        const row = document.createElement('tr')

        // insert columns
        row.innerHTML = `
        <td>${bill.billName}</td>
        <td>${bill.amount}</td>
        <td>${bill.dueDate}</td>
        <td><a href="#" class="paid-off">✔️<a></td>
        `
        list.appendChild(row)
    }

    // Clear input fields after adding bill
    clearInputFields() {
        document.getElementById('bill-name').value = ''
        document.getElementById('amount').value = ''
        document.getElementById('due-date').value = ''
    }

    // Pay a bill
    paidBill(target) {
        if(target.className === 'paid-off') {
            let strikeThru = target.parentElement.parentElement
            strikeThru.style.setProperty('text-decoration', 'line-through')
            strikeThru.style.color = 'red'
        }
    }

}

// Event listener for add book
document.getElementById('bill-form').addEventListener('submit', function(e) {
    // get form values
    const billName = document.getElementById('bill-name').value
    const amount = document.getElementById('amount').value
    const dueDate = document.getElementById('due-date').value

    // Instantiate book
    const bill = new Bill(billName, amount, dueDate)

    // Instantiate UI
    const ui = new UI()

    // add bill to list
    ui.addBillToList(bill)

    // Clear input fields
    ui.clearInputFields()

    e.preventDefault()
})

// Event listener for bill paid off
document.getElementById('bill-list').addEventListener('click', function(e) {
    const ui = new UI()
    
    // Pay off bill
    ui.paidBill(e.target)

    e.preventDefault()
})