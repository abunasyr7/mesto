import { caption, picture } from '../utils/constants.js';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupSelector.querySelector(picture);
        this._caption = this._popupSelector.querySelector(caption);
    }

    open({name, link}) {
        this._image.src = link;
        this._image.alt = name;
        this._caption.textContent = name;
        super.open();
    }
}