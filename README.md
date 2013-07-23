===================================
jQuery Plugin - Add To Home Message
===================================

iOS 6 added a nice feature that allows you to make HTML5 websites look and feel native. However, the website needs to be added to the user's homescreen to be effective. This little plugin displays an "add to home" message on iOS devices.

You can see the plugin in action by viewing http://www.mattsnider.com in Safari on an iOS device.

$.fn.showAddToHome(options)
===========================

This plugin exposes a ``showAddToHome`` function to any jQuery object. To display the message, simply call this function anytime after jQuery and jquery-addToHome.js has been loaded. It will only show the message if the user is viewing the page in iOS Safari. Recommended use:

$(window).showAddToHome()

Options
=======

Styles are applied using default options (see the source code), and should only be messed with, if you know what you are doing. There are five properties that can be edited: triangleDiameter, arrowStyles, elStyles, pStyles, html. The triangleDiameter defaults to 10 and controls how large the arrow is; changing this value will gracefully reposition the message box, if you use the default elStyles. The arrowStyles, elStyles, and pStyles are all objects and represent a collection of CSS styles to be applied to the corresponding DOM elements. The message box is a div tag with a p tag child, and the arrow is a div tag sibling of the message box. The html default is "&#60;p&#62;Add To Home&#60;/p&#62;" and is the content that will be inside the outer message box div. If you remove the p tag, then this widget won't style the inner content.

License
=======

http://opensource.org/licenses/MIT