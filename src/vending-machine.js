class VendingMachine {
  constructor(inventory, cash) {
    this.inventory = inventory;
    this.cash = cash;
    this.invFullQuantity = 15;
    this.coinFullQuantity = 20;
  }

  printInv() {
    console.log(this.inventory);
    return this.inventory;
  }

  dispenseInv(product, payment) {
    if (this.inventory[product].quantity < 1) {
      throw new Error("Out of stock");
    }
    if (this.inventory[product].price > payment) {
      throw new Error("Not enough money");
    }
    if (this.inventory[product].price === payment) {
      this.inventory[product].quantity--;
      return `Enjoy your ${product}!`;
    }
    if (this.inventory[product].price < payment) {
      return `Enjoy your ${product}!`;
      //dispense change function here
    }
  }

  // // Create an object which hold the denominations and their values
  // var denom = [
  //     { name: 'ONE HUNDRED', val: 100.00},
  //     { name: 'TWENTY', val: 20.00},
  //     { name: 'TEN', val: 10.00},
  //     { name: 'FIVE', val: 5.00},
  //     { name: 'ONE', val: 1.00},
  //     { name: 'QUARTER', val: 0.25},
  //     { name: 'DIME', val: 0.10},
  //     { name: 'NICKEL', val: 0.05},
  //     { name: 'PENNY', val: 0.01}
  //   ];

  //   function checkCashRegister(price, cash, cid) {
  //     var change = cash - price;

  //     // Transform CID array into drawer object
  //     var register = cid.reduce(function(acc, curr) {
  //       acc.total += curr[1];
  //       acc[curr[0]] = curr[1];
  //       return acc;
  //     }, {total: 0});

  //     // Handle exact change
  //     if (register.total === change) {
  //       return 'Closed';
  //     }

  //     // Handle obvious insufficent funds
  //     if (register.total < change) {
  //       return 'Insufficient Funds';
  //     }

  //     // Loop through the denomination array
  //     var change_arr = denom.reduce(function(acc, curr) {
  //       var value = 0;
  //       // While there is still money of this type in the drawer
  //       // And while the denomination is larger than the change reminaing
  //       while (register[curr.name] > 0 && change >= curr.val) {
  //         change -= curr.val;
  //         register[curr.name] -= curr.val;
  //         value += curr.val;

  //         // Round change to the nearest hundreth deals with precision errors
  //         change = Math.round(change * 100) / 100;
  //       }
  //       // Add this denomination to the output only if any was used.
  //       if (value > 0) {
  //           acc.push([ curr.name, value ]);
  //       }
  //       return acc; // Return the current Change Array
  //     }, []); // Initial value of empty array for reduce

  //     // If there are no elements in change_arr or we have leftover change, return
  //     // the string "Insufficient Funds"
  //     if (change_arr.length < 1 || change > 0) {
  //       return "Insufficient Funds";
  //     }

  //     // Here is your change, ma'am.
  //     return change_arr;
  //   }

  //   // test here
  //   checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

  dispenseChg(payment, price) {
    const diff = payment - price;
  }

  refillInv() {
    for (const key in this.inventory) {
      if (!this.inventory.hasOwnProperty(key)) continue;
      const product = this.inventory[key];
      if (product.quantity < this.invFullQuantity) {
        product.quantity = this.invFullQuantity;
      }
    }
    // console.log(this.inventory);
    return this.inventory;
  }

  refillCash() {
    for (const key in this.cash) {
      if (!this.cash.hasOwnProperty(key)) continue;
      const coin = this.cash[key];
      if (coin.quantity < this.coinFullQuantity) {
        coin.quantity = this.coinFullQuantity;
      }
    }
    return this.cash;
  }
}

module.exports = VendingMachine;
