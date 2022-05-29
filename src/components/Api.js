 export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

     getUserInfo() {
         return fetch(`${this._url}/users/me`, {
             method: 'GET',
             headers: this._headers
         })
         .then((res) => {
             if (res.ok) {
                 return res.json(); // return = данные пробросились дальше
             } // как только сервер обработал - идет then

             return Promise.reject(`Ошибка: ${res.status}`)
         });
    }

     getAllCards() {
          return fetch(`${this._url}/cards`, {
             method: 'GET',
             headers: this._headers
          })
          .then((res) => {
            if (res.ok) {
                return res.json(); // return = данные пробросились дальше
            } // как только сервер обработал - идет then

            return Promise.reject(`Ошибка: ${res.status}`) // то что в catch будет
          });
     }

    editProfileInfo(data) {
        return fetch(`${this._url}/users/me`, {
             method: 'PATCH',
             headers: this._headers,
             body: JSON.stringify(data) // в строку превратили
        })
        .then((res) => {
             if (res.ok) {
                 return res.json();
             }

             return Promise.reject(`Ошибка: ${res.status}`) // то что в catch будет
         });
    }

   addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data) // в строку превратили
        })
        .then((res) => {//
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`) // всю логику then можно вынести в отдельный метод тк повторяется и в гет и в пост
        });
   }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, { // если в url есть / , то в ручную не добавляем
            method: 'DELETE',
            headers: this._headers,
        })
        .then((res) => {//
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`) // всю логику then можно вынести в отдельный метод тк повторяется и в гет и в пост
        });
    }

     editAvatar(data) { console.log(data)
         return fetch(`${this._url}/users/me/avatar`, {
             method: 'PATCH',
             headers: this._headers,
             body: JSON.stringify(data)
         })
             .then((res) => {//
                 if (res.ok) {
                     return res.json();
                 }

                 return Promise.reject(`Ошибка: ${res.status}`) // всю логику then можно вынести в отдельный метод тк повторяется и в гет и в пост
             });
     }

    putLikeOnCard(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then((res) => {//
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then((res) => {//
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
  }