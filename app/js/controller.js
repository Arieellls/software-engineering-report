// import { async } from 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeViews';
import recipeViews from './views/recipeViews';

import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import { lgamma, mode } from 'mathjs';
import resultsView from './views/resultsView';
import searchView from './views/searchView';
import paginationView from './views/paginationView';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function(){
  try {
    const id =  window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    //1 Loading recipe
    await model.loadRecipe(id);

    //2 Rendering recipe
    recipeView.render(model.state.recipe)
  } catch (error) {
	console.log("HAHHAHHAHAHHHAHAHHAHHAHAHHAHAHHAHHAHAH " + error);
    recipeView.renderError();
  }
}

const controlSeachResults = async function() {
  try {
    const query = searchView.getQuery();
    if(!query) return;
    
    resultsView.renderSpinner();


    await model.loadSearchResults(query);
        // resultsView.render(model.state.search.results);
    resultsView.render(model.getResultsPage(1));
    
    paginationView.render(model.state.search)
  } catch (error) {
    console.log(error);
  }
}

const controlPagination = function(goToPage) {
  resultsView.render(model.getResultsPage(goToPage));

  paginationView.render(model.state.search)
}

const init = function(){
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSeachResults);
  paginationView.addHandlerClick(controlPagination)
}

init();