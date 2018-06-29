---
title: "Accessibility Statements"
permalink: /planning/statements/
github:
  repository: w3c/wai-statements
footer: > # Text in footer in HTML
  <p><strong>Date: DRAFT $date$</strong> Updated 00 Month 2000. First published 00 Month 2000.</p>
  <p><strong>Editors:</strong> <a href="http://www.w3.org/People/shadi/">Shadi Abou-Zahra</a> and Eric Velleman. Contributors: Name, Name, and <a href="https://www.w3.org/WAI/EO/participants">EOWG Participants</a>.</p>
  <p>Developed by the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/ACT/">WAI-ACT Project</a> funded by the <strong>European Commission under the 7th Framework</strong>.</p>
---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This guide and tool helps owners of websites and mobile applications to describe the accessibility of their products and services. The resulting accessibility statements are for people with disabilities, to get an understanding of the accessibility and where to get information or leave to feedback.

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

## Example Accessibility Statements

{% include excol.html type="start" id="minimal_example" %}

### Minimal Example

{% include excol.html type="middle" %}

[to be written]

{% include excol.html type="end" %}

{% include excol.html type="start" id="comprehensive_example" %}

### Comprehensive Example

{% include excol.html type="middle" %}

[to be written]

{% include excol.html type="end" %}


## Introduction {#Introduction}

To be edited...

<!--

## Purpose {#Purpose}

This guide and tool helps owners of websites and mobile applications to describe the accessibility of their products and services. The resulting accessibility statements are for people with disabilities, to get an understanding of the accessibility and where to get information or leave to feedback.

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

-->

{% include excol.html type="all" %}

## List and description of elements {#Listofelements}

This section contains a list of potential elements that can be included in an accessibility statement for a website or mobile application. Every element has a short explanation, one or more examples and a proposed dataformat. Anyone setting up an accessibility statement can use any of these elements. Section 'minimal model accessibility statement' and section 'comprehensive model accessibility statement' provide examples of a minimal and a comprehensive accessibility statement.

Remark: The elements below could be presented folded and then unfold if they are clicked/active. The textareas and buttons are there for discussion only. They do not work.. 

{% include excol.html type="start" id="Title_input" %}
### Title
{% include excol.html type="middle" %}
* Provide the accessibility statement with a title that helps people associate the statement with the actual resource it is describing.
* <strong>Example:</strong> For the website of the university of Sampel, this could be "University of Sampel website Accessibility Statement". Add further detailing if necessary, for example if the Accessibility Statement is only about a smaller part of the website, like the university library: "University of Sampel library website Accessibility Statement. If it is for the app: "University of Sampel app Accessibility Statement"
* <textarea rows="1" cols="50">Fill in your title here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Introduction_input" %}
### Introduction
{% include excol.html type="middle" %}
* Provide a short introductory paragraph for people who don't know what accessibility or an Accessibility Statement is.
* <strong>Example:</strong> "This is the Accessibility Statement of the website of Sampel University. This Accessibility Statement provides an understanding of the accessibility of our website/mobile application, and where to get information or leave feedback if you experience problems with its accessibility".
* <textarea rows="1" cols="50">Add your short introduction here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Name_input" %}
### Name of website/mobile app
{% include excol.html type="middle" %}
* Name of the website or mobile app. This includes version information and a date if necessary to recognize a specific version of a website or mobile application. For a website this includes the URI, for a mobile application it could include a link to the place where the app can be downloaded or installed from.
* <strong>Example:</strong> For the public website this could be: "www.universityofsampel.ort". Or for the library: "www.universityofsampel.ort/library/" or shop: "www.universityofsampel.ort/shop". For the mobile version of their website: "m.universityofsampel.ort". The Dutch version of their website: "nl.universityofsampel.ort". their mobile wayfinder app it could be: "universityofsampel.ort/appshop/wayfinderapp (version 1.2.3)"

* <textarea rows="1" cols="50">Fill in the name/URI of your website or mobile app here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Description_input" %}
### Description
{% include excol.html type="middle" %}
* A brief description of the website or mobile app in scope of this Statement.
* <strong>Example:</strong> For the website: "The worlds leading higher education and research University". Or for the mobile application: "The University of Sampel navigational and way-finding mobile application".
* <textarea rows="1" cols="50">Add your description here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Scope_limitations_input" %}
### Scope limitations
{% include excol.html type="middle" %}
* Describe any limitations to the scope of this Accessibility Statement (what parts of the portal/service/app does this Statement not cover). A website can be part of a larger website, such as the online shop in the preceding example at www.universityofsampel.ort/shop. The scope of the Accessibility Statement can then be limited to this this specific part. The Accessibility Statement could also exclude certain elements of the website. More information about exceptions to the scope can be found at: https://www.w3.org/TR/WCAG-EM/#step1a
* <strong>Example:</strong> "University of Sampel strives to conform to WCAG2.1. it is not always possible to do so in all areas of the website. Therefore the following url’s are excluded from this statement."
[www.url.com/page1] (Add reason why)
[www.url.com/page2] (Add reason why)
* <textarea rows="1" cols="50">Describe any limitations to the scope here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Date_input" %}
### Date
{% include excol.html type="middle" %}
* Date on which the Statement was last modified.
* <strong>Example:</strong> For the first or May of the year 2018, this would be "20180501"
* When did you write this statement?: <textarea rows="1" cols="50">yyyymmdd</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Conformance_status_input" %}
### Conformance Status
{% include excol.html type="middle" %}
* The options for the conformance status are:
* * Fully conformant: The website or mobile app fully meets the standard/guideline without any exeptions (or by using accessible alternatives as described in the Standard/guideline).
* * Partially conformant: A specific functionality of the website or mobile app is non-conformant with the standard/guideline.
* * Non conformant: The majority of the website or mobile app is non-conformant with the standard/guideline.
* * No assessment available: The website or mobile app has not been evaluated against the standard/guideline or the evaluation result is not available.
* <textarea rows="1" cols="50">What is the conformance status of the website or mobile application..</textarea><button type="button">Add to my Accessibility Statement</button>
* Comment: The textarea should be a select box
{% include excol.html type="end" %}

