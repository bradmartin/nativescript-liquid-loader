/**
 * Contains the LiquidLoader class, which represents the loading animation.
 */

declare module "nativescript-liquid-loader" {
    import { EventData } from "data/observable";
    import { Property } from "ui/core/dependency-observable";
    import { View } from "ui/core/view";

    /**
     * Represents a Liquid Loader component.
     */
    export class LiquidLoader extends View {

        /**
         * String value used when hooking to the pourFinish event.
         */
        public static pourFinishEvent: string;

        /**
         * Gets the native [android widget](https://github.com/yoruriko/LiquidButton) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: any /* com.gospelware.liquidbutton.LiquidButton */;

    }

}