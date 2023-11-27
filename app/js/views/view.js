import icons from '../../images/icons.svg';
import recipeViews from './recipeViews';

export default class View {
    _data;
    _parentWrapper = document.querySelector('.recipe-wrapper__right');

    render(data) {
      if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
      console.log('ha????');
      this._data = data;
      const markup = this._generateMarkup();
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);

      const recipeImage = recipeViews._generateRecipeImage();
      // if(!recipeImage) return;
      this._parentWrapper.insertAdjacentHTML('afterbegin', recipeImage); 
      
    }

    _clear() {
        if (this._parentElement) {
            this._parentElement.innerHTML = '';
        }
    }
    
    renderSpinner = function(){
      const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
          <p>Loading...</p>
        </div>
      `;
    
      this._parentElement.innerHTML = '';
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
        `
        this._clear();      
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
      renderMessage(message = this._message) {
        const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
        `
        this._clear();      
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }

      regenerateRepoterTitle() {
        return `
          <div class="headline">
            <div class="group-reporter">
              <h1>Architectural Design: Real World Project Presentation<br><span>Chapter 13 | BSCS 3B</span></h1>
            </div>
          </div>
        `
      }
}