"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const type_1 = require("../data/type");
const categoriesResolver = () => {
    const result = data_1.products.reduce((categories, product) => {
        const category = product.getCategory();
        if (!categories[category]) {
            categories[category] = {
                name: category,
                products: []
            };
        }
        const { [category]: { products } } = categories;
        products.push(product);
        return categories;
    }, {});
    return [
        {
            name: type_1.Category.all,
            products: data_1.products
        },
        ...Object.values(result),
    ];
};
exports.default = categoriesResolver;
