import Popup from './Popup.js' 
import { popupInput, validationConfig } from '../utils/constants.js';


export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmit}) {
        super(popupSelector)
        this._form = this._popupSelector.querySelector(validationConfig.formSelector);
        this._handleSubmit = handleSubmit;        
    }

    _getInputValues() {
        this._valueArray = {};
        this._inputArray = this._form.querySelectorAll(popupInput);
        this._inputArray.forEach(input => (this._valueArray[input.name] = input.value))
        return this._valueArray;
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