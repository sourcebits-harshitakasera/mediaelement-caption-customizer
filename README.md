#MediaElement-Caption-Customizer - Customize Captions

__Author__   - Harshita Kasera  
__License__   - GPLv2/MIT 


# Introduction

MediaElement-Caption-Customizer  is a <code>MediaElement.js</code> plugin that lets you customize the visual appearance and the positioning of the captions.The font, color, size, background, position of the captions are all configurable. 


# Credits

My Employer - [Sourcebits Inc.](http://www.sourcebits.com)

Thanks to [John Dyer](https://github.com/johndyer), creator of [MediaElement Player](http://mediaelementjs.com/)

# Installation & Usage

### Installation
    <script src="jquery.js"></script>
    <script src="mediaelement-and-player.min.js"></script>
    <script src="mep-feature-caption-customizer.js"></script>
    <link rel="stylesheet" href="mediaelementplayer.css" />

### Usage
    $('#player2').mediaelementplayer({
  	    features: ['playpause','current','progress','duration','tracks','captioncustomizer'],
		    startLanguage:'en',
		    captionColor: "#FBD631",
		    captionSize: "24px",
		    captionBackground : "black",
		    captionFont: "Arial"
	});

# Testing
    *IE7 - Flash 
    *IE8 - Flash
    IE9, IE10 - MP4
    Firefox - Ogv
    Chrome - Webm
    Safari - MP4
    

# Version History

*1.0.0 (2013/01/14)*    
&nbsp;&nbsp;&nbsp;Initial release
