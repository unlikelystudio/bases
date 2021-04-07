module.exports = function (plop) {
  const BaseComponent = require('../base-component/index.js')

  return BaseComponent(plop, {
    name: 'Slice',
    actions: [
      {
        type: 'add',
        path: './src/data/slices-data/{{dashcase name}}/index.ts',
        templateFile: './templates/base-slice/index.hbs',
      },
      {
        type: 'add',
        path: './src/data/slices-data/{{dashcase name}}/prismic.json',
        templateFile: './templates/base-slice/json.hbs',
      },
      {
        type: 'modify',
        path: './src/data/slices-data/index.ts',
        pattern: /(\/\* TEMPLATE IMPORT \*\/)/g,
        templateFile: './templates/base-slice/import.hbs',
      },
      {
        type: 'modify',
        path: './src/data/slices-data/index.ts',
        pattern: /(\/\* TEMPLATE CASE \*\/)/g,
        templateFile: './templates/base-slice/case.hbs',
      },
    ],
  })
}