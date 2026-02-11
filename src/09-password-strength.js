/**
 * ! npm test -- 09-password-strength
 * 
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  const passwordStrength = {
    type: {
    "0-1 criteria": "weak",
    "2-3 criteria": "medium",
    "4 criteria": "strong",
    "All 5": "very strong"
    },
    criteriaLetter: "abcdefghijklmnopqrstuvwxyz".split(""),
    criteriaNumber: "1234567890".split(""),
    criteriaSpecialCharacter: "!@#$%^&*()_+-=[]{}|;:,.<>?".split("")
  }
  // 
  if (!password) return passwordStrength.type["0-1 criteria"]
  if (typeof password !== "string") return passwordStrength.type["0-1 criteria"]

  //? criteria checker
  let evaluateCriteriaPoints = 0

  //? 1. At least 8 characters long
  if (password.length >= 8) evaluateCriteriaPoints++;

  //? 2. Contains at least one uppercase letter (A-Z)
  let array = passwordStrength.criteriaLetter
  for (let index = 0, length = array.length; index < length; index++) {
    if ( password.includes( array[index].toUpperCase() ) ) {
      evaluateCriteriaPoints++;
      break;
    }
  }

  //? 3. Contains at least one lowercase letter (a-z)
  // array = passwordStrength.criteriaLetter
  for (let index = 0, length = array.length; index < length; index++) {
    if ( password.includes( array[index] ) ) {
      evaluateCriteriaPoints++;
      break;
    }
  }

  //? 4. Contains at least one number (0-9)
  array = passwordStrength.criteriaNumber
  for (let index = 0, length = array.length; index < length; index++) {
    if ( password.includes( array[index] ) ) {
      evaluateCriteriaPoints++;
      break;
    }
  }

  //? 5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
  array = passwordStrength.criteriaSpecialCharacter
  for (let index = 0, length = array.length; index < length; index++) {
    if ( password.includes( array[index] ) ) {
      evaluateCriteriaPoints++;
      break;
    }
  }

  //? Return
  switch (evaluateCriteriaPoints) {
    case 5:
      return passwordStrength.type["All 5"]
    case 4:
      return passwordStrength.type["4 criteria"]
    case 3:
      return passwordStrength.type["2-3 criteria"]
    case 2:
      return passwordStrength.type["2-3 criteria"]
  }
  return passwordStrength.type["0-1 criteria"]
}
