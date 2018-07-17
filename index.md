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

This guide and tool helps owners of websites and mobile applications to describe the accessibility of their products and services. The resulting accessibility statements are for accessibility champions/advocates, CSR officers and persons with disabilities. Persons with disabilities can use the accessibility statement to find information about accessible alternatives, accessibility support and/or information about where they can provide input and/or feedback on the accessibility of a website or mobile application. 

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

{::options toc_levels="2" /}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Example Accessibility Statements

{% include excol.html type="start" id="minimal_example" %}

### Minimal Example

{% include excol.html type="middle" %}

### Example Library Accessibility Statement (for website)
This Accessibility Statement provides an understanding of the accessibility of our website, and where to get information or leave feedback if you experience problems with its accessibility

<strong>Name of website:</strong> http://www.example-library.org

<strong>Scope limitation:</strong> This Accessibility Statement only applies to the library and not to the rest of our corporate website.

<strong>Date:</strong> July 2018

<strong>Standards applied:</strong> EN 301 549 v1.1.2

<strong>Conformance status:</strong> Fully conformant (The website or mobile app fully meets the standard/guideline without any exeptions (or by using accessible alternatives as described in the Standard/guideline).

<strong>Web technologies relied upon for conformance:</strong> HTML, CSS, Javascript, WAI-ARIA, PDF and SMIL.

<strong>Accessibility Support baseline:</strong> This website does not work with older versions of screenreader XYZ (older than version 1.2.3). The videoplayer does not show captions in the older version of the XYZ browser (before version 1.2.3)

<strong>Link to evaluation report:</strong> https://www.example-library.org/accessibility/

Comment: maybe better to include a table here with A and AA SC and pass/fail/n/a. But do not know how to make table in Github yet ;-)

INSERT TABLE HERE (4 columns)

<strong>Optional: Feedback:</strong> If you have feedback about the accessibility of the website described in this Accessibility Statement, please use the feedback form on the following page: https://www.example-library.org/accessibility/



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

This guide and tool helps owners of websites and mobile applications to describe the accessibility of their products and services. The resulting accessibility statements are for people with disabilities, to get an understanding of the accessibility and where to get information or leave feedback.

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

This section contains a list of potential elements that can be included in an accessibility statement for a website or mobile application. Every element has a short explanation, one or more examples and a proposed dataformat. Anyone setting up an accessibility statement can use any of these elements. Section 'minimal model accessibility statement' and section 'comprehensive model accessibility statement' provide examples of a minimal and a comprehensive accessibility statement. <strong>Comment:</strong> The textareas and buttons are there for discussion only. They do not work.. 

