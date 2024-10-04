export default class HolbertonClass{
    constructor(size, location){
        if (typeof size === 'number' && typeof location === 'string') {
            this._size = size;
            this._location = location
        }
        else {
            throw TypeError('Size must be a number and location must be a string');
        }
    }

    get size() {
        return this._size;
    }

    set size(newSize) {
        if (typeof newSize === 'number') {
            this._size = newSize;
        }
        else {
            throw TypeError('Size must be a number');
        }
    }

    get location() {
        return this._location;
    }

    set location(newLocation) {
        if (typeof newLocation === 'string') {
            this._location = newLocation;
        }
        else {
            throw TypeError('Location must be a string');
        }
    }

    [Symbol.toPrimitive](type){
        if (type === 'number') {
            return this._size;
        }
        else if (type === 'string') {
            return this._location;
        }
        return this;
    }
}