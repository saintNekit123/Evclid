let burger = document.querySelector(".burger");
let menu = document.querySelector(".header-nav");
let menuLinks = menu.querySelectorAll(".header-menu-link");
let closeMenu = menu.querySelector(".nav-close-btn")
let stageBtn = document.querySelector(".section-buttons")



// Swiper секции hero
const swiper = new Swiper('.js-hero-slider', {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.js-hero-pagination',
    clickable: true
  },
});


// Кнопка открытя и закрытия бургера

burger.addEventListener("click",
    
    function () {
        burger.classList.toggle("burger--active");
        menu.classList.toggle("header__nav--active");
        document.body.classList.toggle("stop-scroll");
    }   
)

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
      
      burger.classList.remove("burger--active");

      menu.classList.remove("header__nav--active");

      document.body.classList.remove("stop-scroll");
  })
})

closeMenu.addEventListener("click",
    function () {
        burger.classList.remove("burger--active");

        menu.classList.remove("header__nav--active");
  
        document.body.classList.remove("stop-scroll");
    }
)

// Кнопка поиска

function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });
    
    search.addEventListener("click", function (evt) {
      evt._isSearch = true;
    });
  
    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;
  
      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
          search.classList.add(params.activeClass);
      }
    });
  
    closeBtn.addEventListener("click", function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });
  
    document.body.addEventListener("click", function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }

function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);
    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });
  
    search.addEventListener("click", function (evt) {
      evt._isSearch = true;
    });
  
    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;
  
      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });
  
    closeBtn.addEventListener("click", function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });
  
    document.body.addEventListener("click", function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }

// Кнопки "шаг" в секции "stage"


const firstParams = {
  tabsClass: "step-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(params) {
  const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = e.target.dataset.path;
    const wrap = e.target.closest(`.${params.wrap}`);
    const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${params.content}`);

    contents.forEach((el) => {
      el.classList.remove(params.active);
    });

    currentContent.classList.add(params.active);
    
    tabBtns.forEach((el) => {
      el.classList.remove(params.active);
    });
    
    this.classList.add(params.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

// Акордион секции "questions"

(() => {
  new Accordion(".js-accordion-container");
})();

setTabs(firstParams);
setSearch({
    openBtnClass: "js-open-search", // класс кнопки открытия
    closeBtnClass: "js-close", // класс кнопки закрытия
    searchClass: "js-form", // класс формы поиска
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });
