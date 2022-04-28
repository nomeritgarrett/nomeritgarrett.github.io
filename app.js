const scrollable = document.querySelector('.scrollable');
const content = document.querySelector('.content');
const imgSections = [...document.querySelectorAll('.img-section')];
const images= [...document.querySelectorAll('.img')];
images.forEach((image, idx) => {
    image.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`
})


const wraps = [...document.querySelectorAll('.wrap')];
console.log(wraps)
const menuTog = document.querySelector('.menu-tog');
const menu = document.querySelector('.menu');
const menuWraps = [...document.querySelectorAll('.menu-wrap')];

// Set scroll dimensions
function init(){
    document.body.style.height = `${content.getBoundingClientRect().height}px`;
}
window.addEventListener('resize', init);
menuTog.addEventListener('click', toggleMenu)

function displayWraps(){
    wraps.forEach((wrap, idx) => {
        setTimeout(() => {
            wrap.classList.add('active');
        }, (idx + 1) * 50)
    })
}

function toggleMenu(){
    if(menu.classList.contains('active')){
        menuTog.classList.remove('active');
        toggleMenuWraps(false);
        setTimeout(() => {
            menu.classList.remove('active')
        }, 300)
        setTimeout(() => {
            toggleWraps(true);
        }, 300)
    }else{
        menuTog.classList.add('active');
        toggleWraps(false);
        setTimeout(() => {
            menu.classList.add('active')
        }, 300)
        setTimeout(() => {
            toggleMenuWraps(true);
        }, 300)
    }
}

function toggleWraps(active){
    wraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}

function toggleMenuWraps(active){
    menuWraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}

function toggleWrap(wrap, active){
    setTimeout(() => {
        if(active){
            wrap.classList.add('active');
        }else{
            wrap.classList.remove('active');
        }
    })
}

let target = 1;
let reverse = false;

document.addEventListener('click', () => reverse = !reverse)

function scroll(){
    target = window.scrollY;

   
    target >= content.offsetHeight / 2){
            target = 1;
            window.scrollTo(0, target);
        }
    }

    if(reverse){
        target --
    }else{
        target++
    }
    window.scrollTo(0, target)
    scrollable.style.transform = `translateY(-${target}px)`;
    requestAnimationFrame(scroll)
}


displayWraps()
init()

document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 200)
    scroll()
})
