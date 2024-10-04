export default class Airport {
    constructor(name, code){
        if (typeof name === 'string' && typeof code === 'string') {
            this._name = name;
            this._code = code;
        } else {
            throw TypeError('Name and code must be strings');
        }
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            throw TypeError('Name must be a string');
        }
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        if (typeof newCode === 'string') {
            this._code = newCode;
        } else {
            throw TypeError('Code must be a string');
        }
    }

    get [Symbol.toStringTag]() {
        return this._code;
    }
}