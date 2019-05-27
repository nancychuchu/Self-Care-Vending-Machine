const VendingMachine = require("../src/vending-machine");
const contents = require("../src/contents.json");

describe("VendingMachine", () => {
  let vendingMachine = [];
  beforeEach(() => {
    vendingMachine = new VendingMachine(
      contents.inventory,
      contents.cashAvailable
    );
  });

  describe("when asked for inventory", () => {
    it("should return inventory object (printed in console)", () => {
      const result = vendingMachine.printInv();
      expect(result).toEqual(contents.inventory);
    });
  });
  describe("when cash is refilled and we check cash", () => {
    it("should be equal to the full cash", () => {
      const result = vendingMachine.refillCash();
      expect(result).toEqual(contents.cashFull);
    });
  });

  describe("dispenseInv()", () => {
    describe("when customer didn't pay enough for product", () => {
      it("should return error message", () => {
        expect(() => vendingMachine.dispenseInv("soap", 3)).toThrow(
          "Payment amount insufficient."
        );
      });
    });
    describe("when customer pays the exact amount", () => {
      it("should return 'Enjoy your product' message", () => {
        const result = vendingMachine.dispenseInv("razor", 3.25);
        expect(result).toEqual("Enjoy your razor!");
      });
      it("should reduce inventory quantity by 1", () => {
        const result = vendingMachine.printInv().razor.quantity;
        expect(result).toEqual(9);
      });
    });

    describe("when asked to dispense product that's empty", () => {
      it("should return error", () => {
        expect(() => vendingMachine.dispenseInv("loofa", 3)).toThrow(
          "Out of stock"
        );
      });
    });
    describe("when asked to dispense product that doesn't exist in vending machine", () => {
      it("should return error", () => {
        expect(() => vendingMachine.dispenseInv("flowers", 3)).toThrow(
          "Sorry, this product does not exist"
        );
      });
    });
    describe("when customer pays extra for product and the machine has enough change", () => {
      it("should return change", () => {
        const result = vendingMachine.dispenseInv("soap", 10);
        expect(result).toEqual(
          "Enjoy your soap! Here is your change of $4.80 in 2 toonie coins, 3 quarter coins, 5 penny coins."
        );
      });
      it("should reduce inventory quantity by 1", () => {
        const result = vendingMachine.printInv().soap.quantity;
        expect(result).toEqual(9);
      });
    });
    describe("when customer pays extra for product but there's not enough change", () => {
      it("should return error message", () => {
        expect(() => vendingMachine.dispenseInv("razor", 300)).toThrow(
          "Sorry, machine does not have enough change. Payment has been rejected, please try again."
        );
      });
      it("should not release product", () => {
        const result = vendingMachine.printInv().razor.quantity;
        expect(result).toEqual(9);
      });
    });
  });
  describe("refillInv()", () => {
    describe("when inventory is refilled and we check the inventory", () => {
      it("should be equal to the full inventory", () => {
        const result = vendingMachine.refillInv();
        expect(result).toEqual(contents.fullInventory);
      });
    });
    describe("when inventory is refilled and we check qty of any product", () => {
      it("should return 15", () => {
        const result = vendingMachine.refillInv().soap.quantity;
        expect(result).toEqual(15);
      });
    });
  });
});
