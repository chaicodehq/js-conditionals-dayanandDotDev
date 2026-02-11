/** 
 * ! npm test -- 08-tax-calculator
 * 💰 Sam's Tax Calculator
 *
 * Sam is a freelance graphic designer who dreads tax season every year.
 * Help Sam by building a tax calculator that uses progressive tax brackets.
 *
 * How progressive tax works:
 *   You don't pay the same rate on ALL your income. Each "slice" of income
 *   is taxed at its own rate:
 *
 *   Bracket 1: $0 – $10,000        → 0%  (tax-free!)
 *   Bracket 2: $10,001 – $30,000   → 10% (only on the amount ABOVE $10,000)
 *   Bracket 3: $30,001 – $70,000   → 20% (only on the amount ABOVE $30,000)
 *   Bracket 4: Over $70,000        → 30% (only on the amount ABOVE $70,000)
 *
 * Examples:
 *   - Income $8,000   → Tax = $0 (all in bracket 1)
 *   - Income $20,000  → Tax = 10% of ($20,000 - $10,000) = $1,000
 *   - Income $50,000  → Tax = $2,000 + 20% of ($50,000 - $30,000) = $6,000
 *   - Income $100,000 → Tax = $2,000 + $8,000 + 30% of ($100,000 - $70,000) = $19,000
 *
 * Rules:
 *   - If income is 0 or negative, return 0
 *
 * @param {number} income - Annual income in dollars
 * @returns {number} Total tax amount owed
 */
export function calculateTax(income) {
  // Your code here
  if (income <= 0 ) {return 0}

  //
  let incomeLeft = income
  let tax = 0
  const thresshold = {
    bracketTwo: {amount: 10_000, rate: .1, sliceTax: 0},
    bracketThree: {amount: 30_000, rate: .2, sliceTax: 2000},
    bracketFour: {amount: 70_000, rate: .3, sliceTax: 10000},
  }

  if (incomeLeft > thresshold.bracketFour.amount) {
    incomeLeft = income - thresshold.bracketFour.amount
    tax = (incomeLeft * thresshold.bracketFour.rate) + thresshold.bracketFour.sliceTax
  } else if (incomeLeft > thresshold.bracketThree.amount) {
    incomeLeft = income - thresshold.bracketThree.amount
    tax = (incomeLeft * thresshold.bracketThree.rate) + thresshold.bracketThree.sliceTax
  } else if (incomeLeft > thresshold.bracketTwo.amount) {
    incomeLeft = income - thresshold.bracketTwo.amount
    tax = (incomeLeft * thresshold.bracketTwo.rate) + thresshold.bracketTwo.sliceTax
  }

  return tax;
}

/* One Way

  if (income <= 0) {return 0}

  let totalTaxOwed = 0.0

  let taxBracket = {
    one: {isAllowed: income <= 10_000, minRange: 0, maxRange: 10_000, tax: 0},
    two: {isAllowed: income > 10_000, minRange: 10_000, maxRange: 30_000, tax: 10/100},
    three: {
      isAllowed: income > 30_000 && income <= 70_000,
      minRange: 30_000, maxRange: 70_000, tax: 20/100
    },
    four: {isAllowed: income > 70_000, minRange: 70_000, maxRange: 0, tax: 30/100},
    sliceTax : {
      forTwo: 0,
      forThree: 2_000,
      forFour: 10_000
    }
  }

  if (taxBracket.four.isAllowed) {
    //
    totalTaxOwed = ((income - taxBracket.four.minRange) * taxBracket.four.tax) + taxBracket.sliceTax.forFour
  } else if (taxBracket.three.isAllowed) {
    //
    totalTaxOwed = ((income - taxBracket.three.minRange) * taxBracket.three.tax) + taxBracket.sliceTax.forThree
  } else if (taxBracket.two.isAllowed) {
    //
    totalTaxOwed = ((income - taxBracket.two.minRange) * taxBracket.two.tax) + taxBracket.sliceTax.forTwo
  }

  //
  return totalTaxOwed

*/