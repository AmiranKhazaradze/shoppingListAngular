import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  private  img1Path = 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg';
  private  img2Path = 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg';

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', this.img1Path),
    new Recipe('A Test Recipe', 'This is simply a test', this.img2Path)];
  constructor() { }

  ngOnInit() {
  }

}
