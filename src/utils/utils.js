/**
 * 函数去抖动
 * 直到事件触发不抖才执行，函数可能只会执行一次
 * @param {*} func 要执行的函数
 * @param {number} [delay=150] 
 * @return 去抖动之后的函数
 */
export function debounce(func, delay = 150) {
  let timer = 0;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('timer...', timer)
      func();
    }, delay)
  }
}

/**
 * 函数节流
 * 保证一短周期内一定执行一次
 * @param {*} func 要执行的函数
 * @param {number} [delay=150] 
 * @return 
 */
export function throttle(func, delay = 150) {
  let timer = +new Date();
  return function() {
    let cur = +new Date();
    if(cur - timer > delay) {
      timer = cur;
      setTimeout(() => {
        func();
      }, delay)
    }
  }
}