/** 
 * npm test -- 07-coffee-shop  
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1 //* DONE
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1 
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  let finalPrice = 0.00
  let cofeeBasePrice = {
    "small": 3.00,
    "medium": 4.00,
    "large": 5.00
  }
  let coffeePriceByType = {
    "regular": 0.00,
    "latte"  : 1.00,
    "cappuccino": 1.50,
    "mocha": 2.00
  }
  let coffeeExtra = {
    "whippedCream": 0.50, 
    "extraShot": 0.75
  }
  
  //? To calculate cofee price by size
  switch (size) {
    case "small":
      finalPrice = finalPrice + cofeeBasePrice.small
      break;
    case "medium":
      finalPrice = finalPrice + cofeeBasePrice.medium
      break;
    case "large":
      finalPrice = finalPrice + cofeeBasePrice.large
      break;
    default:
      return -1;
  }

  //? Add-on coffee type
  switch (type) {
    case "regular":
      finalPrice = finalPrice + coffeePriceByType.regular
      break;
    case "latte":
      finalPrice = finalPrice + coffeePriceByType.latte
      break;
    case "cappuccino":
      finalPrice = coffeePriceByType.cappuccino +finalPrice
      break;
    case "mocha":
      finalPrice = finalPrice + coffeePriceByType.mocha
      break;
    default:
      return - 1;
  }

  //? Optional
  if (extras.whippedCream) {
    finalPrice = finalPrice + coffeeExtra.whippedCream
  }

  finalPrice = (extras.extraShot) ? (finalPrice + coffeeExtra.extraShot) : finalPrice

  //? Return

  return finalPrice

}
