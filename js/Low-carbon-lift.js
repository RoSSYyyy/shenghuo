// console.log(window)
const app = new PIXI.Application({ antialias: true, backgroundColor: '#92e5aa', width: window.outerWidth, height: 800 });
document.getElementById('sst').appendChild(app.view);

app.stage.interactive = true;


const container = new PIXI.Container();
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// add a bunch of sprites


const light2 = PIXI.Sprite.from('img/12.png');
light2.anchor.set(0.5);
light2.x = app.screen.width / 2;
light2.y = app.screen.height / 2;


// const panda = PIXI.Sprite.from('img/1.png');    
const panda = PIXI.Sprite.from('img/12.png');
panda.anchor.set(0.5);
panda.x = app.screen.width / 2;
panda.y = app.screen.height / 2;
//container.addChild(light2, panda);
app.stage.addChild(light2, panda);

//app.stage.addChild(container);
//
//// let's create a moving shape
//const thing = new PIXI.Graphics();
//app.stage.addChild(thing);
//thing.x = app.screen.width / 2;
//thing.y = app.screen.height / 2;
//thing.lineStyle(0);
//
//container.mask = thing;

let count = 0;

app.stage.on('pointertap', () => {
    //    if (!container.mask) {
    //        container.mask = thing;
    //    } else {
    //        container.mask = null;
    //    }
    // console.log("click!")
});

//const help = new PIXI.Text('Click or tap to turn masking on / off.', {
//    fontFamily: 'Arial',
//    fontSize: 12,
//    fontWeight: 'bold',
//    fill: 'white',
//});
//help.y = app.screen.height - 26;
//help.x = 10;
//app.stage.addChild(help);

app.ticker.add(() => {
    light2.rotation += 0.01;

    panda.scale.x = 1 + Math.sin(count) * 0.04;
    panda.scale.y = 1 + Math.cos(count) * 0.04;

    count += 0.1;

    //    thing.clear();
    //
    //    thing.beginFill(0x8bc5ff, 0.4);
    //    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    //    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
    //    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
    //    thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
    //    thing.rotation = count * 0.1;
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


// 分页
var mySwiper = new Swiper('.swiper', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

// 音乐
$(document).ready(function () {
    //   music
    var toggle = true;
    $("#music_btn").click(function () {
        if (toggle) {
            $("#music_btn").attr("src", "images/yyan2.png");
            toggle = false;
        } else {
            $("#music_btn").attr("src", "images/yyan.png");
            toggle = true;
        }
    });
    // plane
    $(".plane").click(function () {
        $(".plane").fadeOut();
    })
});
