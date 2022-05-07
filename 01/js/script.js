$(function(){
    // メニューモーダル表示・非表示
    $('#menu-show').click(function(){
       $('#menu-modal').fadeIn();
    });
    
    $('#menu-close').click(function(){
        $('#menu-modal').fadeOut();
    });
});