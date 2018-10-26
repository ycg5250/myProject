

const {ccclass, property} = cc._decorator;
let rightAnswer = [2,2];
let choiceAnswer = 0;
let level = 0;
//let gou;
let answerButton = [];
import GameScene from './GameScene';
import Tips from './Tips';
import Utils from './Utils';
let gameScene = new GameScene();
let tips = new Tips();
let utils = new Utils();

@ccclass
export default class Title0 extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        level = parseInt(this.node.name.slice(6)) + 1;
        let countBtn = 0;
        if(level == 1){
            countBtn = 6;
        }else if(level == 2){
            countBtn = 5;
        }
        let gou = this.node.getChildByName("gou");
        let cuowu = this.node.getChildByName("cuowu");
        gou.active = false;
        cuowu.active = false;
        answerButton = [];
        for(let i = 0;i < countBtn;i++){
            var button = this.node.getChildByName("answer"+i);
            answerButton.push(button);
            button.on(cc.Node.EventType.MOUSE_DOWN,this.onButton.bind(this,i,gou,cuowu),this);
        }
    }

    onButton (index,gou,cuowu) {
        console.log("选择了第"+index+"个答案");
        choiceAnswer = index;
        if(rightAnswer[level-1] == choiceAnswer){
            console.log("选择正确");
            console.log(utils.getInt("winLevel",1));
            if(utils.getInt("winLevel",1) >= level){
                utils.setInt("winLevel",utils.setInt("winLevel",1)+1);
            }else{
                utils.setInt("winLevel",level);
            }
           
            gou.active = true;
            gameScene.onLoadTips(level);
            tips.upDateTips(level,true);
            this.scheduleOnce(function(){
                gameScene.onEnterTitle(level);
            },1.5);
        }else{
            console.log("选择错误");
            cuowu.active = true;
            gameScene.onLoadTips(level);
            tips.upDateTips(level,false);
            this.scheduleOnce(function(){
                cuowu.active = false;
            },0.25);
        }
        
        gou.x = cuowu.x = answerButton[index].x;
        gou.y = cuowu.y = answerButton[index].y;
    }

    // update (dt) {}

    onOkBtn () {
        console.log("提交答案:"+choiceAnswer);
        if(rightAnswer[level-1] == choiceAnswer){
            console.log("选择正确");
        }else{
            console.log("选择错误");
            gameScene.onLoadTips(level);
            tips.upDateTips(level,false);
        }
    }
}
