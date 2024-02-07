# TS Boilerplate

This is an opinionated boilerplate for creating a TypeScript project. It includes the following:

- [`pnpm`](https://pnpm.io)
- [TypeScript](https://www.typescriptlang.org/)

It's opinionated in the sense that it includes a set of tools that I find useful for my own projects. You can use this as a starting point for your own projects, or you can use it as a reference for setting up your own project.

This a minimal boilerplate, so it doesn't include any specific framework or library. It's meant to be a starting point for any kind of project.

## Usage

This project has been set up so you can click the button at the top of the repository to create a new repository from this template.

Alternatively, you can use the following command to create a new repository from this template using the [GitHub CLI](https://cli.github.com/):

```bash
gh repo create <repository-name> --public --description "<description>"
```

## TSConfig

There are many options in the `tsconfig.json` file that you can use to customize the TypeScript compiler. I've included a few options that I find useful, but you can customize it to fit your needs.

This  `tsconfig.json` includes basic options that will lint your code at compile time and in the editor.

I've commented out a few options that I use most often, but that don't really fit a boilerplate. If you are using `jsx` (e.g. ReactJS) or want to use tsconfig to lint your code, you can uncomment the options that are commented out.

In most cases, projects will use ESLint and Prettier to lint and format the code, so the `tsconfig.json` file should be kept minimal to avoid conflicts between the two tools. Nothing more annoying than seeing a bunch of red squiggly lines in your editor because ESLint and TypeScript are fighting over the same rules.

### Roll Your Own `tsconfig.json`

Running `npx tsc --init` will create a `tsconfig.json` file with all but the most basic options commented out. You can then uncomment the options you want to use.
Refer to the [TypeScript documentation](https://www.typescriptlang.org/tsconfig) for more information on the options available.

## A note on `.editorconfig`

[EditorConfig](https://editorconfig.org/) is a useful tool (read the docs). However, I have excluded it from this boilerplate as it can conflict with Prettier and ESLint. Usage should be agreed at a team/contributor level.

## Resources

- [`pnpm`](https://pnpm.io)
- [TypeScript](https://www.typescriptlang.org/)

I have found [Matt Pocock's](https://github.com/mattpocock) [videos](https://youtu.be/eh89VE3Mk5g?t=38) to be very helpful in understanding the `tsconfig.json` file and many other aspects of TS.
