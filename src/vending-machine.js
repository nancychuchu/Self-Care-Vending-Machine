class VendingMachine {
  constructor(inventory, cash) {
    this.inventory = inventory;
    this.cash = cash;
  }

  printInv() {
    return this.inventory;
  }

  dispenseInv(product, payment) {
    if (this.inventory[product].quantity < 1) {
      return "Out of stock";
    }
    if (this.inventory[product].quantity < 1) {
      return "Out of stock";
    }
  }

  //   () {
  //     return this.data.demographics;
  //   }
  //   queryExperience(years) {
  //     return this.data.experience[years];
  //   }
}

module.exports = VendingMachine;
