/**
 * 游戏逻辑
 * 主线：
 *
 * 如何生成糖果
 * 如何构建糖果地图
 * 怎么触摸糖果
 * 怎么找到糖果块（相同颜色的糖果块）
 * 怎么消除糖果
 * 怎么下移糖果
 * 怎么补充糖果
 *
 * 用预制体 实例化一个节点，把节点传到getCandyJs里面，拿到js的内容
 */
cc.Class({
    extends: cc.Component,

    properties: {
        candyPrefab: {
            type: cc.Prefab,
            default: null,
        }
    },

    start () {
        this.newCandy(0,0);
        this.newCandy(1,1);
        // this.newCandy(2,2);
        // this.newCandy(3,3);
        // this.newCandy(4,4);
        // this.newCandy(5,5);
    },
    // 拿糖果的js
    getCandyJs(node) {
        console.log('==>',  node.getComponent('candy'))
        return node.getComponent('candy');
    },

    // 实例化糖果
    newCandy (row,col) {
        var newCandy = cc.instantiate(this.candyPrefab);
        console.log('===>', newCandy);
        console.log('===>', this.node.getComponent('candy'));
        // this.getCandyJs(newCandy).setPos(row,col);
        this.node.addChild(newCandy);
    }
});
