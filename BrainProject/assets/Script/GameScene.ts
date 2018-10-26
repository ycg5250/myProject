
const {ccclass, property} = cc._decorator;
let  titlePrefab = [];
let tip = null;
let tipCard = null;

@ccclass
export default class GameScene extends cc.Component {

/*    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';*/

    @property([cc.Prefab])
    public titles: cc.Prefab[] = [];

    @property(cc.Prefab)
    tips: cc.Prefab = null;

    @property(cc.Prefab)
    tipsCard: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        titlePrefab = [];
        for(let i = 0; i < this.titles.length;i++){
            titlePrefab.push(cc.instantiate(this.titles[i]));
        }
        tip = cc.instantiate(this.tips);
        tipCard = cc.instantiate(this.tipsCard);
     }

    start () {
    //    this.node.addChild(titlePrefab[0]);
    //    titlePrefab[0].x = 0;
    //    titlePrefab[0].y = 0;
        
    }

    onEnterTitle(index){
        console.log(index);
        let canvas = cc.find('GameScene');
        let title = cc.instantiate(titlePrefab[index]);
        if(title && canvas){
            if(index > 0){
            //    let lastTitle = cc.instantiate(titlePrefab[index -1]);
                let lastTitle = canvas.getChildByName("title_"+(index-1));
                if(lastTitle){
                    canvas.removeChild(lastTitle,false);
                }
            }
            canvas.addChild(title);
            title.x = 0;
            title.y = 80;
        }
        
        
    //    this.node.addChild(canvas);
    }

    onBackBtn () {
        console.log("进入开始界面");
        cc.director.loadScene("StartScene");
    }

    onLoadTips (level) {
        let canvas = cc.find('GameScene');
        let tips = cc.instantiate(tip);
        if(canvas && tips){
            let lastTips = canvas.getChildByName("tips");
            if(!lastTips){
                canvas.addChild(tips);
            }
           
            tips.y = -250;
            this.scheduleOnce(() => {
                if(!canvas.isValid) return;
                canvas.removeChild(tips);
            },1.5);
        }

    }

    onTipsCard () {
        let canvas = cc.find('GameScene');
        let tipsCard = cc.instantiate(tipCard);
        if(canvas && tipsCard){
            canvas.addChild(tipsCard);
        }
    }
    onCloseTipsCard () {
        let canvas = cc.find('GameScene');
        let tipsCard = cc.find('tipsCard');
        if(tipsCard){
            canvas.removeChild(tipCard);
        }
    }

    // update (dt) {}
}
