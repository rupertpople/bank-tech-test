# Bank Tech Test #

## Project Description ##
This programme allows users to create a bank account, make transactions and print their bank statement.

Created by [Rupert Pople](https://github.com/rupertpople).
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
1. **Identified 3 classes to work with; BankAccount, Transaction and Statement.**  
    1. **BankAccount():**
      * Constructs with accountHistory = [] and balance = 0.
      * 3 accessible methods - deposit(amount), withdraw(amount) and printStatement().
    2. **Transaction(amount):**
      * Constructs with amount as input.
      * Has the purpose of storing the amount transacted and the date of transaction in an object.
    3. **Statement([{transaction data}]):**
      * Constructs from the BankAccount.accountHistory array of objects containing transaction data as an input.
      * Has the purpose of formatting the transaction history as specified.

2. **The Transaction class is called when the BankAccount class uses the deposit or withdraw method with the given amount**
    1. The amount is directly passed into to the Transaction class:
     * BankAccount.deposit(500) => new Transaction(500)
     * BankAccount.withdraw(500) => new Transaction(500)
    2. The amount and formatted date 'DD/MM/YYYY' is returned as an object using the Transaction.info() method.

3. **When deposit or withdraw methods are used, a private method is called (depending on what type of transaction it is) that implements a few steps:**
    1. Extracts the key information from the Transaction class to a variable.
    2. Adds the type(withdrawal or deposit) and current balance to this object.
    3. Adds this information as an object to the BankAccount.accountHistory array.

4. **The BankAccount.printStatement() has two parts; call a new Statement class which formats the statement and then output this to the console.**
    1. The Statement class is contructed with the BankAccount.accountHistory as an input.
    2. Next the Statement.printStatement() method is called, which creates a new variable that takes the output of a private method.
    3. This private method maps a new array which formats each object into a string to match the specified criteria.
    4. A string: **'date || credit || debit || balance'** is pushed to the end of the array, which will be the header.
    5. Finally, the array is reversed to get each line in the right order, with the header at the top, followed by the latest transactions.
    6. The second line of the BankAccount.printStatement uses .join('\r\n') on this mapped array to connect each string with line breaks to get the desired format.

  5. **Notes about testing.**
    * The MockDate npm package allows the date to mocked, in order to avoid retesting leading to failues. This was especially important for the last test where the date is changed between each deposit and withdrawal.
    * In order order to get the desired output for the BankAccount.printStatement() method, console.log was used in place of return. As a result the test runs BankAccount.printStatement() and then checks the last object called on the console.log, in place of using toEqual to view the output of the method directly.





