(function ($) {
    // captionator

    $.extend(mejs.MepDefaults, {
       captionFont:"",
       captionSize:"",
       captionColor:"",
       captionBackground:"",
       captionPosition:"" 
    });

    $.extend(MediaElementPlayer.prototype, {
        buildcaptioncustomizer: function (player, controls, layers, media) {
            var $caption_text_container = $('.mejs-captions-text'),
                $caption_container = $caption_text_container.parent();

            if(player.options.captionPosition == "top"){
                    $caption_container.parent().css("top","0px");
                    $caption_container.css("bottom","1px");
                }

            if(player.options.captionBackground){
                $caption_container.css("background",player.options.captionBackground);
                $caption_text_container.css("background","none");
            }
            $caption_text_container.css("font-family",player.options.captionFont);
            $caption_text_container.css("font-size",player.options.captionSize);
            $caption_text_container.css("color",player.options.captionColor);

        }
    });

})(mejs.$);