"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeType = void 0;
var AttributeType;
(function (AttributeType) {
    AttributeType["text"] = "text";
    AttributeType["swatch"] = "swatch";
})(AttributeType = exports.AttributeType || (exports.AttributeType = {}));
class AttributeSet {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.type = AttributeType.text;
        this.id = name;
    }
    addItem(item) {
        this.items.push(item);
        return this;
    }
    addItemList(items) {
        this.items.push(...items);
        return this;
    }
    setType(type) {
        this.type = type;
        return this;
    }
}
exports.default = AttributeSet;
