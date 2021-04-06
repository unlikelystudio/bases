const path = require('path')
const helpers = require('handlebars-helpers')

module.exports = function (plop) {
  const BaseComponent = require('./templates/base-component/index.ts')
  const BaseSlice = require('./templates/base-slice/index.ts')
  const BasePage = require('./templates/base-page/index.ts')

  helpers({
    handlebars: plop.handlebars
  })

  plop.setGenerator('component', BaseComponent(plop))
  plop.setGenerator('slice', BaseSlice(plop))
  plop.setGenerator('page', BasePage(plop))
}