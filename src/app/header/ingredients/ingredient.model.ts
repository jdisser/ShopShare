export class Ingredient {
  public name: string;
  public unit: string;
  public source: string;

  constructor(name: string, unit: string, source: string){
    this.name = name;
    this.unit = unit;
    this.source = source;
  }
}
