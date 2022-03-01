export const ANIMATION_NAME = "blink"
export const MAIN_DELAY = 1
export const PAUSE_DELAY = 0.6
export const TIME_VALUE = "s"
export const ANIMATION_DURATION = 0.5

export const TIMEOUT = (blockCount) => (MAIN_DELAY+PAUSE_DELAY*blockCount+ANIMATION_DURATION)*1000