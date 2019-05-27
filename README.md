# SelfCare Vending Machine (TDD) 🕯

Coding mock interview question:

<!-- -->

The goal of this project was to create full vending machine functionalities (without interface) with TDD practices. The vending machine must have the follwing features:

- Print inventory
- Refill product
- Refill coins
- Dispense inventory based on the payment
- Return change (dispensing the fewest number of coins possible when returning change)

<!-- -->

## Screenshots

<!-- -->

Screenshot of tests:
![ScreenShot]()

<!-- -->

Screenshot of Inventory:
![ScreenShot]()

<!-- -->
<!-- -->

## Tests

The following tests were run to check the performance of the class methods.

- Successful inventory Print
- Successful cash refill
- Customer did not pay enough
- Customer pays exact amount
- Out of Stock item selected
- Customer selects an item that's no longer in inventory
- Enough change in machine
  - Inventory amount reduced
- Not enough change in machine
  - Inventory amount should stay the same
- Successful item refill
  - Successful item refill, check quantity for any product

## Dependencies

[Jest](https://jestjs.io/) for testing

## Installation

To run this project, `clone` or `download` this repository to your machine.
Then run the following commads in your terminal:

```bash
npm install
```

```bash
npm test
```

## Author

**Nancy Chu**

**LinkedIn:** [Nancy Aubrey Chu](https://www.linkedin.com/in/chunancy/)
