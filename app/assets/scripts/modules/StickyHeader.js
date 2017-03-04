import $ from 'jquery'; /* Because you use jquery in the constructor function */
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; /* This is to make use of Waypoints */

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header"); /* This selects elements with site-header as a class */
    this.headerTriggerElement = $(".large-hero__title"); /* This selects the trigger element, when element reaches the top of the screen it will trigger the event */
    this.createHeaderWaypoint(); /* We want the waypoint to be created as soon as the page loads, so we need to call and run the method from the constructor */
  }

  createHeaderWaypoint() {
    var that = this; /* Because "this" in the handler function does not point to "this" in the StickyHeader */
    new Waypoint({ /* We have acces to the waypoint class, because we imported it at the top */
      element: this.headerTriggerElement[0],
      handler: function(direction) { /* Direction is there to enable different events on scrolling down or up  */
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark"); /* Targets the element and gives class */
        } else { /* Other direction would obviously be "up" */
          that.siteHeader.removeClass("site-header--dark"); /* Targets the element and gives class */
        }
      } /* What you want to happen when triggered, add a modifier class to the header element */
    });
  }
}

export default StickyHeader;
