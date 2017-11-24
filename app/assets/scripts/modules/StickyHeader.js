import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor(){
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".home__text");
        this.createHeaderWaypoint();
    }

    createHeaderWaypoint(){
        var that = this;
        new Waypoint({
            element: that.headerTriggerElement[0],
            handler: function (direction) {
                if (direction == "down"){
                    that.siteHeader.addClass("site-header--dark");
                }
                else{
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }
}

export default StickyHeader;
