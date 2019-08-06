const circles = document.querySelectorAll('.circles')

circles.forEach((circle, index) => {
    console.log(300 * index)
    circle.animate(
        [
            // keyframes
            {
                transform: 'scale(1)'
            },
            {
                transform: 'scale(1.6)'
            },
            {
                transform: 'scale(1)'
            }
        ], {
            // timing options
            delay: 300 * index,
            duration: 5000,
            iterations: Infinity
        }
    )
})

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


const squiggles = document.querySelectorAll('.squiggle')

squiggles.forEach((squiggle, index) => {
    const randomNumber = random(0, 45)

    console.log(randomNumber)

    squiggle.animate(
        [
            // gets a random num between 0 & 45
            {
                transform: 'rotate(0)'
            },

            // { transform: 'rotate(' + randomNumber + 'deg)' },
            {
                transform: `rotate(${randomNumber}deg)`
            },

            {
                transform: 'rotate(0)'
            }
        ], {
            // timing options
            delay: 300 * index,
            duration: 5000,
            iterations: Infinity
        }
    )
})

const stars = document.querySelectorAll('.star')

stars.forEach((star, index) => {
    const randomNumber = random(0, 90)

    console.log(randomNumber)

    star.animate(
        [
            // gets a random num between 0 & 45
            {
                transform: 'rotate(0)'
            },

            // { transform: 'rotate(' + randomNumber + 'deg)' },
            {
                transform: `rotate(${randomNumber}deg)`
            },

            {
                transform: 'rotate(0)'
            }
        ], {
            // timing options
            delay: 35 * index,
            duration: 1000,
            iterations: Infinity
        }
    )
})



inView('.container')
  .on('enter', section => {
    section.classList.add('in-viewport')
  })
  .on('exit', section => {
    section.classList.remove('in-viewport')
  })

inView.threshold(0.5)



const sections = document.querySelectorAll('.section .container')

sections.forEach((section, index) => {
  // here we use querySelectorAll on our 'section' to only
  // find elements inside of our section vs. our entire page
  const artists = section.querySelectorAll('ul.lineup li')
  const shapes = section.querySelectorAll('.shape')

  artists.forEach((artist, index) => {
    const delay = index * 100
    artist.style.transitionDelay = delay + 'ms'
  })

  shapes.forEach((shape, index) => {
    // we are setting our delay up to only start once all of our
    // artists have faded in, using the .length property
    const delay = (shape.length + index) * 100
    shape.style.transitionDelay = delay + 'ms'
  })
})