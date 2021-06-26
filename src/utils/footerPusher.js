export default function footerPusher() {
    const header = document.querySelector('.navbar').clientHeight;
    const footer = document.querySelector('.footer').clientHeight;
    document.querySelector('.main').style.minHeight = String(window.innerHeight - (header + footer)).concat("px");
  }