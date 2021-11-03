export class Storage {
    constructor() {
        throw Error('No')
    }

    static set(key, objectJson) {
        localStorage.setItem(key, JSON.stringify(objectJson));
    }

    static get(key){
        return JSON.parse(localStorage.getItem(key));
    }

    static del(key){
        localStorage.removeItem(key);
    }

    static reset(){
        localStorage.clear();
    }

    static length(){
        return localStorage.length;
    }
}
