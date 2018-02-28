jQuery.fn.liScroll=function(settings){settings=jQuery.extend({travelocity:0.07},settings);return this.each(function(){var $strip=jQuery(this);$strip.addClass("newsticker")
var stripWidth=1;$strip.find("li").each(function(i){stripWidth+=jQuery(this,i).outerWidth(true);});var $mask=$strip.wrap("<div class='mask'></div>");var $tickercontainer=$strip.parent().wrap("<div class='tickercontainer'></div>");var containerWidth=$strip.parent().parent().width();$strip.width(stripWidth);var totalTravel=stripWidth+containerWidth;var defTiming=totalTravel/settings.travelocity;function scrollnews(spazio,tempo){$strip.animate({left:'-='+ spazio},tempo,"linear",function(){$strip.css("left",containerWidth);scrollnews(totalTravel,defTiming);});}
scrollnews(totalTravel,defTiming);$strip.hover(function(){jQuery(this).stop();},function(){var offset=jQuery(this).offset();var residualSpace=offset.left+ stripWidth;var residualTime=residualSpace/settings.travelocity;scrollnews(residualSpace,residualTime);});});};
/*
     FILE ARCHIVED ON 14:40:10 Jan 02, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:00:52 May 27, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/