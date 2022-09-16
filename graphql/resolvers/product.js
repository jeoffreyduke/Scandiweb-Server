"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const productResolver = (_parent, args) => data_1.products.find(product => product.getId() === args.id);
exports.default = productResolver;
