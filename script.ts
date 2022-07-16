import { FruitTemplateClass } from './classes/fruit-template.class.js';

class Apple extends FruitTemplateClass {
  constructor(amount: number) {
    super('Apple 🍎', 'garden', amount);
  }

  // Hook adding
  protected afterSeedsPalnted(): void {
    console.log('[Apple 🍎 action] [Hook added] Protect plants from insects');
  }

  // Required method implementation
  protected harvestFruits(): void {
    console.log(
      '[Apple 🍎 action] [Required ] Using 200 to harvest Apples from the garten'
    );
  }

  // Hook adding
  protected afterGrown(): void {
    console.log('[Apple 🍎 action] Prepare big boxes for harvesting Apples');
  }

  // Hook adding
  protected afterHarvested(): void {
    console.log('[Apple 🍎 action] Sell Apples on the Market');
  }
}

class Strawberry extends FruitTemplateClass {
  constructor(amount: number) {
    super('Strawberry 🍓', 'field', amount);
  }

  // Required method implementation
  protected harvestFruits(): void {
    console.log(
      '[Strawberry 🍓 action] Using 99 to harvest Srawberries from the field'
    );
  }

  // Existed method rewriting
  protected waterLand(): void {
    console.log(
      '[Strawberry 🍓 action] order watering system and set to the field'
    );
  }

  // Hook adding
  protected afterHarvested(): void {
    console.log('[Strawberry 🍓 action] Sell Srawberries on the Market');
  }
}

// some client logic which does not know about separate child classes and run only public method defined in Parrent class
function growingProcess(fruitClass: FruitTemplateClass): void {
  fruitClass.growFruit();
}

const apple = new Apple(1_200);
const strawberry = new Strawberry(599_300);

setTimeout(() => { 
  console.clear();
  growingProcess(apple);
}, 500)


setTimeout(() => {
  console.log('--------------------------------------');
  growingProcess(strawberry);
}, 2000);

