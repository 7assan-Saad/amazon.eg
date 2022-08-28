
function horizontalScroll(carouselBtn, scrollAmount) {
  const carouselBox = carouselBtn.parentElement.querySelector('.offers-carousel__categories')
  carouselBox.scrollLeft += (scrollAmount * carouselBox.offsetWidth)
}

function onScroll() {

  const carouselBox = document.querySelectorAll('.offers-carousel__categories')

  carouselBox.forEach(section => {
    section.onscroll = function () {

      const contentWidth = section.querySelector('.content').offsetWidth
      const scrollEnd = section.scrollLeft + section.offsetWidth;
      const previousBtn = section.parentElement.querySelector('.offers-carousel__previous-btn')
      const nextBtn = section.parentElement.querySelector('.offers-carousel__next-btn')
      
      // console.log(section.offsetWidth)
      // console.log(scrollEnd)

      // const gradientLeft = section.parentElement.querySelector('.offers-carousel__gradient-left')
      // const gradientRight = section.parentElement.querySelector('.offers-carousel__gradient-right')
     
      if (section.scrollLeft == 0) {
        previousBtn.classList.add('none-select')
        // gradientLeft.classList.add('hide')
      } else {
        previousBtn.classList.remove('none-select')
        // gradientLeft.classList.remove('hide')
      }
      
      if (scrollEnd == contentWidth || (scrollEnd + 1) == contentWidth) {
        nextBtn.classList.add('none-select')
        // gradientRight.classList.add('hide')
      } else {
        nextBtn.classList.remove('none-select')
        // gradientRight.classList.remove('hide')
      }

    }

  })
}

onScroll()