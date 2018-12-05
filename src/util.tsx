function findPos(obj: HTMLElement) {
    let curleft = 0, curtop = 0;
    if (obj.parentNode) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
            obj = obj.parentNode as HTMLElement;
        } while (obj.offsetParent);
        return [curleft, curtop];
    }
    return [0, 0];
}

export module Element {
    export function getPos(element: HTMLElement): { top: number, left: number } {
        const pos = findPos(element);
        return {
            top: pos[1],
            left: pos[0]
        };
    }
}