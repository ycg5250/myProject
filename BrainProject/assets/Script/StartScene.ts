

const {ccclass, property} = cc._decorator;
//let location:Array<number> = [-34,-12,10,32];
const itemArr = [];
import Utils from './Utils';
let utils = new Utils();

@ccclass
export default class StartScene extends cc.Component {

    @property(Utils)
    public utils:Utils = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    homeBtn: cc.Node = null;

    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null;

    @property(cc.PageView)
    pageView: cc.PageView = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let key = "name";
        let value = 10;
    //    this.utils.text = value;
        utils.setInt(key,value);
        let name = utils.getInt("name",0);
    //    if(utils.getInt("winLevel",1 == 1)){
    //        utils.setInt("winLevel",1);
    //    }
        for(let i = 0;i < 40;i++){
            let item = this.addItemSlot(i);
            itemArr.push(item);
            item.name = "item"+i;
        }
    //    this.pageView.isScrolling;
    //    this.pageView.node.on('mousedown', this.callback, this);
    }

    callback (event) {
        // 这里的 event 是一个 EventCustom 对象，你可以通过 event.detail 获取 PageView 组件
    //    var pageView = event.detail;
    //    console.log("点击了当前视图");
        // 另外，注意这种方式注册的事件，也无法传递 customEventData
     }

    start () {
        
         /*   item.on(cc.Node.EventType.MOUSE_DOWN,function(event){
                if(this.pageView.isScrolling){
                    item.setScale(1);
                }else{
                    item.setScale(0.8);
                }
                
            },this);

            item.on(cc.Node.EventType.MOUSE_UP,function(event){
                console.log("鼠标点击了："+event.target.name);
                item.setScale(1);
            },this);*/

    }


    addItemSlot(index){
        let item = cc.instantiate(this.itemPrefab);
    //    this.node.children[6].children[0].children[0].children[0].addChild(item);
        let pageIndex = 0;
        if(index < 12){
            pageIndex = 1;
        }else if(index > 11 && index < 24){
            pageIndex = 2;
        }else if(index > 23 && index < 36){
            pageIndex = 3;
        }else if(index > 35 && index < 48){
            pageIndex = 4;
        }
        let page = cc.find("StartScene/PageView/view/content/page_"+pageIndex);
        page.addChild(item);

        return item;
    }

    update (dt) {

    }

    onHomeBtn(){
        console.log("返回主界面");
        cc.director.loadScene("MainScene");
    }
}
