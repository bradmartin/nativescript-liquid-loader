/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* http://bradmartin.net
* Open Source Lib : https://github.com/melihaksoy/HoldToLoadLayout
*************************************************************************************/
import { View } from "ui/core/view";

declare var android, com: any;

export class LiquidLoader extends View {
    public static pourFinishEvent = "pourFinish";

    private _androidViewId: number;
    private _android: com.gospelware.liquidbutton.LiquidButton;

    get android(): any {
        return this._android;
    }

    get _nativeView(): any {
        return this._android;
    }

    public _createUI() {
        let LiquidButton = com.gospelware.liquidbutton.LiquidButton;
        this._android = new LiquidButton(this._context);

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);

        try {

            var that = new WeakRef(this);

            this._android.setPourFinishListener(new LiquidButton.PourFinishListener({

                get owner() {
                    return that.get();
                },

                onPourFinish: function () {
                    var owner = that.get();
                    if (owner) {
                        owner._emit(LiquidLoader.pourFinishEvent);
                    }
                }

            }));

        } catch (err) {
            console.log(err);
        }

    }

    public startPour() {
        this._android.startPour();
    }


    public setFillAfter(fillAfter: boolean): void {
        this._android.isFillAfter = fillAfter;
    }


}