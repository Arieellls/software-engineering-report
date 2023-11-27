import icons from '../../images/icons.svg';
import View from './view';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;
            
            const goToPage = +btn.dataset.goto;
            console.log(goToPage);

            handler(goToPage)
        });
    }

    _generateMarkup() {
        const curPage = this._data.page;
        const numPage = Math.ceil(this._data.results.length / this._data.resultsPerPage)

        // Page 1 and other page
        if(curPage === 1 && numPage > 1) {
            return `
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `
        }

        // last page
        if(curPage === numPage && numPage > 1) {
            return `
            <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
            `
        }
        
        // Other page
        if(curPage < numPage) {
            return `
            <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `
        }

        // Page 1, and there no other page
        return ''
    }
}

export default new PaginationView();