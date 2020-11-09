export function debonuse(fun, time) {
    let timer = null;
    return function() {
        // console.log(timer);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fun.apply(this)
        }, time)
    }
}