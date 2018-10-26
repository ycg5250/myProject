

const {ccclass, property} = cc._decorator;
let arr = [];


export default class Utils{

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    // update (dt) {}
    constructor(){
        console.log("初始化");
    }

    public setItem (key,value) {
        cc.sys.localStorage.setItem(key,value);
    }

    /**
     * getItem 
     */
    public getItem (key) {
        let result = cc.sys.localStorage.getItem(key);
        if(result == null || result == ''){
            return null;
        }else{
            return result;
        }
    }

    /**
     * getInt
     */
    public getInt(key,defaultvalue) {
        let result = cc.sys.localStorage.getItem(key);
        if(result == null || result == ''){
            return defaultvalue;
        }else{
            return result;   
        }
    }

    /**
     * setInt
     */
    public setInt(key,value) {
        cc.sys.localStorage.setItem(key,value.toString());
        return value;
    }

    /**
     * addInt
     */
    public addInt(key,add) {
        let result = cc.sys.localStorage.getItem(key);
        if(result == null || result == ''){
            result = add;
        }else{
            result = add + parseInt(result);
        }
        cc.sys.localStorage.setItem(key,result);
        return result;
    }

    /**
     * push入栈
     */
    public push(node) {
        arr[arr.length] = node;
    }

    /**
     * pop出栈
     */
    public pop() {
        var top = arr[arr.length - 1];
        arr.length = arr.length - 1;
        return top;
    }

    /**
     * getTop获取栈顶元素
     */
    public getTop() {
        return arr[arr.length - 1];
    }

    /**
     * getStack获取栈
     */
    public getStack() {
        let result = [];
        for(let i = 0;i < arr.length;i++){
            result[i] = arr[i];
        }
        return result;
    }
}
