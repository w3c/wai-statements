# wai-statements

Accessibility Statement generator tool pages are a part of the WAI website and therefore makes use of the [wai-website-theme](https://github.com/w3c/wai-website-theme) as dependency. Both make use of [Jekyll static site generator](https://jekyllrb.com/) to create the pages.

- Github page: https://w3c.github.io/wai-statements/planning/statements/

- [Requirements](https://www.w3.org/WAI/EO/wiki/Accessibility_Statements_Requirements)

---

## Installation and local development

### Installation as part of the WAI website

This site is built with Jekyll, [follow Jekyll's installation guide](https://jekyllrb.com/docs/) first.

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

To use the accessibility statement generator tool as a stand-alone to include in your own site you need to build the site once with Jekyll, see "[Installation as part of the WAI website](#installation-as-part-of-the-wai-website)".

Build the site:
```
bundle exec jekyll build
```

The complete site is built inside the `_site` folder and the generated files you need will be:

- HTML: `planning/statements/generator/index.html`

    You will need all the contents of `<div id="accstatement">` and link to required css and javascript below. The rest is all WAI website material.

- CSS: `content-images/wai-statements/generator.css`
- JS: `content-images/wai-statements/generator.js`
- WAI theme assets: `assets/css/style.css` and `assets/scripts/main.js`

    This is required for the expanding and toggling of sections and information.

For now you need to strip and modify all files manually to make it includeable in your own project.

#### TODO for stand alone version

- [ ] Add standalone version page `generator/standalone.html`



---

## Customizing the generator tool

### Add, remove and update content

The generator tool is setup in such a way that content is seperated from function. In this way, adding and removing form or preview content is easy to do. Addition is only required inside the `generator.html` file.

#### Editing the statement create form

The create statement contents are wrapped inside `<section class="page create">`. Just simply add or remove the html markup to edit the form.

Supported form elements are:
- input

  NOTE: Input types of type radio and checkbox require the value attribute set, for example:

  ```html
  <input type="radio" name="radiogroup" value="option 1">
  <input type="radio" name="radiogroup" value="option 2">
  <input type="radio" name="radiogroup" value="option x">
  ```

- textarea
- select

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

- Printing form data with `data-print` attribute:

    Example print usage:
    ```html
    <!--
        Single input data
        data-print          REQUIRED    input id to print
        data-printdefault   OPTIONAL    default value if data is missing or empty
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

When changes are required here edits to generator.js are necessary.


### Internationalization

Currently this application does not support easy translation. For now you need to duplicate the `generator.html` file and rename both something like `generator_en.html` and `generator_fr.html`. Then just edit the contents manually.

Contents for the create page (form) are wrapped in `<section class="page create">`, preview inside `<section class="page preview">`.
