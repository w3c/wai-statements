---
# Translation instructions are after the "#" character in this first section. (They are comments that do not show up in the web page.)
title: Genereer een Toegankelijkheidsverklaring # Do not translate "title:". Do translate the text after "title:".
lang: nl   # Change "en" to the translated language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2021-02-10   # Put the date of this translation YYYY-MM-DD (with month in the middle)
translators: #Add one -name: line for every translator
  - name: "Bas de Bruin"
  - name: "Eric Velleman"
contributors: #Add one -name: line for every contributor 
  - name: Shadi Abou-Zahra
  - name: Eric Velleman
  - name: Sanne Eendebak
  - name: Roel Antonisse
  - name: Leon Baauw
  - name: Bas de Bruin
permalink: /planning/statements/generator/nl   # Add the language shortcode to the end; for example /planning/statements/generator/nl/
layout: default
parent_path: /planning/statements/
ref: /planning/statements/generator/
github:
    repository: w3c/wai-statements
    path: "generator.nl.md"
external_css: /content-images/wai-statements/generator.css
footer: >
   <p><strong>Datum:</strong> Gepubliceerd op 29 november 2018. </p>
   <p><strong>Redactie:</strong> <a href="https://www.w3.org/People/shadi">Shadi Abou-Zahra </a>, Eric Velleman, Sanne Eendebak, Roel Antonisse, Leon Baauw en Bas de Bruin.</p>
   <p>Ontwikkeld door de <a href="https://www.w3.org/WAI/EO/">Education and Outreach Working Group (EOWG)</a>. Ontwikkeld als onderdeel van het <a href="https://www.w3.org/WAI/Tools/">WAI-Tools-project</a>, medegefinancierd door de Europese Commissie. <a href="../acknowledgements/">Dankbetuigingen</a>.</p>
# --- MAIN CONTENT ---
# this section is where all text content is stored, edit it just as described above

# -- Introduction
# Reminder: Do not translate "introduction". Do translate the text after "introduction:"
introduction: De informatie die u hieronder verstrekt, genereert een toegankelijkheidsverklaring die u kunt downloaden en verder kunt verfijnen. Geen van de invulvelden is verplicht. De informatie die u invoert wordt niet opgeslagen, behalve in uw eigen webbrowser.
intro_explaination: Hoe gebruikt u deze tool
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
month_names: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'] # make sure not to change any of the quotes, comma's or brackets

