# Puppeteer + Jest + TypeScript

I've quite enjoyed the use of Puppeteer, especially the way that it's fast and it's element identification seems very robust. 
When researching online I found lot of examples but often without Page Object Models and with significant duplication of string elements. 
One thing I wanted to do with this framework was to put Element Identification strongly at its core when possible to allow for easier maintenance.

# Installation Overview
Please run:
 - **npm install**
 - *Build typescript (see below)*
 - **npm run test**

## Build Typescript
As you are hopefully using vscode remember to

 - Open the command pallette (**CTRL+Shift+B**) 
 - And select **tsc:watch**

This will automatically recompile your code whenever you save it. Typescript is currently writing to the dist folder

Alternatively in your terminal/command line run **npm run build** to trigger the process manually

### Typescript issue
Avoid using the concept of 'extend' to inherit from other typescript files. I encountered this bug and refactored my approach accordingly (**IntelliSense** is a beautiful thing!)

 [# Autocomplete crashes when importing from node_modules #31465](https://github.com/microsoft/TypeScript/issues/31465)

# vscode suggestions
I personally would install the following extensions

 - Prettier
 - Eslint (Enable settings of eslint.autoFixOnSave && prettier.useTabs)

 Enjoy!