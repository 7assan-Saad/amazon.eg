
// get data
const url = './model/homeData.json'
const getData = async () => {
  let data = await fetch(url).then(response => response.json())
  return data
}

// mobile navbar
const nav = document.querySelector('.mob-navbar')
const mobileNavbar = async () => {
  await getData().then(data => {
    let renderProducts = data.mobNav.map(link => {
      return /*html*/`
        <a href="${link.page}" class="mob-navbar-link">
          <img class="" src="./img/mobileNavbar/${link.img}" alt="" width="100%">
          <span class="mob-navbar-link-title">${link.title}</span>
        </a>
      `
    })
    nav.innerHTML = renderProducts.join('')
  })
}
mobileNavbar()

// slide show
const previous = document.querySelector('.previous-arrow')
const next = document.querySelector('.next-arrow')
const imgs = document.querySelector('.slide-show')
const slideShow = async () => {
    await getData().then(data => {
      let currentIndex = 0
      let arrayImg = data.slide.map(slide => {
        return /*html*/`
          <a href="${slide.page}">
            <img src="./img/slideShow/${slide.img}" alt="">
          </a>
        `
      })

      imgs.innerHTML = arrayImg[currentIndex]

      // arrow inactive function
      function arrowInactive() {
        if (currentIndex == 0) {
          previous.classList.add('in-active')
        } else {
          previous.classList.remove('in-active')
        }
        
        if (currentIndex == arrayImg.length - 1) {
          next.classList.add('in-active')
        } else {
          next.classList.remove('in-active')
        }
      }
      arrowInactive()

      // next function
      function nextArrow() {
        if (currentIndex < arrayImg.length - 1 ) {
          currentIndex++
          imgs.innerHTML = arrayImg[currentIndex]
        }
        arrowInactive()
      }

      // previous function
      function previousArrow() {
        if (currentIndex > 0) {
          currentIndex--
          imgs.innerHTML = arrayImg[currentIndex]
        }
        arrowInactive()
      }

      next.addEventListener('click', () => {
        nextArrow()
        clearInterval(showInterval)
      })
  
      previous.addEventListener('click', () => {
        previousArrow()
        clearInterval(showInterval)
      })
  
      let showInterval = setInterval(function () {
        nextArrow()
        if (currentIndex == arrayImg.length - 1) {
          currentIndex = -1
        }
      }, 5000)
      
    })

}
slideShow()

// best new offers (mobile and tablet)
const bestOffers = document.querySelector('.best-new-offers')
const bestNewOffers = async () => {
  await getData().then(data => {
    let renderProducts = data.bestNewOffers.map( link => {
     return /*html*/`
        <a href="${link.page}" class="best-new-offers__link">
          <img src="./img/bestNewOffers/${link.img}" alt="">
        </a>
      `
    })
    bestOffers.innerHTML = renderProducts.join('')
  })
}
bestNewOffers()

// banner ads. (mobile)
const banner = document.querySelector('.banner-ads')
const bannerAds = async () => {
  await getData().then( data => {
    let renderProducts = data.bannerAds.map(link => {
      return /*html*/`
        <a href="${link.page}">
          <img src="./img/bannerAds/${link.img}" alt="" width="100%">
        </a>
      `
    })
    banner.innerHTML = renderProducts.join('')
  })
}
bannerAds()

// latest offers
const latestOffersPro = document.querySelector('.latest-offers')
const latestOffers = async () => {
  await getData().then( data => {
    let renderProducts = data.latestOffers.map( product => { 
      return /*html*/`
      <div class="offers-card__product">
        <a class="light-hover" href="${product.page}"></a>
        <h2 class="offers-card__head">${product.headTitle}</h2>
        <a href="${product.page}"><img class="offers-card__img" src="./img/latestOffers/${product.img}"></a>
        <a href="${product.page}" class="blue see-more-arrow">See more</a>
      </div>
      `
    })
    latestOffersPro.innerHTML = renderProducts.join('')
  })
}
latestOffers()

// todays deals products
const todaysDealsPro = document.querySelector('.todays-deals-products')
const todaysDeals = async () => {
  await getData().then( data => {
    let renderProducts = data.todaysDeals.map( product => {
      return /*html*/`
        <a class="todays-deals__product" href="${product.page}">
          <span class="light-hover"></span>
          <span class="todays-deals__deal-level font-400">${product.dealLevel}</span>
          <div class="todays-deals__image"><img src="./img/todaysDeals/${product.img}"></div>
          <span class="todays-deals__offer font-400">${product.offer}</span>
        </a>
      `
    })
    todaysDealsPro.innerHTML = renderProducts.join('')
  })
}
todaysDeals()

// budget store products
const budgetProducts = document.querySelector('.budget-store-products')
const budgetStore = async () => {
  await getData().then( data => {
    let renderProducts = data.budgetStore.map( link => {
      return /*html*/`
        <a href="${link.page}">
          <span class="light-hover"></span>
          <img src="./img/budgetStore/${link.img}" style="height: 200px;">
        </a>
      `
    })
    budgetProducts.innerHTML = renderProducts.join('')
  })
}
budgetStore()

