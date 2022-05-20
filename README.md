# Bank Tech Test #

## Project Description ##
This programme allows users to deposit funds and withdraw funds, and view a detailed balance.

Created by [Rupert Pople](https://github.com/rupertpople)
### Features ###
* Users can create an account.
* Users can deposit into their account.
* Users can withdraw from their accont.
* Users can print a bank statement that includes:
  * Date of action.
  * The amount deposited or withdrawn.
  * The balance.

### Technologies Used ###
* [Node.js](https://nodejs.org/en/) for runtime Javascript.
* [Jest](https://jestjs.io/) for testing.
* [MockDate](https://www.npmjs.com/package/mockdate) for mocking dates.

## How to Install and Run ##
### 1. Install NPM ###
 1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### 2. Install dependencies ###
1. Install dependencies:  
  ```
  npm install
  ```
## How to Use the Software ##
1. Load the file in Node.js:  
  ```
  node 
  .load bankAccount.js
  ```

2. Create an account:  
  ```
  const bankAccount = new BankAccount
  ```  

3. Deposit and withdraw by entering the amount:  
  ```
  bankAccount.deposit(500); 
  bankAccount.withdraw(200);
  ```
  
4. Print bank statement:  
  ```
  bankAccount.printStatement();
  ```  

## Coding strategy ##
1. **I identified 3 classes to work with; BankAccount, Deposit and Withdrawal.**  
    * BankAccount - constructs with accountHistory = [] and balance = 0.
    * Deposit - receives the amount as an argument.
    * Withdrawal - receives the amount as an argument.

2. **The Deposit and Withdrawal classes are created when using the BankAccount.deposit() and BankAccount.withdrawal(). They are designed to store basic information:**
    * Type of action; 'Deposit' or 'Withdrawal'.
    * The amount, which is given as an input when using BankAccount.deposit(eg.500) and BankAccount.withdraw(eg.500).
    * The date in the format 'DD/MM/YYYY'.  

3. **When these methods are called, a private method is called (depending on whether it is a deposit or withdrawal) that implements a few steps:**
    * Extracts the key information from the Deposit or Withdrawal class.
    * Adds the current balance to this information.
    * Adds this information as an object to the BankAccount.accountHistory.  

4. **The BankAccount.printStatement() has two parts:**
    * The first is to create a variable that saves the data returned from a private method.
    * This private method formats the BankAccount.accountHistory. 
    * It achieves the specified structure by mapping a new array. This new array contains multiple strings, each being a line displaying a transaction. 
    * The header of the staement **'date || credit || debit || balance'** is pushed to the back of the array.
    * Finally, the array is reversed to get each line in the right order, with the header at the top, followed by the latest transactions.
    * The second line of the printStatement uses .join('\r\n') on this mapped array to connect each string with line breaks to get the desired format.

  5. **The MockDate npm package allows the date to mocked, in order to avoid retesting leading to failues. This was especially important for the last test where the date is changed between each deposit and withdrawal.**





