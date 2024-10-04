import { type } from "os";

export default class HolbertonCourse{
    constructor(name, length, students){
        if (typeof name === 'string')
            this._name = name
        else {
            throw TypeError("name have to be a string");
        }
        if(typeof length === 'number')
            this._length = length
        else throw TypeError("length have to be a number");
        if(Array.isArray(students))
            this._students = students
        else throw TypeError("studnets have to be an array of students")
    }

    get name(){
        return this._name;
    }
    set name(newname){
        if (typeof newname === 'string') this._name = newname;
        else throw TypeError("name have to be a string");
    }

    get length(){
        return this._length;
    }
    set length(newlength){
        if (typeof newlength === 'number') this._length = newlength
        else throw TypeError("Length have to be a number");
    }

    get students(){
        return this._students;
    }
    set students(newstudents){
        if (Array.isArray(newstudents)) this._students = newstudents;
        else throw TypeError("Students have to be an array of studnets");
    }
}