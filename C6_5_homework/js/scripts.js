

const btnNode = document.querySelector('.btn');
let point = true;
let swidth = window.screen.width;
let sheight = window.screen.height;

  btnNode.addEventListener('click', () => {
    alert(`Ширина экрана = ${swidth}, высота экрана = ${sheight}`)
  });
