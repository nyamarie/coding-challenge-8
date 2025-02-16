// Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Task 2: Function Expression
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

// Task 3: Arrow Function
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
    let serviceFee = amount * feeRate;
    return `Service Fee: $${serviceFee.toFixed(2)}`;
};

// Task 4: Parameters and Arguments
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = carType === "Economy" ? 40 : carType === "Standard" ? 60 : 100;
    let totalCost = (dailyRate * days) + (insurance ? days * 20 : 0);
    return `Total Rental Cost: $${totalCost}`;
}

// Task 5: Returning Values
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}

// Task 6: Higher-Order Functions
const filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};

// Task 7: Closures
function createCartTracker() {
    let total = 0;
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}


// Task 8: Recursion in JavaScript
function calculateSavings(years, amount) {
    if (years >= 10) return `Projected Savings: $${amount.toFixed(2)}`;
    return calculateSavings(years + 1, amount * 1.05);
}
