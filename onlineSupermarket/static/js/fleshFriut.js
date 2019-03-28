//原生JS实现图片懒加载
function isInSight(img){
    
    const bound = img.getBoundingClientRect();//获取到图片上沿到窗口上沿的距离
    const clientHeight = window.innerHeight;//获取到可视区域下沿距离窗口上沿的距离
    return bound.top <= clientHeight + 100;//等于时，图片上沿刚好和可视区域下沿重合，100是提前加载
    //如果只考虑向下滚动加载
    //const clientWidth=window.innerWeight;
}

let index = 0;//用于标识已经加载过的照片，避免重复遍历照片
function checkImgs(){
    const imgs = document.querySelectorAll('.myPhoto');
    for(let i = index; i < imgs.length; i++){
        if(isInSight(imgs[i])){
            loadImg(imgs[i]);
            index = i;
        }
    }
}

function loadImg(img){
    if(!img.src){
        const source = img.dataset.src;
        img.src = source;
    }
}
var n = 0;
//函数节流
function throttle(fn,wait = 500){
    let canRun = true;
    return function(){
        if(!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this,arguments);
            canRun = true;
        },wait);
        console.log(n++);//用于测试节流效果
    };
    
}