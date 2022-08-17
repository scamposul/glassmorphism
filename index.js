const cuadro = document.querySelector('.cuadro');

// color

const color = document.querySelector('input[type="color"]');
const opacity = document.getElementById('opacity');

let rgb = 0;

color.addEventListener('input', (e) => {
    rgb = e.target.value;

    let hex = rgb.slice(1);

    let opacityValue = 100;
    opacity.addEventListener('input', (e) => {
        opacityValue = e.target.value;
        convertToRGBA();
    });

    function convertToRGBA() {
        var aRgbHex = hex.match(/.{1,2}/g);
        var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
        ];
        cuadro.style.background = `
        rgba(${aRgb[0]}, 
        ${aRgb[1]}, 
        ${aRgb[2]}, 
        ${opacityValue/100}`;
    };

    convertToRGBA();
});


// backdropFilter
const blur = document.getElementById('blur');
const saturate = document.getElementById('saturate');
const contrast = document.getElementById('contrast');

let blurValue = 0;

blur.addEventListener('input', (e) => {
    blurValue = e.target.value;
    createBackdropFilter();
});

let saturateValue = 100;

saturate.addEventListener('input', (e) => {
   saturateValue= e.target.value;
   createBackdropFilter();
});

let contrastValue = 100;

contrast.addEventListener('input', (e) => {
   contrastValue = e.target.value;
   createBackdropFilter();
});

function createBackdropFilter() {
    cuadro.style.backdropFilter = `
    blur(${blurValue}px) 
    contrast(${contrastValue}%) 
    saturate(${saturateValue}%) `
};

// Tamaño

const size = document.getElementById('size');
const width = document.getElementById('width');
const height = document.getElementById('height');


width.addEventListener('input', (e) => {
    cuadro.style.width = `${e.target.value}px`;
});

height.addEventListener('input', (e) => {
    cuadro.style.height = `${e.target.value}px`;
});

// borde 

const border = document.getElementById('border')

border.addEventListener('input', (e) => {
    cuadro.style.borderRadius = `${e.target.value}%`;
});

// showCode 

const showCode = document.querySelector('input[value="Mostrar código"]');
const hideCode = document.querySelector('input[value="Borrar código"]');
const code = document.querySelector('.code');

showCode.addEventListener('click', () => {
    code.innerHTML = `.cuadro{
        background: ${cuadro.style.background};
        backdrop-filter: ${cuadro.style.backdropFilter};
        width: ${cuadro.style.width};
        height: ${cuadro.style.height};
        border-radius: ${cuadro.style.borderRadius};
    }`
});

hideCode.addEventListener('click', () => {
    code.innerHTML = '';
})







