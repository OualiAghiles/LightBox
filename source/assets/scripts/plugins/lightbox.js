import { disableBodyScroll, enableBodyScroll } from './vendor/body-scroll-lock.js'

/**
 * * import { disableBodyScroll } from './body-scroll-lock';
 * * import { enableBodyScroll } from './body-scroll-lock';
 * @property {HTMLElement} el
 * @property {string[]} uniqueImages array des URL d'images de la lightbox
 * @property {string} URL  Current Image
 */

export default class Lightbox {
  static init () {
    const links = Array.from(document.querySelectorAll('a[href$=".png"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".svg"]'))
    const images = links.map(link => link.getAttribute('href'))
    const uniqueImages = Array.from(new Set(images))
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        new Lightbox(e.currentTarget.getAttribute('href'), uniqueImages)
      })
    })
  }

  /**
   * @param {string} url URL de l'image
   * @param {string[]} uniqueImages array des URL d'images de la lightbox
   */
  constructor (url, uniqueImages) {
    this.el = this.buildDOM(url)
    this.images = uniqueImages
    this.loadImage(url)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.el)
    disableBodyScroll(this.el)
    document.addEventListener('keyup', this.onKeyUp)

  }

  /**
   *
   * @param {string} url URL de l'image
   */
  loadImage (url) {
    this.url = null
    const image = new Image()
    const container = this.el.querySelector('.lightbox__content')
    const loader = document.createElement('div')
    loader.classList.add('lightbox__imgLoader')
    container.innerHTML = ''
    container.appendChild(loader)

    image.onload = () => {
      // body
      container.removeChild(loader)
      container.appendChild(image)
      this.url = url
    }
    image.src = url
  }

  /**
   * clsoe lightbox
   * @param {MouseEvent/KeyboardEvent} e
   */
  close (e) {
    e.preventDefault()
    this.el.classList.add('fadeOut')
    enableBodyScroll(this.el)
    window.setTimeout(() => {
      this.el.parentElement.removeChild(this.el)
      document.removeEventListener('keyup', this.onKeyUp)
    }, 550)
  }

  /**
   * close lightbox with escape key
   * @param {KeyboardEvent} e
   */
  onKeyUp (e) {
    // e.preventDefault()
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.close(e)
    } else if (e.key === 'ArrowLeft') {
      this.prev(e)
    } else if (e.key === 'ArrowRight') {
      this.next(e)
    }
  }
   
  /**
   *
   * @param {MouseEvent/KeyboardEvent}  e go to the next image
   */
  next (e) {
    e.preventDefault()
    let currentIndex = this.images.findIndex(image => image === this.url)
    if (currentIndex === this.images.length - 1) {
      currentIndex = -1
    }
    this.loadImage(this.images[currentIndex + 1])
  }

  /**
   *
   * @param {MouseEvent/KeyboardEvent}  e go to the prev image
   */
  prev (e) {
    e.preventDefault()
    let currentIndex = this.images.findIndex(image => image === this.url)
    if (currentIndex === 0) {
      currentIndex = this.images.length
    }
    this.loadImage(this.images[currentIndex - 1])
  }

  /**
   * @param {string} buildDOM URL de l'image
   * @returns {HTMLElement}
   */
  buildDOM (url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `<div class="lightbox">
  <button class="lightbox__close">fermé</button>
  <button class="lightbox__prev">precedant</button>
  <button class="lightbox__next"> suivant</button>
  <div class="lightbox__content"></div>
</div>`
    dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
    dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
    dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))

    return dom
  }
}
