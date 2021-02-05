---
# Translation instructions are after the "#" character in this first section. (They are comments that do not show up in the web page.)
title: Genereer een Toegankelijkheidsverklaring # Do not translate "title:". Do translate the text after "title:".
lang: nl   # Change "en" to the translated language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2020-01-29   # Put the date of this translation YYYY-MM-DD (with month in the middle)
translators: #Add one -name: line for every translator
  - name: "Bas de Bruin"
contributors: #Add one -name: line for every contributor 
  - name: Shadi Abou-Zahra
  - name: Eric Velleman
  - name: Sanne Eendebak
  - name: Roel Antonisse
  - name: Leon Baauw
  - name: Bas de Bruin
permalink: /planning/statements/generator/nl/   # Add the language shortcode to the end; for example /planning/statements/generator/nl/
layout: default
parent_path: /planning/statements/
ref: /planning/statements/generator/
github:
    repository: w3c/wai-statements
    path: "generator.nl.md"
external_css: /content-images/wai-statements/generator.css
footer: >
   <p><strong> Datum: </strong> gepubliceerd op 29 november 2018. </p>
   <p> <strong> Redactie: </strong> <a href="https://www.w3.org/People/shadi"> Shadi Abou-Zahra </a>, Eric Velleman, Sanne Eendebak, Roel Antonisse, Leon Baauw en Bas de Bruin.</p>
   <p> Ontwikkeld door de <a href="https://www.w3.org/WAI/EO/"> Education and Outreach Working Group (EOWG) </a>. Ontwikkeld als onderdeel van het <a href="https://www.w3.org/WAI/Tools/"> WAI-Tools-project </a>, medegefinancierd door de Europese Commissie. <a href="../acknowledgements/"> Dankbetuigingen </a>. </p>


# --- MAIN CONTENT ---
# this section is where all text content is stored, edit it just as described above

# -- Introduction
# Reminder: Do not translate "introduction". Do translate the text after "introduction:"
introduction: De informatie die u hieronder verstrekt, genereert een toegankelijkheidsverklaring die u kunt downloaden en verder kunt verfijnen. Geen van de velden is verplicht. Geen van de informatie die u invoert, wordt buiten uw webbrowser opgeslagen.
intro_explaination: Hoe deze generator te gebruiken
page_contents: Pagina-inhoud

# -- Controls
# used throughout the page
show_all_info: Toon alle aanvullende informatie
hide_all_info: Verberg alle aanvullende informatie
show_info: Toon info
hide_info: Verberg info
other: Overig
name: naam
preview_statement: Bekijk uw toegankelijkheidsverklaring 
# Months of the year
month_names: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'] # make sure not to change any of the quotes, comma's or brackets

