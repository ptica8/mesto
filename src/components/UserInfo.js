export default class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._job = data.job;
        this._nameElement = document.querySelector(this._name);
        this._jobElement = document.querySelector(this._job);
    }

    getUserInfo() {
        this._profileValues = {};
        this._profileValues['name'] = this._nameElement.textContent;
        this._profileValues['job'] = this._jobElement.textContent;
        return this._profileValues;
    }

    setUserInfo(data) {
        this._nameElement.textContent = data.name;
        this._jobElement.textContent = data.job;
    }
}