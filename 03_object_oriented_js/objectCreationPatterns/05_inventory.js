// Inventory managagement system:
//  - Item creator
//    * makes sure that all necessary info are present and valid
//  - Items manager
//    * creating items
//    * updating info about items
//    * deleting items
//    * querying info about items
//  - Reports manager
//    * generates reports for specific items
//    * or all items
//
// REQUIRED INFO FOR ITEMS:
//  - SKU code
//    * Unique id of a product
//    * First 3 letters of item + first 2 letters of category
//      (if item is 2 words and first word is only 2 letters, take next letter)
//  - Item name
//    * Minimum of 5 characters, not counting spaces
//  - Category
//    * Minimum of 5 characters
//    * Must be 1 word
//  - Quantity
//    * Quantity in stock
//    * Must not be blank
//    * Assume valid number
// ITEM CREATOR:
//  - If any of the information provided is not valid, the item creator returns
//  an object with a notValid property with a value of true

const ItemCreator = (function creatorIIFE() {
  function validItemName(itemName) {
    return itemName.replace(/ /g, '').length >= 5;
  }

  function validCategory(category) {
    return !(/ /.test(category)) && category.length >= 5;
  }

  function generateSKU(itemName, category) {
    return (itemName.replace(/ /g, '').slice(0, 3) + category.slice(0, 2)).toUpperCase();
  }

  return function ItemCreator(itemName, category, quantity) {
    if (validItemName(itemName)
      && validCategory(category)
      && quantity !== undefined) {
      const skuCode = generateSKU(itemName, category);
      return {
        skuCode,
        itemName,
        category,
        quantity,
      };
    } else {
      return {
        notValid: true,
      };
    }
  };
}());

const ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    const item = ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    }

    this.items.push(item);
    return true;
  },

  itemBySKU(sku) {
    return this.items.find(item => item.skuCode === sku);
  },

  update(sku, updatedValues) {
    Object.assign(this.itemBySKU(sku), updatedValues);
  },

  delete(sku) {
    const itemIdx = this.items.findIndex(item => item.skuCode === sku);
    if (itemIdx !== -1) {
      this.items.splice(itemIdx, 1);
    }
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
};


// ITEM MANAGER:
//  - create()
//    * INPUT: ?
//    * RETURNS:
//      - false if not successful
//      - on success: ?
//    * creates a new item
//  - update()
//    * INPUT: SKU, object
//    * RETURNS: ?
//    * updates information on an item
//    * assume valid values provided
//  - delete()
//    * INPUT: SKU
//    * RETURNS: ?
//    * deletes item from list
//  - items
//    * PROPERTY: all items from list
//  - inStock()
//    * INPUT: ?
//    * OUTPUT: ?
//    * RETURNS: ?
//    * lists all items with qty greater than 0
//  - itemsInCategory()
//    * INPUT: category
//    * lists all items for a given category
//
// REPORTS MANAGER:
//  - init()
//    * INPUT: ItemsManager
//    * assigns it to the items property
//  - createReporter()
//    * INPUT: SKU code
//    * RETURN: object with one method (itemInfo)
//      - logs to the console all the properties of an object as key:value
//      pairs (one per line). No other properties or methods on the returned
//      object
//      - no other properties on object (closure?)
//  - reportInStock()
//    * INPUT: none
//    * logs names of all items in stock as comma separated values

const ReportManager = {
  init(itemMan) {
    this.items = itemMan;
  },

  createReporter(sku) {
    const item = this.items.itemBySKU(sku);
    return {
      itemInfo() {
        for (const [key, value] of Object.entries(item)) {
          console.log(`${key}: ${value}`);
        }
      },
    };
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.itemName).join(', '));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item


console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
//
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
//
ReportManager.reportInStock();
//
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items
// (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();

const footballReporter = ReportManager.createReporter('FOOSP');
footballReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
console.log(ItemManager.items);
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