// new arrivals
const newArrivalsPro = document.querySelector('.new-arrivals')
const newArrivals = async () => {
  await getData().then( data => {
    let renderProducts = data.newArrivals.map( product => {
      return /*html*/`
      <div class="offers-card__product" style="position: relative;">
        <a class="light-hover" href="${product.page}"></a>
        <h2 class="offers-card__head">${product.headTitle}</h2>
        <a href="${product.page}"><img class="offers-card__img" src="./img/newArrivals/${product.img}"></a>
        <a href="${product.page}" class="blue see-more-arrow">See more</a>
      </div>
      `
    })
    newArrivalsPro.innerHTML = renderProducts.join('')
  })
}
newArrivals()

// strongest offers
const strongestOffersPro = document.querySelector('.strongest-offers')
const strongestOffers = async () => {
  await getData().then( data => {
    let renderProducts = data.strongestOffers.map( product => { 
      return /*html*/`
      <div class="offers-card__product" style="position: relative;">
        <a class="light-hover" href="${product.page}"></a>
        <h2 class="offers-card__head">${product.headTitle}</h2>
        <a href="${product.page}"><img class="offers-card__img" src="./img/strongestOffers/${product.img}"></a>
        <a href="${product.page}" class="blue see-more-arrow">See more</a>
      </div>
      `
    })
    strongestOffersPro.innerHTML = renderProducts.join('')
  })
}
strongestOffers()

// appliances products
const topDealsAppliancesPro = document.querySelector('.appliances-products')
const topDealsAppliances = async () => {
  await getData().then( data => {
    let renderProducts = data.topDealsAppliances.map( link => {
      return /*html*/`
        <a href="${link.page}">
          <span class="light-hover"></span>
          <img src="./img/topDealsAppliances/${link.img}" style="height: 200px;">
        </a>
      `
    })
    topDealsAppliancesPro.innerHTML = renderProducts.join('')
  })
}
topDealsAppliances()

// mobiles products
const topDealsMobilesPro = document.querySelector('.mobiles-products')
const topDealsMobiles = async () => {
  await getData().then( data => {
    let renderProducts = data.topDealsMobiles.map( link => {
      return /*html*/`
        <a href="${link.page}">
          <span class="light-hover"></span>
          <img src="./img/topDealsMobiles/${link.img}" style="height: 200px;">
        </a>
      `
    })
    topDealsMobilesPro.innerHTML = renderProducts.join('')
  })
}
topDealsMobiles()

// makeup products
const topPicksMakeupPro = document.querySelector('.makeup-products')
const topPicksMakeup = async () => {
  await getData().then( data => {
    let renderProducts = data.topPicksMakeup.map( link => {
      return /*html*/`
        <a href="${link.page}">
          <span class="light-hover"></span>
          <img src="./img/topPicksMakeup/${link.img}" style="height: 200px;">
        </a>
      `
    })
    topPicksMakeupPro.innerHTML = renderProducts.join('')
  })
}
topPicksMakeup()

// sports products
const topPicksSportsPro = document.querySelector('.sports-products')
const topPicksSports = async () => {
  await getData().then( data => {
    let renderProducts = data.topPicksSports.map( link => {
      return /*html*/`
        <a href="${link.page}">
          <span class="light-hover"></span>
          <img src="./img/topPicksSports/${link.img}" style="height: 200px;">
        </a>
      `
    })
    topPicksSportsPro.innerHTML = renderProducts.join('')
  })
}
topPicksSports()

// toys products
const topPicksToysPro = document.querySelector('.toys-products')
const topPicksToys = async () => {
  await getData().then( data => {
    let renderProducts = data.topPicksToys.map( link => {
      return /*html*/`
        <a href="${link.page}">
          <span class="light-hover"></span>
          <img src="./img/topPicksToys/${link.img}" style="height: 200px;">
        </a>
      `
    })
    topPicksToysPro.innerHTML = renderProducts.join('')
  })
}
topPicksToys()

// customers browsing products
const customersBrowsingPro = document.querySelector('.customers-browsing-products')
const customersBrowsing = async () => {
  await getData().then( data => {
    let renderProducts = data.customersBrowsing.map( product => {
      return /*html*/`
        <div class="customers-browsing__product">
          <a href="${product.page}" class="center">
            <img src="./img/customersBrowsing/${product.productImg}">
            <span class="title blue">${product.title}</span>
            ${(product.rateStar == '') ? '' : `<span class="star"><img src="./img/amazon-icons/${product.rateStar}"><span class="blue num">${product.rateNum}</span></span>`}            
            <span class="price">${product.price}</span>
            ${(product.limit == '') ? '' : `<span class="limit">${product.limit}</span>`}
          </a>
          ${(product.getIt == '') ? '' : `<span class="get-it">${product.getIt}</span>`}
          ${(product.shippingPrice == '') ? '' : `<span class="shipping-price">${product.shippingPrice}</span>`}
          ${(product.moreDetails == '') ? '' : `<span class="more-details">${product.moreDetails}</span>`}
          ${(product.ends == '') ? '' : `<span class="ends">${product.ends}</span>`}   
        </div>
      `
    })
    customersBrowsingPro.innerHTML = renderProducts.join('')
  })
}
customersBrowsing()