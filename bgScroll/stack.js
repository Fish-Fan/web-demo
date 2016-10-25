/**
 * Created by yanfeng-mac on 2016/10/24.
 */
(function () {
    var windowHeight = $(window).height();

    var wrapper1 = $(".wrapper-1");
    // var wrapperOffsetTop1 = wrapper1.offset().top;
    var bg1 = $(".bg-1");

    // var wrapper2 = $(".wrapper-2");
    // var wrapperOffsetTop2 = wrapper2.offset().top;
    // var bg2 = $(".bg-2");
    //
    // var wrapper3 = $(".wrapper-3");
    // var wrapperOffsetTop3 = wrapper3.offset().top;
    // var bg3 = $(".bg-3");




    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();


        //首屏滚动事件
        if(scrollTop > 0 ){
            bg1.css("transform","translate3d(0px,"+ (scrollTop*0.3) +"px,0px)");
        }
        // //第二屏滚动事件
        // if(scrollTop + windowHeight > wrapperOffsetTop2){
        //     bg2.css("transform","translate3d(0px,"+ ((scrollTop - wrapperOffsetTop2)*0.3) +"px,0px)");
        // }
        // //第三屏滚动事件
        // if(scrollTop + windowHeight > wrapperOffsetTop3){
        //     bg3.css("transform","translate3d(0px,"+ ((scrollTop - wrapperOffsetTop3)*0.3) +"px,0px)");
        // }


    });
}());
/**
 * Created by yanfeng-mac on 2016/10/25.
 */
