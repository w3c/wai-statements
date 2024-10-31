---
# Translation instructions are after the "#" character in this first section. (They are comments that do not show up in the web page.)
# Read Translations Notes for this resource at https://github.com/w3c/wai-statements#readme

title: Generate an Accessibility Statement   # Do not translate "title:". Do translate the text after "title:".

lang: en   # Change "en" to the translated language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
permalink: /planning/statements/generator/   # Add the language shortcode to the end, with no slash at end, for example: /planning/statements/generator/nl

last_updated: 2021-03-11   # Put the date of this translation YYYY-MM-DD (with month in the middle)
first_published: "November 2018"

# translators: # remove from the beginning of this line and the lines below: "# " (the hash sign and one space)
#   - name: "Translator Name Here"
#   - name: "Translator Name Here" # To list multiple translators, delete the # at the beginning of this line. You can add more translator name lines.
# contributors: # To list translation contributors, delete the # at the beginning of this line and the next line. You can add more contributors’ names.
#   - name: "Translation Contributor Name Here"

parent_path: /planning/statements/
github:
  repository: w3c/wai-statements
  path: "content/generator.md"   # Add the language shortcode to the middle of the filename, for example: generator.nl.md
external_css: /content-images/wai-statements/generator.css

changelog: /planning/statements/changelog/ # Do not change this
footer: >   # Translate words below, including "Date:" and "Editor:" Translate the Working Group name. Leave the Working Group acronym in English. Do *not* change the dates in the footer below.
  <p><strong>Project Team:</strong> <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra</a>, Eric Velleman, Sanne Eendebak, Roel Antonisse, and Bas de Bruin. <a href="../acknowledgements/">Acknowledgements</a>.</p>
  <p>Developed by the <a href="https://www.w3.org/WAI/EO/">Education and Outreach Working Group (EOWG)</a>. Developed as part of the <a href="https://www.w3.org/WAI/Tools/">WAI-Tools project</a>, co-funded by the European Commission.</p>


# --- MAIN CONTENT ---
# Do not translate the initial text with colons: "introduction:", "intro_explaination:", "page_contents:", "show_all_info:", etc. Do translate the text after the colons (:).

# -- Introduction
introduction: The information that you provide below will generate an accessibility statement that you can download and further refine. None of the fields are required. None of the information you enter is stored outside your web browser.
intro_explaination: How to use this generator tool
page_contents: Page Contents

# -- Controls
# used throughout the page
show_all_info: Show all additional information
hide_all_info: Hide all additional information
show_info: Show Info
hide_info: Hide Info
other: Other
name: name
preview_statement: Preview your accessibility statement
# Translate the months of the year. Do not change any of the quotes, commas, or brackets

month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

# -- Sections
# Basic Information
basic_info: 
  title: Basic information
  info: In this section you can provide the minimal set of information recommended for your accessibility statement. This includes information about your organization, the accessibility standards you applied, and your contact information for feedback.
  # Questions
  # About your statement
  about_statement:
    title: About your statement
    info: Here you can enter the name of your organization, and the web address and name of your website or mobile application. For mobile applications, include version information and the release date, to identify a specific version.
    name: 
      title: Name of your organization
      example: "(Example: “Example Inc.”)" # Make sure you surround your text with quotes if you're using special characters like: “':[]{}<>
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
    info: "Sometimes you may be applying more accessibility requirements than those specified in the accessibility standard stated above. For example, you may be providing sign language videos or context-sensitive help for functionality. Here you can list these additional accessibility requirements.</p> <br>
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
  info: In this section you can describe the efforts your organization takes to ensure accessibility. This helps users to understand your sincerity and the validity of the claims you make in your accessibility statement.
  # Organizational measures
  measures: 
    title: Organizational measures
    info: List the measures that your organization undertakes to achieve sustainable accessibility. This includes measures such as procurement actions, training, raising awareness, and quality assurance. Some of these measures are pre-defined for your convenience but you can add more as needed.
    mission_statement: Include accessibility as part of our mission statement.
    internal_policies: Include accessibility throughout our internal policies.
    procurement_practices: Integrate accessibility into our procurement practices.
    accessibility_officer: Appoint an accessibility officer and/or ombudsperson.
    training: Provide continual accessibility training for our staff.
    targets: Assign clear accessibility goals and responsibilities.
    methods: Employ formal accessibility quality assurance methods.
    # Adding other measures
    other_text: Other measure
    other_example: "(Example: “Include people with disabilities in our design personas”)"
    other_button_text: Add another measure

