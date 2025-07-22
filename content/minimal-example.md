---
# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "Example of Minimal Accessibility Statement"
lang: en   # Change "en" to the translated-language shortcode
last_updated: 2021-03-11   # Keep the date of the English version
first_published: "November 2018"
description:  This resource helps you create an accessibility statement for your own website, mobile application, or other digital content.

# translators: # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: w3c/wai-statements
  path: minimal-example.md   # Add the language shortcode to the middle of the filename, for example: index.fr.md

permalink: /planning/statements/minimal-example/   # Add the language shortcode to the end, with no slash at the end. For example /path/to/file/fr

ref: /planning/statements/minimal-example/   # Do not change this
external_css: /content-images/wai-statements/generator.css

changelog: planning/statements/changelog/ # Do not change this
acknowledgements: /planning/statements/acknowledgements/ # Do not change this

# In the footer below:
# Do not translate ACKNOWLEDGEMENTS
# Translate other words, including "Project Team:"
# Translate the Working Group name. Leave the Working Group acronym in English.
footer: >
  <p><strong>Project Team:</strong> <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra</a>, Eric Velleman, Sanne Eendebak, Roel Antonisse, and Bas de Bruin. <a href="../acknowledgements/">Acknowledgements</a>.</p>
  <p>Developed by the <a href="https://www.w3.org/WAI/EO/">Education and Outreach Working Group (EOWG)</a>. Developed as part of the <a href="https://www.w3.org/WAI/Tools/">WAI-Tools project</a>, co-funded by the European Commission.</p>

---

{% include box.html type="start" title="Example of an accessibility statement including only the most essential parts" class="example" %}
<h2>Accessibility Statement for <span class="basic-information website-name">Citylights WebStore</span></h2>
<p>
	<span class="basic-information organization-name">Citylights Inc.</span>
	is committed to ensuring digital accessibility for people with disabilities.
	We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
</p>
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
	<a class="email u-email" href="mailto:accessibility@example.org">accessibility@example.org</a>
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
<hr noshade="noshade">
<p>
	This statement was created on
	<span class="basic-information statement-created-date">26 October 2018</span>
	using the <a href="../">W3C Accessibility Statement Generator Tool</a>.
</p>
{% include box.html type="end" %}
