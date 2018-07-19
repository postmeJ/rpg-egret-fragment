class FunctionBar extends eui.Component {
    private roleBtn: eui.Button;
    private backpackBtn: eui.Button;
    private qianghuaBtn: eui.Button;
    private zhaoxianBtn: eui.Button;
    private chuangDangBtn: eui.Button;
    private shopBtn: eui.Button;
    private mapBtn: eui.Button;


    constructor() {
        super();
        this.skinName = "FunctionBarSkin";
        this.init();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
    }

    private addToStage() {
        // Added to the on stage display list.
    }

    private removeFromStage() {
        // Removed from the display list.
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
    }

    private init() {
        // init
    }
}
