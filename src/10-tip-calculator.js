/**
 * ! npm test -- 10-tip-calculator
 * 
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  if (billAmount <= 0) return null;
  
  switch (serviceRating) {
    case 1:
      return {tipPercentage: 5, tipAmount: billAmount * (5/100), totalAmount: billAmount + ( billAmount * 5/100 )};
    case 2:
      return {tipPercentage: 10, tipAmount: billAmount * (10/100), totalAmount: billAmount + ( billAmount * 10/100 )};
    case 3:
      return {tipPercentage: 15, tipAmount: billAmount * (15/100), totalAmount: billAmount + ( billAmount * 15/100 )};
    case 4:
      return {tipPercentage: 20, tipAmount: billAmount * (20/100), totalAmount: billAmount + ( billAmount * 20/100 )};
    case 5:
      return {tipPercentage: 25, tipAmount: billAmount * (25/100), totalAmount: billAmount + ( billAmount * 25/100 )};
    default:
      return null;
  }
}
