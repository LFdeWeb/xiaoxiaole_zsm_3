// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

//糖果类型
window.candyType = {
    candyType1:1,//蓝色
    candyType2:2, //绿色
    candyType3:3,//紫色
    candyType4:4,//红色
    candyType5:5,//橙色
};

window.Helper = cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },
    statics:{
//在两个数之间随机整数(包括这两个数)
        randomNum(min, max) {
            var range = max - min;
            var rand=Math.random();
            var num = min + Math.round(rand * range);
            return num;
        },
        loadRes:function (url, type,callback) {
                if (!url) {
                    return;
                }
                cc.loader.loadRes(url, type, function (err, res) {
                    if (err) {
                        console.log('-----------loadRes err:' + err);
                        return;
                        if (callback) {
                            callback(res);
                        }
                    }
                    ;
                })
            }
        }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {
    //
    // },

    // update (dt) {},
});
module.exports = Helper;