# -- Sections
# Basic Information
basic_info: 
  title: Basisinformatie
  info: In deze sectie kunt u de minimale set informatie opgeven die wordt aanbevolen voor uw toegankelijkheidsverklaring. Dit omvat informatie over uw organisatie, de toegankelijkheidsnormen die u hebt toegepast en uw contactgegevens voor feedback.
  # Questions
  # About your statement
  about_statement:
    title: Over uw verklaring
    info: Hier kunt u de naam van uw organisatie invoeren, het webadres en de naam van uw website of mobiele applicatie. Voeg voor mobiele applicaties versie-informatie en de releasedatum toe om een ​​specifieke versie te identificeren.
    name: 
      title: Naam van uw organisatie
      example: "(Voorbeeld: Voorbeeld B.V.”)" # Make sure you surround your text with quotes if you're using special characters like: “ ' : [] {} <> ,
    address:
      title: Adres van uw website of mobiele applicatie
      example: "(Voorbeeld: “https://voorbeeld.org”)"
    app_name:
      title: Naam van uw website of mobiele applicatie
      example: "(Voorbeeld: “Voorbeeld Winkel” or “Voorbeeld App 1.2.3”)"
  # Accessibility Standards
  standards:
    title: Toegepaste toegankelijkheidsnormen
    info: Welke toegankelijkheidsnorm heeft u gevolgd? De <a href="https://www.w3.org/WAI/standards-guidelines/wcag/"> Web Content Accessibility Guidelines (WCAG) </a> wordt internationaal erkend. De nieuwste versie is WCAG 2.1.
    standard_followed: "Toegankelijkheidsstandaard gevolgd:"
    wcag_21_AA: WCAG 2.1 niveau AA
    wcag_20_AA: WCAG 2.0 niveau AA
    other_text: een andere standaard
  # Conformiteitsstatus
  conformance:
    title: Conformiteitsstatus
    info: In hoeverre voldoet u aan de toegankelijkheidsnorm vermeld in de vorige paragraaf? Soms zijn er gerechtvaardigde redenen om niet volledig te conformeren. In latere secties van dit formulier kunt u onderdelen aangeven die nog niet volledig voldoen, inclusief richtlijnen over hoe gebruikers hulp kunnen vinden.
    # statusopties:
    fully:
      title: Volledig conform
      meaning: de inhoud voldoet volledig aan de toegankelijkheidsnorm zonder enige uitzonderingen
    partially:
      title: Gedeeltelijk conform
      meaning: sommige delen van de inhoud voldoen niet volledig aan de toegankelijkheidsnorm
      indic_later: (u kunt deze onderdelen aangeven in latere secties van dit formulier)
    non_conformant:
      title: Niet conform
      meaning: de inhoud voldoet niet aan de toegankelijkheidsnorm
    not_assessed:
      title: Niet beoordeeld
      meaning: de inhoud is niet geëvalueerd of de evaluatieresultaten zijn niet beschikbaar
    none: Geen
  # Additional accessibility considerations
  considerations:
    title: Aanvullende toegankelijkheidsoverwegingen
    info: "Soms past u mogelijk meer toegankelijkheidsvereisten toe dan die gespecificeerd in de hierboven vermelde toegankelijkheidsnorm. U levert bijvoorbeeld gebarentaalvideo's of realtime ondertiteling voor live media. Hier kunt u deze aanvullende toegankelijkheidsvereisten vermelden. < / p> <br>
    <p> <strong> Voorbeeld: </strong> “Hoewel ons doel WCAG 2.1 Level AA conformiteit is, hebben we ook enkele Level AAA succescriteria toegepast: Afbeeldingen van tekst worden alleen gebruikt voor decoratieve doeleinden. Herauthenticatie nadat een sessie is verlopen, leidt niet tot verlies van gegevens. Sommige video's hebben een gebarentaalvertaling."
    requirements: Aanvullende toegepaste toegankelijkheidseisen
  # Feedback Options
  feedback:
    title: Feedback mogelijkheden
    info: Op welke manieren kunnen gebruikers in contact komen met uw organisatie wanneer ze een toegankelijkheidsbarrière tegenkomen? Idealiter zou u meer dan één optie moeten opgeven. Geef ook aan na hoeveel tijd gebruikers een reactie van uw organisatie kunnen verwachten. 
    phone: 
      title: Telefoon
      example: "(Voorbeeld: “+31 34 567 89 00”)"
    email:
      title: E-mail
      example: "(Voorbeeld: “accessibility@example.org”)"
    visitor_address:
      title: Bezoeker Adres
      example: "(Voorbeeld: “Main Street 1, 234 Voorbeeld Ville”)"
    postal_address:
      title: Post Adres
      example: "(Voorbeeld: “PO Box 1, 234 Voorbeeld Stad”)"
    other:
      title: Overige contact mogelijkheden
      example: "(Voorbeeld: social media; Twitter: @VoorbeeldBV)"
    response:
      title: Standaard wachttijd
      example: "(Voorbeeld: “2 werkdagen”)"
  # Date of publication
  date:
    title: Datum van publicatie
    info: Door een datum op te geven, kunnen gebruikers begrijpen of de toegankelijkheidsverklaring actief wordt onderhouden of verouderd. Idealiter mag de datum van een toegankelijkheidsverklaring niet langer zijn dan een jaar, anders kan deze als niet-onderhouden worden beschouwd. Door de maand uit te schrijven, wordt de datum internationaal duidelijker (bijv. "1 februari 2019" in plaats van "01/02/2019", wat dubbelzinnig is).
    publication_date: Publicatiedatum van deze toegankheidsverklaring

# Your Efforts
your_efforts:
  title: Uw inspanningen
  info: In deze sectie kan u de inspanningen beschrijven die uw organisatie doet om toegankelijkheid te verzekeren. Dit helpt gebruikers uw eerlijkheid en de waarheid van de beloftes begrijpen die u maakt in uw toegankelijkheidsverklaring
  # Organizational measures
  measures: 
    title: Organisatorische maatregelen 
    info: Maak een lijst van de maatregelen die uw organisatie neemt om tot een duurzame toegankelijkheid te komen. Dit omvat maatregelen zoals aanbestedingsacties, training, bewustmaking en kwaliteitsborging. Sommige van deze maatregelen zijn voor uw gemak vooraf gedefinieerd, maar u kunt indien nodig meer toevoegen. 
    mission_statement: Toegankelijkheid opnemen als onderdeel van onze missie.
    internal_policies: Toegankelijkheid opnemen in ons interne beleid
    procurement_practices: Toegankelijkheid integreren in onze aanneempraktijken.
    accessibility_officer: Een toegankelijkheids persoon of ombudsman aanwijzen.
    training: Continu toegankelijkheidstrainingen aanbieden aan ons personeel.
    targets: Duidelijke toegankelijkheidsdoeleinden en verantwoordelijkheden.
    methods: Gebruik van formele methoden voor kwaliteitsborging van toegankelijkheid.
    # Adding other measures
    other_text: Andere methode
    other_example: "(Voorbeeld: “Mensen met een beperking toevoegen aan onze persona's”)"
    other_button_text: Voeg een andere methode toe

