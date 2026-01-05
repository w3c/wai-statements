---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after "#".
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".
title: "Example of Complete Accessibility Statement"
lang: en   # Change "en" to the translated-language shortcode
last_updated: 2021-03-11   # Keep the date of the English version
first_published: "November 2018"
description:  This resource helps you create an accessibility statement for your own website, mobile application, or other digital content.

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-statements
  path: complete-example.md   # Add the language shortcode to the middle of the filename, for example: index.fr.md

permalink: /planning/statements/complete-example/   # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr
ref: /planning/statements/complete-example/   # Do not change this

external_css: /content-images/wai-statements/generator.css
changelog: planning/statements/changelog/ # Do not change this
acknowledgements: /planning/statements/acknowledgements/ # Do not change this

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate other words, including "Project Team:"
# Translate the Working Group name. Leave the Working Group acronym in English.
footer: >
  <p><strong>Project Team:</strong> <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra</a>, Eric Velleman, Sanne Eendebak, Roel Antonisse, and Bas de Bruin. ACKNOWLEDGEMENTS.</p>
  <p>Developed by the <a href="https://www.w3.org/WAI/EO/">Education and Outreach Working Group (EOWG)</a>. Developed as part of the <a href="https://www.w3.org/WAI/Tools/">WAI-Tools project</a>, co-funded by the European Commission.</p>
---

{% include box.html type="start" title="Example of an accessibility statement including all parts of the generator tool" class="example" %}

<h2>Accessibility Statement for <span class="basic-information website-name">Citylights WebStore</span></h2>
<p>
	<span class="basic-information organization-name">Citylights Inc.</span>
	is committed to ensuring digital accessibility for people with disabilities.
	We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
</p>
<h3>Measures to support accessibility</h3>
<p>
	<span class="basic-information organization-name">Citylights Inc.</span>
	takes the following measures to ensure accessibility of
	<span class="basic-information website-name">Citylights WebStore</span>:
</p>
<ul class="organizational-effort accessibillity-measures"><li>Include accessibility as part of our mission statement.</li><li>Integrate accessibility into our procurement practices.</li><li>Appoint an accessibility officer and/or ombudsperson.</li><li>Provide continual accessibility training for our staff.</li><li>Include people with disabilities in our design personas.</li></ul>
<h3>Conformance status</h3>
<p>
	The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
	<span class="basic-information website-name">Citylights WebStore</span>
	is
	<span class="basic-information conformance-status" data-printfilter="lowercase">partially conformant</span>
	with
	<span class="basic-information conformance-standard">WCAG 2.1 level AA</span>.
	<span>
	<span class="basic-information conformance-status">Partially conformant</span>
	means that
	<span class="basic-information conformance-meaning">some parts of the content do not fully conform to the accessibility standard</span>.
</span>
</p>
<h4>Additional accessibility considerations</h4>
<p class="basic-information conformance-additions">Although our goal is WCAG 2.1 Level AA conformance, we have also applied some Level AAA Success Criteria: Images of text are only used for decorative purposes. Re-authentication after a session expires does not cause loss of data. Some videos have sign language interpretation.</p>
<h3>Feedback</h3>
<p>
	We welcome your feedback on the accessibility of
	<span class="basic-information website-name">Citylights WebStore</span>.
	Please let us know if you encounter accessibility barriers on
	<span class="basic-information website-name">Citylights WebStore</span>:
</p>
<ul class="basic-information feedback h-card">
	<li>
	Phone:
	<span class="phone-number p-tel">+12 34 567 89 00</span>
</li>
	<li>
	E-mail:
	<a class="email u-email" href="mailto:accessibility@example.orgaccessibility@example.org">accessibility@example.org</a>
</li>
	<li>
	Postal address:
	<span class="postal-address p-adr">PO Box 1, 234 Example Ville</span>
</li>
</ul>
<p>
	We try to respond to feedback within
	<span class="feedback responsetime">5 business days</span>.
</p>
<h3>Compatibility with browsers and assistive technology</h3>
<p>
	<span class="basic-information website-name">Citylights WebStore</span>
	is designed to be compatible with the following assistive technologies:
</p>
<ul class="technical-information compatible-environments"><li>browser X with assistive technology Y on operating system Z</li></ul>
<p>
	<span class="basic-information website-name">Citylights WebStore</span>
	is not compatible with:
</p>
<ul class="technical-information incompatible-environments"><li>browsers older than 3 major versions" or "Mobile operating systems older than 5 year</li></ul>
<h3>Technical specifications</h3>
<p>
	Accessibility of
	<span class="basic-information website-name">Citylights WebStore</span>
	relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
</p>
<ul class="technical-information technologies-used"><li>HTML</li><li>WAI-ARIA</li><li>CSS</li><li>JavaScript</li></ul>
<p>These technologies are relied upon for conformance with the accessibility standards used.</p>
<h3>Limitations and alternatives</h3>
<p>
	Despite our best efforts to ensure accessibility of
	<span class="basic-information website-name">Citylights WebStore</span>, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
</p>
<p>
	Known limitations for
	<span class="basic-information website-name">Citylights WebStore</span>:
</p>
<ol class="technical-information accessibility-limitations">
	<li><strong>Comments from users</strong>: uploaded images may not have text alternatives because we cannot ensure the quality of contributions. We monitor user comments and typically repair issues within 10 business days. Please use the 'report issue' button if you encounter an issue.</li>
	<li><strong>Archived documents</strong>: might not work with current assistive technologies because they use outdated technologies that do not support accessibility. We convert documents to new formats upon request within 3 business days. Please contact documents@example.org for support.</li>
</ol>
<h3>Assessment approach</h3>
<p>
	<span class="basic-information organization-name">Citylights Inc.</span>
	assessed the accessibility of
	<span class="basic-information website-name">Citylights WebStore</span>
	by the following approaches:
</p>
<ul class="technical-information assessment-approaches"><li>External evaluation</li></ul>
<h3>Evaluation report</h3>
<p>
	An evaluation report for
	<span class="basic-information website-name">Citylights WebStore</span>
	is available at:
	<a class="technical-information related-evidence" href="https://www.w3.org/WAI/demos/bad/after/reports/report">https://www.w3.org/WAI/demos/bad/after/reports/report</a>.
</p>
<h3>Evaluation statement</h3>
<p>
	An evaluation statement for
	<span class="basic-information website-name">Citylights WebStore</span>
	is available at:
	<a class="technical-information related-evidence" href="https://www.w3.org/WAI/demos/bad/after/reports/statement">https://www.w3.org/WAI/demos/bad/after/reports/statement</a>.
</p>
<h3>Formal approval of this accessibility statement</h3>
<p>This Accessibility Statement is approved by:</p>
<p class="approval">
	<span class="basic-information organization-name">Citylights Inc.</span><br>
	<span class="approved-by">Communication Department</span><br>
	<span class="approved-by-jobtitle">Director of Communication</span>
</p>
<h3>Formal complaints</h3>
<p class="complaints">We aim to respond to accessibility feedback within 5 business days, and to propose a solution within 10 business days. You are entitled to escalate a complaint to the national authority, should you be dissatisfied with our response to you.</p>
<hr noshade="noshade">
<p>
	This statement was created on
	<span class="basic-information statement-created-date">16 October 2018</span>
	using the <a href="../">W3C Accessibility Statement Generator Tool</a>.
</p>

{% include box.html type="end" %}
