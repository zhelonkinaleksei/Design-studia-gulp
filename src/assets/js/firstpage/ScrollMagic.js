export function colorScroll (){
    // init controller
let controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 300}});

let controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration: 1000}});


new ScrollMagic.Scene({triggerElement:'#trigger--scroll'})
.setClassToggle('#stage1','accent-color')
// .addIndicators({name: '1 - add a class'})
.addTo(controller);

new ScrollMagic.Scene({triggerElement:'#trigger--scrolltwo'})
.setClassToggle('#stage2','accent-color')
// .addIndicators({name: '1 - add a class'})
.addTo(controller);

new ScrollMagic.Scene({triggerElement:'#trigger--scrollthree'})
.setClassToggle('#stage3','accent-color')
// .addIndicators({name: '1 - add a class'})
.addTo(controller);

new ScrollMagic.Scene({triggerElement:'#trigger--scrollfour'})
.setClassToggle('#stage4','accent-color')
// .addIndicators({name: '1 - add a class'})
.addTo(controller2);
}