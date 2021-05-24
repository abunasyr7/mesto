import {Popup} from './Popup.js' 
import { popupInput, popupPlaceForm } from './utils/constants.js';


export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmit}) {
        super(popupSelector)
        this._form = this.element.querySelector(popupPlaceForm);
        this._handleSubmit = handleSubmit;        
    }

    _getInputValues() {
        this._valueArray = {};
        this._inputArray = this._form.querySelector(popupInput);
        this._inputArray.forEach((input) => {
            return this._values[input.name]= input.value
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", e => {
            e.preventDefault();
            this._handleSubmit(this._getInputValues());
        })
    }

    close()

    {
        super.close();
        this._form.reset();
    }
}