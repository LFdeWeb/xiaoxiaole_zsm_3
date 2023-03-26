/**
 * 糖果逻辑
 *
 * 类型 控制哪儿个图片
 * 行
 * 列 控制位置
 */

cc.Class({
    extends: cc.Component,

    properties: {
        mType: null, // 糖果的类型
        mRow: null, // 行
        mCol: null // 列
    },
onLoad () {
  cc.systemEvent.on("MOVE_CANDY", this.onMoveCandy, this);
},

    onMoveCandy () {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            this.startPos = event.getLocation();
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var endPos = event.getLocation();
            var direction = endPos.sub(this.startPos);
            if (direction.mag() > 50) {
                if (Math.abs(direction.x) > Math.abs(direction.y)) {
                    if (direction.x > 0) {
                        // right
                        cc.systemEvent.emit("MOVE_CANDY", {row: this.mRow, col: this.mCol, direction: "right"});
                    } else {
                        // left
                        cc.systemEvent.emit("MOVE_CANDY", {row: this.mRow, col: this.mCol, direction: "left"});
                    }
                } else {
                    if (direction.y > 0) {
                        // up
                        cc.systemEvent.emit("MOVE_CANDY", {row: this.mRow, col: this.mCol, direction: "up"});
                    } else {
                        // down
                        cc.systemEvent.emit("MOVE_CANDY", {row: this.mRow, col: this.mCol, direction: "down"});
                    }
                }
            }
        }, this);

    },
    start () {

    },
    // 每个属性，写上set 和 get 方法
    setType(type){
        this.mType = type
        this.setCandyTexture();
    },
    getType() {
        return this.mType
    },
    setPos(row, col){
        this.mRow = row
        this.mCol = col
        this.setCandyPos();
    },
    getPosR() {
        return this.mRow
    },
    getPosC() {
        return this.mCol
    },

    //根据糖果类型设置糖果纹理
    setCandyTexture (){
        var self = this;
        Helper.loader("candy" + this.mType, cc.SpriteFramee,function(frame){
            self.node.getComponent(cc.Sprite).spriteFrame = frame
        });
    },

    // 根据糖果的行列设置糖果坐标
    setCandyPos (){
        this.node.setPosition(cc.v2(32 + 64 * this.mCol,32 + 64 * this.mRow))
    }
});
