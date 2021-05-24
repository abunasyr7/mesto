export default class Section {
    constructor({items, renderer}, cardSelector) {
        this._items = items;
        this._renderer = renderer;
        this._card = document.querySelector(cardSelector);
    }


    addItem(element) {
        this._card.prepend(element);
    }



    createItems() {
        this._items.forEach(item =>{
            this._renderer(item);
        }) 
    }
}