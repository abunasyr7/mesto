import Card from "./Card";
import {elements} from "../utils/constants";

export default class Section {
  constructor({renderer}, cardSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(cardSelector);
  }

  renderer(data) {
    data.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element, toAppend) {
    this._container[toAppend](element);
  }

}
