var modifiers = {
  siteHeaderOpen: 'sitenav--open'
};

var elSiteHeader = document.querySelector('.sitenav');
var elSiteHeaderToggler = document.querySelector('.js-hamburger');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    // alert('salom')
    elSiteHeader.classList.toggle(modifiers.siteHeaderOpen);
    this.classList.toggle('opened')
  });
}