# Technical Information
technical_info:
  title: Technische informatie
  info: In dit gedeelte kunt u meer technische details geven om gebruikers te helpen eventuele problemen te begrijpen. Dit omvat informatie over compatibiliteit met webbrowsers en ondersteunende technologieën.
  # Accessibility limitations
  limitations:
    title: Toegankelijkheid beperkingen
    singular: Toegankelijkheid beperking
    info: "Er zijn veel situaties waarin de beperkingen van de toegankelijkheid kunnen optreden. U kunt bijvoorbeeld niet zorgen voor directe toegankelijkheid van door gebruikers gegenereerde inhoud. Door transparantie te bieden in dergelijke situaties, kunt u gebruikers helpen elk probleem dat ze waarnemen te begrijpen en om alternatieven te vinden waar nodig. Onder de EU Web Toegankelijkheidsrichtlijn, zijn overheidsinstanties verplicht om informatie te verstrekken over de delen van de inhoud die niet voldoen, de reden voor niet conform zijn en, indien van toepassing, waar toegankelijke alternatieven te vinden zijn. "
    label: "Benoem de 
    <em>onderdelen</em>
    die toegankelijkheidsbeperkingen hebben, een
    <em>beschrijving van het probleem</em>
    dat zichtbaar is voor de gebruikers, een korte uitleg over
    <em>waarom het probleem zich voordoet</em>, en
    <em>wat te doen in de tussentijd</em>, zoals wie ze moeten contacteren over toegankelijkheidsproblemen en waar alternatieven te vinden zijn."
    content: 
      title: Onderdelen
      example: "(Voorbeeld: “Reacties van gebruikers”)"
    discription:
      title: Beschrijving van het probleem
      example: "(Voorbeeld: “Geuploaden afbeeldingen kunnen geen alternatieve-tekst bevatten”)"
    reason:
      title: Waarom het probleem zich voordoet
      example: "(Voorbeeld: “We kunnen de kwaliteit van de reacties niet waarborgen”)"
    us:
      title: Wat we er aan doen
      example: "(Voorbeeld: “We houden gebruiker reacties in de gaten en lossen problemen meestal binnen 2 werkdagen op”)"
    you:
      title: Wat te doen in de tussentijd
      example: "(Voorbeeld: “Gebruik a.u.b. de 'Probleem melden' knop om een probleem door te geven”)" 
    
    add_button_text: Voeg een andere beperking toe
  # Compatibility with user environment
  user:
    title: Compatibility with user environment
    info: Despite best efforts, accessibility may not work well in every combination of operating system, web browser, and assistive technology. Developers typically test their websites and mobile applications with common user environments, to determine compatibility. WCAG defines requirements for accessibility features provided by content authors to be <a href="https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported">accessibility supported</a>. Communicating this compatibility expectation helps user to determine if that is the cause for any issues they may be observing.
    label: Describe the environments (combinations of web browsers, assistive technologies, and operating systems) that the content is expected to work with. These should be in-line with the  WCAG definition of <a href="https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported">accessibility supported</a> use of technologies.
    enviroment:
      title: Environment
      example: "(Voorbeeld: “browser X with assistive technology Y on operating system Z”)"
    add_button_text: Add another compatible environment
  # Known incompatibility
  incompatible:
    title: Known incompatibility
    info: Help users understand what versions of operating systems, web browsers, and assistive technologies are not (or no longer) supported. This helps user to determine if they can use your website or mobile application with their current environments.
    label: Describe the environments (combinations of web browsers, assistive technologies, and operating systems) that the content is not expected to work with.
    example: "(Voorbeeld: “browsers older than 3 major versions” or “Mobile operating systems older than 5 years”)"
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
    other_example: "(Voorbeeld: a formal quality assurance process throughout the design and development process)"
    add_button_text: Add another approach
  # Related evidence
  evidence:
    title: Related evidence
    info: Provide links to related background and evidence to support the claims you make in this accessibility, and to provide more transparency and credibility. This can include an evaluation report, an evaluation statement, or a certification.
    report:
      title: Link to recent evaluation report
      info: An evaluation report provides details on which accessibility requirements are met, and which are not. While this is usually more technical of nature than the average user, it can help some users to understand issues they have been observing. You can use the <a href="https://www.w3.org/WAI/eval/report-tool/">WCAG-EM Evaluation Report Tool</a> to create an evaluation report. Place the link to the report here.
      example: "(Voorbeeld: “https://example.org/accessibility-evaulation-report”)"
    statement:
      title: Link to evaluation statement
      info: An evaluation statement summarizes the essential outcomes of an evaluation report. The <a href="https://www.w3.org/TR/WCAG-EM/">Website Accessibility Conformance Evaluation Methodology (WCAG-EM)</a> defines requirements for evaluation statements in <a href="https://www.w3.org/TR/WCAG-EM/#step5c">Step 5.c</a> of the document. This can be provided instead of or in addition to an evaluation report provided above.
      example: "(Voorbeeld: “https://example.org/accessibility-evaulation-statement”)"
    other_text: Other evidence
    other_example: "(Voorbeeld: “https://example.org/accessibility-evaulation-certificate”)"
    add_button_text: Add another related evidence

