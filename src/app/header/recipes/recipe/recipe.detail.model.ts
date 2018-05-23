export class RecipeDetail {
  public step: number;
  public instruction: string;

  constructor(step: number, instruction: string){
    this.step = step;
    this.instruction = instruction;
  }
}
