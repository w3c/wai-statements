---
title: "Accessibility Statements"
permalink: /planning/statements/
github:
  repository: wai-statements
footer: > # Text in footer in HTML
  <p><strong>Date: DRAFT $date$</strong> Updated 00 Month 2000. First published 00 Month 2000.</p>
  <p><strong>Editors:</strong> <a href="http://www.w3.org/People/shadi/">Shadi Abou-Zahra</a> and Eric Velleman. Contributors: Name, Name, and <a href="https://www.w3.org/WAI/EO/participants">EOWG Participants</a>.</p>
  <p>Developed by the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT Project</a> funded by the <strong>European Commission under the 7th Framework</strong>.</p>
---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

The purpose of this resource is to provide a guide for owners of websites and mobile applications to describe the accessibility of their web and mobile products and services in an accessibility statement.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Purpose {#Purpose}

The purpose of this resource is to provide a guide for owners of websites and mobile applications to describe the accessibility of their web and mobile products and services. The purpose of the resulting accessibility statements is for people with disabilities to get an understanding of the accessibility of a product or service, and where to get information or leave feedback if the product or service is not accessible. A secondary purpose of the resulting accessibility statements is to support monitoring and procurement of web and mobile accessibility.

## Introduction {#Introduction}
This page lists and describes the information that can be added to an accessibility statement. The purpose of this accessibility statement is to support consistent reporting of the accessibility of websites and mobile applications. It provides a model that will help and guide owners of websites and mobile applications who wish to publish an accessibility statement on their website or mobile application. The reason for a statement can be organizational, local, or national requirements like the EU Directive 2016/2102 in Europe. A reason could also be the wish of an organization to provide harmonized accessibility information to the public. The model accessibility statement is aligned with the <a href="https://www.w3.org/TR/WCAG21/#conformance">authoritative interpretation of WCAG</a> and with <a href="https://www.w3.org/TR/WCAG-EM/#step5c">step 5c of WCAG-EM</a>.

With an accessibility statement, the owner of a website can explain how their website or mobile application conforms to WCAG. The statement also informs visitors about accessible alternatives for (temporarily) inaccessible content. The accessibility statement also provides users with information and a link to a feedback mechanism.

The accessibility statement can (optionally) be used to describe other measures taken to promote accessibility of the website or mobile application and to report on additional organizational, local, or national requirements for the statement. For this reason, the model accessibility statement on this page consists of minimal and optional elements. The minimal  elements are those required by WCAG and WCAG-EM. The optional elements may include additional measures or information as a result of organizational or other (legal) requirements or policies. The owner of a website or mobile application may also consider adding additional information concerning their accessibility.

### Audience

The primary audience for this resource are persons who need to create an accessibility statement. These can be owners of websites and mobile applications, or those responsible for the website or mobile application. Providing an accessibility statement could be voluntarily or required. The requirement could be from the organization itself, from procurers, from researchers, or from a broader initiative such as the EU Directive etc. The guidance on this page provides them with an internationally harmonized model to generate an accessibility statement, including an example for the page markup.
	
An important audience for the accessibility statement are users with disabilities. They may find information about accessible alternatives, accessibility support and/or information about where they can provide input and/or feedback on the accessibility of a website or mobile application. They will also benefit from a harmonized and consistent model.

### Levels of guidance

This resource offers guidance for different objectives:
Description of elements that can be part of an accessibility statement
Minimal model accessibility statement
Comprehensive model accessibility statement

The minimal and comprehensive model accessibility statements also provide a 'datamodel' comparable to the model produced in WCAG-EM to help harmonize consistent reporting.

## List and description of elements {#Listofelements}

This section contains a list of potential elements that can be included in an accessibility statement for a website or mobile application. Every element has a short explanation, one of more examples and a proposed dataformat. Anyone setting up an accessibility statement can use any of these elements. Section 'minimal model accessibility statement' and section 'comprehensive model accessibility statement' provide examples of a minimal and a comprehensive accessibility statement.

Remark: The elements below could be presented folded and then unfold if they are clicked/active. The textareas are there for discussion only. They do not work.. 

### Title
* Provide the accessibility statement with a title that helps people associate the statement with the actual resource it is describing.
* <strong>Example:</strong> For the website of the university of Sampel, this could be 'University of Sampel accessibility statement' (add further detailing if necessary, for example if the statement is only about a smaller part of the website, like the university library). 
* <textarea rows="1" cols="50">Fill in your title here..</textarea><button type="button">Add to my Accessibility Statement</button>

### Introduction
* Provide a short introductory paragraph for people who don't know what accessibility or an Accessibility Statement is.
* <strong>Example:</strong> Example here.
* <textarea rows="1" cols="50">Add your short introduction here..</textarea><button type="button">Add to my Accessibility Statement</button>

### Name of website/mobile app
* Name of the website or mobile app. This includes version information and a date.
* <strong>Example:</strong> Example here.
* <textarea rows="1" cols="50">Fill in the name of your website or mobile app here..</textarea><button type="button">Add to my Accessibility Statement</button>

### Description
* A brief description of the website or mobile app in scope of this Statement.
* <strong>Example:</strong> Example here.
* <textarea rows="1" cols="50">Add your description here..</textarea><button type="button">Add to my Accessibility Statement</button>

### Scope limitations
* Describe any limitations to the scope of this Accessibility Statement (what parts of the portal/service/app does this Statement not cover)
* <strong>Example:</strong> Example here.
* <textarea rows="1" cols="50">Describe any limitations to the scope here..</textarea><button type="button">Add to my Accessibility Statement</button>

### Date
* Date on which the Statement was last modified.
* <strong>Example:</strong> Example here.
* <textarea rows="1" cols="50">When did you write this statement? yyyymmdd</textarea><button type="button">Add to my Accessibility Statement</button>

### Conformance Status
* The options for the conformance status are:
* * Fully conformant: The website or mobile app fully meets the standard/guideline without any exeptions (or by using accessible alternatives as described in the Standard/guideline).
* * Partially conformant: A specific functionality of the website or mobile app is non-conformant with the standard/guideline.
* * Non conformant: The majority of the website or mobile app is non-conformant with the standard/guideline.
* * No assessment available: The website or mobile app has not been evaluated against the standard/guideline or the evaluation result is not available.
* <strong>Example:</strong> Example here.
* <textarea rows="1" cols="50">What is the conformance status of the website or mobile application..</textarea><button type="button">Add to my Accessibility Statement</button>

### Evaluation report
* Details about the evaluation methodology that was followed and the testing that was carried out to draw conclusions about accessibility. If a test report is available then link to it. An example of a testreport can be found in <a href="https://www.w3.org/TR/WCAG-EM/#step5">WCAG-EM step 5</a>.
* <strong>Example:</strong> Example here.
* <textarea rows="1" cols="50">Link to evaluation report..</textarea><button type="button">Add to my Accessibility Statement</button>

### Etc. Thats it for now...
Is this how we want it?

## Minimal Model Accessibility Statement
Todo

## Comprehensive Model Accessibility Statement
Todo

