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
permalink: /planning/statements/generator/en/   # Add the language shortcode to the end; for example /planning/statements/generator/nl/
layout: default
parent_path: /planning/statements/generator/
github:
    repository: w3c/wai-statements
    path: "generator.html"
external_css: /content-images/wai-statements/generator.css

# --- MAIN CONTENT ---
# this section is where all text content is stored, edit it just as described above

# Introduction
# Reminder: Do not translate "introduction". Do translate the text after "introduction:"
introduction: The information that you provide below will generate an accessibility statement that you can download and further refine. None of the fields are required. None of the information you enter is stored outside your web browser.

# Sections
# The sections that contain the questions
# Each section has a "title", "discription" and questions
sections:
  - title: Basic Information
    discription: In this section you can provide the minimal set of information recommended for your accessibility statement. This includes information about your organization, the accessibility standards you applied, and your contact information for feedback.
    # Questions inside the "Basic Information" section
    questions:
      # Each question has a "title", "info" and a question type
      - title: About your statement
        info: Here you can enter the name of your organization, and the web address and name of your website or mobile application. For mobile applications, include version information and the release date, to identify a specific version.
        # input type: a list of text fields
        input_fields:
          - title: Name of your organisation
            example: "Example Inc."
          - title: Address of your website or mobile application
            example: "https://example.org"
          - title: Name of your website or mobile application
            example: "Example App"
      
      - title: Accessibility standards applied
        info: Which accessibility standard have you been following? The 
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a>
          is internationally recognized. The latest version is WCAG 2.1.
        label: "Accessibility standard followed:" # "label" text is shown above the input buttons
        # input type: set of radio buttons
        input_radiobuttons:
          - title: WCAG 2.1 level AA
          - title: WCAG 2.0 level AA
        allow_other: true # "allow_other" controls whether there is an "Other" option at the bottom
        other_text: Other
      
      - title: Conformance status
        info: To what degree do you conform to the accessibility standard stated in the previous section? Sometimes there are justifiable reasons to not fully conform. You can indicate parts that do not yet fully conform, including guidance on how users can find help, in later sections of this form.
        input_radiobuttons: 
          - title: "Fully conformant: the content fully conforms to the accessibility standard without any exceptions"
          - title: "Partially conformant: some parts of the content do not fully conform to the accessibility standard (you can indicate these parts in later sections of this form)"
          - title: "Non conformant: the content does not conform the accessibility standard" 
          - title: "Not assessed: the content has not been evaluated or the evaluation results are not available"
          - title: "None"

      - title: Additional accessibility considerations
        info: "Sometimes you may be applying more accessibility requirements than those specified in the accessibility standard stated above. For example, you may be providing sign language videos or real-time captioning for live media. Here you can list these additional accessibility requirements. <br><strong>Example:</strong> “Although our goal is WCAG 2.1 Level AA conformance, we have also applied some Level AAA Success Criteria: Images of text are only used for decorative purposes. Re-authentication after a session expires does not cause loss of data. Some videos have sign language interpretation.”"
        input_fields: 
          - title: Additional accessibility requirements applied

      - title: Feedback options
        info: In which ways can users can get in touch with your organization when they encounter an accessibility barrier? Ideally you should provide more than one option. Also indicate the duration after which users can expect a response from your organization.
        input_fields: 
          - title: Phone
            example: +12 34 567 89 00
          - title: E-mail
            example: accessibility@example.org
          - title: Visitor Address
            example: Main Street 1, 234 Example Ville
          - title: Postal address
            example: PO Box 1, 234 Example Ville
          - title: Visitor Address
            example: Main Street 1, 234 Example Ville
          - title: Other contact options
            example: "on social media; Twitter: @ExampleUser"
          - title: Typical duration for response
            example: 2 business days

      - title: Date of publication
        info: Providing a date helps users to understand if the accessibility statement is being actively maintained or outdated. Ideally the date of an accessibility statement should not exceed one year, or it may be considered unmaintained. Writing out the month makes the date clearer internationally (eg. "1 February 2019" rather than "01/02/2019", which is ambiguous).
        input_fields:
          - title: Publication date of this accessibility statement
            class: today # The class "today" automatically adds current date to input field


  - title: Your efforts
    discription: In this section you can describe the efforts your organization takes to ensure accessibility. This helps users to understand your sincerity and the validity of the claims you make in your accessibility statement.

    questions:
      - title: Organizational measures
        info: List the measures that your organization undertakes to achieve sustainable accessibility. This includes measures such as procurement actions, training, raising awareness, and quality assurance. Some of these measures are pre-defined for your convenience but you can add more as needed.
  
  
  - title: Technical Information
    info: In this section you can provide more technical details to help users understand any issues they may be observing. This includes information about compatibility with web browsers and assistive technologies.
    label: List the content parts that have accessibility limitations, a description of the issue that may be observed by users, a brief explanation of why the issue occurs, and what to do in the mean time, such as who to contact or where to find accessibility alternatives where appropriate.

    questions:
      - title: Accessibility limitations
        info: There are many situations in which limitations to accessibility can occur. For example, you may not be able ensure instant accessibility of user-generated content. Providing transparency on such situations helps users to understand any issue they may be observing, and to find alternatives where applicable. Under the EU Web Accessibility Directive, public bodies are required to provide information on the parts of the content that do not conform, the reason for not conforming, and, if applicable, where to find accessible alternatives.
        # input type: input item list, allows adding more of the same type of item
        input_item_list:
          title: Accessibility limitation
          allow_adding_items: true # controls whether the user can add more of this type of item
          # content in each item is discripbed here:
          input_fields:
            - title: Content part
              example: Comments from users
            - title: Discription of the issue
              example: Uploaded images may not have text alternatives



---

[//]: # Don't change the following include:
{% include_relative /generator_layout.html %}