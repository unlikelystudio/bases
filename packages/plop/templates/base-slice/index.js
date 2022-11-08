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
        type: 'modify',
        path: './src/data/slices-data/index.ts',
        pattern: /(\/\* TEMPLATE IMPORT \*\/)/g,
        templateFile: './templates/base-slice/import.hbs',
      },
      {
        type: 'modify',
        path: './src/data/slices-data/index.ts',
        pattern: /(\/\* TEMPLATE KEY \*\/)/g,
        templateFile: './templates/base-slice/key.hbs',
      },
      {
        type: 'modify',
        path: './src/lib/storyblok-types.ts',
        pattern: /(\/\* TEMPLATE STORYBLOK SLICE \*\/)/g,
        templateFile: './templates/base-slice/storyblok-slice.hbs',
      },
    ],
  })
}
