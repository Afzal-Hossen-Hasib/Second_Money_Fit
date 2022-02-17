// All Input Function 
function inputFieldValue (inputExpenseId) {
	const inputField = document.getElementById (inputExpenseId);
	const inputText = parseFloat (inputField.value);
	inputField.value = '';
	return inputText;
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
		
		if (incomeValue < 0 || isNaN (incomeValue)) {
			incomeErrorMessage.style.display = 'inline-block';
		}

		else if (foodExpenseValue < 0 || isNaN (foodExpenseValue)) {
			foodErrorMessage.style.display = 'inline-block';
		}

		else if (rentExpenseValue < 0 || isNaN (rentExpenseValue)) {
			rentErrorMessage.style.display = 'inline-block';
		}

		else if (clotheExpenseValue < 0 || isNaN (clotheExpenseValue)) {
			coltheErrorMessage.style.display = 'inline-block';
		}
		
		else {

			//  Total Expense Update 
		 	const expenseTotalText = inputFeildText ('total-expense');
			const incomeFeildText = document.getElementById ('total-balance');

				const expenseTotal = foodExpenseValue + rentExpenseValue + clotheExpenseValue;
				expenseTotalText.innerText = expenseTotal;
				
				incomeErrorMessage.style.display = 'none';
			 	foodErrorMessage.style.display = 'none';
			 	rentErrorMessage.style.display = 'none';
			 	coltheErrorMessage.style.display = 'none';

				// Total Balance Update 
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

		const totalIncomeText = inputFeildText ('total-balance');
		const totalIncomeValue = parseFloat (totalIncomeText.innerText);
		const savingParcent = document.getElementById ('save-parcent');

		// Saveparcent Update 
		const saveParcent = inputFieldValue ('save-input');
		const remainigBalanceText = document.getElementById ('remaining-balance');

		if (saveParcent <= 100 && saveParcent > 0) {
			let savingAmount = totalIncomeValue*saveParcent / 100;
			savingParcent.innerText = savingAmount;
		
			// Remaining Balance Update 
			remainigBalanceText.innerText =  totalIncomeValue - savingAmount; 
		}

		else {

			if (isNaN (saveParcent)) {
				savingParcent.innerText = 'Please Enter A Poitive Value';
			}
		
			else {
				savingParcent.innerText = 'Your Saving Amount must Be Less Than Your Total Amount';
			}
			
			remainigBalanceText.innerText = totalIncomeValue;
		}
	 })
