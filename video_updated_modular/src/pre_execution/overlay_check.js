export function inViewport(elHeight, el) {
    const rect = el.getBoundingClientRect();
    var height = elHeight.clientHeight;
    var bottom = rect.top + height

    return ( 
        (((height)/2) + rect.top > 0) 
        && (((bottom - (height)/2)) <= (window.innerHeight || document.documentElement.clientHeight))
        && (((rect.bottom - (height)/2)) <= (window.innerHeight || document.documentElement.clientHeight))
    );
} 