window.onload = function () {

    /* 获取 dom 节点 start
        最终把获取 dom 节点的部分封装成一个函数，然后返回一个对象
    */

    /** ---- header start ---- */
    // 导航下边的白色小箭头
    var arrowEl = document.querySelector(".head-main > .arrow");
    // 导航下面所有的 li 
    var liNodes = document.querySelectorAll(".head-main > .nav > .nav-list > li");
    // 第一个 li
    var firstLiNode = liNodes[0];
    // 所有 li 下面的 .up 
    var upNodes = document.querySelectorAll(".head-main>.nav > .nav-list > li .up")
    // 第一个 li 下面的 .up
    var firstUp = upNodes[0];
    // 获取 head
    var head = document.querySelector("#wrap > #head");

    var musicNode = document.querySelector("#wrap > #head .music");
    var audioNode = document.querySelector("#wrap > #head .music > audio");
    /** ---- header end ---- */


    /** ---- content start ---- */
    // 获取 content
    var contentNode = document.querySelector("#content");

    // 获取 content 下边的 ul 
    var contentListNode = document.querySelector("#content>.list");

    // 获取 content 下边的所有的 li
    var contentLiNodes = document.querySelectorAll("#content>.list > li");
    /** ---- content end ---- */

    /** ---- 第一屏 start ---- */
    // 所有的 banner 控制点
    var bannerAllBtn = document.querySelectorAll("#content > .list > .home .btn > li");

    // 所有 banner 的列表
    var bannerAll = document.querySelectorAll("#content > .list > .home .banner > li");

    // 轮播图区域
    var bannerNode = document.querySelector("#content > .list > .home .banner");


    /** ---- 第一屏 end ---- */


    /** ---- 第四屏 end ---- */
    var aboutULs = document.querySelectorAll("#content > .list > .about .right-box > .item > ul");

    /** ---- 第四屏 end ---- */


    var teamLast = document.querySelector("#content > .list > .team .last");
    var teamUL = document.querySelector("#content > .list > .team .last>ul");
    var teamLis = document.querySelectorAll("#content > .list > .team .last > ul > li");

    var dotLis = document.querySelectorAll("#content > .dot > li");

    var mask = document.querySelector("#mask");
    var loadingLine = document.querySelector("#mask .line");
    var mianNode = document.querySelectorAll("#mask div");

    /* 获取 dom 节点 end */


    // 用来同步导航的索引值  index
    var now = 0;
    // 鼠标滚轮事件的定时器
    var scrollTimer = 0;
    // 内容区 banner 3D 效果的定时器
    var timer3D = 0;
    // 当前索引的上一个索引
    var oldIndex = 0;
    // 自动轮播的当前索引
    var autoIndex = 0;

    // 出入场动画的  上一屏索引
    var preIndex = 0;






    // 出入场动画
    var arrAn = [
        {
            anIn: function () {
                // 第一屏的入场动画
                var bannerNode = document.querySelector("#content .home .banner");
                var btnNode = document.querySelector("#content .home .btn");

                bannerNode.style.transform = "translateY(0px)";
                btnNode.style.transform = "translateY(0px)";
                bannerNode.style.opacity = 1;
                btnNode.style.opacity = 1;

            },
            anOut: function () {
                // 第一屏的出场动画
                var bannerNode = document.querySelector("#content .home .banner");
                var btnNode = document.querySelector("#content .home .btn");

                bannerNode.style.transform = "translateY(-700px)";
                btnNode.style.transform = "translateY(200px)";
                bannerNode.style.opacity = 0;
                btnNode.style.opacity = 0;

            }
        },
        {
            anIn: function () {
                var plane1 = document.querySelector("#content .source .plane1 ");
                var plane2 = document.querySelector("#content .source .plane2 ");
                var plane3 = document.querySelector("#content .source .plane3 ");

                plane1.style.transform = "translate(0px,0px)";
                plane2.style.transform = "translate(0px,0px)";
                plane3.style.transform = "translate(0px,0px)";
            },
            anOut: function () {
                var plane1 = document.querySelector("#content .source .plane1 ");
                var plane2 = document.querySelector("#content .source .plane2 ");
                var plane3 = document.querySelector("#content .source .plane3 ");

                plane1.style.transform = "translate(-200px,-200px)";
                plane2.style.transform = "translate(-200px,200px)";
                plane3.style.transform = "translate(200px,-200px)";
            }
        },
        {
            anIn: function () {
                var pencel1 = document.querySelector("#content .works .pencel1");
                var pencel2 = document.querySelector("#content .works .pencel2");
                var pencel3 = document.querySelector("#content .works .pencel3");

                pencel1.style.transform = "translateY(0px)";
                pencel2.style.transform = "translateY(0px)";
                pencel3.style.transform = "translateY(0px)";
            },
            anOut: function () {
                var pencel1 = document.querySelector("#content .works .pencel1");
                var pencel2 = document.querySelector("#content .works .pencel2");
                var pencel3 = document.querySelector("#content .works .pencel3");

                console.log(pencel1, pencel2, pencel3);
                pencel1.style.transform = "translateY(-100px)";
                pencel2.style.transform = "translateY(100px)";
                pencel3.style.transform = "translateY(100px)";

            }
        },
        {
            anIn: function () {
                var oneNode = document.querySelector("#content > .list > .about .right-box > .item:nth-child(1)");
                var twoNode = document.querySelector("#content > .list > .about .right-box > .item:nth-child(2)");
                oneNode.style.transform = "rotate(0deg)";
                twoNode.style.transform = "rotate(0deg)";

            },
            anOut: function () {
                var oneNode = document.querySelector("#content > .list > .about .right-box > .item:nth-child(1)");
                var twoNode = document.querySelector("#content > .list > .about .right-box > .item:nth-child(2)");
                oneNode.style.transform = "rotate(30deg)";
                twoNode.style.transform = "rotate(-30deg)";

            }
        },
        {
            anIn: function () {
                var text = document.querySelector("#content .team .text");
                var textRight = document.querySelector("#content .team .text-right");

                text.style.transform = "translateX(0px)";
                textRight.style.transform = "translateX(0px)";
            },
            anOut: function () {
                var text = document.querySelector("#content .team .text");
                var textRight = document.querySelector("#content .team .text-right");

                text.style.transform = "translateX(-100px)";
                textRight.style.transform = "translateX(100px)";
            }
        }

    ];


    for (var i = 0; i < arrAn.length; i++) {
        arrAn[i].anOut();
    }



    loadingAnimation();
    //开机动画
    function loadingAnimation() {
        var arr = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'about1.jpg', 'about2.jpg', 'about3.jpg', 'about4.jpg', 'worksimg1.jpg', 'worksimg2.jpg', 'worksimg3.jpg', 'worksimg4.jpg', 'team.png', 'greenLine.png'];
        var flag = 0;
        for (var i = 0; i < arr.length; i++) {
            var img = new Image();
            img.src = "../img/" + arr[i];

            img.onload = function () {
                flag++;

                loadingLine.style.width = flag / arr.length * 100 + "%";
            }
        }

        loadingLine.addEventListener("transitionend", function () {
            if (flag == arr.length) {
                for (var i = 0; i < mianNode.length; i++) {
                    mianNode[i].style.height = 0 + "px";
                }
                this.style.display = "none";
                arrAn[0].anIn();
            }
        });

        mianNode[0].addEventListener("transitionend", function () {
            mask.remove();
            audioNode.play();
            home3D();

        });
    }


    // // arrAn[4].anOut();
    // setInterval(function () {
    //     arrAn[0].anIn();
    // }, 2000);

    //第五屏交互效果
    bilibili();
    function bilibili() {
        var oc = null;  //canvas
        var timer1 = 0;
        var timer2 = 0;
        // 设置 鼠标移动上去的透明效果
        for (var i = 0; i < teamLis.length; i++) {
            // 绑定事件
            teamLis[i].onmouseenter = function () {

                // 把所有的 li 透明度设置为 0.5
                for (var j = 0; j < teamLis.length; j++) {
                    teamLis[j].style.opacity = .5;
                }

                // 把当前的 li 透明度设置为 1
                this.style.opacity = 1;

                addCanvas();

                oc.style.left = this.offsetLeft + "px";
            }


        }


        // 添加 canvas 
        function addCanvas() {
            // 没有 oc
            if (!oc) {
                // 创建一个 canvas
                oc = document.createElement("canvas");

                // 调整 canvas 的尺寸
                oc.width = teamLis[0].offsetWidth;
                oc.height = teamLis[0].offsetHeight;

                // oc.style.background = "pink";

                oc.onmouseleave = function () {
                    for (var j = 0; j < teamLis.length; j++) {
                        teamLis[j].style.opacity = 1;
                    }

                    removeCanvas();
                }

                teamLast.appendChild(oc);
                QiPao();
            }
        }

        function removeCanvas() {
            oc.remove();
            oc = null;
            clearInterval(timer1);
            clearInterval(timer2);

        }


        // 气泡
        function QiPao() {
            if (oc.getContext) {
                var ctx = oc.getContext("2d");

                var arr = [];

                // 封装圆的信息
                timer1 = setInterval(function () {
                    // 圆的半径
                    var r = 6 * Math.random() + 2;

                    // 随机圆心
                    var x = Math.random() * oc.width;
                    var y = oc.height - r;



                    // 随机圆的颜色 rgba
                    var red = Math.round(Math.random() * 255);
                    var green = Math.round(Math.random() * 255);
                    var blue = Math.round(Math.random() * 255);
                    var alpha = 1;

                    // 曲线的度数
                    var deg = 0;

                    // 曲线运动的起点
                    var startX = x;
                    var startY = y;

                    // 曲线的运动形式
                    var step = 10 * Math.random() + 10;

                    // 把圆的所有信息添加到数组中
                    arr.push({
                        x: x,
                        y: y,
                        r: r,
                        red: red,
                        green: green,
                        blue: blue,
                        alpha: alpha,
                        deg: deg,
                        startX: startX,
                        startY: startY,
                        step: step
                    });
                }, 50);

                // 效果
                timer2 = setInterval(function () {
                    // 清除画布
                    ctx.clearRect(0, 0, oc.width, oc.height);
                    console.log(arr);
                    // 圆的动画效果
                    for (var i = 0; i < arr.length; i++) {
                        arr[i].deg += 10;
                        arr[i].x = arr[i].startX + Math.sin(arr[i].deg * Math.PI / 180) * arr[i].step * 2;
                        arr[i].y = arr[i].startY - (arr[i].deg * Math.PI / 180) * arr[i].step;

                        if (arr[i].y <= 200) {
                            arr.splice(i, 1);
                        }
                    }

                    // 将 arr 中的圆 绘制到画布上
                    for (var i = 0; i < arr.length; i++) {
                        ctx.save();

                        // 设置圆的样式
                        ctx.fillStyle = "rgba(" + arr[i].red + "," + arr[i].green + "," + arr[i].blue + "," +
                            arr[i].alpha + ")";

                        ctx.beginPath();

                        // 开始绘制圆
                        ctx.arc(arr[i].x, arr[i].y, arr[i].r, 0, 360 * Math.PI / 180);
                        // 填充
                        ctx.fill();

                        ctx.restore();
                    }
                }, 1000 / 60);

            }
        }

        // 鼠标移出  ul 的时候没有透明度
        // teamUL.onmouseleave = function () {
        //     for (var j = 0; j < teamLis.length; j++) {
        //         teamLis[j].style.opacity = 1;
        //     }
        // }
    }

    picBoom();
    // 第四屏图片炸裂效果
    function picBoom() {
        for (var i = 0; i < aboutULs.length; i++) {
            change(aboutULs[i]);
        }

        // 真正处理逻辑
        function change(UL) {

            var src = UL.dataset.src;
            var w = UL.offsetWidth / 2;
            var h = UL.offsetHeight / 2;

            // 创建结构
            for (var i = 0; i < 4; i++) {
                var liNode = document.createElement("li");
                var imgNode = document.createElement("img");

                liNode.style.width = w + "px";
                liNode.style.height = h + "px";


                imgNode.src = src;
                imgNode.style.left = -(i % 2) * w + "px";
                imgNode.style.top = -Math.floor(i / 2) * h + "px";



                liNode.appendChild(imgNode);
                UL.appendChild(liNode);
            }

            UL.onmouseenter = function () {

                var fourImgNodes = this.querySelectorAll("ul > li >img");

                fourImgNodes[0].style.top = h + "px";
                fourImgNodes[1].style.left = - 2 * w + "px";
                fourImgNodes[2].style.left = w + "px";
                fourImgNodes[3].style.top = - 2 * h + "px";
            }

            UL.onmouseleave = function () {
                var fourImgNodes = this.querySelectorAll("ul > li >img");

                fourImgNodes[0].style.top = 0 + "px";
                fourImgNodes[1].style.left = - w + "px";
                fourImgNodes[2].style.left = 0 + "px";
                fourImgNodes[3].style.top = - h + "px";
            }
        }
    }

    // 第一屏 3D 效果
    function home3D() {
        // 处理 banner 下面所有的控制点
        for (var i = 0; i < bannerAllBtn.length; i++) {

            // 记录当前的 banner 索引
            bannerAllBtn[i].index = i;

            //添加事件
            bannerAllBtn[i].onclick = function () {

                // 点击的时候清除定时器
                clearInterval(timer3D);

                // 把所有的控制点样式清空
                for (var j = 0; j < bannerAllBtn.length; j++) {
                    bannerAllBtn[j].classList.remove("active");
                }

                // 把当前点击的这一个控制点的样式设置为 active
                this.classList.add("active");

                // 从左往右点击(当前索引 > 上一次索引)
                if (this.index > oldIndex) {
                    bannerAll[this.index].classList.add("rightShow");
                    bannerAll[this.index].classList.remove("rightHead");
                    bannerAll[this.index].classList.remove("leftHead");
                    bannerAll[this.index].classList.remove("leftShow");

                    bannerAll[oldIndex].classList.add("leftHead");
                    bannerAll[oldIndex].classList.remove("rightHead");
                    bannerAll[oldIndex].classList.remove("rightShow");
                    bannerAll[oldIndex].classList.remove("leftShow");
                }

                // 从右往左点击(当前索引 < 上一次索引)
                if (this.index < oldIndex) {
                    bannerAll[this.index].classList.add("leftShow");
                    bannerAll[this.index].classList.remove("rightHead");
                    bannerAll[this.index].classList.remove("leftHead");
                    bannerAll[this.index].classList.remove("rightShow");

                    bannerAll[oldIndex].classList.add("rightHead");
                    bannerAll[oldIndex].classList.remove("leftHead");
                    bannerAll[oldIndex].classList.remove("rightShow");
                    bannerAll[oldIndex].classList.remove("leftShow");
                }

                // 每次点击完了以后需要将 当前的索引设置为上一次点击的索引
                oldIndex = this.index;

                /* 
                    手动轮播完成后，需要继续执行自动轮播
                    因此需要在手动点击的那个索引的位置开始自动轮播
                */

                // 将当前的索引设置为 自动轮播开始的索引
                // autoIndex = this.index;

                // 继续执行自动轮播
                // bannerMove();

            }

        }

        // 调用自动轮播函数
        bannerMove();
        // 从左往右 自动轮播
        function bannerMove() {

            // 每次调用自动轮播的时候先清除一下定时器
            clearInterval(timer3D);

            // 自动轮播的定时器
            timer3D = setInterval(function () {
                // 每次进来定时器 索引 ++
                autoIndex++;

                // 无限滚动(无缝)
                if (autoIndex == bannerAll.length) {
                    autoIndex = 0;
                }

                // 把所有的控制点样式清空
                for (var j = 0; j < bannerAllBtn.length; j++) {
                    bannerAllBtn[j].classList.remove("active");
                }
                // 把当前点击的这一个控制点的样式设置为 active
                bannerAllBtn[autoIndex].classList.add("active");

                bannerAll[autoIndex].classList.add("rightShow");
                bannerAll[autoIndex].classList.remove("rightHead");
                bannerAll[autoIndex].classList.remove("leftHead");
                bannerAll[autoIndex].classList.remove("leftShow");

                bannerAll[oldIndex].classList.add("leftHead");
                bannerAll[oldIndex].classList.remove("rightHead");
                bannerAll[oldIndex].classList.remove("rightShow");
                bannerAll[oldIndex].classList.remove("leftShow");

                // 自动轮播和手动轮播的 index 同步问题
                /*
                    自动轮播一直在运行.... autoIndex 的值一直在 累加
                    在自动轮播的同时，有可能会触发手动轮播
                    这个时候自动轮播的逻辑必须要告诉手动轮播 当前的索引
                */

                // 把当前索引的位置设置为 上一次点击的索引
                oldIndex = autoIndex;

            }, 3000);
        }

        // 添加鼠标移动到 banner 上时的事件
        bannerNode.onmouseenter = function () {
            clearInterval(timer3D);
        }
    }

    //  内容区滚轮事件绑定
    if (contentNode.addEventListener) {
        // 火狐
        contentNode.addEventListener("DOMMouseScroll", function (ev) {
            ev = ev || ev.event;

            // 让 scrollFn 函数在 DOMMouseScroll 事件被频繁触发的时候只执行一次
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(function () {
                scrollFn(ev);
            }, 200);
        });
    }
    // 非火狐
    contentNode.onmousewheel = function (ev) {
        ev = ev || ev.event;

        // 让 scrollFn 函数在 DOMMouseScroll 事件被频繁触发的时候只执行一次
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
            scrollFn(ev);
        }, 200);
    };

    // 滚动条滚动的事件
    function scrollFn(ev) {
        ev = ev || event;
        var dir = "";

        if (ev.wheelDelta) {
            dir = ev.wheelDelta > 0 ? "up" : "down";
        }

        if (ev.detail) {
            dir = ev.detail > 0 ? "down" : "up";
        }

        preIndex = now;
        switch (dir) {
            case "up":
                if (now > 0) {
                    now--;
                    navMove(now);
                }
                break;
            case "down":
                if (now < contentLiNodes.length - 1) {
                    now++;
                    navMove(now);
                }
                break;
        }
    }

    container();
    // 内容区交互效果
    function container() {
        // 设置 content 的高度
        contentNode.style.height = document.documentElement.clientHeight - head.offsetHeight + "px";

        // 给 content 下边所有的 li 设置高度 
        for (var i = 0; i < contentLiNodes.length; i++) {
            contentLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + "px";
        }

    }

    // 窗口改变大小的时候,调整分辨率
    window.onresize = function () {
        // 1. 窗口上只能出现一屏
        container();

        //2. 每一屏的偏移量要重新计算调整   (content区域 ul 的内容)
        contentListNode.style.top = -now * (document.documentElement.clientHeight - head.offsetHeight) + "px";

        // 3. 白色箭头的偏移量也要重新计算调整
        arrowEl.style.left = liNodes[now].offsetLeft + (liNodes[now].offsetWidth / 2) - (arrowEl.offsetWidth / 2) + "px";

    }


    header();
    // 头部交互效果
    function header() {
        // 设置第一个 .up 为的黑色
        firstUp.style.width = "100%";

        // 设置白色小箭头的位置
        arrowEl.style.left = firstLiNode.offsetLeft + (firstLiNode.offsetWidth / 2) - (arrowEl.offsetWidth / 2) + "px";

        // 循环为每个 li 绑定鼠标点击事件
        for (var i = 0; i < liNodes.length; i++) {
            // 给每个 li 都存一个 index 属性，这个属性记录了当前 li 的索引
            liNodes[i].index = i;
            // onclick
            liNodes[i].onclick = function () {
                preIndex = now;
                // 设置导航移动的效果
                navMove(this.index);
                // 同步 index 的值
                now = this.index;
            }
        }

        // 循环为每个 li 绑定鼠标点击事件
        for (var i = 0; i < dotLis.length; i++) {
            // 给每个 li 都存一个 index 属性，这个属性记录了当前 li 的索引
            dotLis[i].index = i;
            // onclick
            dotLis[i].onclick = function () {

                preIndex = now;
                // 设置导航移动的效果
                navMove(this.index);
                // 同步 index 的值
                now = this.index;

            }
        }

        //点击音频切换播放状态
        musicNode.onclick = function () {
            if (audioNode.paused) {
                audioNode.play();
                musicNode.style.background = "url(../img/musicon.gif) no-repeat";
            } else {
                audioNode.pause();
                musicNode.style.background = "url(../img/musicoff.gif) no-repeat";
            }
        }
    }

    // navMove(4);
    // 导航移动的方法
    function navMove(index) {
        // 先把所有的 up.width 设置为 "",不能指定为 0，有可能样式会被覆盖掉
        for (var j = 0; j < upNodes.length; j++) {
            upNodes[j].style.width = "";
        }

        // 拿到当前索引的这个 .up , 设置宽度为 100%
        upNodes[index].style.width = "100%";

        // 白色箭头也随着移动
        arrowEl.style.left = liNodes[index].offsetLeft + (liNodes[index].offsetWidth / 2) - (arrowEl.offsetWidth / 2) + "px";

        // content 区域移动
        contentListNode.style.top = -index * (document.documentElement.clientHeight - head.offsetHeight) + "px";

        for (var i = 0; i < dotLis.length; i++) {
            dotLis[i].className = "";
        }
        dotLis[index].className = "active";

        // 出入场
        if (arrAn[index] && typeof arrAn[index]["anIn"] === "function") {
            arrAn[index]["anIn"]();
        }

        if (arrAn[preIndex] && typeof arrAn[preIndex]["anIn"] === "function") {
            arrAn[preIndex]["anOut"]();
        }
    }


}
