let timeoutFn;

export const throttle = (fn, timeout = 500) => {
    timeoutFn && clearTimeout(timeoutFn);
    timeoutFn = setTimeout(function(){
        fn();
    }, timeout);
}