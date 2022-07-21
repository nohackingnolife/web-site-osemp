$(function(){
    $(".clas").mouseover(function(){
        if ($(".clas").hasClass("is-opened"))
            return;
        $(".clas").addClass("is-opened")
        $(".sub-menu__list").slideDown(600)
    })
    $(".clas").mouseleave(function(){
        $(".sub-menu__list").slideUp(440, () => {jQuery(".clas").removeClass("is-opened")})
    })
});