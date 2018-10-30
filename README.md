# wai-statements

Accessibility Statement generator tool pages are a part of the WAI website and therefore makes use of the [wai-website-theme](https://github.com/w3c/wai-website-theme) as dependency. Both make use of [Jekyll static site generator](https://jekyllrb.com/) to create the pages.

- Github page: https://w3c.github.io/wai-statements/planning/statements/

- [Requirements](https://www.w3.org/WAI/EO/wiki/Accessibility_Statements_Requirements)

---

## Installation and local development

### Installation as part of the WAI website

This site is build with Jekyll, [follow Jekyll's installation guide](https://jekyllrb.com/docs/) first.

Then clone this repository:
```
git clone https://github.com/w3c/wai-statements.git
```

If you have installed ruby and jekyll, cd into the project and install dependencies defined inside the `Gemfile`:

```
bundle install
```

Now you can start development with:

```
bundle exec jekyll serve
```


### Installation as stand-alone

To use the accessibility statement generator tool as a stand-alone to include into your own site you just need the following files:

- `generator.html`

    This file contains the markup for the create and preview page.

- `content-images/wai-statements/generator.css`

    This file contains application styling.

- `content-images/wai-statements/generator.js`

    This file handles / is the application script code.

The only problem is that this will not work in a browser yet, because the `html` file is a Jekyll template inside the wai theme.

To get the compiled files you need to follow the installation instructions for "[Installation as part of the WAI website](#installation-as-part-of-the-wai-website)" and instead of serving you build the site once:

```
bundle exec jekyll build
```

The complete site is build inside the `_site` folder and the generated files you need will be:

- HTML: `planning/statements/generator/index.html`

    You will need all contents of `<div id="accstatement">` and link to required css and javascript below. The rest is all WAI website material.

- CSS: `content-images/wai-statements/generator.css`
- JS: `content-images/wai-statements/generator.js`
- WAI theme assets: `assets/css/style.css` and `assets/scripts/main.js`

    This is required for the expanding and toggling of sections and information.


---

## Customizing the generator tool

### Add, remove and update content

TODO

### Internationalization

Currently this application does not support easy translation. For now you need to duplicate the `generator.html` file and rename both something like `generator_en.html` and `generator_fr.html`. Then just edit the contents manually.

Contents for the create page (form) are wrapped in `<section class="page create">`, preview inside `<section class="page preview">`.
