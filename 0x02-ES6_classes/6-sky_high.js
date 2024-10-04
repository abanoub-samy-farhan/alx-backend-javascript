import Building from './building.js';

export default class SkyHigh extends Building {
    constructor(sqft, floors){
        super(sqft);
        if (typeof floors === 'number')
            this._floors = floors;
        else throw TypeError("floors have to be a number");
    }

    get floors(){
        return this._floors;
    }
    set floors(newFloors){
        if (typeof newFloors === 'number') this._floors = newFloors;
        else throw TypeError("floors have to be a number");
    }

    static evacuationWarningMessage(){
        return `Evacuate slowly the ${this._floors} floors`;
    }
}