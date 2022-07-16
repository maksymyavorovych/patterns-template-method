export class FruitTemplateClass {
    constructor(title, terrain, seedAmount) {
        this.seedAmount = 0;
        this.terrain = 'field';
        this.title = '';
        this.title = title;
        this.terrain = terrain;
        this.seedAmount = seedAmount;
    }
    // Template method - sceleton of process
    growFruit() {
        this.prepareLang();
        this.plantSeeds();
        this.afterSeedsPalnted();
        this.waterLand();
        this.afterGrown();
        this.harvestFruits();
        this.afterHarvested();
    }
    // already implemented methods
    prepareLang() {
        console.log(`[Abstract ♻ action] Preparing ${this.terrain} to plant ${this.title}`);
    }
    plantSeeds() {
        console.log(`[Abstract ♻ action] Planting ${this.seedAmount} seeds of ${this.title}`);
    }
    waterLand() {
        console.log(`[Abstract ♻ action] Watering ${this.terrain} with ${this.seedAmount} of ${this.title}`);
    }
    // hooks
    afterSeedsPalnted() { }
    afterGrown() { }
    afterHarvested() { }
}
