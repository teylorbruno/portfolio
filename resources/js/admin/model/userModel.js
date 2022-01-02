class User {
    constructor(firstName, lastName, username, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._username = username;
        this._email = email;
        this._creationDate = Date.now();
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(name) {
        this._firstName = name;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(name) {
        this._lastName = name;
    }

    get username() {
        return this._username;
    }

    set username(username) {
        this._username = username;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get creationDate() {
        return this._creationDate;
    }

}