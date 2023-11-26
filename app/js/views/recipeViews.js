// import {Fraction} from 'fractional';
// console.log("Hereeeeeeeeeeeeeeeeeeeeeeeee" + Fraction);
// import { fraction } from 'mathjs';
// import {Fraction} from 'fractional';
// import fracty from 'fracty';
import View from './view';

import icons from '../../images/icons.svg';


class RecipeView extends View {
    _parentElement = document.querySelector('.recipe');
    _parentWrapper = document.querySelector('.recipe-wrapper__right');
    _recipeImage = document.querySelector('.recipe-image');

    addHandlerRender(handler){
      ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
    }

    _generateMarkup() {
      // this._recipeImage.style.backgroundImage = `url(${this._data.image})`;

        return `
        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
          </ul>
        </div>
    `;
    }

    _generateMarkupIngredient(ing) {
        return `
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity ? fracty(ing.quantity) : ''}</div>
            <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
            </div>
        </li>
        `;
      }

      _generateRecipeImage() {
        const backgroundImageStyle = this._data && this._data.image ? `background-image: url('${this._data.image}');` : '';

        if(!backgroundImageStyle) return '';
  
        return `
          <div class="recipe-image" style="${backgroundImageStyle}">
            <h2 class="recipe-title">${this._data.title}</h2>
          </div>
        `;
    }
}
export default new RecipeView();
