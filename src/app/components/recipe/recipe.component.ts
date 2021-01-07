import { Component, OnInit } from '@angular/core';
import { LazyOvenService } from '../../services/lazy-oven.service';
import { Recipe } from "../../entities/recipe";

@Component({
  selector: 'app-steps',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;

  ngOnInit() {
  }

  constructor(private lazyOvenService: LazyOvenService) {
    this.recipe = this.lazyOvenService.getRecipe();
  }

}
