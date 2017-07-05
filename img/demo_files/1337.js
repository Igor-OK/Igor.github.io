$(document).ready(function () {
    /**
     * Checks for an asterisk in the accessories and adds *shown to the 
     * description
     */
    var shown = '<em class="shown">*Shown</em>';
    $('.rangebox p:contains(*)').after(shown);  
    
    $('#lightbox-gallery a').lightBox({
        txtImage:        '',
        imageBtnClose:   '../img/lightbox/close.png'/*tpa=img/lightbox/close.png*/,
        fixedNavigation: true,
        imageBtnNext:    '../img/lightbox/next.png'/*tpa=img/lightbox/next.png*/,
        imageBtnPrev:    '../img/lightbox/previous.png'/*tpa=img/lightbox/previous.png*/
    });
    
    function positionFooter(original_height)
    {
        var difference = $(window).height() - $(document.body).height();
        
        if (difference < 0) { 
            difference = 0;
        }
        
        difference = difference + original_height;
        $("#footer").css({height: difference + "px"});
    }
  
    positionFooter(200); 
    

    
    $('.fittedbox').hover(
        function () {
            $(this).find('.title').css('color', 'black');
        },
        function () {
            $(this).find('.title').css('color', 'white');
        }
    );
        
    $('.call_to_action li').hover(
        function () {
            var img = $(this).find('img').attr('src'),
                temp = '';
            
            temp = img.split('/img/');
            
            img = temp.join('');
            
            $(this).find('img').attr('src', '/img/over_' + img);
        },
        function () {
            var img = $(this).find('img').attr('src'),
                temp = '';
            
            temp = img.split('over_');
            
            img = temp.join('');
            
            $(this).find('img').attr('src', img);
        }
    );    
});