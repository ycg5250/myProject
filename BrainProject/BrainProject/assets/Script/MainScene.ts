const {ccclass, property} = cc._decorator;
import Utils from './Utils';
let utils = new Utils();

@ccclass
export default class MainScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    playBtn: cc.Node = null;

    start () {
        // init logic
    //    this.label.string = this.text;
    }

    onLoad () {
        //读取json数据并存储
        cc.loader.loadRes("brain.json",function(err,object){
            if(err){
                console.log(err);
                return;
            }
        //    console.log(object.json);
            let data = object.json;
            data.forEach((val,idx) => {
                utils.setItem(idx,JSON.stringify(val));
            });
        });
    }

    onPlayBtn(){
        console.log("进入选择关卡");
        cc.director.loadScene("StartScene");
    //    let userData = JSON.parse(utils.getItem(0));
    //    console.log(userData.description,userData.wrongTips,userData.rightTips); 
    }
}
