//select elements
let ball = document.querySelector('.ball');
let shadow = document.querySelector('.shadow');

//instacia a Timeline
let tl = new TimelineMax({ repeat: -1, yoyo: true });

//animation part 1, moving ball 1/2 sec to down
tl.add('start')
.to(ball, .5, {
        y: 100,
        ease: Circ.easeIn
    })
//animation part 2, ball on the ground
    .to(ball, .10, {
        scale: 0.6,
        transformOrigin: 'center bottom',
        borderBottomLeftRadius: '40%',
        borderBottomRightRadius: '40%'
    }, '-=0.075')
//animation part 3, shadow bigger and stornger
    .to(shadow, .5, {
        width: 90,
        opacity: .7,
        ease: Circ.easeIn
    }, 'start');