# Technical Information
technical_info:
  title: Technical information
  info: In this section you can provide more technical details to help users understand any issues they may be observing. This includes information about compatibility with web browsers and assistive technologies.
  # Accessibility limitations
  limitations:
    title: Accessibility limitations
    singular: Accessibility limitation
    info: "There are many situations in which limitations to accessibility can occur. For example, you may not be able
    ensure instant accessibility of user-generated content. Providing transparency on such situations helps users to
    understand any issue they may be observing, and to find alternatives where applicable. Under the EU Web
    Accessibility Directive, public bodies are
    required to provide information on the parts of the content that do not conform, the reason for
    not conforming, and, if applicable, where to find accessible alternatives."
    label: "List the
    <em>content parts</em>
    that have accessibility limitations, a
    <em>description of the issue</em>
    that may be observed by users, a brief explanation of
    <em>why the issue occurs</em>, and
    <em>what to do in the mean time</em>, such as who to contact or where to find accessibility
    alternatives where appropriate."
    content: 
      title: Content part
      example: "(Example: “Comments from users”)"
    discription:
      title: Description of the issue
      example: "(Example: “Uploaded images may not have text alternatives”)"
    reason:
      title: Why the issue occurs
      example: "(Example: “We cannot ensure the quality of contributions”)"
    us:
      title: What we are doing about it
      example: "(Example: “We monitor user comments and typically repair issues within 2 business days”)"
    you:
      title: What to do in the meantime
      example: "(Example: “Please use the ‘report issue’ button if you encounter an issue”)" 
    
    add_button_text: Add another limitation
  # Compatibility with user environment
  user:
    title: Compatibility with user environment
    info: Despite best efforts, accessibility may not work well in every combination of operating system, web browser, and assistive technology. Developers typically test their websites and mobile applications with common user environments, to determine compatibility. WCAG defines requirements for accessibility features provided by content authors to be <a href="https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported">accessibility supported</a>. Communicating this compatibility expectation helps user to determine if that is the cause for any issues they may be observing.
    label: Describe the environments (combinations of web browsers, assistive technologies, and operating systems) that the content is expected to work with. These should be in-line with the  WCAG definition of <a href="https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported">accessibility supported</a> use of technologies.
    enviroment:
      title: Environment
      example: "(Example: “browser X with assistive technology Y on operating system Z”)"
    add_button_text: Add another compatible environment
  # Known incompatibility
  incompatible:
    title: Known incompatibility
    info: Help users understand what versions of operating systems, web browsers, and assistive technologies are not (or no longer) supported. This helps user to determine if they can use your website or mobile application with their current environments.
    label: Describe the environments (combinations of web browsers, assistive technologies, and operating systems) that the content is not expected to work with.
    example: "(Example: “browsers older than 3 major versions” or “Mobile operating systems older than 5 years”)"
    add_button_text: Add another incompatible environment
  # Technologies Used
  technologies:
    title: Technologies used
    info: You may be relying on specific web technologies, such as JavaScript, WAI-ARIA, or SVG to ensure accessibility of your content. Communicating this expectation in the accessibility statement can help users to understand the reason for issues they may be observing. For example, the accessibility features may not work because the user disabled JavaScript. The <a href="https://www.w3.org/TR/WCAG21/#cc4">WCAG 2 conformance requirement 4</a> on "<em>accessibility supported was of using technologies relied upon</em>" provides more background.
    label: Describe the technologies that are relied upon for conformance. The content would not conform if that technology is turned off or is not supported.
    add_button_text: Add another technology
  # Assessment approach
  assessment:
    title: Assessment approach
    info: How did you assess your website or mobile application, to determine the information provided in the previous sections? This helps users understand your quality assurance process and the background for the claims you make in your accessibility statement.
    self:
      title: Self-evaluation
      meaning: the content was evaluated by your own organization or the developer of the content
    external: 
      title: External evaluation
      meaning: the content was evaluated by an external entity not involved in the design and development process
    other_text: Other approach
    other_example: "(Example: a formal quality assurance process throughout the design and development process)"
    add_button_text: Add another approach
  # Related evidence
  evidence:
    title: Related evidence
    info: Provide links to related background and evidence to support the claims you make in this accessibility, and to provide more transparency and credibility. This can include an evaluation report, an evaluation statement, or a certification.
    report:
      title: Link to recent evaluation report
      info: An evaluation report provides details on which accessibility requirements are met, and which are not. While this is usually more technical of nature than the average user, it can help some users to understand issues they have been observing. You can use the <a href="https://www.w3.org/WAI/eval/report-tool/">WCAG-EM Evaluation Report Tool</a> to create an evaluation report. Place the link to the report here.
      example: "(Example: “https://example.org/accessibility-evaulation-report”)"
    statement:
      title: Link to evaluation statement
      info: An evaluation statement summarizes the essential outcomes of an evaluation report. The <a href="https://www.w3.org/TR/WCAG-EM/">Website Accessibility Conformance Evaluation Methodology (WCAG-EM)</a> defines requirements for evaluation statements in <a href="https://www.w3.org/TR/WCAG-EM/#step5c">Step 5.c</a> of the document. This can be provided instead of or in addition to an evaluation report provided above.
      example: "(Example: “https://example.org/accessibility-evaulation-statement”)"
    other_text: Other evidence
    other_example: "(Example: “https://example.org/accessibility-evaulation-certificate”)"
    add_button_text: Add another related evidence

