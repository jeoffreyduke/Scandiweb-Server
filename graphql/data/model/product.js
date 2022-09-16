"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currency_converter_1 = __importDefault(require("../../util/currency-converter"));
const price_1 = __importDefault(require("./price"));
const roundToTwoDecimals = (num) => Number((Math.round(num * 100) / 100).toFixed(2));
class Product {
    constructor(name) {
        this.name = name;
        this.prices = [];
        this.gallery = [];
        this.attributes = [];
        this.inStock = true;
        this.getId = () => this.id;
        this.getCategory = () => this.category;
    }
    addPrice(price) {
        this.prices.push(price);
        return this;
    }
    setPrice(amountEUR) {
        currency_converter_1.default.availableCurrencies.forEach((currency) => {
            this.addPrice(new price_1.default(currency, roundToTwoDecimals(currency_converter_1.default.convertFromEUR(amountEUR, currency.label))));
        });
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setCategory(category) {
        this.category = category;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setInStock(is) {
        this.inStock = is;
        return this;
    }
    setBrand(brand) {
        this.brand = brand;
        return this;
    }
    addAttributeSet(attributeSet) {
        this.attributes.push(attributeSet);
        return this;
    }
    addImage(url) {
        this.gallery.push(url);
        return this;
    }
    addImages(urls) {
        this.gallery.push(...urls);
        return this;
    }
}
exports.default = Product;
