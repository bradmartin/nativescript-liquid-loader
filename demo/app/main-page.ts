import * as observable from 'data/observable';
import * as pages from 'ui/page';
import * as app from 'application';
import * as platform from 'platform';
import { Color } from 'color';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
 
    if (app.android && platform.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new Color("#004D40").android);
        window.setNavigationBarColor(new Color("#004D40").android);
    }


}