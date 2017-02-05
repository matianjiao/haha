$(function () {
    //设置页面高
    $(".scall").css({height: $(document.body).height() + "px"});

    //点击侧导航
    $(".click").click(function () {
        var index = $(".click").index($(this));
        if ($(this).attr("zhankai") == "false") {
            $(this).find(".zi").slideDown(400);
            $(this).attr("zhankai", "true");
            $(this).css({background: "#101421"});
            $(this).find("li").css({color: "#85888A"});
            $(this).find("li").find(".icons").css({background: "url(./images/icon" + index + ".png)"});
            $(this).find(".open").css({background: "url(./images/he.png)"})
        } else {
            $(this).find(".zi").removeClass("kai");
            $(this).find(".zi").slideUp(200);
            $(this).attr("zhankai", "false");
            $(this).css({background: "rgba(255,255,255,0)"});
            $(this).find("li").css({color: "#fff"});
            $(this).find("li").find(".icons").css({background: "url(./images/i" + index + ".png)"});
            $(this).find(".open").css({background: "url(./images/kai.png)"})
        }
    });

    //入金时选择银行
    $("#form2 .inputBank").click(function () {
        $("#form2 .inputBank").removeClass("bankCurrent");
        $("#form2 .inputBank .sure").css({display: "none"});
        $(this).find(".sure").css({display: "block"});
        $(this).addClass("bankCurrent");
    })


    // //    换肤
    // $(".ex1").click(function () {
    //     $(".bj1").fadeIn(500)
    // })
    // $(".ex2").click(function () {
    //     $(".bj2").fadeIn(500)
    // })
    // $(".beijing").click(function () {
    //     $(this).fadeOut(500)
    // })
    //
    // $(".choose-item").click(function () {
    //     var index = $(".choose-item").index($(this));
    //     index = index + 1;
    //     $("#body").css({background: "url(./images/bj" + index + ".jpg)"});
    // })

    //编辑
    $(".bianji").click(function () {
        $(".close-img").fadeIn(200);
    })
    $(".close-img").click(function () {
        var imgindex = $(".close-img").index($(this));
        $(".choose-item").eq(imgindex).fadeOut(400);
    })


//    选择银行的下拉
    $(".chooseBank").click(function () {
        $(".chooseBank-item").css({display: "block"});
    })
    $(".banks").click(function () {
        var show = $(this).find(".kahao").html()
        var show1 = $(this).attr("bankName");
        $(".chooseBank .choose-now").html(show1 + " " + show);
    })
    $(".chooseBank-item").click(function (e) {
        e.stopPropagation();
        $(this).css({display: "none"});
    })


//    排序的三角
    var kaiguan = true;
    $(".paixu").click(function (e) {
        e.preventDefault();
        if (kaiguan == true) {
            $(".paixu .paixu-arrow").css({background: "url(images/arrow-up.png)"});
            kaiguan = false;
        } else {
            $(".paixu .paixu-arrow").css({background: "url(images/arrow-down.png)"});
            kaiguan = true;
        }
    })


//    点击列表
    $(".list-title").click(function () {
        $(".list-hover").css({display: "none"});
        $(".list-title").removeClass("listclick-add");
        //一直点自己
        if ($(this).parent().find(".list-hover").attr("show") == "false") {
            $(".list-hover").attr("show", "false");
            $(this).parent().find(".list-hover").attr("show", "true");
            $(this).parent().find(".list-hover").css({display: "block"});
            $(this).addClass("listclick-add");
        } else {
            $(".list-hover").attr("show", "false");
        }
    })


//    我的代理
    $(".jia-jian").click(function () {
        console.log($(this).parents(".parent").attr("kai"))
        if($(this).parent().parent().parent().attr("kai")=="true"){
            $(this).css({background: "url(./images/addjian_06.png)"});
            $(this).parent().parent().parent().find(".zi").css({display:"none"});
            $(this).parent().parent().parent().attr("kai","false");
        }else{
            $(this).css({background: "url(./images/addjian_03.png)"});
            $(this).parent().parent().parent().find(".zi").css({display:"block"});
            $(this).parent().parent().parent().attr("kai","true");
        }

    })
var a="000000";
    console.log(parseInt(00, 16))

})