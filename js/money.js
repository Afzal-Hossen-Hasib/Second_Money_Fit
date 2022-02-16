// Calculate Button Function 
function calculationTotal () {

    const incomeField = document.getElementById ('income-field');
    const incomeValue = parseFloat (incomeField.value);
    
    const foodField = document.getElementById ('food-field');
    const foodValue = parseFloat (foodField.value);

    const rentField = document.getElementById ('rent-field');
    const rentValue = parseFloat (rentField.value);

    const clotheField = document.getElementById ('clothe-field');
    const clotheValue = parseFloat (clotheField.value);

    const total = incomeValue - (foodValue + rentValue + clotheValue);

    const expenseText = document.getElementById ('total-expense');
    expenseText.innerText = foodValue + rentValue + clotheValue;

    const balanceText = document.getElementById ('total-balance');
    balanceText.innerText = total;

    return total;
}
const calculateButton = document.getElementById ('caculate-button').addEventListener ('click', function () {
    calculationTotal ();

    // calculationTotal ();
    
})