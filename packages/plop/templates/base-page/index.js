
module.exports = function (plop, params) {
  const {
    actions = [],
    prompts = [],
    disablePrompts = false,
    disableActions = false,
    name = 'Page',
    path = './src/pages/{{dashcase name}}/',
  } = params || {}

  const p = [
    {
      type: 'input',
      name: 'name',
      message: `⚙️  ${name} name (with space like "test page") ?`,
      validate: function (value) {
        if (/.+/.test(value)) {
          return true
        }
        return 'Name is required'
      },
    },
    {
      type: 'checkbox',
      name: 'options',
      message: `⚙️  ${name} options ?`,
      choices: [
        { name: 'Slice Manager', value: 'slicemanager' },
        { name: 'Multiple Pages', value: 'multiple' },
      ],
    },
  ]

  const a = [
    {
      type: 'add',
      path: `${path}{{#contains options "multiple"}}[uid].tsx{{else}}index.tsx{{/contains}}`,
      templateFile: './templates/base-page/index.hbs',
    },
    {
      type: 'add',
      path: `./src/imports/{{dashcase name}}.ts`,
      templateFile: './templates/base-page/import.hbs',
      skip: function (params) {
        if (!params.options.includes('slicemanager')) return 'Skipped ❌ SliceManager'
        else return
      }
    },
  ]

  return {
    description: `Generate ${name}`,
    prompts: [
      ...(!disablePrompts ? p : []),
      ...prompts
    ],
    actions: [
      ...(!disablePrompts ? a : []),
      ...actions
    ]
  }
}