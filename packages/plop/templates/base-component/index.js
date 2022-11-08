module.exports = function (plop, params) {
  const {
    actions = [],
    prompts = [],
    disablePrompts = false,
    disableActions = false,
    name = 'Component',
    path = './src/components/{{pascalcase name}}/',
  } = params || {}

  const p = [
    {
      type: 'input',
      name: 'name',
      message: `⚙️  ${name} name (with space like "test component") ?`,
      validate: function (value) {
        if (/.+/.test(value)) {
          return true
        }
        return 'Name is required'
      },
    },
  ]

  const a = [
    {
      type: 'add',
      path: `${path}index.tsx`,
      templateFile: './templates/base-component/index.hbs',
    },
    {
      type: 'add',
      path: `${path}index.stories.tsx`,
      templateFile: './templates/base-component/stories.hbs',
    },
    {
      type: 'add',
      path: `${path}styles.module.scss`,
      templateFile: './templates/base-component/styles.hbs',
    },
  ]

  return {
    description: `Generate ${name}`,
    prompts: [...(!disablePrompts ? p : []), ...prompts],
    actions: [...(!disablePrompts ? a : []), ...actions],
  }
}
