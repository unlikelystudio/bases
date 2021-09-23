module.exports = function (plop, params) {
  const {
    actions = [],
    prompts = [],
    disablePrompts = false,
    disableActions = false,
    name = 'Provider',
    path = './src/providers/{{pascalcase name}}/',
  } = params || {}

  const p = [
    {
      type: 'input',
      name: 'name',
      message: `⚙️  ${name} name (with space like "test provider") ?`,
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
      templateFile: './templates/base-provider/index.hbs',
    },
  ]

  return {
    description: `Generate ${name}`,
    prompts: [...(!disablePrompts ? p : []), ...prompts],
    actions: [...(!disablePrompts ? a : []), ...actions],
  }
}