{% include excol.html type="start" id="Title_input" %}
### Title of Accessibility Statement
{% include excol.html type="middle" %}
* Provide the accessibility statement with a title that helps people understand where the document is from and what it is for. 
* <strong>Example:</strong> For the website of the university of Sampel, this could be "University of Sampel Accessibility Statement".
* <strong>Format:</strong> [Name of your organization] Accessibility Statement
* <textarea rows="1" cols="50">Name of your organization</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Introduction_input" %}
### Introduction
{% include excol.html type="middle" %}
* Provide a short introductory paragraph for people who don't know what accessibility or an Accessibility Statement is.
* <strong>Example:</strong> "This Accessibility Statement provides an understanding of the accessibility of our website/mobile application, and where to get information or leave feedback if you experience problems with its accessibility".
* <strong>Format:</strong> [Introduction paragraph]
* <textarea rows="1" cols="50">Add your short introduction here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Name_input" %}
### Name of website/mobile app
{% include excol.html type="middle" %}
* Provide the name of the website or mobile application that is the subject of this Accessibility Statement. This includes version information and a date if necessary to recognize a specific version. For a website this could be or include the URI, for a mobile application it could be or include a link to the place where the app can be downloaded or installed from.
* <strong>Example:</strong> For the public website this could be: "https://www.universityofsampel.ort". Or for the library: "https://www.universityofsampel.ort/library/" or shop: "https://www.universityofsampel.ort/shop". For the mobile version of their website: "https://m.universityofsampel.ort". The Dutch version of their website: "nl.universityofsampel.ort". For their mobile wayfinder app it could be: "https://universityofsampel.ort/appshop/wayfinderapp (version 1.2.3) or https://nameofappstore.ext/appname". 
* <strong>Format:</strong> URL: [https://www.universityofsampel.ort/library/] or APP: [https://nameofappstore.ext/appname]
* <textarea rows="1" cols="50">https://www.universityofsampel.ort/library/</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Description_input" %}
### Brief description
{% include excol.html type="middle" %}
* A brief description of the website or mobile app that is the subject of this Accessibility Statement. 
* <strong>Example:</strong> For the website: "This is the library of the worlds leading higher education and research University". Or for the mobile application: "The University of Sampel navigational and way-finding mobile application".
* <strong>Format:</strong> [Description]
* <textarea rows="1" cols="50">Add your description here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Scope_limitations_input" %}
### Scope limitations
{% include excol.html type="middle" %}
* Describe any limitations to the scope of this Accessibility Statement (what parts of the portal/service/app does this Statement not cover). A website can be part of a larger website, such as the online shop in the preceding example at www.universityofsampel.ort/shop. The scope of the Accessibility Statement can then be limited to this specific part. The scope limitation can also apply to states of the website or mobile application. For instance if the website or mobile application is different depending on the time of the day, the country, certain specifics of the user, etc. The scope may then be limited to the US version of the website or application or to the Dutch version of the mobile application. The Accessibility Statement could also exclude certain elements of the website or mobile application. More information about exceptions to the scope can be found at: https://www.w3.org/TR/WCAG-EM/#step1a
* <strong>Example:</strong> Website example: "University of Sampel strives to conform to WCAG2.1. it is not always possible to do so in all areas of the website. Therefore the following url’s are excluded from this statement:"
[www.url.com/page1] (Add reason why)
[www.url.com/page2] (Add reason why)
Mobile application example: This mobile application is limited to the US version of the wayfinder application.
* <strong>Format:</strong> [Scope limitation(s)]
* <textarea rows="1" cols="50">Describe any limitations to the scope here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Date_input" %}
### Date
{% include excol.html type="middle" %}
* Provide the date on which this Accessibility Statement was last modified. As a minimum provide the month and year.
* <strong>Example:</strong> For the first or May of the year 2018, this would be "2018/05/01" or if you only want to provide the month and year "May, 2018" or 2018/05
* <strong>Format:</strong> [YYYY/MM/DD] or [YYYY/MM] or [Month, YYYY]
* When did you write this statement?: <textarea rows="1" cols="50">July, 2018</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Standards_applied_input" %}
### Standards applied
{% include excol.html type="middle" %}
* Which standards/guidelines have been followed for the conformance statement? Although most national and regional requirements are harmonized with WCAG, there may be legal or other requirements that make it necessary to point to a specific standards. For example, in the US organizations may use the revised Section 508 standards, while in Europe, organizations may have reasons to use the latest version of EN 301 549. Both are completely harmonized with WCAG.
* <strong>Example:</strong> For example, the website of Sampel University was evaluated using WCAG2.1.
* <strong>Format:</strong> [WCAG2.0/WCAG2.1/Section508/EN 301 549]/[version number]
* <textarea rows="1" cols="25">EN 301 549</textarea><textarea rows="1" cols="10">1.1.2</textarea><button type="button">Add to my Accessibility Statement</button>
* Comment: The textarea should be a select box. There is no need for a seperate version number input as these can all be included in the list.
{% include excol.html type="end" %}

{% include excol.html type="start" id="Conformance_status_input" %}
### Conformance Status
{% include excol.html type="middle" %}
* The options for the conformance status are:
* * Fully conformant: The website or mobile app fully meets the standard/guideline without any exeptions (or by using accessible alternatives as described in the Standard/guideline).
* * Partially conformant: A specific functionality of the website or mobile app is non-conformant with the standard/guideline and there is not an accessible alternative provided.
* * Non conformant: The website or mobile app is non-conformant with the standard/guideline.
* * No assessment available: The website or mobile app has not been evaluated against the standard/guideline or the evaluation result is not available.
* <strong>Format:</strong> [Fully conformant/Partially conformant/Non conformance/No assessment available]
* <textarea rows="1" cols="30">Selectbox</textarea><button type="button">Add to my Accessibility Statement</button>
* Comment: The textarea should be a select box that also includes A, AA and AAA as extra options. Maybe add the option to conform with A and partial conform with AA?
{% include excol.html type="end" %}

{% include excol.html type="start" id="How_was_accessibility_evaluated_input" %}
### How was the accessibility evaluated
{% include excol.html type="middle" %}
* Provide details about the evaluation methodology that was used. This could also be desribed seperately in an evaluation report that is linked from the Accessibility Statement. Include information about the procedure, documents used and the involvement of persons with disabilities.
* <strong>Example:</strong> For website: "For the evaluation of this website, we followed WCAG-EM and we tested different user stories with persons with disabilities" or "For the evaluation of this website/mobile application, we asked an independent third party to evaluate using the WCAG-EM report tool" or "Details about the evaluation methodology can be found in the evaluation report that that can be found at: https://www.universityofsampel.ort/accessibility/evaluationreport".
* <strong>Format:</strong> [Description of how the accessibility was evaluated]
* <textarea rows="1" cols="50">Add a description of how the accessibility was evaluated..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Web_technologies_relied_upon_input" %}
### Web technologies relied upon
{% include excol.html type="middle" %}
* Describe the web technologies that are relied upon for conformance. The content would not conform if that technology is turned off or is not supported. Besides HTML and CSS, you may have included web technologies like JavaScript, WAI-ARIA, PDF, etc. in your evaluation. Provide a list of technologies that are relied upon according to WCAG 2.0. For more information please read: https://www.w3.org/TR/WCAG-EM/#step2d.
* <strong>Example:</strong> For website: "Web technologies relied upon for conformance: HTML, CSS, Javascript, WAI-ARIA, PDF and SMIL".
* <strong>Format:</strong> [HTML; CSS; Javascript; WAI-ARIA; PDF; SMIL]
* Provide answer via checkboxes with technologies and editfield

<button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Accessibility_support_baseline_input" %}
### Accessibility support baseline
{% include excol.html type="middle" %}
* Describe the minimum set of combinations of operating systems, web browsers, assistive technologies, and other user agents that the website is expected to work with, and that is in-line with the WCAG 2.0 guidance on accessibility support. For more information about accessibility support baseline, please read: https://www.w3.org/TR/WCAG-EM/#step1c
* <strong>Example:</strong> For website: "This website does not work with older versions of screenreader XYZ (older than version 1.2.3). The videoplayer does not show captions in the older version of the XYZ browser (before version 1.2.3)".
* <strong>Format:</strong> [Description of accessibility support baseline]
* <textarea rows="1" cols="50">Add description of the accessibility support baseline</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}