# -- Sections
# Basic Information
basic_info: 
  title: Basisinformatie
  info: Hier kunt u de minimale hoeveelheid informatie opgeven die wordt aanbevolen voor uw toegankelijkheidsverklaring. Dit omvat informatie over uw organisatie, de toegankelijkheidsstandaarden die u hebt toegepast en uw contactgegevens voor feedback.
  # Questions
  # About your statement
  about_statement:
    title: Over uw verklaring
    info: Hier kunt u de naam van uw organisatie invoeren, het webadres en de naam van uw website of mobiele applicatie. Voeg voor mobiele applicaties versie-informatie en de releasedatum toe om een specifieke versie te identificeren.
    name: 
      title: Naam van uw organisatie
      example: "(Voorbeeld: “Voorbeeld B.V.”)" # Make sure you surround your text with quotes if you're using special characters like: “ ' : [] {} <> ,
    address:
      title: Adres van uw website of mobiele applicatie
      example: "(Voorbeeld: “https://voorbeeld.org”)"
    app_name:
      title: Naam van uw website of mobiele applicatie
      example: "(Voorbeeld: “Voorbeeld Winkel” of “Voorbeeld App 1.2.3”)"
  # Accessibility Standards
  standards:
    title: Toegepaste toegankelijkheidsstandaarden
    info: Welke toegankelijkheidsstandaard heeft u gebruikt? De <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> wordt internationaal erkend. De nieuwste versie is WCAG 2.1.
    standard_followed: "Gebruikte toegankelijkheidsstandaard:"
    wcag_21_AA: WCAG 2.1 niveau AA
    wcag_20_AA: WCAG 2.0 niveau AA
    other_text: Anders
  # Conformiteitsstatus
  conformance:
    title: Conformiteitsstatus
    info: In hoeverre voldoet u aan de toegankelijkheidsstandaard zoals hierboven vermeld? Soms zijn er gerechtvaardigde redenen om niet volledig te conformeren. Verderop in dit formulier kunt u aangeven of er delen zijn die nog niet volledig voldoen, inclusief aanwijzingen over hoe gebruikers hulp kunnen vinden.
    # statusopties:
    fully:
      title: Volledig conform
      meaning: de inhoud voldoet volledig aan de toegankelijkheidsstandaard zonder enige uitzondering
    partially:
      title: Gedeeltelijk conform
      meaning: sommige delen van de inhoud voldoen niet volledig aan de toegankelijkheidsstandaard
      indic_later: (u kunt deze delen later in dit formulier aanwijzen)
    non_conformant:
      title: Niet conform
      meaning: de inhoud voldoet niet aan de toegankelijkheidsstandaard
    not_assessed:
      title: Niet beoordeeld
      meaning: de inhoud is niet geëvalueerd of de evaluatieresultaten zijn niet beschikbaar
    none: Geen
  # Additional accessibility considerations
  considerations:
    title: Aanvullende toegankelijkheidsoverwegingen
    info: "Soms past u mogelijk meer toegankelijkheidsvereisten toe dan die gespecificeerd in de hierboven vermelde toegankelijkheidsstandaard. U levert bijvoorbeeld gebarentaal bij video's of context-afhankelijke hulp functionaliteit. Hier kunt u deze aanvullende toegankelijkheidsvereisten vermelden. < / p> <br>
    <p> <strong> Voorbeeld: </strong> “Hoewel het ons doel is om te voldoen aan WCAG 2.1 niveau AA, hebben we ook enkele niveau AAA succescriteria toegepast: Afbeeldingen van tekst worden alleen gebruikt voor decoratieve doeleinden. Herauthenticatie nadat een sessie is verlopen, leidt niet tot verlies van gegevens. Sommige video’s zijn voorzien van gebarentaal."
    requirements: Aanvullend toegepaste toegankelijkheidseisen
  # Feedback Options
  feedback:
    title: Feedback mogelijkheden
    info: Op welke manieren kunnen gebruikers in contact komen met uw organisatie wanneer ze een toegankelijkheidsprobleem  tegenkomen? Idealiter zou u meer dan één optie moeten opgeven. Geef ook aan na hoeveel tijd gebruikers een reactie van uw organisatie kunnen verwachten. 
    phone: 
      title: Telefoon
      example: "(Voorbeeld: “+31 34 567 89 00”)"
    email:
      title: E-mail
      example: "(Voorbeeld: “toegankelijkheid@example.org”)"
    visitor_address:
      title: Bezoekadres
      example: "(Voorbeeld: “Hoofdstraat 1, 1234AA Stad”)"
    postal_address:
      title: Postadres
      example: "(Voorbeeld: “Postbus 1, 1234AA Stad”)"
    other:
      title: Andere contact mogelijkheden
      example: "(Voorbeeld: op sociale media; Twitter: @TwitterNaam)"
    response:
      title: Gemiddelde responstijd
      example: "(Voorbeeld: “2 werkdagen”)"
  # Date of publication
  date:
    title: Publicatiedatum
    info: Door een datum op te geven, kunnen gebruikers inschatten of de toegankelijkheidsverklaring actief wordt onderhouden of is verouderd. Idealiter is de datum op een toegankelijkheidsverklaring niet ouder dan een jaar, anders mag deze als niet-onderhouden worden beschouwd. Door de maand uit te schrijven, wordt de datum internationaal beter leesbaar (bijv. "1 februari 2019" in plaats van "01/02/2019”).
    publication_date: Publicatiedatum van deze toegankheidsverklaring

# Your Efforts
your_efforts:
  title: Uw inspanningen
  info: In dit onderdeel van het formulier kunt u aangeven welke inspanningen uw organisatie doet om toegankelijkheid te borgen. Gebruikers krijgen zo een indruk van uw inspanningen en de validiteit van de claims die u beschrijft in uw toegankelijkheidsverklaring. 
  # Organizational measures
  measures: 
    title: Organisatorische maatregelen 
    info: Maak een lijst van de maatregelen die uw organisatie neemt om tot een duurzame toegankelijkheid te komen. Dit omvat maatregelen zoals aanbestedingseisen, training, creëren van bewustwording en kwaliteitscontrole. Hieronder staan voorbeelden van dergelijke maatregelen maar u kunt naar wens meer toevoegen. 
    mission_statement: Toegankelijkheid opnemen als onderdeel van onze missie.
    internal_policies: Toegankelijkheid opnemen in ons interne beleid.
    procurement_practices: Toegankelijkheid opnemen in onze aanbestedingen.
    accessibility_officer: Benoemen van een toegankelijkheidsbeambte en/of een ombudsman.
    training: Continu toegankelijkheidstrainingen aanbieden aan onze medewerkers.
    targets: Duidelijke toegankelijkheidsdoelen en  verantwoordelijkheden.
    methods: Gebruik van formele methoden voor kwaliteitscontrole van toegankelijkheid.
    # Adding other measures
    other_text: Andere maatregel
    other_example: "(Voorbeeld: “Mensen met een beperking toevoegen aan onze persona's”)"
    other_button_text: Voeg nog een maatregel toe

# Technical Information
technical_info:
  title: Technische informatie
  info: In dit deel van het formulier kunt u meer technische details geven om gebruikers te helpen eventuele problemen te begrijpen. Dit omvat ook informatie over compatibiliteit met webbrowsers en hulptechnologieën.
  # Accessibility limitations
  limitations:
    title: Toegankelijkheidsbeperkingen
    singular: Toegankelijkheidsbeperking
    info: "Er zijn veel situaties waarin de toegankelijkheid beperkt kan zijn. Het is bijvoorbeeld niet altijd mogelijk om bijdragen die door gebruikers worden gegenereerd direct toegankelijk te maken. Door daar transparant over te zijn, kunt u gebruikers helpen om problemen waar ze tegenaanlopen te begrijpen en om waar nodig alternatieven te vinden. Onder de EU Richtlijn voor toegankelijkheid zijn overheidsinstanties verplicht om informatie te verstrekken over de delen van de inhoud die niet voldoen, de reden voor het niet voldoen, en indien van toepassing, waar toegankelijke alternatieven te vinden zijn. "
    label: "Benoem de 
    <em>onderdelen</em>
    die toegankelijkheidsbeperkingen hebben, een
    <em>beschrijving van het probleem</em>
    dat zichtbaar is voor de gebruikers, een korte uitleg over
    <em>waarom het probleem zich voordoet</em>, en
    <em>wat te doen in de tussentijd</em>, zoals wie te  contacteren over toegankelijkheidsproblemen en waar alternatieven te vinden zijn."
    content: 
      title: Onderdeel van de content
      example: "(Voorbeeld: “Reacties van gebruikers”)"
    discription:
      title: Beschrijving van het probleem
      example: "(Voorbeeld: “Geüploade afbeeldingen hebben soms geen alternatieve-tekst”)"
    reason:
      title: Waarom het probleem zich voordoet
      example: "(Voorbeeld: “We kunnen de kwaliteit van de bijdragen niet waarborgen”)"
    us:
      title: Wat we er aan doen
      example: "(Voorbeeld: “We houden de bijdragen van gebruikers in de gaten en lossen problemen meestal binnen 2 werkdagen op”)"
    you:
      title: Wat te doen in de tussentijd
      example: "(Voorbeeld: “Gebruik a.u.b. de 'Probleem melden' knop om een probleem door te geven”)" 

    add_button_text: Voeg nog een beperking toe
  # Compatibility with user environment
  user:
    title: Compatibiliteit met gebruikersomgeving
    info: Ondanks alle inspanningen kan het voorkomen dat de toegankelijkheid niet goed werkt in alle combinaties van besturingssystemen, web browsers en hulp technologieën. Ontwikkelaars testen hun websites en mobiele applicaties Meestal met veel voorkomende gebruikersomgevingen om de compatibiliteit te bepalen. WCAG vereist dat toegankelijkheidsfuncties voor content <a href="https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported">accessibility supported</a> moeten zijn. Door deze compatibiliteitsverwachtingen te benoemen, kunnen gebruikers bepalen of dat de oorzaak is van eventuele problemen die ze tegenkomen.
    label: Beschrijf de gebruikersomgevingen (combinaties van webbrowsers, hulp technologieën en besturingssystemen) waarmee de inhoud zou moeten werken. Deze moeten kloppen met de WCAG-definitie van <a href="https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported">accessibility supported</a> gebruik van technologieën.
    enviroment:
      title: Gebruikersomgeving
      example: "(Voorbeeld: “browser X in combinatie met  hulptechnologie Y en besturingssysteem Z”)"
    add_button_text: Voeg nog een werkende gebruikersomgeving toe
  # Known incompatibility
  incompatible:
    title: Bekende incompatibiliteit
    info: Help gebruikers te begrijpen welke versies van besturingssystemen, webbrowsers en hulptechnologieën niet (of niet langer) worden ondersteund. Dit helpt de gebruiker om te bepalen of ze uw website of mobiele applicatie kunnen gebruiken met hun huidige gebruikersomgeving.
    label: Beschrijf de omgevingen (combinaties van webbrowsers, hulptechnologieën en besturingssystemen) waarmee de inhoud naar verwachting niet zal werken.
    example: "(Voorbeeld: “browsers ouder dan 3 hoofdversies” of “Mobiele besturingssystemen ouder dan 5 jaar”)"
    add_button_text: Voeg nog een incompatibele gebruikersomgeving toe
  # Technologies Used
  technologies:
    title: Gebruikte technologiëen
    info: Mogelijk vertrouwt u op specifieke webtechnologieën, zoals JavaScript, WAI-ARIA of SVG om de toegankelijkheid van uw content te garanderen. Het communiceren van deze verwachting in de toegankelijkheidsverklaring kan gebruikers helpen te begrijpen waarom ze mogelijk problemen tegenkomen. De toegankelijkheidsfuncties werken bijvoorbeeld mogelijk niet omdat de gebruiker JavaScript heeft uitgeschakeld. De <a href="https://www.w3.org/Translations/WCAG21-nl/#cc4">WCAG 2 conformiteitseis 4</a> over "<em> louter door toegankelijkheid ondersteunde manieren om technologieën te gebruiken</em>" geeft meer achtergrondinformatie.
    label: Beschrijf de technologieën die nodig zijn voor conformiteit. De inhoud zou niet toegankelijk zijn als die technologie is uitgeschakeld of niet wordt ondersteund.
    add_button_text: Voeg nog een technologie toe
  # Assessment approach
  assessment:
    title: Wijze van auditen
    info: Hoe heeft u uw website of mobiele applicatie beoordeeld om de informatie die u hiervoor heeft ingevuld te bepalen? Dit helpt gebruikers om uw kwaliteitsborgingsproces te begrijpen en de achtergrond van de beweringen die u in uw toegankelijkheidsverklaring doet.
    self:
      title: Zelf-evaluatie
      meaning: De content is geëvalueerd door uw eigen organisatie of de ontwikkelaar van de content
    external: 
      title: Externe evaluatie
      meaning: De content is geëvalueerd door een externe partij die niet was betrokken bij het ontwerp- of het ontwikkelproces
    other_text: Andere aanpak
    other_example: "(Voorbeeld: formele kwaliteitscontrole gedurende het gehele ontwerp- en ontwikkelproces)"
    add_button_text: Voeg nog een andere aanpak toe
  # Related evidence
  evidence:
    title: Gerelateerde bewijsstukken
    info: Zorg voor links naar gerelateerde achtergrondinformatie en bewijs om de claims die u doet over de toegankelijkheid te ondersteunen en om meer transparantie en geloofwaardigheid te bieden. Dit kan een evaluatierapport, een evaluatieverklaring of een certificering zijn.
    report:
      title: Link naar een recent evaluatie rapport
      info: Een evaluatierapport geeft details over de  toegankelijkheidseisen waaraan wel en niet wordt voldaan. Hoewel dit meestal technischer van aard is dan de gemiddelde gebruiker, kan het sommige gebruikers helpen de problemen te begrijpen waar ze mogelijk tegenaan zijn gelopen. U kunt de <a href="https://www.w3.org/WAI/eval/report-tool/">WCAG-EM Evaluation Report Tool</a> gebruiken om een evaluatie rapport te creeren. Plaats de link naar het rapport hier.
      example: "(Voorbeeld: “https://example.org/accessibility-evaluation-report”)"
    statement:
      title: Link naar evaluatie verklaring
      info: Een evaluatie verklaring bevat de belangrijkste  uitkomsten van een evalutie rapport. De <a href="https://www.w3.org/TR/WCAG-EM/">Website Accessibility Conformance Evaluation Methodology (WCAG-EM)</a> geeft een overzicht van de vereisten voor een evaluatie verklaring in <a href="https://www.w3.org/TR/WCAG-EM/#step5c">Stap 5.c</a>. Dit kan aanvullend zijn of de plaats innemen van het evaluatie rapport.
      example: "(Voorbeeld: “https://example.org/accessibility-evaluation-statement”)"
    other_text: Andere bewijsstukken
    other_example: "(Voorbeeld: “https://example.org/accessibility-evaluation-certificate”)"
    add_button_text: Voeg nog een ander bewijsstuk toe

# Approval and complaints process 
approval_and_complaints:
  title: Goedkeurings- en klachtenproces
  info: In dit deel van het formulier kunt u informatie toevoegen over de formele goedkeuring van deze toegankelijkheidsverklaring, en indien van toepassing, meer informatie over een escalatieprocedure voor klachten.
  # Formal approval
  approval: 
    title: Formele goedkeuring
    info: Het kan zijn dat uw organisatie deze toegankelijkheidsverklaring formeel wil goedkeuren, bijvoorbeeld voor interne doeleinden of om gebruikers te laten zien dat dit onderdeel is van het bedrijfsbeleid.
    name:
      title: Naam van persoon of afdeling
      example: "(Voorbeeld: “Afdeling Communicatie”)"
    function: 
      title: Functie
      example: "(Voorbeeld: “Hoofd Cmmunicatie”)"
  # Formal complaints
  complaints: 
    title: Formele klachten
    info: 'In sommige gevallen wilt of moet u mogelijk informatie verstrekken over een formele klachtenprocedure. Een kwaliteitsmanagementproces binnen uw organisatie kan bijvoorbeeld vereisen dat u een formele klachtenprocedure met duidelijke escalatiepaden instelt. Het <a href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj">EU Web Accessibility Directive </a> vereist dat EU lidstaten beschikken over een juridische procedure voor als gebruikers niet niet tevreden zijn met het antwoord van overheidsinstanties. Informeer gebruikers over dergelijke formele klachten procedures. Dit kan gebruikers ook motiveren om u te voorzien van waardevolle feedback over de toegankelijkheid van uw content.<br>
    <strong>Voorbeeld:</strong> “Wij proberen binnen twee werkdagen te antwoorden op feedback over de toegankelijkheid, en zullen binnen 10 werkdagen een oplossing voorstellen. Mocht u ontevreden zijn over ons antwoord, dan kunt u een klacht excaleren naar: naamorganisatie].'
    label: Beschrijf de formele klachtenprocedure

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
    # Measures to support accessibility
    title: Maatregelen om toegankelijkheid te ondersteunen
    label: neemt de volgende maatregelen om de toegankelijkheid te borgen van
  conformance:
    # Conformance Status
    definition: 'De <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Richtlijnen voor Toegankelijkheid van Webcontent (WCAG)</a> bieden ontwerpers en ontwikkelaars richtlijnen om de toegankelijkheid te verbeteren voor mensen met beperkingen. Er zijn drie niveaus van conformiteit: niveau A, niveau AA en niveau AAA.' 
    # WEBSITE_NAME
    text_1: is
    # conformance
    text_2: met # conformance standard.
    # Standard,
    text_3: betekent dat
    # meaning
  feedback:
    # Feedback  
    title: Feedback
    label_1: We ontvangen graag je feedback op de toegankelijk heid van # WEBSITE_NAME
    label_2: Laat ons a.u.b. weten als u toegankelijkheidsproblemen tegenkomt op # WEBSITE_NAME
    response: We proberen op feedback te reageren binnen
  compatibility:
    # Compatibility with browsers and assistive technology
    title: Compatibiliteit met browsers en hulptechnologie
    label: is ontworpen om compatible te zijn met de volgende hulp technologieën
    label_not: is niet compatible met
  tech:
    # Technical specifications
    title: Technische specificaties
    label_1: Toegankelijkheid van # WEBSITE_NAME
    label_2: heeft de volgende technologieën nodig om te werken met de specifieke combinatie van web browser en andere hulp technologieën of plug-ins die op uw computer zijn geïnstalleerd 
    label_3: Op deze technologieën wordt vertrouwd voor conformiteit met de gebruikte toegankelijkheidsstandaarden. 
  limitations:
    # Limitations and alternatives
    title: Toegankelijkheidsbeperkingen en alternatieven
    label_1: Ondanks onze beste inspanningen ten behoeve van de toegankelijkheid van # WEBSITE_NAME
    label_2: ", kunnen er toegankelijkheidsbeperkingen zijn. Hieronder staat een beschrijving van de ons bekende toegankelijkheidsbeperkingen en de mogelijke oplossingen. Neem gerust contact met ons op als u een toegankelijkheidsprobleem tegenkomt dat nog niet in de onderstaande lijst voorkomt."
    label_3: Bekende toegankelijkheidsbeperkingen voor # WEBSITE_NAME
  assessment:
    # Auditing aanpak
    label_1: heeft de toegankelijkheid onderzocht van
    label_2: middels de volgende aanpak
  evaluation: 
    # Evaluation
    report: Evaluatie rapport
    statement: Evaluatie verklaring
    other_evidence: Andere bewijsstukken
    label_1: Een evaluatie rapport voor # WEBSITE_NAME
    label_2: is beschikbaar via
    label_3: Een evaluatie verklaring voor # WEBSITE_NAME
    label_4: Ander gerelateerd bewijs voor # WEBSITE_NAME
  approval:
    # Formal approval
    title: Formele goedkeuring van deze toegankelijkheidsverklaring
    label: Deze toegankelijkheidsverklaring is goedgekeurd door 
  date:
    # Date footer
    title: Datum
    text_1: Deze verklaring is gemaakt op # DATE
    text_2: met de
    text_3: W3C tool voor het maken van een toegankelijkheidsverklaring
  back: Terug naar Generator
  download: Download als HTML pagina
  because: omdat




---

[//]: # Don't change the following include:
{% include_relative /generator_layout.html %}

