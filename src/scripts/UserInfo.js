export default class UserInfo {
    constructor(name, job) {
        this._name = name;
        this._job = job;
        this._nameValue = document.querySelector(this._name);
        this._jobValue = document.querySelector(this._job);
        this._profileNameInput = document.querySelector('.popup__input_type_name');
        this._profileJobInput = document.querySelector('.popup__input_type_job');
    }

    getUserInfo() {
       this._profileNameInput.value = this._nameValue.textContent;
       this._profileJobInput.value = this._jobValue.textContent;
    }

    setUserInfo(name, job) {
        this._nameValue.textContent = name;
        this._jobValue.textContent = job;
    }
}