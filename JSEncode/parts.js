// add hatena bookmark button
(function(){
    var elms = document.getElementsByTagName( "span" );
    for( i = 0; i < elms.length; i++ ){
        if( elms[ i ].getAttribute( "data-button" ) !== "hatena-bookmark" ) continue;
        img = document.createElement( "img" );
        img.src = "http://b.st-hatena.com/images/entry-button/button-only.gif";
        img.setAttribute( "style", "vertical-align: middle; cursor:pointer;border:none" );
        img.setAttribute( "title", "Add to hatna-bookmark" );
        var f = function( e ){
            var elm, url, title, w, s;
            elm = e.target || e.srcElement;
            url = elm.parentNode.getAttribute( "url" ) || location.href;
            title = elm.parentNode.getAttribute( "title" ) || document.title;
            w = window.open( "#", "_blank" );
            s = "http://b.hatena.ne.jp/add?mode=confirm&is_bm=1&title=" + encodeURIComponent( title ) + "&url=" + encodeURIComponent( url );
            w.location = s;
        }
        if( typeof img.addEventListener !== "undefined" ){
            img.addEventListener( "click", f, false );
        }else{
            img.attachEvent( "onclick", f );
        }
        elms[ i ].appendChild( img );
    }
 })();

// twitter
(function(){
    var elms = document.getElementsByTagName( "span" );
    for( i = 0; i < elms.length; i++ ){
        if( elms[ i ].getAttribute( "data-button" ) !== "hatena-bookmark" ) continue;
        img = document.createElement( "img" );
        img.src = "https://si0.twimg.com/a/1331143368/images/b2_btn_icon.gif";
        img.setAttribute( "style", "vertical-align: middle; cursor:pointer;border:none;margin-left: 2px; " +
			"background-color:white;padding: 2px; border: solid 1px silver; border-radius:3px; -moz-border-radius: 3px; -webkit-border-radius:3px; " );
        img.setAttribute( "title", "tweet" );
        var f = function( e ){
            var elm, url, title, w, s;
            elm = e.target || e.srcElement;
            url = elm.parentNode.getAttribute( "url" ) || location.href;
            title = elm.parentNode.getAttribute( "title" ) || document.title;
            w = window.open( "#", "_blank" );
			s = "https://twitter.com/intent/tweet?text=" + encodeURIComponent( title ) + "&url=" + encodeURIComponent( url );
            w.location = s;
        }
        if( typeof img.addEventListener !== "undefined" ){
            img.addEventListener( "click", f, false );
        }else{
            img.attachEvent( "onclick", f );
        }
        elms[ i ].appendChild( img );
    }

	


})();
