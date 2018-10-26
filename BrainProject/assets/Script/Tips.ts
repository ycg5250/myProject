
const {ccclass, property} = cc._decorator;
let label = null;
import Utils from './Utils';
let utils = new Utils();

@ccclass
export default class Tips extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        label = this.label;
     }

    start () {
    //    label = this.label;
    }

    upDateTips (level,isRight) {
        let userData = JSON.parse(utils.getItem(level-1));
        if(isRight){
            label.string = userData.rightTips; 
        }else{
            label.string = userData.wrongTips; 
        }
       
    }

    // update (dt) {}
}
