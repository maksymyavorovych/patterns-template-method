import { FruitTemplateClass } from './classes/fruit-template.class.js';
class Apple extends FruitTemplateClass {
    constructor(amount) {
        super('Apple 🍎', 'garden', amount);
    }
    // Hook adding
    afterSeedsPalnted() {
        console.log('[Apple 🍎 action] [Hook added] Protect plants from insects');
    }
    // Required method implementation
    harvestFruits() {
        console.log('[Apple 🍎 action] [Required ] Using 200 to harvest Apples from the garten');
    }
    // Hook adding
    afterGrown() {
        console.log('[Apple 🍎 action] Prepare big boxes for harvesting Apples');
    }
    // Hook adding
    afterHarvested() {
        console.log('[Apple 🍎 action] Sell Apples on the Market');
    }
}
class Strawberry extends FruitTemplateClass {
    constructor(amount) {
        super('Strawberry 🍓', 'field', amount);
    }
    // Required method implementation
    harvestFruits() {
        console.log('[Strawberry 🍓 action] Using 99 to harvest Srawberries from the field');
    }
    // Existed method rewriting
    waterLand() {
        console.log('[Strawberry 🍓 action] order watering system and set to the field');
    }
    // Hook adding
    afterHarvested() {
        console.log('[Strawberry 🍓 action] Sell Srawberries on the Market');
    }
}
// some client logic which does not know about separate child classes and run only public method defined in Parrent class
function growingProcess(fruitClass) {
    fruitClass.growFruit();
}
const apple = new Apple(1200);
const strawberry = new Strawberry(599300);
setTimeout(() => {
    console.clear();
    growingProcess(apple);
}, 500);
setTimeout(() => {
    console.log('--------------------------------------');
    growingProcess(strawberry);
}, 2000);
