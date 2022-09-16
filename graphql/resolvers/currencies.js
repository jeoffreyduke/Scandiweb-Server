"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currency_converter_1 = __importDefault(require("../util/currency-converter"));
const currencyResolver = () => currency_converter_1.default.availableCurrencies;
exports.default = currencyResolver;
