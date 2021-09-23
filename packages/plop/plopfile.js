const path = require('path')
const helpers = require('handlebars-helpers')

module.exports = function (plop) {
  const BaseComponent = require('./templates/base-component/index.js')
  const BaseSlice = require('./templates/base-slice/index.js')
  const BasePage = require('./templates/base-page/index.js')
  const BaseProvider = require('./templates/base-provider/index.js')

  helpers({
    handlebars: plop.handlebars,
  })

  plop.setGenerator('component', BaseComponent(plop))
  plop.setGenerator('slice', BaseSlice(plop))
  plop.setGenerator('page', BasePage(plop))
  plop.setGenerator('provider', BaseProvider(plop))
}
