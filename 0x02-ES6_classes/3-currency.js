export default class Currency{
    constructor(code, name){
        if (typeof code === 'string') {
            this._code = code;
        } else throw TypeError("Code have to be a string");
        if (typeof name ==='string'){
            this._name = name;
        } else throw TypeError("name have to be a string")
    }

    // making the getter and setter for code
    get code(){
        return this._code;
    }
    set code(newcode){
        if (typeof newcode === 'string') this._code = newcode;
        else throw TypeError("Code have to be a string");
    }

    // making the getter and setter for name
    get name(){
        return this._name;
    }
    set name(newname){
        if (typeof newname === 'string') this._name = newname;
        else throw TypeError("name have to be a string");
    }

    displayFullCurrency(){
        return `${this._name} (${this._code})`;
    }
}