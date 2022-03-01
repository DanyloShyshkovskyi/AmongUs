import {ANIMATION_NAME, MAIN_DELAY, PAUSE_DELAY, TIME_VALUE} from "../Constants/Animation";

export const animation = (element, color) => {
    return element
        ? {animationDelay: element.map(item => (MAIN_DELAY + PAUSE_DELAY * item + TIME_VALUE)),
        animationName: element.map(() =>`${ANIMATION_NAME}__${color}`)}
        : {}
}