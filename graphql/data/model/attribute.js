"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attribute {
    constructor(displayValue, value, id) {
        this.displayValue = displayValue;
        this.value = value;
        this.id = id;
        if (!value) {
            this.value = displayValue;
        }
        if (!id) {
            this.id = displayValue;
        }
    }
}
exports.default = Attribute;
