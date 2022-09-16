"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = __importDefault(require("./category"));
const categories_1 = __importDefault(require("./categories"));
const currencies_1 = __importDefault(require("./currencies"));
const product_1 = __importDefault(require("./product"));
const resolvers = {
    Query: {
        categories: categories_1.default,
        category: category_1.default,
        currencies: currencies_1.default,
        product: product_1.default,
    },
};
module.exports = resolvers;
