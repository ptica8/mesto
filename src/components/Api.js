 export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

     _checkResponse(res) {
         if (res.ok) {
             return res.json();
         }
         return Promise.reject(`Ошибка ${res.status}`);
     }

     getUserInfo() {
         return fetch(`${this._url}/users/me`, {
             method: 'GET',
             headers: this._headers
         })
         .then(this._checkResponse)
    }

     getAllCards() {
          return fetch(`${this._url}/cards`, {
             method: 'GET',
             headers: this._headers
          })
          .then(this._checkResponse)
     }

    editProfileInfo(data) {
        return fetch(`${this._url}/users/me`, {
             method: 'PATCH',
             headers: this._headers,
             body: JSON.stringify(data) // в строку превратили
        })
        .then(this._checkResponse)
    }

   addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data) // в строку превратили
        })
        .then(this._checkResponse)
   }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, { // если в url есть / , то в ручную не добавляем
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }

     editAvatar(data) {
         return fetch(`${this._url}/users/me/avatar`, {
             method: 'PATCH',
             headers: this._headers,
             body: JSON.stringify(data)
         })
         .then(this._checkResponse)
     }

    putLikeOnCard(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse)
    }
  }