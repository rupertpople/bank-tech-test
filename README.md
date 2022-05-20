# Bank Tech Test #

## Project Description ##
To create a programme that allows users to deposit funds, withdraw funds and view a detailed balance.

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
[Node.js](https://nodejs.org/en/)
[Jest](https://jestjs.io/)
[MockDate](https://www.npmjs.com/package/mockdate)

## How to Install and Run ##
### 1. Install NPM ###
  1. Install Node Version Manager (NVM) using [Homebrew](https://brew.sh/):
    `brew install nvm`
    Then follow the instructions to update your ~/.bash_profile.
  2. Open a new terminal
  3. Install the latest version of [Node.js](https://nodejs.org/en/), currently 18.1.0:
    `nvm install 18.1.0`

### 2. Install dependencies ###
1. Install dependencies:
  `npm install`

## How to Use the Software ##
1. Load the file in Node.js:
  `node`
  `.load bankAccount.js`
2. Create an account:
  `const bankAccount = new BankAccount`
3. Deposit and withdraw by entering the amount:
  `bankAccount.deposit(500)`
  `bankAccount.withdraw(200)`
4. View account balance:
  `bankAccount.balance`
5. Print bank statement:
  `bankAccount.printStatement();`






