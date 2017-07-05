$(document).ready( function(){
    var info = $('.selected_slide_info'),
        output = '',
        generated_id = '';
    iImage.init();
    
    $('.swatch h2').each(function() {
        generated_id = $(this).text().toLowerCase().replace(/\ /g, "_");
        output += $(this).text() + ": <span id='" + generated_id + "' class='selected_slide'></span>";
    });
        
    info.html(output);
        
});

iImage = {

	elements: [],
	slides: [],
	init: function(){
		iImage.getElements();
		iImage.addEventListeners();
	},
	getElements: function(){
		$("#range-wrapper .content .swatch").each( function(){
			var swatch = [];
			$(".colors img", this).each( function(){
				swatch.push(this);
			});
			iImage.elements.push( swatch );
		});
		
		// Record and initiate large images
		
		for( var t = 0; t < iImage.elements.length; t++ ){
			iImage.slides.push([]);
		}
		
		$(".sliderimage").each( function(){
			var imageID = $(this).attr('id')
			if( imageID != "baseslide" ){
				imageID = imageID.replace(/slide/, "");
				iImage.slides[iImage.getType(imageID)].push(this);
			}
		});
	},
	addEventListeners: function(){
		for( var j = 0; j < iImage.elements.length; j++ ){
			for( var img = 0; img < iImage.elements[j].length; img++ ){
				$(iImage.elements[j][img]).parent().click( function(){
					return false;
				});
				$(iImage.elements[j][img]).click( function(){
                                       
					iImage.handleClick(this);
					return false;
				});
			}
		}
	},
	handleClick: function(element){
		var id           = $(element).parent().attr("id"),
                    type         = iImage.getType(id),
                    title        = $(element).parent().attr('title'),
                    swatch_class = $(element).attr('class');
                $('[id^="slide"]').css('z-index', 2);
                $('#baseslide').css('z-index', 2);
		// Hide all images the same type
		for( var s = 0; s < iImage.elements[type].length; s++ ){
                    if( $(iImage.elements[type][s]).parent().attr('id') != id ){
                        $(iImage.slides[type][s]).fadeOut(500).delay(500);
                    } else {
                        $(iImage.slides[type][s]).fadeIn(500);
                        $('#' + swatch_class).text(title);
                    }
		}
	},
	getType: function(id){
            for( var i = 0; i < iImage.elements.length; i++ ){
                for( var img = 0; img < iImage.elements[i].length; img++ ){
                    if( id == $(iImage.elements[i][img]).parent().attr("id") ){
                        return i;
                    }
                }
            }
	}
}