/**
 * Created by yanfeng-mac on 2016/10/25.
 */
(function () {
    var windowHeight = $(window).height();

    var card1 = $(".card-1");
    var card1Height = card1.height();


    var card2 = $(".card-2");

    var card3 = $(".card-3");

    var card4 = $(".card-4");

    var card5 = $(".card-5");

    var addHeight2 = card1Height*2;
    var addHeight3 = card1Height*3;
    var addHeight4 = card1Height*4;

    var card = $(".card");
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        // console.log(scrollTop);
        if(scrollTop == 0){
            card.each(function () {

                this.css("transform","translate3d(0px,0px,0px)");
            });
        }
        if(scrollTop > 0){
            card5.css("transform","translate3d(0px,"+ (-scrollTop) +"px,0px)")
        }
        if(scrollTop > card1Height){
            card4.css("transform","translate3d(0px,"+ (-(scrollTop - card1Height)) +"px,0px)");
        }
        if(scrollTop > addHeight2){
            card3.css("transform","translate3d(0px,"+ (-(scrollTop - addHeight2)) +"px,0px)");
        }
        if(scrollTop > addHeight3){
            card2.css("transform","translate3d(0px,"+ (-(scrollTop - addHeight3)) +"px,0px)");
        }
        if(scrollTop > addHeight4){
            card1.css("transform","translate3d(0px,"+ (-(scrollTop - addHeight4)) +"px,0px)");
        }
    });
})();
