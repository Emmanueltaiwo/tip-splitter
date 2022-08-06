let employeesNo = document.getElementById("employees-no")
let amount = document.getElementById("amount")
let currency = document.getElementById("currency")
let splitBtn = document.getElementById("split-btn")
let result = document.getElementById("result")


splitBtn.addEventListener("click", function() {
    result.textContent = "Each Employees takes " + amount.value / employeesNo.value + " " + currency.value
})