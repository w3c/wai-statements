---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Developing an Accessibility Statement"

lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2021-03-11   # Put the date of this translation YYYY-MM-DD (with month in the middle)

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-statements
  path: index.md   # Add the language shortcode to the middle of the filename, for example: index.fr.md
permalink: /planning/statements/   # Add the language shortcode to the end, with no slash at end, for example: /planning/statements/fr

ref: /planning/statements/   # Translators, do not change this
external_css: /content-images/wai-statements/generator.css

description:  This resource helps you create an accessibility statement for your own website, mobile application, or other digital content.   # translate the description

footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
  <p><strong>Date:</strong> Updated 11 March 2021. First published November 2018. <a href="../changelog/">Changelog</a>.</p>
  <p><strong>Project Team:</strong> <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra</a>, Eric Velleman, Sanne Eendebak, Roel Antonisse, and Bas de Bruin. <a href="../acknowledgements/">Acknowledgements</a>.</p>
  <p>Developed by the <a href="https://www.w3.org/WAI/EO/">Education and Outreach Working Group (EOWG)</a>. Developed as part of the <a href="https://www.w3.org/WAI/Tools/">WAI-Tools project</a>, co-funded by the European Commission.</p>

---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This tool helps you create an accessibility statement for your own website, mobile application, or other digital content. You can download the statement you created, and further customize, style, and brand it. Read more below about accessibility statements or [generate an accessibility statement]({{ '/planning/statements/generator/' | relative_url }}#create) right away.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include excol.html type="all" %}

{% include excol.html type="start" %}

## Why provide an accessibility statement

{% include excol.html type="middle" %}

Accessibility statements are important for several reasons:

* Show your users that you care about accessibility and about them
* Provide them with information about the accessibility of your content
* Demonstrate commitment to accessibility, and to social responsibility

In some situations, you may be required to provide an accessibility statement, such as public bodies in countries that implement the [EU Web Accessibility Directive {% include_cached external.html %}](https://eur-lex.europa.eu/eli/dir/2016/2102/oj). The W3C list of [Web Accessibility Laws &amp; Policies](https://www.w3.org/WAI/policies/) can help you identify policies applicable to you.

{% include excol.html type="end" %}

{% include excol.html type="start" %}

## What to include in an accessibility statement

{% include excol.html type="middle" %}

Accessibility statements should contain at least the following:

* A commitment to accessibility for people with disabilities
* The accessibility standard applied, such as [WCAG 2.1]({{ '/standards-guidelines/wcag/' | relative_url }})
* Contact information in case users encounter problems

It is also advisable to include the following information:

* Any known limitations, to avoid frustration of your users
* Measures taken by your organization to ensure accessibility
* Technical prerequisites, such as supported web browsers
* Environments in which the content has been tested to work
* References to applicable national or local laws and policies

Note that in some situations you may be required to provide particular content in your accessibility statements. For example, there are specific [requirements for accessibility statements in relation to the EU Web Accessibility Directive {% include_cached external.html %}](https://eur-lex.europa.eu/eli/dec_impl/2018/1523/oj).

{% include excol.html type="end" %}

{% include excol.html type="start" %}

## How to write an accessibility statement

{% include excol.html type="middle" %}

Accessibility statements are primarily for users of your content. Usually they will refer to accessibility statements when they encounter problems. Technical and jurisdictional language will likely lead to confusion and increase the frustration rather than help your users. It is important to write in simple language, and to provide information that is useful to the users, rather than use the language of developers and lawyers.

In particular, accessibility statements should explain functionality and known limitations in common terms. For example, rather than to say “WCAG Success Criterion 1.2.2 was not met”, it is better to say “videos do not have captions”. Accessibility statements are not technical assessments or declarations of conformity, though they ideally refer to such background to provide verification and increase credibility.

{% include excol.html type="end" %}

{% include excol.html type="start" %}

## Where to put an accessibility statement

{% include excol.html type="middle" %}

Accessibility statements should be easy to find. Linking them from several places, such as from the footer, help menu, sitemap, about page, and other prominent areas helps users to find them. Use consistent link names for your accessibility statements to help users recognize them. This includes link names across the content of your website and mobile applications, and across groups of related websites and mobile applications. For example, use the same link name on all web pages to refer to an accessibility statement for that website, and use that same link name to refer to the accessibility statement of the mobile application version of the website.

{% include excol.html type="end" %}

{% include excol.html type="start" %}

## Examples of accessibility statements

{% include excol.html type="middle" %}

The following examples of accessibility statements were created using this generator tool:

* [Example of Minimal Accessibility Statement]({{ '/planning/statements/minimal-example/' | relative_url }})
* [Example of Complete Accessibility Statement]({{ '/planning/statements/complete-example/' | relative_url }})
* [Web Accessibility Initiative (WAI) Website Accessibility Statement]({{ '/about/accessibility-statement/' | relative_url }})

{% include excol.html type="end" %}

{% include excol.html type="start" %}

## About this generator tool

{% include excol.html type="middle" %}

This accessibility statement generator tool is designed for use in different contexts and jurisdictions. These situations can be so different that we cannot provide support for each one individually. For example, you may be subject to a particular organizational policy, quality assurance process, or law that requires you to provide certain information in your accessibility statement.

This generator tool allows you to enter different types of information to create accessibility statements for your particular situation. You can download the generated accessibility statement to further customize it for your own needs. You can also reuse the [source code for this generator tool {% include_cached external.html %}](https://github.com/w3c/wai-statements), for example to translate it or to customize it for your particular situation.

{% include excol.html type="end" %}

<a href="{{ '/planning/statements/generator/' | relative_url }}#create" class="button" style="margin-top: 2rem;">Generate an accessibility statement</a>
