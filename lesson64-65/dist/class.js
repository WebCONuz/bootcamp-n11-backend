"use strict";
// ------------------------------------------------------------------------------------------
// CLASS ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
class Bags {
    constructor(name, color, material, price) {
        this.name = name;
        this.color = color;
        this.material = material;
        this.price = price;
    }
    info() {
        return `${this.name} - ${this.price}`;
    }
}
const bag1 = new Bags("Dragon", "metalic", "crocodile", 7000);
// bag1.name = "jamol" ERROR because "name" is readonly
console.log(bag1.info());
// Class uchun qulaylik. Bu usulning kamchiligi: class ichida readonly hususiyatlardan boshqalarida this ishlamaydi
class NewMyStyleBags {
    constructor(name, color, material, price) {
        this.name = name;
        // this.color = color; => Error
    }
    info() {
        return `Name: ${this.name}`;
    }
}
const bag2 = new Bags("Dragon", "metalic", "crocodile", 7000);
console.log(bag2.info());
console.log(bag2.color);
//# sourceMappingURL=class.js.map