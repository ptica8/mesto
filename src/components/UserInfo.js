import * as constants from "./constants";

export default class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._about = data.about;
        this._nameElement = document.querySelector(this._name);
        this._jobElement = document.querySelector(this._about);
    }

    getUserInfo() {
        this._profileValues = {};
        this._profileValues['name'] = this._nameElement.textContent;
        this._profileValues['about'] = this._jobElement.textContent;
        return this._profileValues;
    }

    setUserInfo(data, avatarImage) {
        this._nameElement.textContent = data.name;
        this._jobElement.textContent = data.about;
        this._id = data._id;
        avatarImage.src = data.avatar;
    }
}