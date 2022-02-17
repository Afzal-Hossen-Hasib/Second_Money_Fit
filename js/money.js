// All Input Function 
function inputFieldValue (inputExpenseId) {
	const expenseField = document.getElementById (inputExpenseId);
	const expenseText = parseFloat (expenseField.value);
	expenseField.value = '';
	return expenseText;
}

// All Text Function 
function inputFeildText (inputText) {
	const valueText = document.getElementById (inputText);
	// const amountText = valueText.innerText;
	return valueText;
}

		// Total Expenses And Total Income Update 
const calculateButton = document.getElementById ('caculate-button').addEventListener ('click', function () {
	    
		const foodExpenseValue = inputFieldValue ('food-field');
		const rentExpenseValue = inputFieldValue ('rent-field');
		const clotheExpenseValue = inputFieldValue ('clothe-field');

		// Total Expense Update 
		let expenseTotalText = inputFeildText ('total-expense');
		expenseTotalText.innerText = foodExpenseValue + rentExpenseValue + clotheExpenseValue;
		
		// Total Balance Update 
		const incomeValue = inputFieldValue ('income-field');
		const incomeFeildText = document.getElementById ('total-balance');
		incomeFeildText.innerText = incomeValue - (foodExpenseValue + rentExpenseValue + clotheExpenseValue);

	 })

	 	// Savaing Amount And Remaing Balance Update 
const saveButton = document.getElementById ('save-button').addEventListener ('click', function () {

		const totalIncomeText = document.getElementById ('total-balance');
		const totalIncomeValue = parseFloat (totalIncomeText.innerText);

		// Saveparcent Update 
		const saveParcent = inputFieldValue ('save-input');
		let savingAmount = totalIncomeValue*saveParcent / 100;
		const savingParcent = document.getElementById ('save-parcent');
		savingParcent.innerText = savingAmount;
		
		// Remaining Balance Update 
		const remainigBalanceText = document.getElementById ('remaining-balance');
		remainigBalanceText.innerText =  totalIncomeValue - savingAmount; 

	 })