# Approval and complaints process 
approval_and_complaints:
  title: Goedkeurings- en klachtenproces
  info: In this section you can add information about the formal approval of this accessibility statement and, if applicable, any complaints escalation procedure.
  # Formal approval
  approval: 
    title: Formal approval
    info: Your organization may want to formally approve this accessibility statement, for example for internal purposes or to show users that this is part of the corporate policy.
    name:
      title: Name of person or department
      example: "(Voorbeeld: “Communication Department”)"
    function: 
      title: Function
      example: "(Voorbeeld: “Director of Communication”)"
  # Formal complaints
  complaints: 
    title: Formal complaints
    info: 'In some situations you may want to or may be required to provide information about a formal complaints procedures. For example, a quality management process within your organization may require you to establish a formal complaints procedure with clear escalation paths. The  <a href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj">EU Web Accessibility Directive </a> foresees EU countries to have legal “enforcement procedures” when users are not satisfied with the responses from public bodies. Inform users about any such formal complaints procedures. This may also motivate them to provide you with valuable feedback about the accessibility of your content. <br>
    <strong>Voorbeeld:</strong> “We aim to respond to accessibility feedback within 2 business days, and to propose a solution within 10 business days.  entity], should you be dissatisfied with our response to you.”'
    label: Describe any formal complaints procedures

# --- PREVIEW SECTION ---
# the following text is used in the preview of the statement:
# texts after "#" are comments, these are not used by the website, you don't have to translate these but you could if you think it would help future contributors

defaults: # defaults are used when no data is entered
  WEBSITE_NAME: WEBSITE_NAAM
  ORGANIZATION: ORGANISATIE
  COMPATIBLE_LIST: COMPATIBLE_LIST
  CONFORMANCE_MEANING: CONFORM_BETEKENIS
  DATE: DATUM

preview:
  title: Toegankelijkheidsverklaring van # ORGANIZATION
  intro: Dit is een toegankelijkheidsverklaring van # ORGANISATION
  measures:
    title: Measures to support accessibility
    label: takes the following measures to ensure accessibility of
  conformance:
    # Conformance Status
    definition: 'The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.' 
    # WEBSITE_NAME
    text_1: is
    # conformance
    text_2: with
    # standard
    text_3: means that
    # meaning
  feedback:
    title: Feedback
    label_1: We welcome your feedback on the accessibility of # WEBSITE_NAME
    label_2: Please let us know if you encounter accessibility barriers on # WEBSITE_NAME
    response: We try to respond to feedback within
  compatibility:
    title: Compatibility with browsers and assistive technology
    label: is designed to be compatible with the following assistive technologies
    label_not: is not compatible with
  tech:
    title: Technical specifications
    label_1: Accessibility of # WEBSITE_NAME
    label_2: relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer
    label_3: These technologies are relied upon for conformance with the accessibility standards used.
  limitations:
    title: Limitations and alternatives
    label_1: Despite our best efforts to ensure accessibility of # WEBSITE_NAME
    label_2: ", there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below."
    label_3: Known limitations for # WEBSITE_NAME
  assessment:
    # Assessment Approach
    label_1: assessed the accessibility of
    label_2: by the following approaches
  evaluation: 
    report: Evaluation report
    statement: Evaluation statement
    other_evidence: Other evidence
    label_1: An evaluation report for # WEBSITE_NAME
    label_2: is available at
    label_3: An evaluation statement for # WEBSITE_NAME
    label_4: Other related evidence for
  approval:
    title: Formal approval of this accessibility statement
    label: This Accessibility Statement is approved by
  date:
    title: Datum
    text_1: Deze verklaring is gemaakt op # DATE
    text_2: met de
    text_3: W3C Accessibility Statement Generator Tool
  back: Terug naar Generator
  download: Download als HTML pagina
  because: omdat




---

[//]: # Don't change the following include:
{% include_relative /generator_layout.html %}