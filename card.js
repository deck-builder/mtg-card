// dimensions
const baseWidth = 672
const baseHeight = 936
const baseBorderRadius = 30
const baseBorderWidth = 24
const baseBackgroundWidth = 624
const baseBackgroundHeight = 847
const baseBackgroundUpperBorderRadius = 20
const baseBackgroundLowerBorderRadius = 97

// colors
const borderBlack = '#17140F'

const style = `
  .card {
    width: 100%;
    padding-top: ${baseHeight / baseWidth * 100}%;
    background-color: ${borderBlack};
    border-radius: ${baseBorderRadius / baseWidth * 100}% / ${baseBorderRadius / baseHeight * 100}%;
    position: relative;
  }

  .background {
    position: absolute;
    width: ${baseBackgroundWidth / baseWidth * 100}%;
    height: ${baseBackgroundHeight / baseHeight * 100}%;
    background-color: red;
    position: absolute;
    top: ${baseBorderWidth / baseHeight * 100}%;
    left: ${baseBorderWidth / baseWidth * 100}%;
    border-top-left-radius: ${baseBackgroundUpperBorderRadius / baseBackgroundWidth * 100}% ${baseBackgroundUpperBorderRadius / baseBackgroundHeight * 100}%;
    border-top-right-radius: ${baseBackgroundUpperBorderRadius / baseBackgroundWidth * 100}% ${baseBackgroundUpperBorderRadius / baseBackgroundHeight * 100}%;
    border-bottom-left-radius: ${baseBackgroundLowerBorderRadius / baseBackgroundWidth * 100}% ${baseBackgroundLowerBorderRadius / baseBackgroundHeight * 100}%;
    border-bottom-right-radius: ${baseBackgroundLowerBorderRadius / baseBackgroundWidth * 100}% ${baseBackgroundLowerBorderRadius / baseBackgroundHeight * 100}%;
    box-shadow: inset 0px 0px 0px ${1 / baseBackgroundWidth * 100} black, 0px 4px 4px rgb(0 0 0 / 25%);
  }
`

class Card extends HTMLElement {
  constructor() {
    super()

    const $shadow = this.attachShadow({ mode: 'open' })

    
    const $root = document.createElement('div')
    $root.setAttribute('class', 'card')
    $shadow.appendChild($root)

    const $background = document.createElement('div')
    $background.setAttribute('class', 'background')
    $root.appendChild($background)

    const $style = document.createElement('style')
    $style.textContent = style
    $shadow.appendChild($style)
  }
}

customElements.define('mtg-card', Card)
