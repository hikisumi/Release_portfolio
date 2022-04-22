$(function(){
    // メニューモーダル表示・非表示
    $('#menu-show').click(function(){
       $('#menu-modal').fadeIn();
    });
    
    $('#menu-close').click(function(){
        $('#menu-modal').fadeOut();
    });
    
    // first表示・非表示
    $('#first-show').click(function(){
       var $first =  $('#first-modal');
        if ($first.hasClass('open')) {
            $first.removeClass('open');
            $first.fadeOut();
        } else {
            $first.addClass('open');
            $first.fadeIn();
        }
    });
    
});