# Approval and complaints process 
approval_and_complaints:
  title: Approval and complaints process
  info: In this section you can add information about the formal approval of this accessibility statement and, if applicable, any complaints escalation procedure.
  # Formal approval
  approval: 
    title: Formal approval
    info: Your organization may want to formally approve this accessibility statement, for example for internal purposes or to show users that this is part of the corporate policy.
    name:
      title: Name of person or department
      example: "(Example: “Communication Department”)"
    function: 
      title: Function
      example: "(Example: “Director of Communication”)"
  # Formal complaints
  complaints: 
    title: Formal complaints
    info: 'In some situations you may want to or may be required to provide information about a formal complaints procedures. For example, a quality management process within your organization may require you to establish a formal complaints procedure with clear escalation paths. The  <a href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj">EU Web Accessibility Directive </a> foresees EU countries to have legal “enforcement procedures” when users are not satisfied with the responses from public bodies. Inform users about any such formal complaints procedures. This may also motivate them to provide you with valuable feedback about the accessibility of your content. <br>
    <strong>Example:</strong> “We aim to respond to accessibility feedback within 2 business days, and to propose a solution within 10 business days.  entity], should you be dissatisfied with our response to you.”'
    label: Describe any formal complaints procedures

# --- PREVIEW SECTION ---
# the following text is used in the preview of the statement:
# texts after "#" are comments, these are not used by the website, you don't have to translate these but you could if you think it would help future contributors

defaults: # defaults are used when no data is entered
  WEBSITE_NAME: WEBSITE_NAME
  ORGANIZATION: ORGANIZATION
  COMPATIBLE_LIST: COMPATIBLE_LIST
  CONFORMANCE_MEANING: CONFORMANCE_MEANING
  DATE: DATE

preview:
  title: Accessibility Statement for # ORGANIZATION
  intro: This is an accessibility statement from #ORGANIZATION
  measures:
    # Measures to support accessibility
    title: Measures to support accessibility
    label: takes the following measures to ensure accessibility of
  conformance:
    # Conformance Status
    definition: 'The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.' 
    # WEBSITE_NAME
    text_1: is
    # conformance
    text_2: with # conformance standard.
    # Standard,
    text_3: means that
    # meaning
  feedback:
    # Feedback
    title: Feedback
    label_1: We welcome your feedback on the accessibility of # WEBSITE_NAME
    label_2: Please let us know if you encounter accessibility barriers on # WEBSITE_NAME
    response: We try to respond to feedback within
  compatibility:
    # Compatibility with browsers and assistive technology
    title: Compatibility with browsers and assistive technology
    label: is designed to be compatible with the following assistive technologies
    label_not: is not compatible with
  tech:
    # Technical specifications
    title: Technical specifications
    label_1: Accessibility of # WEBSITE_NAME
    label_2: relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer
    label_3: These technologies are relied upon for conformance with the accessibility standards used.
  limitations:
    # Limitations and alternatives
    title: Limitations and alternatives
    label_1: Despite our best efforts to ensure accessibility of # WEBSITE_NAME
    label_2: ", there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below."
    label_3: Known limitations for # WEBSITE_NAME
  assessment:
    # Assessment Approach
    label_1: assessed the accessibility of
    label_2: by the following approaches
  evaluation: 
    # Evaluation
    report: Evaluation report
    statement: Evaluation statement
    other_evidence: Other evidence
    label_1: An evaluation report for # WEBSITE_NAME
    label_2: is available at
    label_3: An evaluation statement for # WEBSITE_NAME
    label_4: Other related evidence for # WEBSITE_NAME
  approval:
    # Formal approval
    title: Formal approval of this accessibility statement
    label: This Accessibility Statement is approved by
  date:
    # Date footer
    title: Date
    text_1: This statement was created on # DATE
    text_2: using the
    text_3: W3C Accessibility Statement Generator Tool
  back: Back to generator tool
  download: Download as HTML page
  because: because




---

[//]: # Don't change the following include:
{% include_relative /generator_layout.html %}
