cardSelector = document.querySelector(".elements-container").content;

class Section {
    constructor({items, renderer}, cardSelector) {
        this._items = items;
        this._renderer = renderer;
        this._cardSelector = cardSelector;
    }

    createItems() {
        this._items.forEach(item =>{
            this._renderer(item);
        }) 
    }

    addItem(element) {
        this._cardSelector.prepend(element);
    }
}