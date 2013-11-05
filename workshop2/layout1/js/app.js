$(function(){

        $('.gallery ul').each(function(){
                $(this).css('width', ( $(this).find('li').size() * 620 ) + 20  );
        });

        // ---
        $('.entry').css('width', $('#header').width() );

        $('#entry-wrapper').css('width', $('.entry').size() * $('.entry').width() );

        $('#btnNext').click(function(){
                $('#entry-wrapper').css('left', - $('.entry').width());
        });

        $('#btnPrev').click(function(){
                $('#entry-wrapper').css('left', 0 );
        });

        
});