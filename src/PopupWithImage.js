import {Popup} from './Popup.js' 
import { caption, picture } from './utils/constants.js';


export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this.element.querySelector(picture);
        this._caption = this.element.querySelector(caption);
    }

    open({name, link}) {
        this._image.src = link;
        this._image.alt = name;
        this._caption.textContent = name;
        super.open();
    }
}