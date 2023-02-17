**SIMPLE STATIC SITE GENERATOR BUILD WITH NODE JS**


This site generator is used to create dummy post using a tailwind toolbox as the template

__How to install and run the project__

````
Prerequisites

1. Node js installed.
2. Your favorite code editor eg. VSCode.

How to install

1. Clone / download this repo to your computer.
2. Open the cloned repo with your editor.
3. Open your editors terminal and ensure to change directory to match the cloned folder.
4. Run npm install to have all the packages for this project installed and configured.
5. Run npm start.
6. When the project runs successfully, a dist folder will be generated html pages of the respective markdown files.
7 Finally run `npx serve dist` command to execute the generate html pages and serve the static pages by the local serve and its port.
8. To view the website generate, click `ctrl` command on the keyboard as well as the link that is displayed on the terminal to access the static site on the browser.
````

**How to use the project**
````
Steps
1. Go to the pages folder.
2. Modifiy the contents of the markdown files to suite your needs or the contents you want to be displayed on the site.
3. Save the files.
4. Run `npm start` this will generate the respective markdown files with .html extensions.
5. Run the `npx serve dist` , this will render the generated html files.
6. The files generated will be served to the browser via the localhost based on the port provided.
````

**Credits**
````
1. Template used https://www.tailwindtoolbox.com/templates/minimal-blog
2. Credits to joelnet's repo https://github.com/joelnet/static-site-generator.git
````