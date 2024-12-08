(function () {
    const burgerMenu = {
        btnElt: document.querySelector('.nav-button'),
        mainElt: document.querySelector('main'),
        init() {
            document.documentElement.classList.add('js-enabled');
            this.addEventListeners();
        },
        addEventListeners() {
            this.btnElt.addEventListener('click', () => {
                this.toggleMenu();
            })
        },
        toggleMenu() {
            this.mainElt.classList.toggle('is-opened');
        }
    }
    burgerMenu.init();
})()


