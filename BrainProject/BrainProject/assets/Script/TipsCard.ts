
const {ccclass, property} = cc._decorator;
import GameScene from './GameScene';
let gameScene = new GameScene();

@ccclass
export default class NewClass extends cc.Component {

/*    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';*/

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    onCloseBtn () {
        gameScene.onCloseTipsCard();
    }

    // update (dt) {}
}
