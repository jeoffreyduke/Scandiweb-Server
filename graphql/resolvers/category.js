"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const type_1 = require("../data/type");
const categoryResolver = (_parent, args) => {
    const { input: { title } = {} } = args;
    let result;
    if (!title || title === type_1.Category.all) {
        result = data_1.products;
    }
    else {
        result = data_1.products.filter((product) => product.getCategory() === title);
    }
    if (!result.length) {
        return null;
    }
    return {
        name: title ? title : type_1.Category.all,
        products: result,
    };
};
exports.default = categoryResolver;
