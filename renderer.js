const $ = selector => document.querySelector(selector);

const $count = $('#count');
const $button = $('#button');

$button.addEventListener('click', () => {
    const count = +$count.innerText;
    $count.innerText = count + 1;
})

window.electronAPI.onUpdateTheme( (event, theme) => {
    const root = document.documentElement;
    console.log({theme});
    root.style.setProperty('--scheme', theme);
})