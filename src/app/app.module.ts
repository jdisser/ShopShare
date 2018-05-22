import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { EditShoppingListComponent } from './header/shopping-list/edit-shopping-list/edit-shopping-list.component';
import { RecipeComponent } from './header/recipes/recipe/recipe.component';
import { RecipeDetailComponent } from './header/recipes/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './header/recipes/recipe/recipe-item/recipe-item.component';
import { StaplesComponent } from './header/staples/staples.component';
import { EditStaplesComponent } from './header/staples/edit-staples/edit-staples.component';
import { IngredientsComponent } from './header/ingredients/ingredients.component';
import { EditIngredientComponent } from './header/ingredients/edit-ingredient/edit-ingredient.component';
import { IngredientComponent } from './header/ingredients/ingredient/ingredient.component';
import { ShoppingListItemComponent } from './header/shopping-list/shopping-list-item/shopping-list-item.component';
import { StapleItemComponent } from './header/staples/staple-item/staple-item.component';
import { EditRecipesComponent } from './header/recipes/edit-recipes/edit-recipes.component';
import { EditRecipeComponent } from './header/recipes/recipe/edit-recipe/edit-recipe.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    EditShoppingListComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    StaplesComponent,
    EditStaplesComponent,
    IngredientsComponent,
    EditIngredientComponent,
    IngredientComponent,
    ShoppingListItemComponent,
    StapleItemComponent,
    EditRecipesComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
