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
    it("should return inventory object", () => {
      expect(vendingMachine.printInv()).toEqual(contents.inventory);
    });
  });

  describe("when customer didn't pay enough for product", () => {
    it("should return error message", () => {
      expect(() => vendingMachine.dispenseInv("soap", 3)).toThrow(
        "Payment amount insufficient."
      );
    });
  });
  describe("when customer pays the exact amount", () => {
    it("should return 'Enjoy your product' message", () => {
      expect(vendingMachine.dispenseInv("razor", 3.25)).toEqual(
        "Enjoy your razor!"
      );
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
  describe("when inventory is refilled and we check the inventory", () => {
    it("should be equal to the full inventory", () => {
      expect(vendingMachine.refillInv()).toEqual(contents.fullInventory);
    });
  });
  describe("when inventory is refilled and we check qty of any product", () => {
    it("should return 15", () => {
      expect(vendingMachine.refillInv().soap.quantity).toEqual(15);
    });
  });
  describe("when cash is refilled and we check cash", () => {
    it("should be equal to the full cash", () => {
      expect(vendingMachine.refillCash()).toEqual(contents.cashFull);
    });
  });
  describe("when customer pays extra for product", () => {
    it("should return change", () => {
      expect(vendingMachine.dispenseInv("soap", 10)).toEqual(
        "Enjoy your soap! Here is your change in 2 toonie coins, 3 quarter coins, 5 penny coins."
      );
    });
  });
});
