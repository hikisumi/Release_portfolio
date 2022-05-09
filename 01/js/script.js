/* $(function(){
    // メニューモーダル表示・非表示
    $('#menu-show').click(function(){
       $('#menu-modal').fadeIn();
    });
    
    $('#menu-close').click(function(){
        $('#menu-modal').fadeOut();
    });
}); */

const menu = document.querySelector("#menu-show");

menu.addEventListener("click", () => {
  console.log("click!!!!");
  menu.classList.toggle("active");
});
