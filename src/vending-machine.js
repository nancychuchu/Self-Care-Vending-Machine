class VendingMachine {
  constructor(inventory, cash) {
    this.inventory = inventory;
    this.cash = cash;
    this.invFullQuantity = 15;
    this.coinFullQuantity = 50;
  }

  printInv() {
    console.log(this.inventory);
    return this.inventory;
  }

  dispenseInv(product, payment) {
    if (!this.inventory[product]) {
      throw new Error("Sorry, this product does not exist");
    }
    if (this.inventory[product].quantity < 1) {
      throw new Error("Out of stock");
    }
    if (this.inventory[product].price > payment) {
      throw new Error("Payment amount insufficient.");
    }
    if (this.inventory[product].price === payment) {
      this.inventory[product].quantity--;
      return `Enjoy your ${product}!`;
    }
    if (this.inventory[product].price < payment) {
      return this.dispenseChg(product, payment, this.inventory[product].price);
    }
  }

  dispenseChg(product, payment, price) {
    let diff = payment - price;
    const change = [];
    const originalCash = this.cash;

    this.cash
      .sort((a, b) => b.value - a.value)
      .map(coin => {
        if (diff >= coin.value && coin.quantity !== 0) {
          let coinChangeNum = Math.floor(diff.toFixed(2) / coin.value);
          if (coin.quantity < coinChangeNum) {
            coinChangeNum = coin.quantity;
          }
          change.push({
            denomination: coin.denomination,
            quantity: coinChangeNum
          });
          diff -= (coin.value * coinChangeNum).toFixed(2);
        }
      });

    if (diff < 0.01) {
      change.map(
        change =>
          this.cash.filter(coin => {
            return coin.denomination === change.denomination;
          }).quantity - change.quantity
      );
      this.inventory[product].quantity--;
      let chgString = "";
      change.map(coin =>
        coin.quantity > 1
          ? (chgString += ` ${coin.quantity} ${coin.denomination} coins,`)
          : (chgString += ` ${coin.quantity} ${coin.denomination} coin,`)
      );
      chgString = chgString.substring(0, chgString.length - 1) + ".";
      return `Enjoy your ${product}! Here is your change of $${(
        payment - price
      ).toFixed(2)} in${chgString}`;
    } else {
      throw new Error(
        "Sorry, machine does not have enough change. Payment has been rejected, please try again."
      );
    }
  }

  refillInv() {
    for (const key in this.inventory) {
      this.inventory[key] = {
        ...this.inventory[key],
        quantity: this.invFullQuantity
      };
    }
    return this.inventory;
  }

  refillCash() {
    this.cash = this.cash.map(
      coin =>
        (coin = {
          ...coin,
          quantity: this.coinFullQuantity
        })
    );
    return this.cash;
  }
}

module.exports = VendingMachine;
