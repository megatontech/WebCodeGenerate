(function () {
 var borderRadius1='',borderRadius2='',borderRadius3='',borderRadius4='',borderRadius = '';
	function pSwatches(pContainer, bgTopColor, bgBottomColor, fontColor, borderColor, boxShadowColor, textShadowColor) {
		var p = [bgTopColor, bgBottomColor, fontColor, borderColor, boxShadowColor, textShadowColor];
		pContainer.push(p);
		return pContainer;
	}

	var pArray = []; // This array includes predefined colors for default palettes
	pArray = pSwatches(pArray, '#ededed','#dfdfdf','#777777','#dcdcdc','#ffffff','#ffffff'); // Grey
	pArray = pSwatches(pArray, '#fe1a00','#ce0100','#ffffff','#d83526','#f29c93','#b23e35'); // Red
	pArray = pSwatches(pArray, '#77d42a','#5cb811','#306108','#268a16','#caefab','#aade7c'); // Green
	pArray = pSwatches(pArray, '#79bbff','#378de5','#ffffff','#84bbf3','#bbdaf7','#528ecc'); // Blue
	pArray = pSwatches(pArray, '#ffc477','#fb9e25','#ffffff','#eeb44f','#fce2c1','#cc9f52'); // Orange
	pArray = pSwatches(pArray, '#c123de','#a20dbd','#ffffff','#a511c0','#e184f3','#9b14b3'); // Purple
	pArray = pSwatches(pArray, '#c579ff','#a341ee','#ffffff','#a946f5','#e6cafc','#8628ce'); // Purple
	pArray = pSwatches(pArray, '#f0c911','#f2ab1e','#c92200','#e65f44','#f9eca0','#ded17c'); // Orange
	pArray = pSwatches(pArray, '#9dce2c','#8cb82b','#ffffff','#83c41a','#c1ed9c','#689324'); // Green
	pArray = pSwatches(pArray, '#f24537','#c62d1f','#ffffff','#d02718','#f5978e','#810E05'); // Red
	pArray = pSwatches(pArray, '#fae4bd','#eac380','#ffffff','#eeb44f','#fcf8f2','#cc9f52'); // Orange
	pArray = pSwatches(pArray, '#ff5bb0','#ef027d','#ffffff','#ee1eb5','#fbafe3','#c70067'); // Pink
	pArray = pSwatches(pArray, '#79bbff','#4197ee','#ffffff','#469df5','#cae3fc','#287ace'); // Blue
	pArray = pSwatches(pArray, '#f9f9f9','#e9e9e9','#666666','#dcdcdc','#ffffff','#ffffff'); // Grey
	pArray = pSwatches(pArray, '#f6b33d','#d29105','#ffffff','#eda933','#fed897','#cd8a15'); // Orange
	pArray = pSwatches(pArray, '#b8e356','#a5cc52','#ffffff','#83c41a','#d9fbbe','#86ae47'); // Green
	pArray = pSwatches(pArray, '#3d94f6','#1e62d0','#ffffff','#337fed','#97c4fe','#1570cd'); // Blue
	pArray = pSwatches(pArray, '#a53df6','#7c16cb','#ffffff','#9c33ed','#d197fe','#7d15cd'); // Purple
	pArray = pSwatches(pArray, '#ffce79','#eeaf41','#ffffff','#eeb44f','#fceaca','#ce8e28'); // Orange
	pArray = pSwatches(pArray, '#eea1fc','#d441ee','#ffffff','#dd5df4','#f4cafc','#b63dcc'); // Pink
	pArray = pSwatches(pArray, '#63b8ee','#468ccf','#14396a','#3866a3','#bee2f9','#7cacde'); // Blue
	pArray = pSwatches(pArray, '#ffec64','#ffab23','#333333','#ffaa22','#fff6af','#ffee66'); // Orange
	pArray = pSwatches(pArray, '#fa665a','#d34639','#ffffff','#d83526','#fab3ad','#98231a'); // Red
	pArray = pSwatches(pArray, '#f1bdfa','#da80ea','#ffffff','#e284f3','#f6dcfb','#b952cc'); // Pink
	pArray = pSwatches(pArray, '#fc8d83','#e4685d','#ffffff','#d83526','#f7c5c0','#b23e35'); // Red
	pArray = pSwatches(pArray, '#ffffff','#f6f6f6','#666666','#dcdcdc','#ffffff','#ffffff'); // Grey
	pArray = pSwatches(pArray, '#89c403','#77a809','#ffffff','#74b807','#a4e271','#528009'); // Green
	pArray = pSwatches(pArray, '#bddbfa','#80b5ea','#ffffff','#84bbf3','#dcecfb','#528ecc'); // Blue
	pArray = pSwatches(pArray, '#dfbdfa','#bc80ea','#ffffff','#c584f3','#efdcfb','#9752cc'); // Purple
	pArray = pSwatches(pArray, '#da3df6','#b51ed0','#ffffff','#d133ed','#ee97fe','#b115cd'); // Pink

	function _rgb2hex(rgb_string, r, g, b) {
		var rgb = (1 << 24) | (parseInt(r) << 16) | (parseInt(g) << 8) | parseInt(b);
		return '#' + rgb.toString(16).substr(1);
	}

	function stringRGB2HEX(string)   {
		if (typeof string === 'string') {
			string = string.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g, _rgb2hex);
		}
		return string;
	}

	var cssbuttongenerator = {
		appendPalettes : function () { // This function uses predefined colors to create default palettes
			for ( var i=0; i < pArray.length; i++) {
				var pDefaultItem = '';
				pDefaultItem += '<li id="palette'+i+'">';			
				pDefaultItem += '<span class="bgTopColor" title="BG Gradient Color1"></span>';
				pDefaultItem += '<span class="bgBottomColor" title="BG Gradient Color2"></span>';
				pDefaultItem += '<span class="fontColor" title="Font Color"></span>';
				pDefaultItem += '<span class="borderColor" title="Border Color"></span>';
				pDefaultItem += '<span class="boxShadowColor" title="Box Shadow Color"></span>';
				pDefaultItem += '<span class="textShadowColor" title="Text Shadow Color"></span>';
				pDefaultItem += '</li>';
				$('.default-palettes ul').append(pDefaultItem);
				$('#palette'+i+' span').each(function(index){
					$(this).css('background-color', pArray[i][index]);
				});
			}
			$('#palette0').addClass('selected');
			var pItem = $('#palette0').html();
			$('.current-palette').html(pItem);
			$('.current-palette .bgTopColor').addClass('selected');
		},
		
		styleName : 'bgTopColor',
		styles : { // Includes variables for CSS properties
			bgTopColor : pArray[0][0],
			bgBottomColor : pArray[0][1],
			fontColor : pArray[0][2],
			borderColor : pArray[0][3],
			boxShadowColor : pArray[0][4],
			textShadowColor : pArray[0][5],
			borderRadius : '6px',
			horizontalText: '0',
			borderSize : '1px',
			boxShadowBlurRadius : '0px',
			boxShadowInset : 'inset',
			boxShadowOffsetX : '0px',
			boxShadowOffsetY : '1px',
			boxShadowSpreadRadius : '0px',
			customClass : 'classname',
			fontFamily : 'arial',
			fontSize : '15px',
			fontWeight : 'bold',
			fontStyle : 'normal',
			widthX : '100px',
			heightY : '50px',
			lineHeight : '50px', 
			textShadowBlurRadius : '0px',
			textShadowOffsetX : '1px',
			textShadowOffsetY : '1px',
			styleTagHeader : '<style type="text/css">\n',
			styleTagFooter : '</style>'
		},

		setStyles : function () { // This function sets CSS properties of the button
			
			var styles = cssbuttongenerator.styles;
			var background = '';
			var hoverBackground = '';
			var ihoverBackground = '';
			
						var customClass = '';
				customClass = styles.customClass;
			
			if ($('#transparent').is(':checked')) {
				background = '	background-color:transparent;\n';
				$('.current-palette .bgTopColor').addClass('unavailable');
				$('.current-palette .bgBottomColor').addClass('unavailable');
			} else {
				$('.current-palette .bgTopColor').removeClass('unavailable');
				$('.current-palette .bgBottomColor').removeClass('unavailable');			
			}
		
			if ($('#solid').is(':checked') ) {
				background = '	background-color:'+styles.bgTopColor+';\n';
				hoverBackground += '.classname:hover {\n';
				hoverBackground += '	background-color:'+styles.bgBottomColor+';\n';
				hoverBackground += '}';
				ihoverBackground += '.'+customClass+':hover {\n';
				ihoverBackground += '	background-color:'+styles.bgBottomColor+';\n';
				ihoverBackground += '}';
				$('.current-palette .bgTopColor').attr('title','Background Color');
				$('.current-palette .bgBottomColor').attr('title',':hover Background Color');	
			} else {
				$('.current-palette .bgTopColor').attr('title','BG Gradient Color1');
				$('.current-palette .bgBottomColor').attr('title','BG Gradient Color2');	
			}

			if (! $('#solid').is(':checked') && ! $('#transparent').is(':checked') ) {
				background += '	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, '+styles.bgTopColor+'), color-stop(1, '+styles.bgBottomColor+') );\n';
				background += '	background:-moz-linear-gradient( center top, '+styles.bgTopColor+' 5%, '+styles.bgBottomColor+' 100% );\n';
				background += '	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\''+styles.bgTopColor+'\', endColorstr=\''+styles.bgBottomColor+'\');\n';
				background += '	background-color:'+styles.bgTopColor+';\n';
				hoverBackground += '.classname:hover {\n';
				hoverBackground += '	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, '+styles.bgBottomColor+'), color-stop(1, '+styles.bgTopColor+') );\n';
				hoverBackground += '	background:-moz-linear-gradient( center top, '+styles.bgBottomColor+' 5%, '+styles.bgTopColor+' 100% );\n';
				hoverBackground += '	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\''+styles.bgBottomColor+'\', endColorstr=\''+styles.bgTopColor+'\');\n';
				hoverBackground += '	background-color:'+styles.bgBottomColor+';\n';
				hoverBackground += '}';
				ihoverBackground += '\n.'+customClass+':hover {\n';
				ihoverBackground += '	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, '+styles.bgBottomColor+'), color-stop(1, '+styles.bgTopColor+') );\n';
				ihoverBackground += '	background:-moz-linear-gradient( center top, '+styles.bgBottomColor+' 5%, '+styles.bgTopColor+' 100% );\n';
				ihoverBackground += '	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\''+styles.bgBottomColor+'\', endColorstr=\''+styles.bgTopColor+'\');\n';
				ihoverBackground += '	background-color:'+styles.bgBottomColor+';\n';
				ihoverBackground += '}';
			}
			
			var boxShadow = ''
			if ($('#boxShadow-check').is(':checked') ) {
				boxShadow += '	-moz-box-shadow:'+styles.boxShadowInset+' '+styles.boxShadowOffsetX+' '+styles.boxShadowOffsetY+' '+styles.boxShadowBlurRadius+' '+styles.boxShadowSpreadRadius+' '+styles.boxShadowColor+';\n';
				boxShadow += '	-webkit-box-shadow:'+styles.boxShadowInset+' '+styles.boxShadowOffsetX+' '+styles.boxShadowOffsetY+' '+styles.boxShadowBlurRadius+' '+styles.boxShadowSpreadRadius+' '+styles.boxShadowColor+';\n';
				boxShadow += '	box-shadow:'+styles.boxShadowInset+' '+styles.boxShadowOffsetX+' '+styles.boxShadowOffsetY+' '+styles.boxShadowBlurRadius+' '+styles.boxShadowSpreadRadius+' '+styles.boxShadowColor+';\n';
				$('.current-palette .boxShadowColor').removeClass('unavailable');
				$('.boxShadow-title').removeClass('unavailable');
			} else {
				$('.current-palette .boxShadowColor').addClass('unavailable');
				$('.boxShadow-title').addClass('unavailable');
			}
	
			var textShadow = ''
			if ($('#textShadow-check').is(':checked') ) {
				textShadow += '	text-shadow:'+styles.textShadowOffsetX+' '+styles.textShadowOffsetY+' '+styles.textShadowBlurRadius+' '+styles.textShadowColor+';\n';
				$('.current-palette .textShadowColor').removeClass('unavailable');
				$('.textShadow-title').removeClass('unavailable');
			} else {
				$('.current-palette .textShadowColor').addClass('unavailable');
				$('.textShadow-title').addClass('unavailable');
			}	

			if(styles.horizontalText!="")
			{
				horizontalText = '	text-indent:'+styles.horizontalText+';\n';
			}
			
			if(styles.widthX!="")
			{
				widthX = '	width:'+styles.widthX+';\n';
			}
			if(styles.heightY!="")
			{
				heightY = '	height:'+styles.heightY+';\n';
			}
			
			if (styles.borderRadius)
			{
				if ($('#radiusTopLeft').is(':checked') )
				{
					borderRadius1 = '';
					borderRadius1 += '	-webkit-border-top-left-radius:'+styles.borderRadius+';\n';
					borderRadius1 += '	-moz-border-radius-topleft:'+styles.borderRadius+';\n';
					borderRadius1 += '	border-top-left-radius:'+styles.borderRadius+';\n';
				}
				if ($('#radiusTopRight').is(':checked') )
				{
					borderRadius2 = '';
					borderRadius2 += '	-webkit-border-top-right-radius:'+styles.borderRadius+';\n';
					borderRadius2 += '	-moz-border-radius-topright:'+styles.borderRadius+';\n';
					borderRadius2 += '	border-top-right-radius:'+styles.borderRadius+';\n';
				}
				if ($('#radiusBottomRight').is(':checked') )
				{
					borderRadius3 = '';
					borderRadius3 += '	-webkit-border-bottom-right-radius:'+styles.borderRadius+';\n';
					borderRadius3 += '	-moz-border-radius-bottomright:'+styles.borderRadius+';\n';
					borderRadius3 += '	border-bottom-right-radius:'+styles.borderRadius+';\n';
				}
				if ($('#radiusBottomLeft').is(':checked') )
				{
					borderRadius4 = '';
					borderRadius4 += '	-webkit-border-bottom-left-radius:'+styles.borderRadius+';\n';
					borderRadius4 += '	-moz-border-radius-bottomleft:'+styles.borderRadius+';\n';
					borderRadius4 += '	border-bottom-left-radius:'+styles.borderRadius+';\n';
				}
				borderRadius="";
				borderRadius=borderRadius1+borderRadius2+borderRadius3+borderRadius4;
			}
			
			if ($.browser.msie) {
				$('.border-radius label, .box-shadow label, .text-shadow label, .title-checkbox label').addClass('unavailable');
				$('.boxShadow-title, .textShadow-title').addClass('unavailable');
				$('.current-palette .boxShadowColor, .current-palette .textShadowColor').addClass('unavailable');
			}

			var border = '';
			if (styles.borderSize != '0px') {
				border = '	border:'+styles.borderSize+' solid '+styles.borderColor+';\n';
			}
			

	
	
			var classItems = '';
			classItems += '.classname {\n';
			classItems += boxShadow;
			classItems += background;
			classItems += borderRadius;
			classItems += horizontalText;
			classItems += border;
			classItems += '	display:inline-block;\n';
			classItems += '	color:'+styles.fontColor+';\n';
			classItems += '	font-family:'+styles.fontFamily+';\n';
			classItems += '	font-size:'+styles.fontSize+';\n';
			classItems += '	font-weight:'+styles.fontWeight+';\n';
			classItems += '	font-style:'+styles.fontStyle+';\n';
			classItems += heightY;
			
			classItems += '	line-height:'+styles.heightY+';\n';
			classItems += widthX;
			classItems += '	text-decoration:none;\n';
			classItems += '	text-align:center;\n';
			classItems += textShadow;
			classItems += '}';
			classItems += hoverBackground;
			classItems += '.classname:active {\n';
			classItems += '	position:relative;\n';
			//classItems += '	text-align: left;\n';
			classItems += '	top:1px;\n';
			classItems += '}';
			
			var iclassItems = '';
			iclassItems += '.';
			iclassItems += customClass;
			iclassItems += ' {\n';
			iclassItems += boxShadow;
			iclassItems += background;
			iclassItems += borderRadius;
			iclassItems += horizontalText;
			iclassItems += border;
			iclassItems += '	display:inline-block;\n';
			iclassItems += '	color:'+styles.fontColor+';\n';
			iclassItems += '	font-family:'+styles.fontFamily+';\n';
			iclassItems += '	font-size:'+styles.fontSize+';\n';
			iclassItems += '	font-weight:'+styles.fontWeight+';\n';
			iclassItems += '	font-style:'+styles.fontStyle+';\n';
			iclassItems += heightY;
			iclassItems += '	line-height:'+styles.heightY+';\n';
			iclassItems += widthX;
			iclassItems += '	text-decoration:none;\n';
			iclassItems += '	text-align:center;\n';
			iclassItems += textShadow;
			iclassItems += '}';
			iclassItems += ihoverBackground;
			iclassItems += '.';
			iclassItems += customClass;
			iclassItems += ':active {\n';
			iclassItems += '	position:relative;\n';
			iclassItems += '	top:1px;\n';
			iclassItems += '}';
			
			$('style').remove();
			$('head').append('<style type="text/css">' + classItems + '</style>');
			$('output').empty();
			$('output').append(''+styles.styleTagHeader+'' + iclassItems + ''+styles.styleTagFooter+'');
			$('output').append('\n/* Allinworld99.blogspot.com */');

			var getCode = $('output').html();
			$('textarea').val(getCode);


		},

		settings : function () {
			var styles = cssbuttongenerator.styles;
			var buttonName = $('#buttonValue').val();
			var className = $('#classValue').val();
			$('#code input').val('<a href="#" class="'+className+'">'+buttonName+'</a>');



			$('#buttonValue').keyup(function(){ // Changes the default name (text)  of the button ,eg. Login, Register, Signin etc.
				var buttonValue = $(this).val();
				$('.classname').text(buttonValue);
				$('#code input').val(
					$('#code input').val().replace('>'+buttonName+'<', '>'+buttonValue+'<')
				);
				buttonName = $(this).val();
			});
			
			$('#classValue').keyup(function(){ // Changes the default name (text)  of the button ,eg. Login, Register, Signin etc.
				var classValue = $(this).val();
				$('#code input').val(
					$('#code input').val().replace('class="'+className+'"', 'class="'+classValue+'"')
				);
				className = $(this).val();
				styles.customClass = className;
				cssbuttongenerator.setStyles();
			});
			

		
			$('#fontWeight').click(function() { //Setting for font weight
				if ($(this).is(':checked')) {
					styles.fontWeight = 'bold';
				} else {
					styles.fontWeight = 'normal';
				}
				cssbuttongenerator.setStyles();
			});
			
			$('#fontStyle').click(function() { //Setting for font weight
				if ($(this).is(':checked')) {
					styles.fontStyle = 'italic';
				} else {
					styles.fontStyle = 'normal';
				}
				cssbuttongenerator.setStyles();
			});
			
			$('#styleTag').click(function() { //Setting for showing style tag
				if ($(this).is(':checked')) {
					styles.styleTagHeader = '<style type="text/css">\n';
					styles.styleTagFooter = '\n</style>';
				} else {
					styles.styleTagHeader = '';
					styles.styleTagFooter = '';
				}
				cssbuttongenerator.setStyles();
			});

			$('select').change(function(){ 
				styles.fontFamily = $('option:selected').val();
				cssbuttongenerator.setStyles();
			});

			$('#setting-fontSize').slider({ //Setting for font size
				range: "min",
				value: 15,
				min: 8,
				max: 60,
				slide: function(event, ui) {
					styles.fontSize = ui.value + 'px';
					$('#fontSize').val(styles.fontSize);
					cssbuttongenerator.setStyles();
				}
			});
			$('#fontSize').val($('#setting-fontSize').slider('value') + 'px');

			$('#setting-borderRadius').slider({ //Setting for border radius
				range: "min",
				value: parseInt(styles.borderRadius),
				min: 0,
				max: 42,
				slide: function(event, ui) {
					styles.borderRadius = ui.value + 'px';
					$('#borderRadius').val(styles.borderRadius);
					cssbuttongenerator.setStyles();
				}
			});
			$('#borderRadius').val($('#setting-borderRadius').slider('value') + 'px');
			
			$('#setting-horizontalText').slider({ //Setting for horizontal text
				range: "min",
				value: 50,
				min: 0,
				max: 100,
				slide: function(event, ui) {
					
					var w = $('.classname').width();
					var a = w * ( ui.value - 50 );
					var b = a / 100;
					styles.horizontalText = b + 'px';
					$('#horizontalText').val(ui.value+'%');
					cssbuttongenerator.setStyles();
				}
			});
			$('#horizontalText').val($('#setting-horizontalText').slider('value') + '%');

			$('#setting-borderSize').slider({ //Setting for border size
				range: "min",
				value: 1,
				min: 0,
				max: 12,
				slide: function(event, ui) {
					styles.borderSize = ui.value + 'px';
					$('#borderSize').val(styles.borderSize);
					cssbuttongenerator.setStyles();
				}
			});
			$('#borderSize').val($('#setting-borderSize').slider('value') + 'px');

			$('#setting-heightY').slider({ //Setting for height
				range: "min",
				value: 50,
				min: 0,
				max: 100,
				slide: function(event, ui) {
					styles.heightY = ui.value + 'px';
					$('#heightY').val(styles.heightY);
					cssbuttongenerator.setStyles();
				}
			});
			$('#heightY').val($('#setting-heightY').slider('value') + 'px');

			$('#setting-widthX').slider({ //Setting for width
				range: "min",
				value: 100,
				min: 0,
				max: 200,
				slide: function(event, ui) {
					styles.widthX = ui.value + 'px';
					$('#widthX').val(styles.widthX);
					cssbuttongenerator.setStyles();
				}
			});

			$('#widthX').val($('#setting-widthX').slider('value') + 'px');

			$('.setting-shadow').each(function(idx, elm) { // Settings for  box shadow  and text shadow CSS properties
				var styleName = elm.id.replace('option-', '');
				$('#' + elm.id).slider({
					range: "min",
					value: 1,
					min: -50,
					max: 50,
					slide: function(event, ui) {
						styles[styleName] = ui.value + 'px';
						$('#' + styleName).val(styles[styleName]);
						cssbuttongenerator.setStyles();
					}
				});
			});
			$('.multiple').val($('.setting-shadow').slider('value') + 'px');

			$('.setting-shadow-blur').each(function(idx, elm) { // Setting for the blur value of box shadow  and text shadow CSS properties
				var styleName = elm.id.replace('option-', '');
				$('#' + elm.id).slider({
					range: "min",
					value: 0,
					min: 0,
					max: 50,
					slide: function(event, ui) {
						styles[styleName] = ui.value + 'px';
						$('#' + styleName).val(styles[styleName]);
						cssbuttongenerator.setStyles();
					}
				});
			});
			$('.multiple-blur').val($('.setting-shadow-blur').slider('value') + 'px');

			$('#boxShadow-check').click(function() {
				$('.box-shadow, .title-checkbox').toggle();
				cssbuttongenerator.setStyles();
			});
			
			$('#textShadow-check').click(function() {
				$('.text-shadow').toggle();
				cssbuttongenerator.setStyles();
			});
			
			$('#boxShadowInset').click(function() { // Setting for the inset value of box shadow CSS property
				if ($(this).is(':checked')) {
					styles.boxShadowInset = 'inset';
				} else {
					styles.boxShadowInset = '';
				}
				cssbuttongenerator.setStyles();
			});

			$('#transparent').click(function() { // Setting for background type. (Solid color, gradient or transparent)
				$('#solid').attr('checked',false);
				styles.bgTopColor = stringRGB2HEX($('.current-palette .bgTopColor').css('background-color'));
				styles.bgBottomColor = stringRGB2HEX($('.current-palette .bgBottomColor').css('background-color'));			
				cssbuttongenerator.setStyles();
			});
		

			$('#solid').click(function() { // Setting for background type. (Solid color, gradient or transparent)
				$('#transparent').attr('checked',false);	
				cssbuttongenerator.setStyles();
			});

			$('.current-palette span').live('click', function(){
				$('.current-palette span').removeClass('selected');
				$(this).removeClass('unavailable');
				cssbuttongenerator.styleName = $(this).attr('class');

				$(this).addClass('selected');
				if ($('#transparent').is(':checked') ) {
					$('.current-palette .bgTopColor').addClass('unavailable');
					$('.current-palette .bgBottomColor').addClass('unavailable');
				}
				if ( ! $('#boxShadow-check').is(':checked') || $.browser.msie ) {
					$('.current-palette .boxShadowColor').addClass('unavailable');
				}
				if ( ! $('#textShadow-check').is(':checked') || $.browser.msie ) {
					$('.current-palette .textShadowColor').addClass('unavailable');
				}

				var swatchColor = stringRGB2HEX($(this).css('backgroundColor'));
				$('.color-picker').ColorPickerSetColor(swatchColor);
			});

			$('.color-picker').ColorPicker({ // Color picker for the button
				flat:true,
				color: pArray[0][0],
				onChange: function (hsb, hex, rgb) {
					$('.current-palette .selected').css('backgroundColor', '#' + hex);
					styles[cssbuttongenerator.styleName] = '#' + hex;
					cssbuttongenerator.setStyles();
				}
			});

			$('.preview-swatch-color').ColorPicker({ // Color picker for the background of preview area
				color: '#f5f5f5',
				onChange: function (hsb, hex, rgb) {
					$('.preview-swatch-color, table').css('backgroundColor', '#' + hex);
				}
			});

			$('.preview-swatch-color').click(function(){
				$('.preview-bg div').removeClass('selected');
				$(this).addClass('selected');
				$('table').css('background-image','');
			});

			$('.preview-swatch-image').click(function(){
				$('.preview-bg div').removeClass('selected');
				$(this).addClass('selected');
				$('table').css('background-image','url(images/preview-bg.jpg)');
			});

			$('.default-palettes li').click(function() { // Gets selected palette's colors and sets them into the current swatches. 
				$('.default-palettes li').removeClass();
				$(this).addClass('selected');
				styles.bgTopColor = stringRGB2HEX($('.bgTopColor', this).css('background-color'));
				styles.bgBottomColor = stringRGB2HEX($('.bgBottomColor', this).css('background-color'));
				styles.fontColor = stringRGB2HEX($('.fontColor', this).css('background-color'));
				styles.borderColor = stringRGB2HEX($('.borderColor', this).css('background-color'));
				styles.textShadowColor = stringRGB2HEX($('.textShadowColor', this).css('background-color'));
				styles.boxShadowColor = stringRGB2HEX($('.boxShadowColor', this).css('background-color'));
				$('.current-palette .bgTopColor').css('background-color', styles.bgTopColor);
				$('.current-palette .bgBottomColor').css('background-color', styles.bgBottomColor);
				$('.current-palette .fontColor').css('background-color', styles.fontColor);
				$('.current-palette .borderColor').css('background-color', styles.borderColor);
				$('.current-palette .textShadowColor').css('background-color', styles.textShadowColor);
				$('.current-palette .boxShadowColor').css('background-color', styles.boxShadowColor);
				var swatchColor = stringRGB2HEX($('.current-palette .selected').css('backgroundColor'));
				$('.color-picker').ColorPickerSetColor(swatchColor);
				cssbuttongenerator.setStyles();
			});
		},

		userInterface : function () {
			$('.dropdown').click(function() {
				$('.default-palettes ul').show();
				$('.dropdown').parent().hover(function() {
				}, function(){
					$('.default-palettes ul').hide();
				});
			});

			$('.current-palette').click(function(){
				$(this).css({'background-color':'#EBECEF', 'border-color':'#BFC4CE'});
				$('.color-picker').show();
			});

			$(document).click(function(event){
				if ($(event.target).closest('.color-container').length === 0) {
					$('.color-picker').hide();
					$('.current-palette').removeAttr('style');
				}
			});

			$('textarea, .input').focus(function(e) { // Selects the current value of the input elements
				var textfield = this;
				setTimeout(function(){$(textfield).select();},10);
				return false;
			});

			//$('.classname').click(function(){ // Insert styles into the textarea
			//	var getCode = $('output').html();
			//	$('textarea').val(getCode);
			//});

			$('#buttonValue').each(function() { // Resets the default text value (text) of buttonValue
				var defaultValue = this.value;
				$(this).focus(function() {
					if(this.value == defaultValue) {
						this.value = '';
					}
				});
			});
			
			$('#classValue').each(function() { // Resets the default text value (text) of buttonValue
				var defaultValue = this.value;
				$(this).focus(function() {
					if(this.value == defaultValue) {
						this.value = '';
					}
				});
			});
			
			if ($.browser.opera) {
				$('#solid').attr('checked',true); // Opera does not support gradients
			}
			
			if ($.browser.msie) {
				$('.ie-message').show();
			}
			
			$('.ie-message span').click(function(){
				$('.ie-message').hide();
			});
		}
	};

	jQuery(document).ready(function($) {
		cssbuttongenerator.appendPalettes();
		cssbuttongenerator.setStyles();
		cssbuttongenerator.userInterface();
		cssbuttongenerator.settings();
		
		//checkbox for border corner
		$('.bordercorner').click(function(){
			//$('#setting-borderRadius').slider('value',665);
			if($(this).attr('id')=="radiusTopLeft")
			{
				borderRadius1 = '';
				borderRadius1 += '	-webkit-border-top-left-radius:0px;\n';
				borderRadius1 += '	-moz-border-radius-topleft:0px;\n';
				borderRadius1 += '	border-top-left-radius:0px;\n';
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="radiusTopRight")
			{
				borderRadius2 = '';
				borderRadius2 += '	-webkit-border-top-right-radius:0px;\n';
				borderRadius2 += '	-moz-border-radius-topright:0px;\n';
				borderRadius2 += '	border-top-right-radius:0px;\n';
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="radiusBottomRight")
			{
				borderRadius3 = '';
				borderRadius3 += '	-webkit-border-bottom-right-radius:0px;\n';
				borderRadius3 += '	-moz-border-radius-bottomright:0px;\n';
				borderRadius3 += '	border-bottom-right-radius:0px;\n';
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="radiusBottomLeft")
			{
				borderRadius4 = '';
				borderRadius4 += '	-webkit-border-bottom-left-radius:0px;\n';
				borderRadius4 += '	-moz-border-radius-bottomleft:0px;\n';
				borderRadius4 += '	border-bottom-left-radius:0px;\n';
				cssbuttongenerator.setStyles();
			}
		});
		
		$('#colorStyles').change(function(){
			var id=$(this).val();
			$('#'+id).trigger('click');
		});
		
		$('#buttonStyle').change(function(){
			
			borderRadius1 = '';
			borderRadius1 += '	-webkit-border-top-left-radius:0px;\n';
			borderRadius1 += '	-moz-border-radius-topleft:0px;\n';
			borderRadius1 += '	border-top-left-radius:0px;\n';
			borderRadius2 = '';
			borderRadius2 += '	-webkit-border-top-right-radius:0px;\n';
			borderRadius2 += '	-moz-border-radius-topright:0px;\n';
			borderRadius2 += '	border-top-right-radius:0px;\n';
			borderRadius3 = '';
			borderRadius3 += '	-webkit-border-bottom-right-radius:0px;\n';
			borderRadius3 += '	-moz-border-radius-bottomright:0px;\n';
			borderRadius3 += '	border-bottom-right-radius:0px;\n';
			borderRadius4 = '';
			borderRadius4 += '	-webkit-border-bottom-left-radius:0px;\n';
			borderRadius4 += '	-moz-border-radius-bottomleft:0px;\n';
			borderRadius4 += '	border-bottom-left-radius:0px;\n';
		
			var styleValue=$(this).val();
			if(styleValue==1)
			{
				$('.bordercorner').attr('checked','checked');
				cssbuttongenerator.styles.borderRadius = '20px';
				$('#setting-borderRadius').slider('value', 20);
				$('#borderRadius').val(cssbuttongenerator.styles.borderRadius);
				$('#palette4').trigger('click');
				cssbuttongenerator.setStyles();
			}
			if(styleValue==2)
			{
				$('.bordercorner').attr('checked',false);
				$('#radiusTopLeft').attr('checked','checked');
				$('#radiusBottomRight').attr('checked','checked');
				cssbuttongenerator.styles.borderRadius = '37px';
				$('#setting-borderRadius').slider('value', 37);
				$('#borderRadius').val(cssbuttongenerator.styles.borderRadius);
				$('#palette7').trigger('click');
				cssbuttongenerator.setStyles();
			}
			if(styleValue==3)
			{
				$('.bordercorner').attr('checked',false);
				$('#radiusTopLeft').attr('checked','checked');
				$('#radiusTopRight').attr('checked','checked');
				cssbuttongenerator.styles.borderRadius = '15px';
				$('#setting-borderRadius').slider('value', 15);
				$('#borderRadius').val(cssbuttongenerator.styles.borderRadius);
				cssbuttongenerator.styles.widthX = '86px';
				$('#setting-widthX').slider('value', 86);
				$('#widthX').val(cssbuttongenerator.styles.widthX);
				$('#palette21').trigger('click');
				cssbuttongenerator.setStyles();
			}
			if(styleValue==4)
			{
				$('.bordercorner').attr('checked',false);
				cssbuttongenerator.styles.widthX = '100px';
				$('#setting-widthX').slider('value', 100);
				$('#widthX').val(cssbuttongenerator.styles.widthX);
				cssbuttongenerator.styles.heightY = '40px';
				$('#setting-heightY').slider('value', 40);
				$('#heightY').val(cssbuttongenerator.styles.heightY);
				$('#palette27').trigger('click');
				cssbuttongenerator.setStyles();
			}
			if(styleValue==5)
			{
				$('.bordercorner').attr('checked',false);
				cssbuttongenerator.styles.widthX = '131px';
				$('#setting-widthX').slider('value', 131);
				$('#widthX').val(cssbuttongenerator.styles.widthX);
				cssbuttongenerator.styles.heightY = '65px';
				$('#setting-heightY').slider('value', 65);
				$('#heightY').val(cssbuttongenerator.styles.heightY);
				$('#palette20').trigger('click');
				cssbuttongenerator.setStyles();
			}
		});
		
		$('.refresh').click(function(){
			if($(this).attr('id')=="refresh-borderRadius")
			{
				$('.bordercorner').attr('checked','checked');
				cssbuttongenerator.styles.borderRadius = '6px';
				$('#setting-borderRadius').slider('value', 6);
				$('#borderRadius').val(cssbuttongenerator.styles.borderRadius);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-horizontalText")
			{
				
				cssbuttongenerator.styles.horizontalText = '0px';
				$('#setting-horizontalText').slider('value', 50);
				$('#horizontalText').val(cssbuttongenerator.styles.horizontalText);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-fontSize")
			{
				
				cssbuttongenerator.styles.fontSize = '15px';
				$('#setting-fontSize').slider('value', 15);
				$('#fontSize').val(cssbuttongenerator.styles.fontSize);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-borderSize")
			{
				
				cssbuttongenerator.styles.borderSize = '1px';
				$('#setting-borderSize').slider('value', 1);
				$('#borderSize').val(cssbuttongenerator.styles.borderSize);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-heightY")
			{
				
				cssbuttongenerator.styles.heightY = '50px';
				$('#setting-heightY').slider('value', 50);
				$('#heightY').val(cssbuttongenerator.styles.heightY);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-widthX")
			{
				
				cssbuttongenerator.styles.widthX = '100px';
				$('#setting-widthX').slider('value', 100);
				$('#widthX').val(cssbuttongenerator.styles.widthX);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-boxShadowOffsetY")
			{
				
				cssbuttongenerator.styles.boxShadowOffsetY = '1px';
				$('#option-boxShadowOffsetY').slider('value', 1);
				$('#boxShadowOffsetY').val(cssbuttongenerator.styles.boxShadowOffsetY);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-boxShadowOffsetX")
			{
				
				cssbuttongenerator.styles.boxShadowOffsetX = '0px';
				$('#option-boxShadowOffsetX').slider('value', 0);
				$('#boxShadowOffsetX').val(cssbuttongenerator.styles.boxShadowOffsetY);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-boxShadowBlurRadius")
			{
				
				cssbuttongenerator.styles.boxShadowBlurRadius = '0px';
				$('#option-boxShadowBlurRadius').slider('value', 0);
				$('#boxShadowBlurRadius').val(cssbuttongenerator.styles.boxShadowBlurRadius);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-boxShadowSpreadRadius")
			{
				
				cssbuttongenerator.styles.boxShadowSpreadRadius = '0px';
				$('#option-boxShadowSpreadRadius').slider('value', 0);
				$('#boxShadowSpreadRadius').val(cssbuttongenerator.styles.boxShadowSpreadRadius);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-textShadowOffsetY")
			{
				
				cssbuttongenerator.styles.textShadowOffsetY = '1px';
				$('#option-textShadowOffsetY').slider('value', 1);
				$('#textShadowOffsetY').val(cssbuttongenerator.styles.textShadowOffsetY);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-textShadowOffsetX")
			{
				
				cssbuttongenerator.styles.textShadowOffsetX = '1px';
				$('#option-textShadowOffsetX').slider('value', 1);
				$('#textShadowOffsetX').val(cssbuttongenerator.styles.textShadowOffsetX);
				cssbuttongenerator.setStyles();
			}
			if($(this).attr('id')=="refresh-textShadowBlurRadius")
			{
				
				cssbuttongenerator.styles.textShadowBlurRadius = '0px';
				$('#option-textShadowBlurRadius').slider('value', 0);
				$('#textShadowBlurRadius').val(cssbuttongenerator.styles.textShadowBlurRadius);
				cssbuttongenerator.setStyles();
			}
		});
	});
	
})();