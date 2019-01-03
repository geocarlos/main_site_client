export const capitalize = (s) => {
    return s[0].toUpperCase() + s.substring(1);
}

export const goToYPos = (ypos) => {
    window.scrollTo(0, ypos);
}