//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// The root of content hosted in a Frame.
//
function Page() {
    ace.UIElement.call(this, "Windows.UI.Xaml.Controls.Page");
};

// Inheritance
Page.prototype = Object.create(ace.UserControl.prototype);

Page.prototype.getBottomAppBar = function () { return this.get("Page.BottomAppBar"); };
Page.prototype.setBottomAppBar = function (commandBar) { this.set("Page.BottomAppBar", commandBar); };

// The same as get/set BottomAppBar, but with a better name:
Page.prototype.getCommandBar = function () { return this.get("Page.BottomAppBar"); };
Page.prototype.setCommandBar = function (commandBar) { this.set("Page.BottomAppBar", commandBar); };

// Footer of page
Page.prototype.getFooter = function () { return this.get("Page.Footer"); };
Page.prototype.setFooter = function (footerBar) { this.set("Page.Footer", footerBar); };

// Helpers for Frame APIs
Page.prototype.getTitle = function () { return this.get("Frame.Title"); };
Page.prototype.setTitle = function (title) { this.set("Frame.Title", title); };

module.exports = Page;
