const body = document.querySelector('*');

const homes = document.querySelector('.grah');
const Home = document.querySelector('.titles');
const stats = document.querySelector('.statistic');
const Stat = document.querySelector('.Stats');
const portfolio = document.querySelector('.port');
const port = document.querySelector('.portfolio');
const hireMe = document.querySelector('.hire');

body.addEventListener('contextmenu', (e) => {
     e.preventDefault()
}, false)
body.oncontextmenu = "return false";
stats.addEventListener('click', () => {
    Stat.scrollIntoView({ behavior: 'smooth', block: 'center' });
})
portfolio.addEventListener('click', () => {
    port.scrollIntoView({ behavior: 'smooth', block: 'start' });
})
hireMe.addEventListener('click', () => {
    window.open('https://discord.com/users/1180553852240543890')
})
const img = document.querySelectorAll("img");

img.forEach(function(e){
    e.ondragstart = () => {
  return false;
};
})
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
