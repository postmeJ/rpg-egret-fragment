class ActivityBar extends eui.Component {
    private activityBtn: eui.Button;
    private KaiFunBtn: eui.Button;
    private infoBtn: eui.Button;


    constructor() {
        super();
        this.skinName = "ActivityBarSkin";
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