{% include excol.html type="start" id="Notes_and_changes_input" %}
### Notes/main accessibility changes since previous version
{% include excol.html type="middle" %}
* Any information important for the understanding of this Statement and/or changes since the previous Accessibility Statement.
* <strong>Example:</strong> For the updated wayfinder app, this could be: "We have added more color contrast to the main selection menu of the wayfinder app. Due to building activities on the campus of our university, we have also added new routes for persons who are blind". For the website of the University of Sampel library, this could be: "The news department of our website has now added 'skiplinks to jump over headers. This way, persons using screenreader software can quickly jump to the main content of our webpages". 
* <strong>Format:</strong> [Information important for the understandig of this Accessibility Statement]; [Identify accessibility changes since the previous Accessibility Statement]
* <textarea rows="1" cols="50">Add information that is important for the understanding or explains accessibility related changes since the previous version</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Evaluation_report_input" %}
### Evaluation results/link to evaluation report
{% include excol.html type="middle" %}
* Link to a seperate evaluation report or provide details about the evaluation results here. Either provide a full list of all Success Criteria and mark if they have Passed or Failed or only provide results for Success Criteria that failed. If desired, SC that are not applicable on the website or mobile application can be marked as Not Applicable.
* <strong>Example:</strong> Provide a table where the first column contains the SC or other numbering of the standards followed by the evaluator. Then provide one or more columns marking if the SC are Pass, Fail (or N/A). For WCAG2.1 the first row would contain: "1.1.1 Non-text Content / [Pass/Fail/N/A]". For users with disabilities is may help to explain the SC a bit more using the text in WCAG2.1. For example: "1.4.1 Use of color / Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. / [Pass/Fail/N/A].
* <strong>Format:</strong> Table columns: [SC number and title]/[Explanation]/[Pass/Fail/N/A] or [https://www.universityofsampel.ort/accessibility/evaluationreport]

<table border="1" cellpadding="5" cellspacing="2" summary="Conformance with Success Criteria">
<caption></caption>
<tr>
<th id="h1">Success Criteria</th>
<th id="h2">Level of Conformance</th>
<th id="h3">Remarks and explanation</th>
</tr>
<tr>
<th id="r2" headers="h1">1.1.1 Non-text Content: (Level A)</th>
<td headers="r2 h2"><textarea rows="1" cols="20"></textarea></td>
<td headers="r2 h3"><textarea rows="1" cols="20"></textarea></td>
</tr>
<tr>
<th id="r3" headers="h1">1.2.1 Audio-only and Video-only (Prerecorded): (Level A)</th>
<td headers="r3 h2"><textarea rows="1" cols="20"></textarea></td>
<td headers="r3 h3"><textarea rows="1" cols="20"></textarea></td>
</tr>
<tr>
<th id="r4" headers="h1">1.2.2 Captions (Prerecorded): (Level A)</th>
<td headers="r4 h2"><textarea rows="1" cols="20"></textarea></td>
<td headers="r4 h3"><textarea rows="1" cols="20"></textarea></td>
</tr>
<tr>
<th id="r5" headers="h1">1.2.3 Audio Description or Media Alternative (Prerecorded): (Level A)</th>
<td headers="r5 h2"><textarea rows="1" cols="20"></textarea></td>
<td headers="r5 h3"><textarea rows="1" cols="20"></textarea></td>
</tr>
<tr>
<th id="r6" headers="h1">1.2.4 Captions (Live): (Level AA)</th>
<td headers="r6 h2">7</td>
<td headers="r6 h3">8</td>
</tr>
<tr>
<th id="r7" headers="h1">1.2.5 Audio Description (Prerecorded): (Level AA)</th>
<td headers="r7 h2">7</td>
<td headers="r7 h3">8</td>
</tr>
<tr>
<th id="r8" headers="h1">1.3.1 Info and Relationships: (Level A)</th>
<td headers="r8 h2">7</td>
<td headers="r8 h3">8</td>
</tr>
</table>






* <textarea rows="1" cols="50">Add a table or link to an evaluation report</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Remarks_explanations_input" %}
### Remarks and explanation
{% include excol.html type="middle" %}
* This extends the element "evaluation results/link to evaluation report". Provide an explanation for the parts of the content that are not accessible and the reasons for that inaccessibility and, where appropriate, the accessible alternatives provided for to justify the conformance level and conformance status. When the conformance level is ’Partial conformant’ or ‘Non conformant’. This explanation can be added to the evaluation report or added to the table described in the "evaluation results/link to evaluation report". The explanation requires information about:
* * Website (and mobile application) areas that do not conform
* * Reasons for not conforming. Explain why Success Criteria are non-conformant
* * Explain accessible alternatives that are used (if available) and optionally why they have been used.
* <strong>Example:</strong> This could be presented as a table where a row would have the following columns:
* * SC number and title
* * Explanation
* * Pass/Fail/N/A
* * Option: If non-conformant: Reason for the non-conformance and link to accessible alternative is available or applicable
* * Option: If there is no accessible alternative: When will the non-conformance be repaired
<button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Contact_information_input" %}
### Contact information
{% include excol.html type="middle" %}
* Who can people contact for questions about this Accessibility Statement. This could be an email going to the person responsible for the Accessibility Statement. This is very different depending on the audience. For example, if procurers want to contact you about your Accessibility Statement, you may want to point them to another place than persons with disabilities who have questions or feedback about the accessibility of your website or mobile application.
* <strong>Example:</strong> Persons with disabilities, please contact: Department of Communication; accessibility@universityofsampel.ort; Tel.: +31 111 111 1111. Procurers, please contact: procurers@universityofsampel.ort; Tel.: +31 111 111 112.
* <strong>Format:</strong> [Contact information 1 (name; dept; email; phone)]; [Contact information 2 (name; dept; email; phone)]
* <button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Feedback_input" %}
### Feedback
{% include excol.html type="middle" %}
* An invitation to send feedback or request content in an accessible format. Provide a description of, and a link to, a feedback mechanism.
* <strong>Example:</strong> For the university of Sampel website, this could be: "If you have feedback about the accessibility of the website described in this Accessibility Statement, please use the feedback form on the following page: https://www.universityofsampel.ort/accessibility/". For a mobile application there could be a link to the webform in the settings of the app: "If you have any feedback on the accessibility of this app, please use the [link opens webpage] accessibility feedbackform on our website[End of link] (this link opens in your browser)"
* <strong>Format:</strong> If you have feedback about the accessibility of the website described in this Accessibility Statement, please use the feedback form on the following page: [URL of feedbackform]
* <textarea rows="1" cols="50">Add a link to the feedbackform here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Enforcement_procedure_input" %}
### Enforcement procedure
{% include excol.html type="middle" %}
* If you have an enforcement procedure then add a description and if available a link here. An example of an enforcement procedure is to describe what will happen when a person sends in feedback.
* <strong>Example:</strong> If you contact us through the feedbackform we will try answer your feedback question within 2 businessdays. 
* <strong>Format:</strong> [Text about enforcement procedure]; [If available add link to enforcement procedure]
* <textarea rows="1" cols="50">Add a short description and a link to the enforcement procedure here..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

## More optional elements

{% include excol.html type="start" id="Compliance_basis_input" %}
### Compliance basis
{% include excol.html type="middle" %}
* Where does the requirement to be conformant originate from (organization, legal requirement, other motivation). This could be a non-public statement, for example if a company requires their departments to report on compliance to a central unit/department.
* <strong>Example:</strong> If this is not public, but as an internal requirement from a top department in the organization, an example  could be: "Required by department X for compliance". If required by law to report like in Europe, it could be: "Directive 2016/2102 of the European Union" or in the US: "ADA". It could also be local legislation like "WGBH/cz" in the Netherlands.
* <strong>Format:</strong> [Describe the compliance basis]
* <textarea rows="1" cols="50">Explain why your organization strives for conformance...</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

<!--
### Quality assurance method used
* The quality assurance method used (WCAG-EM, internal QA, other)
* <strong>Example:</strong> [to be written]
* <textarea rows="1" cols="50">Add qualtity assurance method used...</textarea><button type="button">Add to my Accessibility Statement</button>
-->

{% include excol.html type="start" id="Intention_organization_input" %}
### Intention of the organization
{% include excol.html type="middle" %}
* The intention could be to reach a higher level of conformance or to work on full conformance of all websites and mobile apps. It also describes the manner in which digital accessibility is embedded in the organization's policy.
* <strong>Example:</strong> The website is now WCAG AA conformant but we are working on implementing AAA Success Criteria that help persons with cognitive disabilities. 
* <strong>Format:</strong> [Description of the intention of the organization]
* <textarea rows="1" cols="50">Add information about the intention of the organization regarding accessibility..</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Conformance_measures_input" %}
### Conformance Measures
{% include excol.html type="middle" %}
* Add conformance measures to the element ‘remarks and explanation’. For every non-conformity identified, describe the measures that will be taken and the schedule that indicates when those measures are put into effect. This can be added to the table as a seperate column. This information is important for persons with disabilities to understand what the organization will do to repair non-conformities and when they can expect this to work. These non-conformities can also be beyond the required conformity level (the organization may want to apply AAA Success criteria while this is not required by law or by procurers).
* <strong>Format:</strong> Add [Description of the conformance measures] as a column to the table in ‘remarks and explanation’ or add a separate section named "conformance measures"
* <strong>Example:</strong> Add column to the table described in element ‘remarks and explanation’. Instead of an extra column in the table, conformance measures can also be a seperate section. 
<button type="button">Add conformance measures to 'remarks and explanation' table</button><button type="button">Add seperate paragraph about conformance measures</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Organizational_measures_input" %}
### Organisational measures
{% include excol.html type="middle" %}
* Measures implemented to achieve sustainable accessibility like procurement actions, training, raising awareness, QA, etc.
* <strong>Example:</strong> Our organization has added web accessibility to our procurement requirements. We also train our staff in web accessibility once a year. The accessibility of web and mobile application is also part of our Quality Assurance method and included in our ISO 9001 procedures.
* <strong>Format:</strong> [Description of organizational measures]
* <textarea rows="1" cols="50">Has your organization taken measures to achieve accessibility...</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

{% include excol.html type="start" id="Formal_confirmation_input" %}
### Formal confirmation
{% include excol.html type="middle" %}
* Formal confirmation on management level of the timeliness and the correctness of the Accessibility Statement, and confirmation that the designated administrator or other responsible person or function formally agrees with the content of the Accessibility Statement by the organization.
* <strong>Example:</strong> This could look like: "Approved by the Dean of the University of Sampel" or Approved by the Accessibility Department of organization X"
* <strong>Format:</strong> Approved by [name/department];[function]
* <textarea rows="1" cols="50">Approved by Hannibal, Director A-Team</textarea><button type="button">Add to my Accessibility Statement</button>
{% include excol.html type="end" %}

## Good practice on writing and placing statements (draft heading)
[to be written]
