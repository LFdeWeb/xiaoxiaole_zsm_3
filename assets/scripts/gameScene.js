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
        },
        candyPrefab2: {
            type: cc.Prefab,
            default: null,
        },
        candyPrefab3: {
            type: cc.Prefab,
            default: null,
        },
        candyPrefab4: {
            type: cc.Prefab,
            default: null,
        },
        candyPrefab5: {
            type: cc.Prefab,
            default: null,
        }
    },

    start () {


// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         let randomNum = Math.random();
//         if (randomNum < 0.2) {
//             this.newCandy(i, j);
//         } else if (randomNum < 0.4) {
//             this.newCandy2(i, j);
//         } else if (randomNum < 0.6) {
//             this.newCandy3(i, j);
//         } else if (randomNum < 0.8) {
//             this.newCandy4(i, j);
//         } else {
//             this.newCandy5(i, j);
//         }
//         this.getCandyJs(newCandy);
//     }
// }

        for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let randomNum = Math.random();
        if (randomNum < 0.2) {
            this.newCandy(i, j);
        } else if (randomNum < 0.4) {
            this.newCandy2(i, j);
        } else if (randomNum < 0.6) {
            this.newCandy3(i, j);
        } else if (randomNum < 0.8) {
            this.newCandy4(i, j);
        } else {
            this.newCandy5(i, j);
        }
        // this.getCandyJs(newCandy);
    }
}


        // this.newCandy2(2, 2);

    },
    // 拿糖果的js
    // getCandyJs(node) {
    //     node.setAnchorPoint(cc.v2(0, 0));
    //     node.setPosition(cc.v2(0, 0));
    //     console.log('==>',  node.getComponent('candy'))
    //     return node.getComponent('candy');
    // },
      getCandyJs(node) {
        node.setAnchorPoint(cc.v2(0, 0));
        console.log('==>',  node.getComponent('candy'))
        return node.getComponent('candy');
    },


    // 实例化糖果
    newCandy (row,col) {
        var newCandy = cc.instantiate(this.candyPrefab);
        console.log('===>', newCandy);
        console.log('===1233==>',  newCandy.getComponent('candy'));
        // this.getCandyJs(newCandy).setPos(row,col);
        newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        this.node.addChild(newCandy);
    },
    newCandy2 (row,col) {
        var newCandy = cc.instantiate(this.candyPrefab2);
        newCandy.setScale(0.15);
        // newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        // this.node.addChild(newCandy);
        console.log('===>', newCandy);
        console.log('===1233==>',  newCandy.getComponent('candy'));
        // this.getCandyJs(newCandy).setPos(row,col);
        newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        this.node.addChild(newCandy);
    },
    newCandy3 (row,col) {
        var newCandy = cc.instantiate(this.candyPrefab3);
        newCandy.setScale(0.15);
        // newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        // this.node.addChild(newCandy);
        console.log('===>', newCandy);
        console.log('===1233==>',  newCandy.getComponent('candy'));
        // this.getCandyJs(newCandy).setPos(row,col);
        newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        this.node.addChild(newCandy);
    },
    newCandy4 (row,col) {
        var newCandy = cc.instantiate(this.candyPrefab4);
        newCandy.setScale(0.15);
        // newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        // this.node.addChild(newCandy);
        console.log('===>', newCandy);
        console.log('===1233==>',  newCandy.getComponent('candy'));
        // this.getCandyJs(newCandy).setPos(row,col);
        newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        this.node.addChild(newCandy);
    },
    newCandy5 (row,col) {
        var newCandy = cc.instantiate(this.candyPrefab5);
        newCandy.setScale(0.15);
        // newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        // this.node.addChild(newCandy);
        console.log('===>', newCandy);
        console.log('===1233==>',  newCandy.getComponent('candy'));
        // this.getCandyJs(newCandy).setPos(row,col);
        newCandy.setPosition(cc.v2(32 + 64 * row,32 + 64 * col))
        this.node.addChild(newCandy);
    }
});