{% include excol.html type="start" id="Evaluation_report_input" %}
### Evaluation report
{% include excol.html type="middle" %}
* Details about the evaluation methodology that was followed and the testing that was carried out to draw conclusions about accessibility. If a test report is available then link to it. An example of a testreport can be found in <a href="https://www.w3.org/TR/WCAG-EM/#step5">WCAG-EM step 5</a>.
* <strong>Example:</strong> With the example of the Sampel University library website, this could be: "www.universityofsampel.ort/evaluationreport/library". For the mobile application an example is: "www.universityofsampel.ort/evaluationreport/mobileapp"
* <textarea rows="1" cols="50">Add a link to the evaluation report..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Contact_information_input" %}
### Contact information
{% include excol.html type="middle" %}
* For questions about this Statement. This could be an email of the person responsible for the Accessibility Statement. It is important to point out the person or department directly responsible for accessibility is important to point out.
* <strong>Example:</strong> Department of Communication of Sampel University; Accessibility@universityofsampel.ort; +31 111 111 111
* Name (or department etc.): <textarea rows="1" cols="50">Name...</textarea>
* E-mail address: <textarea rows="1" cols="50">E-mail address...</textarea>
* Phone number: <textarea rows="1" cols="50">Phone number...</textarea>
* <button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Notes_input" %}
### Notes
{% include excol.html type="middle" %}
* Any information important for the understanding of this Statement.
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Add any notes here that help persons understand the statement</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Remarks_explanations_input" %}
### Remarks and explanation
{% include excol.html type="middle" %}
* Explanation of the parts of the content that are not accessible, and the reasons for that inaccessibility and, where appropriate, the accessible alternatives provided for to justify the conformance level and conformance status. When the conformance level is ’Partial conformant’ or ‘Non conformant’, the explanation requires information about:
* * Website (and mobile application) areas that do not conform
* * Reasons for not conforming. Explain which Success Criteria are non-conformant and indicate why
* * If a SC does not apply, explain why it does not apply
* * Explain accessible alternatives that are used (if available) and why they have been used.
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Part of content/Area that does not conform..</textarea>
* <textarea rows="1" cols="50">Reason for the non-conformance...</textarea>
* <textarea rows="1" cols="50">Reason for the non-applicability...</textarea>
* <textarea rows="1" cols="50">Link to the accessible alternative...</textarea>
* <textarea rows="1" cols="50">Explain why accessible alternative has been used...</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Feedback_input" %}
### Feedback
{% include excol.html type="middle" %}
* An invitation to send feedback about the Accessibility Statement (This is a description of, and a link to, a feedback mechanism)
Request accessible format - A possibility to request information that is not accessible.
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Add a link to the feedback mechanism here...</textarea>
* <textarea rows="1" cols="50">Provide a description of the feedback mechnamism here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Enforcement_procedure_input" %}
### Enforcement procedure
{% include excol.html type="middle" %}
* Description of and link to enforcement procedure.
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Add a link to the enforcement procedure here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

## More optional elements

### Compliance basis
* Where do the requirements originate (organization, legal requirement, ..)
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Explain why your organization strives for conformance...</textarea><button type="button">Add to my Accessibility Statement</button>

### Quality assurance method used
* The quality assurance method used (WCAG-EM, internal QA, other)
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Add qualtity assurance method used...</textarea><button type="button">Add to my Accessibility Statement</button>

### Intention of the organization
* The intention could be to reach a higher level of conformance or to work on full conformance of all websites and mobile apps. It also describes the manner in which digital accessibility is embedded in the organization's policy.
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Add information about the intention of the organization regarding accessibility..</textarea><button type="button">Add to my Accessibility Statement</button>

### Conformance Measures
* Add conformance measures to ‘remarks and explanations’. For every accessibility problem identified, describe the measures that will be taken and the schedule that indicates when those measures are put into effect.
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Accessibility barrier... (SC or Test)</textarea>
* <textarea rows="1" cols="50">Measures to be taken...</textarea>
* <textarea rows="1" cols="50">Deadline date...</textarea><button type="button">Add to my Accessibility Statement</button>
<button type="button">+ Add more barriers</button>

### Organisational measures
* Measures implemented to achieve sustainable accessibility like procurement actions, training, raising awareness, QA, etc.
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Has your organization taken measures to achieve accessibility...</textarea><button type="button">Add to my Accessibility Statement</button>

### Formal confirmation
* Formal confirmation on management level of the timeliness and the correctness of the Accessibility Statement, and confirmation that the designated administrator or other responsible person or function formally agrees with the content of the Accessibility Statement by the organization.
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Who is the formal confirmation from...</textarea><button type="button">Add to my Accessibility Statement</button>

## Good practice on writing and placing statements (draft heading)
[to be written]
