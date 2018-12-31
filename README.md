# wai-statements

Accessibility Statement generator tool pages are a part of the WAI website and therefore makes use of the [wai-website-theme](https://github.com/w3c/wai-website-theme) as dependency. Both make use of [Jekyll static site generator](https://jekyllrb.com/) to create the pages.

- Github page: https://w3c.github.io/wai-statements/planning/statements/

- [Accessibility Statements Requirements](https://www.w3.org/WAI/EO/wiki/Accessibility_Statements_Requirements)

---

## Installation and local development

### Requirements

This site is build with Jekyll, [follow Jekyll's installation guide](https://jekyllrb.com/docs/). This is build on Ruby.

Statement generator asset management is done with [Webpack](https://webpack.js.org/guides/getting-started/). For this to work you need basic knowledge of [nodejs](https://nodejs.org/en/).


### Installation as part of the WAI website

Open up your command line interface,

Clone this repository (this will create a folder “wai-statements”):
```
git clone https://github.com/w3c/wai-statements.git

# And cd into it
cd wai-statements
```

If you have installed all [requirements](#requirements):
```
npm install
```

Now you can start development with:
```
npm start
```
The generator lives on url `http://127.0.0.1:4000/wai-statements/planning/statements/` in your browser


If you are done with development and made changes to the generator files, build and commit the new build to make changes to production.

> *TODO*: Create a precommit hook?

```
npm build:webpack
```


### Installation as stand-alone

To use the accessibility statement generator tool as a stand-alone to include into your own site you need to build / develop the site without Jekyll (use once to build compiled html page).

Build or develop the site just with webpack:

> *TODO*: Create a standalone build and development command which generates assets in e.g. `_accessibility_statement_generator` folder with html.

```
# Build
npm run build:webpack

# Development
npm run start:webpack
```

Statement generator source files (development) can be found inside the `_webpack` folder.

Compiled css and js files (production) in `content-images/wai-statements/`.

The (temporary) required generator html is build (with Jekyll) at `_site/planning/statements/generator/index.html`. You will need at least all contents of `<div id="accstatement">` and link to required css and javascript (webpack generated files). The rest is all WAI website material.

For now you need to strip and modify all files manually to include the statement generator into your own project.

---

## Customizing the generator tool

### Add, remove and update content

The generator tool is setup in such a way that content is seperated from function. In this way, adding and removing form or preview content is easy to do. Addition is only required inside the `generator.html` file.

#### Editing the statement create form

The create statement contents are wrapped inside `<section class="page create">`. Just simply add or remove the html markup to edit the form.

There is one extra functionality available to dynamically add extra line to grouped form input; add-line. To use this there are several practical examples inside the form. Required for add-line to work is this basic setup:

```html
<fieldset class="group">
    <legend>An add-line input group</legend>

    <!--
        OPTIONAL: Pre defined lines
        class line is optional and will determine the count start
    -->
    <div class="field line">
        <label for="some_addline_item_1">Some addline item 1</label>
        <input type="text" id="some_addline_item_1" name="an_addline_grouping_name" />
    </div>

    <!--
        REQUIRED: A prototype declared
        class proto required
        [n] = placeholder for the line count
    -->
    <div class="field proto">
        <label for="some_addline_item_[n]">Some addline item [n]</label>
        <input type="text" id="some_addline_item_[n]" name="an_addline_grouping_name" />
    </div>

    <!--
        REQUIRED: An add-line button
        To add the proto to the fieldset as line
    -->
    <button type="button" class="add-line">
        Add another line
    </button>
</fieldset>
```

#### Editing the statement preview

The preview statement contents are wrapped inside `<section class="page preview">`. Just simply add or remove the html markup to edit the form.

Same as with [editing the statement create form](#editing-the-statement-create-form), just add or remove html markup to edit the statement preview.

To print the form data into the statement preview there is some additional functionality available:

- Printing formdata with `data-print` attribute:

    Example print usage:
    ```html
    <!--
        Single input data
        data-print          REQUIRED    input id to print
        data-printdefault   OPTIONAL    defaultvalue if data is missing or empty
        data-printfilter    OPTIONAL    Output transformation; one of [lowercase, capitalize]
    -->
    <span data-print="forminput_id" data-printdefault="MY_FORM_DATA" data-printfilter="lowercase, capitalize"></span>

    <!--
        Print as url
        The data entered will also be outputted into the href
        and can be prefixed like “mailto:” for example.
    -->
    <a href="URL_PREFIX" data-print="some_url_data"></a>

    <!--
        Print Grouped data:
        UL or OL
        Grouped data is stored under the group name
        defined as name on input elements
        Filters added are applied for each data item inside the group
    -->
    <ul data-print="some_grouped_data"></ul>
    ```

- Conditionally show sections with `data-if` attribute:

    To make the statement preview show sections based on filled form inputs / groups, you can wrap contents with a conditional element and / or include a condition to an element like:

    ```html
    <!-- Wrapped inside condition -->
    <div data-if="required_data_id">
        <!-- Content will be visible based on available data -->
    </div>

    <!-- Or part of section -->
    <div>
        <!-- Other content … -->
        <p data-if="some_data">
            This text will be shown if some_data is present.
        </p>
    </div>

    <!-- Depending on multiple data sources -->
    <div data-if="this_data, that_data">
        <!-- Stays hidden until one of data sources is present -->
    </div>
    ```

#### Exceptions

Currently custom handled statement parts are:

- Conformance meaning data (Updates to hidden input #accstmnt_conformance_meaning)
- Limitations section (Still reading directly from DOM)

When changes are required here edits on generator.js are necessary.


### Internationalization

Currently this application does not support easy translation. For now you need to duplicate the `generator.html` file and rename both something like `generator_en.html` and `generator_fr.html`. Then just edit the contents manually.

Contents for the create page (form) are wrapped in `<section class="page create">`, preview inside `<section class="page preview">`.
