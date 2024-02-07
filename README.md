# TS Boilerplate

This is an opinionated boilerplate for creating a TypeScript project. It includes:

- [`pnpm`](https://pnpm.io)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)

It's opinionated in the sense that it includes a set of tools that I find useful for my own projects. You can use this as a starting point for your own projects, or you can use it as a reference for setting up your own project.

This a minimal boilerplate, so it doesn't include any specific framework or library. It's meant to be a starting point.

## Usage

This project has been set up so you can click the button at the top of the repository to create a new repository from this template.

Alternatively, you can use the following command to create a new repository from this template using the [GitHub CLI](https://cli.github.com/):

```bash
gh repo create my-new-project --template degu-io/ts-boilerplate --private --clone
```

## TSConfig

There are many options in the `tsconfig.json` file that you can use to customize the TypeScript compiler. I've included a few options that I find useful, but you can customize it to fit your needs.

This `tsconfig.json` includes basic options that will lint your code at compile time and in the editor.

I've commented out a few options that I use most often, but that don't really fit a boilerplate. If you are using `jsx` (e.g. ReactJS) or want to use tsconfig to lint your code, you can uncomment the options that are commented out.

In most cases, projects will use ESLint and Prettier to lint and format the code, so the `tsconfig.json` file should be kept minimal to avoid conflicts between the two tools. Nothing more annoying than seeing a bunch of red squiggly lines in your editor because ESLint and TypeScript are fighting over the same rules.

### Roll Your Own `tsconfig.json`

Running `npx tsc --init` will create a `tsconfig.json` file with all but the most basic options commented out. You can then uncomment the options you want to use.
Refer to the [TypeScript documentation](https://www.typescriptlang.org/tsconfig) for more information on the options available.

## ESLint

[ESLint](https://eslint.org/docs/latest/use/getting-started) can be created by running `npm init @eslint/config` and running through the prompts.

In this template we have gone for `.cjs` format as it removes the eslint warning.

You may want to remove `node` or `browser` from the `env` object in the `.eslintrc.js` file, depending on your project. See other environments [here](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments).

I've also added the `@typescript-eslint/no-unused-vars` [ignore pattern](https://eslint.org/docs/latest/rules/no-unused-vars#options) `^_.*` which means you can mark a variable as unused by prefixing it with an underscore.

## Prettier

Following the [Prettier install docs](https://prettier.io/docs/en/install.html) we've installed the `eslint-config-prettier` to prevent conflicts between ESLint and Prettier.

Also, we've added `husky` and `lint-staged` to run Prettier on staged files. These tools are a godsend ensuring all commits are suitably formatted and linted.

## A note on `.editorconfig`

[EditorConfig](https://editorconfig.org/) is a useful tool (read the docs). However, I have excluded it from this boilerplate as it can conflict with Prettier and ESLint. Usage should be agreed at a team/contributor level.

## Resources

- [`pnpm`](https://pnpm.io)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-Staged](https://)

I have found [Matt Pocock's](https://github.com/mattpocock) [videos](https://youtu.be/eh89VE3Mk5g?t=38) to be very helpful in understanding the `tsconfig.json` file and many other aspects of TS.
