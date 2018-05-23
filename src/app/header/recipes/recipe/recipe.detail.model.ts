export class RecipeDetail {
  step: number;
  instruction: string;

  constructor(step: number, instruction: string){
    this.step = step;
    this.instruction = instruction;
  }
}
