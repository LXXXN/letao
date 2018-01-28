window.addEventListener('load', function () {
    var letaoindex = new letaoIndex();
    letaoindex.sliderInit();
    letaoindex.scroll();


});
var letaoIndex = function () {

}
letaoIndex.prototype = {
    sliderInit: function () {
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
        });
    },

    scroll:function(){
        mui('.mui-scroll-wrapper').scroll({
            scrollY:true,
            scrollX:true,
            startX:0,
            startY:0,
            indicators:true,
            deceleration:0.0006,
            bounce:true

        });

    }

}