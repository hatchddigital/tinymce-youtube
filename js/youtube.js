tinyMCEPopup.requireLangPack();

var YouTubeDialog = {
	init : function() {
        // Should load up the YouTube content and fill the field, but you
        // can't select the video at this point.
	},

	insert : function() {
        var youtube_id = document.forms[0].youtube_id.value
          , html = '<div class="video youtube-video"><iframe width="640" height="480" src="https://www.youtube.com/embed/' +
                    youtube_id + '?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>';
		tinyMCEPopup.editor.execCommand('mceInsertContent', false, html);
		tinyMCEPopup.close();
	},

    close : function () {
        tinyMCEPopup.close();
    }
};

tinyMCEPopup.onInit.add(YouTubeDialog.init, YouTubeDialog);
