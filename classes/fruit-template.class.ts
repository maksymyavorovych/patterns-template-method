export type terrainType = 'field' | 'hill' | 'garden';

export abstract class FruitTemplateClass {
  public seedAmount: number = 0;
  private terrain: terrainType = 'field';
  private title: string = '';

  constructor(title: string, terrain: terrainType, seedAmount: number) {
    this.title = title;
    this.terrain = terrain;
    this.seedAmount = seedAmount;
  }

  // Template method - sceleton of process
  public growFruit(): void {
    this.prepareLang();
    this.plantSeeds();
    this.afterSeedsPalnted();
    this.waterLand();
    this.afterGrown();
    this.harvestFruits();
    this.afterHarvested();
  }

  // already implemented methods
  protected prepareLang(): void {
    console.log(
      `[Abstract ♻ action] Preparing ${this.terrain} to plant ${this.title}`
    );
  }

  protected plantSeeds(): void {
    console.log(
      `[Abstract ♻ action] Planting ${this.seedAmount} seeds of ${this.title}`
    );
  }

  protected waterLand(): void {
    console.log(
      `[Abstract ♻ action] Watering ${this.terrain} with ${this.seedAmount} of ${this.title}`
    );
  }

  // need implementation in subclass
  protected abstract harvestFruits(): void;

  // hooks
  protected afterSeedsPalnted(): void {}
  protected afterGrown(): void {}
  protected afterHarvested(): void {}
}
