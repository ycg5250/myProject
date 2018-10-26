

const {ccclass, property} = cc._decorator;
import GameScene from './GameScene';
let gameScene = new GameScene();

@ccclass
export default class Item extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let xing = this.node.getChildByName("xing");
        let suo = this.node.getChildByName("suo");
        if(xing){
            xing.active = false;
        }
        if(suo){
            suo.active = true;
        }
    }

    start () {
        
    
    }

    onEnterBtn () {
        console.log("进入关卡");
        console.log(this.node.name);
        let isClick = this.node.getChildByName("xing").active;
    //    if(!isClick) return;
        cc.director.loadScene("GameScene",this.callback.bind(this,this.node.name));
    }

    callback (name) {
        let str = name.slice(4);
        gameScene.onEnterTitle(name.slice(4));
    }

    // update (dt) {}
}
