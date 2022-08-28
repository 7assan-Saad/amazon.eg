// select box
// function selectBox() {
//   let selectInput = document.querySelector('.header__search-select')
//   selectInput.onchange = function () {
//     console.log(selectInput.value)
//   }
// }

// --------------------------------------------------------------------------------

// account and list

// const showAccount = document.querySelector('.header__account')
const accountText = document.querySelector('.header__account-text')
const accountBox = document.querySelector('.account-and-lists')
const langBox = document.querySelector('.header__language .language-and-country')
const overlay = document.querySelector('.overlay')
let hideAccountBox

function showAccountandList() {
  
  accountText.addEventListener('mouseover', () => {
    showAccount()
    langBox.style.display = 'none'
    signinMsg.style.display = 'none'
    clearTimeout(showMsg)
    clearTimeout(hideAccountBox)
  })

  accountText.addEventListener('mouseleave', hideAccount)

  accountBox.addEventListener('mouseover', showAccount)

  accountBox.addEventListener('mouseleave', () => {
    hideAccountBox =  setTimeout(hideAccount, 500);
  })

  overlay.addEventListener('click', hideAccount )

}

const showAccount = () => {
  accountBox.style.display = 'block'
  accountText.style.color = '#ff9900'
  overlay.style.display = 'block'
}

const hideAccount = () => {
  accountBox.style.display = 'none'
  accountText.style.color = '#fff'
  overlay.style.display = 'none'
}

showAccountandList()

// --------------------------------------------------------------------------------

const signinMsg = document.querySelector('.sign-in-msg')

window.onload = () => {
  signinMsg.style.display = 'block'
}
let showMsg = setTimeout(() => {
  signinMsg.style.display = 'none'
}, 5000);

signinMsg.addEventListener('mouseover', () => {
  clearTimeout(showMsg)
  signinMsg.style.display = 'block'
})
signinMsg.addEventListener('mouseleave', () => {
  signinMsg.style.display = 'none'
})

// --------------------------------------------------------------------------------

// Amazon Prime

const prime = document.querySelector('.prime')
const primeLink = document.querySelector('.prime a')
const primeBox = document.querySelector('.amazon-prime')
let hidePrimeBox

function showAmazonPrime() {
  
  prime.addEventListener('mouseover', () => {
    primeBox.style.display = 'block'
    overlay.style.display = 'block'
    primeLink.style.color = '#1a98ff'
  })

  prime.addEventListener('mouseleave', () => {
    hidePrimeBox = setTimeout( hidePrime, 200 );
  })


  primeBox.addEventListener('mouseover', () => {
    clearTimeout(hidePrimeBox)
    primeBox.style.display = 'block'
    overlay.style.display = 'block'
  })

  primeBox.addEventListener('mouseleave', hidePrime )

  // overlay.addEventListener('click', hide )

}

const hidePrime = () => {
  primeBox.style.display = 'none'
  overlay.style.display = 'none'
  primeLink.style.color = '#fff'
}

showAmazonPrime()

// --------------------------------------------------------------------------------

// language
const lang = document.querySelector('.header__language')
let hideLangBox

function showLang() {
  
  lang.addEventListener('mouseover', () => {
    langBox.style.display = 'block'
    overlay.style.display = 'block'
    accountBox.style.display = 'none'
    accountText.style.color = '#fff'
  })

  // lang.addEventListener('mouseleave', () => {
  //   hideLangBox = setTimeout( hide, 500 );
  // })

  lang.addEventListener('mouseleave', hideLang)


  langBox.addEventListener('mouseover', () => {
    clearTimeout(hideLangBox)
  })

  overlay.addEventListener('click', hideLang )

}

const hideLang = () => {
  langBox.style.display = 'none'
  overlay.style.display = 'none'
}

showLang()

// --------------------------------------------------------------------------------

// toggle menu
const allCategory = document.querySelectorAll('.navbar__all-category')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close-icon')
const overlayMenu = document.querySelector('.overlay-menu')

const headItem = document.querySelectorAll('.menu-items__head-item')

function showMenu() {
  // show menu
  allCategory.forEach( btn => {
    btn.addEventListener('click', () => {
      menu.style.transform = 'translateX(0)'
      overlayMenu.style.display = 'block'
    })
  })

  // close menu
  close.addEventListener('click', closeMenu)
  overlayMenu.addEventListener('click', closeMenu)

  // toggle items
  headItem.forEach(item => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('hide-item')
      e.target.nextElementSibling.classList.toggle('hide')
    })
  })

}

const closeMenu = () => {
  menu.style.transform = 'translateX(-100%)'
  overlayMenu.style.display = 'none'
}

showMenu()