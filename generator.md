---
# Translation instructions are after the "#" character in this first section. (They are comments that do not show up in the web page.)
title: Generate an Accessibility Statement   # Do not translate "title:". Do translate the text after "title:".
lang: en   # Change "en" to the translated language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2020-01-25   # Put the date of this translation YYYY-MM-DD (with month in the middle)
# translators: #Add one -name: line for every translator
# - name: "Translator Name Here"
contributors: #Add one -name: line for every contributor 
  - name: Shadi Abou-Zahra
  - name: Eric Velleman
  - name: Sanne Eendebak
  - name: Roel Antonisse
  - name: Leon Baauw
  - name: Bas de Bruin
permalink: /planning/statements/generator/   # Add the language shortcode to the end; for example /planning/statements/generator/nl/
layout: default
parent_path: /planning/statements/
github:
    repository: w3c/wai-statements
    path: "generator.md"
external_css: /content-images/wai-statements/generator.css
footer: >
  <p><strong>Date:</strong> Published 29 November 2018.</p>
  <p><strong>Editors:</strong> <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra</a>, Eric Velleman, Sanne Eendebak, Roel Antonisse, and Leon Baauw.</p>
  <p>Developed by the <a href="https://www.w3.org/WAI/EO/">Education and Outreach Working Group (EOWG)</a>. Developed as part of the <a href="https://www.w3.org/WAI/Tools/">WAI-Tools project</a>, co-funded by the European Commission. <a href="../acknowledgements/">Acknowledgements</a>.</p>


# --- MAIN CONTENT ---
# this section is where all text content is stored, edit it just as described above

# -- Introduction
# Reminder: Do not translate "introduction". Do translate the text after "introduction:"
introduction: The information that you provide below will generate an accessibility statement that you can download and further refine. None of the fields are required. None of the information you enter is stored outside your web browser.
intro_explaination: How to use this generator tool
page_contents: Page Contents
# Controls
show_all_info: Show all additional Information
hide_all_info: Hide all additional Infomation
show_info: Show Info
hide_info: Hide Info
other: Other

# -- Sections
# Basic Information
basic_info: 
  title: Basic information
  discription: In this section you can provide the minimal set of information recommended for your accessibility statement. This includes information about your organization, the accessibility standards you applied, and your contact information for feedback.
  # Questions
  # About your statement
  about_statement:
    title: About your statement
    info: Here you can enter the name of your organization, and the web address and name of your website or mobile application. For mobile applications, include version information and the release date, to identify a specific version.
    name: 
      title: Name of your organization
      example: "(Example: “Example Inc.”)"
    address:
      title: Address of your website or mobile application
      example: "(Example: “https://example.org”)"
    app_name:
      title: Name of your website or mobile application
      example: "(Example: “Example Store” or “Example App 1.2.3”)"
  # Accessibility Standards
  standards:
    title: Accessibility standards applied
    info: Which accessibility standard have you been following? The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> is internationally recognized. The latest version is WCAG 2.1.
    standard_followed: "Accessibility standard followed:"
    wcag_21_AA: WCAG 2.1 level AA
    wcag_20_AA: WCAG 2.0 level AA
    other_text: Another standard
  # Conformance status
  conformance: 
    title: Conformance status
    info: To what degree do you conform to the accessibility standard stated in the previous section? Sometimes there are justifiable reasons to not fully conform. You can indicate parts that do not yet fully conform, including guidance on how users can find help, in later sections of this form.
    # status options:
    fully:
      title: Fully conformant
      meaning: the content fully conforms to the accessibility standard without any exceptions
    partially: 
      title: Partially conformant
      meaning: some parts of the content do not fully conform to the accessibility standard
      indicate_later: (you can indicate these parts in later sections of this form)
    non_conformant:
      title: Non conformant
      meaning: the content does not conform the accessibility standard
    not_assessed:
      title: Not assessed
      meaning: the content has not been evaluated or the evaluation results are not available
    none: None
  # Additional accessibility considerations
  considerations:
    title: Additional accessibility considerations
    info: "Sometimes you may be applying more accessibility requirements than those specified in the accessibility standard stated above. For example, you may be providing sign language videos or real-time captioning for live media. Here you can list these additional accessibility requirements.</p> <br>
    <p> <strong>Example:</strong> “Although our goal is WCAG 2.1 Level AA conformance, we have also applied some Level AAA Success Criteria: Images of text are only used for decorative purposes. Re-authentication after a session expires does not cause loss of data. Some videos have sign language interpretation.”"
    requirements: Additional accessibility requirements applied
  # Feedback Options
  feedback:
    title: Feedback options
    info: In which ways can users can get in touch with your organization when they encounter an accessibility barrier? Ideally you should provide more than one option. Also indicate the duration after which users can expect a response from your organization.
    phone: 
      title: Phone
      example: "(Example: “+12 34 567 89 00”)"
    email:
      title: E-mail
      example: "(Example: “accessibility@example.org”)"
    visitor_address:
      title: Visitor Address
      example: "(Example: “Main Street 1, 234 Example Ville”)"
    postal_address:
      title: Postal Address
      example: "(Example: “PO Box 1, 234 Example Ville”)"
    other:
      title: Other contact options
      example: "(Example: on social media; Twitter: @ExampleUser)"
    response:
      title: Typical duration for response
      example: "(Example: “2 business days”)"
  # Date of publication
  date:
    title: Date of publication
    info: Providing a date helps users to understand if the accessibility statement is being actively maintained or outdated. Ideally the date of an accessibility statement should not exceed one year, or it may be considered unmaintained. Writing out the month makes the date clearer internationally (eg. "1 February 2019" rather than "01/02/2019", which is ambiguous).
    publication_date: Publication date of this accessibility statement
    

# Your Efforts
your_efforts:
  title: Your efforts

# Technical Information
technical_info:
  title: Technical information

# Approval and complaints process 
approval_and_complaints:
  title: Approval and complaints process


---

[//]: # Don't change the following include:
{% include_relative /generator_layout.html %}