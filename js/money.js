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
	return valueText;
}

		// Total Expenses And Total Income Update 
const calculateButton = document.getElementById ('caculate-button').addEventListener ('click', function () {
	    
		const foodExpenseValue = inputFieldValue ('food-field');
		const rentExpenseValue = inputFieldValue ('rent-field');
		const clotheExpenseValue = inputFieldValue ('clothe-field');
		const incomeValue = inputFieldValue ('income-field');

		const incomeErrorMessage = inputFeildText ('income-error');
		const foodErrorMessage = inputFeildText ('food-error');
		const rentErrorMessage = inputFeildText ('rent-error');
		const coltheErrorMessage = inputFeildText ('clothe-error');


		if (incomeValue < 0) {
			incomeErrorMessage.style.display = 'inline-block';
		}

		else if (foodExpenseValue < 0) {
			foodErrorMessage.style.display = 'inline-block';
		}

		else if (rentExpenseValue < 0) {
			rentErrorMessage.style.display = 'inline-block';
		}

		else if (clotheExpenseValue < 0) {
			coltheErrorMessage.style.display = 'inline-block';
		}
		
		else {
			//  Total Expense Update 
		 	const expenseTotalText = inputFeildText ('total-expense');
			 const incomeFeildText = document.getElementById ('total-balance');

			 const expense = parseFloat (expenseTotalText)

				const expenseTotal = foodExpenseValue + rentExpenseValue + clotheExpenseValue;
				expenseTotalText.innerText = expenseTotal;
				
				incomeErrorMessage.style.display = 'none';
			 	foodErrorMessage.style.display = 'none';
			 	rentErrorMessage.style.display = 'none';
			 	coltheErrorMessage.style.display = 'none';

			if (incomeValue > expenseTotal) {
				incomeFeildText.innerText = incomeValue - expenseTotal;
			}

			else {
				expenseTotalText.innerText = 'Your Expense Should Be Less Than Your Income';
			
			}
		}
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
