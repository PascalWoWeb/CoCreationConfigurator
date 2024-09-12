export interface designmethodstype {
  projectphase: string;
  name: string;
  description: string;
  materials: string[];
  difficulty: string;
  manual: string[];
  time: string;
  online: boolean;
  software ?: string[];
}

export const desingmethodsarray: designmethodstype[] = [
  {
    projectphase: "understand",
    name: "Align on Your Impact Goals",
    difficulty: "mittel",
    description:
      "Bei dieser Methode werden die Ziele der Stakeholdern ermittelt und nach der Schwierigkeit von der Erreichung des Ziels als Leiter dargestellt, wodurch der langfristige Impact und der Schlüsseleffekt ermittelt werden kann.",
    manual: [
      "Team wird aus Steakholdern zusammengestellt, welche ihre wünsche und Vorstellungen auf Post-it Zetteln aufschreiben.",
      "Die Zettel werden in einer Vertikalen Leiter organisiert, wobei die langfristigen und schwer zu erreichenden Ziele oben sind und die leichten und unmittelbaren unten gesetzt werden.",
      "Es wird ein Impact Ladder Arbeitsblatt ausgeteilt, welche den Langfristigen Impact (bleibende Soziale Veränderungen) und den Schlüsseleffekt (kurzfristigeres Ziel, eine beobachtbare Veränderung oder ein Verhalten bei der Zielgruppe).",
      "Die beiden Aussagen sind das Zentrale Ziel des Projekts",
      "Ziel als gemeinsames Ziel mit den Stakeholdern definieren",
    ],
    materials: ["Schreibutensilien", "Papier", "Post-ist"],
    time: "60 Minuten",
    online: false,
  },
  {
    projectphase: "understand",
    name: "Photojournal",
    difficulty: "mittel",
    description:
      "Das Photojournal ist eine visuelle Methode, welches es ermöglicht einen tiefen Einblick in das Leben einer Person zu bekommen.",
    manual: [
      "Die Teilnehmer erhalten eine Kamera mit der Aufgabe alle Mittel zur Projektrelevanten Entscheidung zu fotografieren (Bsp. Bei einer Fitnessapp, sollen alle Fitnessrelevanten Aspekte aus dem Leben fotografiert werden wie z.B. Trainingsplan, Ernährungsplan usw.).",
      "Die Fotos werden daraufhin analysiert, woraufhin Fragen entwickelt werden.",
      "Anschließend werden die Personen zu den Fotos und deren Bedeutung befragt.",
    ],
    materials: ["Kamera"],
    time: " 2 – 7 Tage",
    online: false,
  },
  {
    projectphase: "understand",
    name: "Body Language Methode",
    difficulty: "einfach",
    description:
      "Bei dieser Methode wird innerhalb eines Interviews auf die Körpersprache der teilnehmenden Person geachtet. Dies führt dazu, dass nonverbale Signale mit einbezogen werden können, wodurch ein stärkeres Verständnis entsteht.",
    manual: [
      "Achten sie, dass sie auf Augenhöhe mit der Person sprechen und durchgehender Augenkontakt gehalten wird. Die Person soll das Gefühl bekommen, dass die Aufmerksamkeit bei ihr liegt.",
      "Machen sie Notizen, um der teilnehmenden Person ein Zeichen der Wertschätzung zu geben und sorgen sie dafür, dass die Person der Zentrale Mittelpunkt des Gesprächs bleibt.",
    ],
    materials: ["keine"],
    time: "durch den gesamten Prozess",
    online: false,
  },
  {
    projectphase: "understand",
    name: "The Five Whys",
    difficulty: "einfach",
    description:
      ": Bei dieser Methode bekommen die Teilnehmer wiederholte „Warum ?“ Fragen, um die Motivationen dieser Person zu ermitteln. Es sollen die Ursachen von den Verhaltensweisen und Problemen ermittelt werden",
    manual: [
      "Fragen sie eine allgemeine Frage bezüglich des Verhaltens der Person z.B. „Waren sie dieses Jahr sportlich aktiv ?“.",
      "Auf die Frage und dessen Antworten sollen bis zu Fünf weitere Warum Fragen gestellt werden, damit ein tieferes Verständnis entsteht.",
      "Erfassen sie die Antworten schriftlich und achten sie darauf, ob die Antworten tiefere Einblicke bieten.",
    ],
    materials: ["Stifte", "Papier"],
    time: "15 Minuten",
    online: false,
  },
  {
    projectphase: "understand",
    name: "Interview",
    difficulty: "mittel",
    software: ["Microsoft Teams", "Zoom"],
    description:
      "Bei dieser Methode werden tiefere Einblicke in die Erfahrungen und Bedürfnisse der befragten Person ermöglicht, wodurch ein tieferes Verständnis zur Person aufgebaut werden kann.",
    manual: [
      "Es sollen höchstens drei Teammitglieder im Raum sein, um den Teilnehmer nicht zu überfordern und außerdem soll jedes Mitglied eine Rolle haben (Interviewer, Fotograft und Protokollant).",
      "Es soll ein Fragenkatalog erstellt werden.",
      "Beginne mit einfachen Fragen und werden sie daraufhin spezifischer mit Fragen bezüglich des Design Problems.",
      "Achten sie auf die Körpersprache und dokumentieren sie möglichst genau, was die Person sagt, damit keine Interpretation möglich ist.",
    ],
    materials: [""],
    time: "60-90 Minuten",
    online: true,
  },
  {
    projectphase: "understand",
    name: "Group Interviews",
    difficulty: "mittel",
    software: ["Microsoft Teams", "Zoom"],
    description:
      "Bei dieser Methode werden tiefere Einblicke in die Erfahrungen und Bedürfnisse der befragten Person ermöglicht, wodurch ein tieferes Verständnis zur Person aufgebaut werden kann.",
    manual: [
      "Stelle eine Gruppe zusammen, bei welcher sie die höchsten Chancen haben an die geeigneten Informationen zu kommen.",
      "Es sollen höchstens drei Teammitglieder im Raum sein, um die Teilnehmer nicht zu überfordern und außerdem soll jedes Mitglied eine Rolle haben (Interviewer, Fotograft und Protokollant).",
      "Sorgen sie dafür, dass ruhigere Teilnehmer miteinbezogen werden, indem sie diese direkten Fragen stellen.",
      "Achten sie darauf, welche Teilnehmer für spätere Gespräche innerhalb der Co-Creation Sessions relevant sein können.",
    ],
    materials: ["Stifte", "Papier", "Kamera"],
    time: "90-120 Minuten",
    online: true,
  },
  {
    projectphase: "understand",
    name: "Experten Interviews",
    difficulty: "mittel",
    software: ["Microsoft Teams", "Zoom"],
    description:
      "Bei dieser Methode werden tiefere Einblicke in die Erfahrungen und Bedürfnisse eines Experten eines Fachgebiets gewonnen, wodurch neue Perspektiven und Innovationen gewonnen werden können.",
    manual: [
      "Bestimmen sie die Art der benötigten Experten z.B. Arzt.",
      "Geben sie dem Experten einen Einblick über ihren Fragenkatalog und befragen sie mehrere Experten, um verschiedene Perspektiven zu erhalten.",
      "Dokumentieren sie das Gespräch z.B. mit einem Notizbuch.",
    ],
    materials: ["Stifte", "Papier", "Kamera", "Notebook"],
    time: "60-90 Minuten",
    online: true,
  },
  {
    projectphase: "understand",
    name: "Converstation Starters",
    difficulty: "mittel",
    software: ["Microsoft Teams", "Zoom"],
    description:
      "Bei dieser Methode werden Conversation Starters genutzt, um durch Provokationen Konversationen zu starten. Hierbei werden Begriffe in verbindung zu einem Thema gebracht, um die Kreativität der Zielgruppe anzuregen. Durch die Provokation werden verschiedene Meinungen und Einblicke ermöglicht.",
    manual: [
      "Erstellen sie ein Thema, worauf die Zielgruppe reagieren kann. Dies kann z.B. sowas wie „Technologien für Eingeschränkte Patienten, um sich selbst zu versorgen“ sein.",
      "Daraufhin soll eine Liste von Ideen zu diesem Thema erstellt werden z.B. „App zur Erinnerung von der Einnahme von Medikamenten“.",
      "Daraufhin sollen von der Zielgruppe Meinungen und Ideen eingeholte werden.",
      "Achten sie auf die Reaktionen und Interpretationen der Zielgruppe und stellen sie gegebenenfalls nachfragen, um die Denkweise zu verstehen.",
    ],
    materials: ["Stifte", "Papier", "Kamera", "Notebook"],
    time: "30-60 Minuten",
    online: true,
  },
  {
    projectphase: "understand",
    name: "Analogous Settings",
    difficulty: "mittel",
    description:
      "Bei dieser Methode werden durch die Beobachtung ähnlicher, aber nicht identischer Umgebungen, Produkte etc. Inspirationen für das Designproblem gewonnen.",
    manual: [
      "Listen sie auf einem Blatt die Verhaltensweisen und Emotionen auf, welche sie erforschen möchten.",
      "Schreiben sie neben jeder Aktion eine Umgebung, in der sie diese erforschen möchten.",
      "Planen sie einen Besuch in dieser Umgebung.",
      "Machen sie Beobachtungen und notieren sie sich die relevanten.",
    ],
    materials: ["Stifte", "Papier", "Kamera"],
    time: "30-60 Minuten",
    online: false,
  },
  {
    projectphase: "understand",
    name: "Karten Sortieren",
    difficulty: "einfach",
    description:
      "Bei dieser Methode werden die Präferenzen der Teilnehmer deutlich, da durch das Sortieren der Karten, welche Wörter und Bilder enthalten eine Rangfolge erstellt wird.",
    manual: [
      "Gestalten sie Karten mit Wörtern oder Bilder.",
      "Passen sie das Kartendeck an und mischen sie zu den konkreten Ideen auch abstrakte Ideen. Eine Konkrete Besuch kann sowas sein wie Medikamente oder ein Bild davon und eine abstrakte Idee wäre Gesundheit oder ein Bild eines gesunden Herzes.",
      "Lassen sie sich die Karten vom Teilnehmer sortieren und fragen sie nach Gründen für die Reihenfolge.",
      "Fragen sie weitere Fragen, welche für eine Variation der Reihenfolge sorgt, z.B. „Wie würden sie die Karten als ältere Person sortieren?“.",
    ],
    materials: ["Karten mit Wörtern oder Bildern"],
    time: "30 Minuten",
    online: false,
  },
  {
    projectphase: "understand",
    name: "Kollage",
    difficulty: "einfach",
    software: ["Figma", "Adobe XD"],
    description:
      "Beschreibung: Bei dieser Methode werden die Bedürfnisse der Teilnehmer erforscht, da dies den kreativen Denkprozess dieser herausfordert.",
    manual: [
      "Bereiten sie ihr Hilfsmaterial zum Erstellen der Kollage vor.",
      "Geben die dem Teilnehmer ein Thema für die Kollage z.B. Technologien in der Gesundheitsversorgung.",
      "Lassen sie die Teilnehmer die Kollagen mit Bildern und Texten erstellen und anschließend erklären lassen.",
    ],
    materials: ["Stifte", "Papier", "Kleber", "Magazine"],
    time: "30-60 Minuten",
    online: true,
  },
  {
    projectphase: "understand",
    name: "Guided Tour",
    difficulty: "mittel",
    description:
      "Bei dieser Methode werden die Teilnehmer in ihrem Lebensumfeld begleitet. Dies kann ihre Wohnung, der Arbeitsplatz oder bei einer speziellen Aktivität sein. Dadurch werden die Gewohnheiten und Routinen der Teilnehmer deutlich.",
    manual: [
      "Bereiten sie ihren Besuch vor und holen sie die volle Erlaubnis für diesen ein. Achten sie dabei auf kulturelle und geschlechterspezifische Dynamiken.",
      "Kommen sie mit nur zwei Teammitgliedern, wobei der eine für die Fragen und der andere für die Notizen zuständig ist.",
      "Beobachten sie den Raum, machen sie bei Erlaubnis Fotos und stellen sie Fragen zu den Routinen der Person.",
    ],
    materials: ["Stifte", "Papier", "Kamera"],
    time: "2-4 Stunden",
    online: false,
  },
  {
    projectphase: "understand",
    name: "Draw It",
    difficulty: "einfach",
    software: ["Figma", "Adobe XD"],
    description:
      "Bei dieser Methode werden die Teilnehmer dazu aufgefordert zu einem Thema Zeichnungen zu entwerfen, wodurch die Ideen und Gedanken dieser visuell wiedergegeben wird.",
    manual: [
      "Bereiten sie Papier und Stifte vor und bitten sie den Teilnehmer ihre Anweisung zu zeichnen, z.B. Medizinische Routinen.",
      "Zeichnen sie gegebenenfalls etwas vor, damit der Teilnehmer keinen Druck hat, falls dieser nicht so gut zeichnen kann.",
      "Nutzen sie die Zeichnung für Konversationen und stellen sie dem Teilnehmer auf Basis der Zeichnung Fragen.",
    ],
    materials: ["Stifte", "Papier", "Kamera"],
    time: "30 Minuten",
    online: true,
  },
  {
    projectphase: "understand",
    name: "Peers Observing Peers",
    difficulty: "mittel",
    description:
      "Bei dieser Methode werden die Teilnehmer dazu aufgefordert selbst zu forschen und ihre Beobachtungen zu dokumentieren. Ein Beispiel hierfür ist z.B. wenn die Patienten dazu aufgefordert werden Gesundheitsgewohnheiten anderer Patienten oder Familienmitglieder zu beobachten.",
    manual: [
      "Statten sie ihre Teilnehmer mit den benötigten Hilfsmaterialien aus und bestimmen sie, welche Informationen gesammelt werden sollen.",
      "Achten sie darauf, dass es bei den Beobachtungen der Teilnehmer kein richtig oder falsch gibt und dass sie an deren ehrlichen Meinungen und Emotionen interessiert sind.",
      "Bieten sie bei Fragen ihre Unterstützung an.",
      "Sammeln sie die gesammelten Daten und Fragen sie die Teilnehmer nach deren Eindrücken und gewonnenen Erfahrungen.",
    ],
    materials: ["Stifte", "Papier", "Kamera"],
    time: "2-4 Stunden",
    online: false,
  },
  {
    projectphase: "understand",
    name: "Immersion",
    difficulty: "hart",
    description:
      "Bei dieser Methode werden sie mit den Teilnehmern vor Ort bei denen arbeiten, um ein Verständnis für deren Routinen und Lebensweisen entwickeln.",
    manual: [
      "Planen sie Zeit, Budget und ihre Teammitglieder in den Alltag der Teilnehmer ein.",
      "Beobachten und Dokumentieren sie genaue Beobachtungen und Zitate ohne Interpretationsspielraum.",
      "Beobachten sie die Teilnehmer einen vollständigen Tag für einen umfassenden Einblick im Alltag des Teilnehmers oder auch nur ein paar Stunden, um durch die Umgebung und Aktivitäten Informationen zu erhalten.",
      "Analysieren sie ihre Daten und versuchen sie Muster in ihren Beobachtungen zu erkennen.",
    ],
    materials: ["Hilfsmittel zum Dokumentieren"],
    time: "Idealerweise eine Woche",
    online: false,
  },
  {
    projectphase: "define",
    name: "Personas",
    difficulty: "mittel",
    software: ["Miro"],
    description:
      "Bei dieser Methode werden die gesammelten Daten der Teilnehmer in einem Steckbrief zusammengefasst. Hierbei steht der Steckbrief nicht für eine Person, sondern für eine Nutzergruppe.",
    manual: [
      "Erhebe Daten mit den Methoden aus der Verstehens Phase.",
      "Teilen sie die Teilnehmer in verschiede Gruppen mit ähnlichen Eigenschaften ein.",
      "Erstellen sie die Personas nach den Gruppen und fügen sie die Motivationen, Ziele und Schmerzpunkte hinzu und geben sie den Personas einen Namen und ein Foto.",
    ],
    materials: ["Beobachtungsdaten", "Papier", "Stift"],
    time: "halben bis ganzen Tag pro Gruppe",
    online: true,
  },
  {
    projectphase: "define",
    name: "Storyboard",
    difficulty: "einfach",
    software: ["Miro"],
    description:
      "Bei dieser Methode werden Elemente eines Produkts oder eine Dienstleistung, welche in groben Skizzen dargestellt werden. Dies dient als Leitfaden für Konzepte.",
    manual: [
      "Wählen sie Aspekte aus, welche sie darstellen müssen. Es muss nicht das gesamte Angebot, sondern kann eine Interaktion sein.",
      "Teilen sie die Teilnehmer in verschiede Gruppen mit ähnlichen Eigenschaften ein.",
      "Erstellen sie die Personas nach den Gruppen und fügen sie die Motivationen, Ziele und Schmerzpunkte hinzu und geben sie den Personas einen Namen und ein Foto.",
      "Das Storyboard soll als Leitfaden für das Durchdenken des Konzeptes dienen.",
      "Das Storyboard soll am Ende dem Team vorgestellt werden.",
    ],
    materials: ["Papier", "Stift"],
    time: "60 Minuten",
    online: true,
  },
  {
    projectphase: "define",
    name: "User Journey Map",
    difficulty: "hart",
    software: ["Miro"],
    description:
      "Bei dieser Methode werden die Schritte und Interaktion zwischen einen Benutzer und eines Produkts oder einer Dienstleistung über die Zeit grafisch dargestellt. Dort werden in verschiedenen Phasen die Ziele. Aktivitäten, Berührungspunkte, Frustpunkte, Verbesserungsmöglichkeiten und Emotionen, Gedanken und Wünsche dargestellt.",
    manual: [
      "Wählen den Bereich, welcher dargestellt werden soll (gesamte Interaktion oder nur ein Teil).",
      "Wählen sie eine Persona, dessen Erfahrung mit einem Produkt abgebildet wird.",
      "Wählen sie ein Nutzungsszenario, welches dargestellt werden soll.",
      "Wählen sie ein Nutzungsszenario, welches dargestellt werden soll",
      "Listen sie alle Berührungspunkte inklusiver derer Kanäle wie z.B. eine Webseite oder einen Laden",
      "Versuchen sie die Ziele der Persona zu verstehen und Notieren sie ebenfalls zu jedem Zeitpunkt dessen Emotionen.",
      "Anschließend sollten sie ihre Journey Map überprüfen und überarbeiten.",
    ],
    materials: ["Papier", "Stift", "Beobachtungsdaten"],
    time: "2 Stunden",
    online: true,
  },
  {
    projectphase: "create",
    name: "6-3-5 Methode",
    difficulty: "einfach",
    software: ["Miro"],
    description:
      "Bei dieser Methode werden von sechs Personen eine hohe Anzahl an Lösungen für die Problemlösung erstellt. In diesem Verfahren werden drei Ansätze vorgegeben, welche in Fünf Wiederholungen erweitert werden.",
    manual: [
      "Schreiben sie das zu Lösende Problem auf einem Whiteboard und händigen sie eine leere Tabelle mit 3 Spalten und 6 Zeilen aus.",
      "In der ersten Zeile werden von jedem Teilnehmer drei Ideen verfasst, wo nach drei Minuten die Blätter im Uhrzeigersinn weitergegeben werden.",
      "Nach der Weitergabe sollen die Ideen der vorherigen Person erweitert werden. Dieser Prozess findet Fünf Mal statt.",
    ],
    materials: ["leere Tabellen"],
    time: "20-30 Minuten",
    online: true,
  },
  {
    projectphase: "create",
    name: "Bodystorming",
    difficulty: "hart",
    description:
      "Bei dieser Methode werden die emotionale und motivationale Sicht des Nutzers angenommen, indem man in eine physische Situation der betrachtenden Person hineinversetzt wird, um Informationen und Inspirationen zur Ideengenerierung zu erhalten.",
    manual: [
      "Begeben sie sich an einem Ort mit ihrem Team, wo das Szenario stattfinden soll.",
      "Beobachten sie das Verhalten und die Umgebung, mit welcher die zu betrachtende Person interagiert, und halten sie alle Aktionen, welche die Handlung beeinflussen fest.",
      "Nutzen sie ihre Erkenntnisse und spielen sie die Situation nach. Zeichnen sie diese dabei auf.",
      "Befragen sie ihr Team nach deren persönlichen Gefühlen, während der Nachstellung und analysieren sie das Videomaterial und deren Erkenntnisse.",
    ],
    materials: ["Whiteboard","Videokamera"],
    time: "1-3 Stunden",
    online: false,
  },
  {
    projectphase: "create",
    name: "Brainstorming",
    difficulty: "einfach",
    software: ["Miro"],
    description:
      "Bei dieser Methode werden viele Ideen des Teams gesammelt, welche sich auf die zentrale Frage bezieht.",
    manual: [
      "Formulieren sie eine zentrale Frage.",
      "Sammeln sie Ideen innerhalb des Teams und halten sie diese fest.",
      "Achten sie darauf, dass immer nur eine Person spricht und behandeln sie die Ideen nicht wertend.",
      "Analysieren sie am Ende die Ergebnisse.",
    ],
    materials: ["Whiteboard","Stifte","Post-its"],
    time: "1-3 Stunden",
    online: true,
  },
  {
    projectphase: "create",
    name: "Dotmocracy",
    difficulty: "einfach",
    software: ["Miro"],
    description:
      "Bei dieser Methode werden Ergebnisse aus der Brainstorming Phase innerhalb der Gruppe demokratisch bewertet.",
    manual: [
      "Händigen sie jedem Teilnehmer zwei Klebepunkte aus.",
      "Fordern sie die Teilnehmer dazu auf unter deren zwei favorisierten Ideen ihre Punkte zu verteilen.",
      "Sortieren sie die Ideen nach Anzahl der Klebepunkte und diskutieren sie diese.",
      "Behalten sie die mit den wenigeren Klebepunkte als Reserve und verwerfen sie diese, welche keine bekommen haben.",
    ],
    materials: ["Stifte", "Papier", "Klebepunkte", "Stellwände", "Nadeln oder Magnete"],
    time: "10-30 Minuten",
    online: true,
  },
  {
    projectphase: "create",
    name: "How-Wow-Now Matrix",
    difficulty: "einfach",
    software: ["Miro"],
    description:
      "Bei dieser Methode werden gesammelte Ideen in einer Bewertungsmatrix, welche nach der Originalität und Umsetzbarkeit eingeteilt sind bewertet.",
    manual: [
      "Erstellen sie eine 2x2 Matrix, wo die Y-Achse für die Originalität und die X-Achse für die Umsetzbarkeit steht.",
      "Geringe Originalität und Umsetzbarkeit bekommt das Feld Ciao, geringe Originalität und hohe Umsetzbarkeit Now, hohe Originalität und geringe Umsetzbarkeit How und hohe Originalität und Umsetzbarkeit wow.",
      "Diskutieren sie im Team, wo sie die Ideen einordnen würden.",
      "Now Ideen sollten direkt umgesetzt werden oder als Reserve einbehalten.",
      "How Ideen sollten verbessert werden, um die Umsetzung zu ermöglichen",
      "Wow Ideen sollten direkt in Angriff genommen werden und Details besprochen werden",
    ],
    materials: ["Flipchart", "Marker", "Klebezettel"],
    time: "10-40 Minuten",
    online: true,
  },
  {
    projectphase: "create",
    name: "Ja, außerdem ...",
    difficulty: "einfach",
    software: ["Miro"],
    description:
      "Bei dieser Methode handelt es sich um eine Art des Brainstormings, welches strukturierter ist, da nach jeder Idee ein „Ja außerdem…“ folgt, um die Idee weiter auszubauen.",
    manual: [
      "Formulieren sie eine Frage mit „Wie können wir…?“.",
      "Bei der Beantwortung der Frage soll eine Person sprechen, woraufhin die nächste Person mit „ja außerdem“ antwortet und die Antwort weiter ausbaut.",
      "Hierbei ist es wichtig nicht den Fokus der Frage zu verlieren und alle Ideen auf dem Whiteboard festzuhalten.",
      "Zum Schluss werden die Ideen besprochen.",
    ],
    materials: ["Whiteboard"],
    time: "15-60 Minuten",
    online: true,
  },
  {
    projectphase: "create",
    name: "Mindmapping",
    difficulty: "einfach",
    software: ["Miro"],
    description:
      "Bei dieser Methode wird ein Zentraler Begriff oder Frage in die Mitte platziert, woraufhin sich drum herum weitere Ideen mit Zwischenideen entwickeln, welche erforscht werden können.",
    manual: [
      "Definieren sie eine zentrale Frage oder Begriff in der Mitte und rahmen sie diesen in einem Kreis an.",
      "Anschließend sollen Stichwörter, welche zu diesem Begriff passen ebenfalls eingerahmt und mit dem Zentralen Begriff verbunden werden.",
      "Manche Begriffe, welche mit mehreren Begriffen assoziiert werden können, gelten als Schlüsselbegriffe, welche als Hauptknoten dienen.",
    ],
    materials: ["Whiteboard", "Papier","Stift"],
    time: "10-60 Minuten",
    online: true,
  },
  {
    projectphase: "design",
    name: "High-Fidelity-Prototypen",
    difficulty: "hart",
    software: ["Figma", "Adobe XD"],
    description:
    "Bei dieser Methode werden sehr detaillierte Prototypen erstellt, welche klickbar sind und auf Benutzerinteraktionen reagieren (clickdummies oder mockups). In dem Prototypen befinden sich bereits geeignete Bilder und Texte.",
    manual: [
      "Achten sie, ob dein High-Fidelity- Prototyp für ihre Zielsetzung angemessen ist.",
      "Achten sie darauf, dass sie bereits eine Vision der Anwendung haben und die grundlegenden Anforderungen bekannt sind.",
      "Entscheiden sie sich für eine Software für das Prototyping wie z.B. Figma oder Adobe XD.",
    ],
    materials: ["Prototyping Tools wie Figma oder Adobe XD"],
    time: "15-60 Minuten",
    online: true,
  },
  {
    projectphase: "design",
    name: "Low-Fidelity-Prototypen",
    difficulty: "mittel",
    description:
    "Bei dieser Methode werden gering detaillierte Prototypen erstellt, welche den Zweck haben schnell viele Ideen zu gestalten und auch zu verwerfen, falls diese nicht funktionieren. Der Vorteil hierbei, dass sich komplett auf die Ideengenerierung fokussiert werden kann und die Technik außen vorgelassen wird.",
    manual: [
      "Achten sie darauf, dass erste Ideen stehen. Das Aussehen muss noch nicht feststehen.",
      "Zeichnen sie ihre Ideen auf Klebezettel und pinnen sie diese auf einem Whiteboard.",
      "Strukturieren sie die Ideen im Anschluss und bewerten sie diese.",
    ],
    materials: ["Papier", "Stift",],
    time: "1-24 Stunden",
    online: false,
  },
  {
    projectphase: "design",
    name: "Lego Serious Play",
    difficulty: "einfach",
    description:
    "Diese Methode ist ein spielerischer Prozess, wo zu Visionen kreativ und schnell Prototypen erstellt werden können. Der Vorteil hierbei, dass sich komplett auf die Ideengenerierung fokussiert werden kann und die Technik außen vorgelassen wird.",
    manual: [
      "Teilen sie Kisten mit Lego unter den Teilnehmern aus.",
      "Ermutigen sie die Teilnehmer ihre Ideen und Visionen zu im Bezug auf die zentrale Frage zu realisieren.",
      "Erklären sie den Teilnehmern, dass es beim Denken innerhalb dieses Prozesses kein richtig und falsch gibt.",
      "Anschließend werden die Antworten der Teilnehmer besprochen.",
      "Zuletzt wird aus allen Antworten der Teilnehmer ein gemeinsames Projekt gebaut.",
    ],
    materials: ["Lego",],
    time: "variable",
    online: false,
  },
  {
    projectphase: "design",
    name: "Papierprototyp",
    difficulty: "einfach",
    description:
    "Bei dieser Methode werden mit den einfachsten Mitteln Prototypen hergestellt, welche eine sehr hohe, aber auch geringe Detailgetreue aufweisen können. Mit mehreren Abbildungen aufeinander können Interaktionen veranschaulicht werden. Der Fokus hierbei liegt auf der Überprüfung der Idee.",
    manual: [
      "Bestimmen sie, welchen Teil der interaktiven Anwendung sie darstellen möchten.",
      "Bestimmen sie wie abstrakt der Prototyp sein soll und welche Details grundlegend sind.",
      "Erstellen sie für jede notwendige Oberfläche eine Zeichnung und stellen sie interaktive Elemente mit Klebezetteln da.",
      "Führen sie Benutzertests durch und dokumentieren sie die Ergebnisse.",
    ],
    materials: ["Papier", "Stift", "Schere und Kleber"],
    time: "1-24 Stunden",
    online: false,
  },
  {
    projectphase: "design",
    name: "Styleguide",
    difficulty: "mittel",
    description:
    "Bei dieser Methode werden Gestaltungsregeln festgelegt, welche die Gestaltung der Anwendung auf Pixelebene festlegt. Dies führt zu einer einheitlichen Gestaltung der Anwendung.",
    manual: [
      "Erstellen sie falls noch nicht vorhanden visuelle Entwürfe für die Anwendung.",
      "Bestimmen sie das Layout der kompletten Anwendung und die einzelnen Komponenten wie Header, Footer, Navigation und das Meldungskonzept.",
      "Erstellen sie ein Navigationsmenü mit Navigationshilfen wie einer Sitemap und definieren sie ihre UI-Elemente in Form von Gestaltungsmustern.",
      "Erstellen sie ebenfalls Regeln für die einzelnen Komponenten wie Buttons und Textfeldern.",
    ],
    materials: ["Computer", "Stift und Papier"],
    time: "variiert nach Anwendung",
    online: true,
  },
  {
    projectphase: "design",
    name: "Wireframe",
    difficulty: "mittel",
    software: ["Figma", "Adobe XD"],
    description:
    "Bei dieser Methode werden Layouts für die Anwendung erstellt ohne, dass die Elemente bereits gestaltet sein müssen. Der Fokus liegt hier zu bestimmt, ob alle nötigen Informationen und Funktionen vorhanden sind und ob das Layout von der Stimmung passt.",
    manual: [
      "Platzieren sie ihre notwendigen UI-Elemente im Raster.",
      "Legen sie fest, wo ihre Navigation und der Inhalt platziert werden sollen und wählen sie für diese ein geeignetes Format.",
      "Darauf können sie diese mit Details füllen wie z.B. „Überschriften, Textblöcken usw.“.",
      "Visualisieren sie mithilfe von Graustufen die Gewichtung der UI-Elemente.",
    ],
    materials: ["Prototyping Tools oder Stift und Papier"],
    time: "variiert nach Anwendung",
    online: true,
  },
  {
    projectphase: "evaluation",
    name: "Cognitive Walkthrough",
    difficulty: "hart",
    description:
    "Bei dieser Methode führen Usability-Experten aus Sicht einer Persona Nutzertests durch und testen die Anwendung auf ausreichende Hinweise und Feedback, um zu schauen, ob die nächsten Schritte zu erkennen sind. Dadurch können die Experten passende Lösungen für schwierige Designprobleme vorschlagen.",
    manual: [
      "Wählen sie den Usability-Experten und den Teil der Interaktion, welchen sie untersuchen wollen.",
      "Legen sie Aufgaben fest, welche bearbeitet und für die Evaluation festgelegt werden muss.",
      "Die Experten müssen dokumentieren, ob es zu Usability-Problemen kommt.",
      "Die Auswertung kann in einem gemeinsamen Workshop besprochen werden und Schwachstellen ausgewertet und priorisiert werden.",
    ],
    materials: ["Foto/Videokamera", "Tonaufnahmegerät", "Screencast Software"],
    time: "mindestens 24 Stunden",
    online: false,
  },
  {
    projectphase: "evaluation",
    name: "Feldtest",
    difficulty: "hart",
    description:
    "Bei dieser Methode wird das Produkt z.B. eine Anwendungssoftware im realen Nutzungskontext eingesetzt wie z.B. am Arbeitsplatz. Das Ziel hier ist nicht dem Nutzer vordefinierte Aufgaben zu geben, sondern die Software anhand dessen alltägliche Arbeitsaufgaben zu testen. Anbei werden Usability Tests und Fragebögen eingesetzt.",
    manual: [
      "Wählen sie die geeignete Nutzergruppe und den Teil des Systems aus, welches sie untersuchen möchten.",
      "Erstellen sie einen Ablaufplan und erheben sie mit Fragebögen die Erfahrungen im Bereich User Experience/-Usability und die Vorerfahrung mit dem System.",
      "Wählen sie einen Moderator, welcher am besten kein UX-Experte ist um Beeinflussung zu vermeiden.",
      "Führen sie vorab Tests im Voraus aus, wo do der Ablauf und die Aufgaben überprüft wird.",
      "Beim Test begrüßt der Moderator die Nutzer und führt ein Briefing durch, wo die Nutzer Instruktionen zum System erhalten.",
      "Die Nutzer denken während des Tests laut, damit der Moderator die Gedanken dokumentieren und nachvollziehen kann.",
      "Die Daten werden durch Videoaufzeichnungen oder Beobachtungsbögen dokumentiert.",
      "Nach dem Feldtest werden die gesammelten Daten ausgewertet und die Dokumentation erstellt.",
      
    ],
    materials: ["Foto/Videokamera", "Tonaufnahmegerät", "Fragebögen"],
    time: "5 Personentage",
    online: false,
  },
  {
    projectphase: "evaluation",
    name: "Fragebogen",
    difficulty: "mittel",
    software: ["Google Forms"],
    description:
    "Bei dieser Methode werden Nutzermeinungen durch Fragebögen erfasst werden. Hierbei kann es sich um qualitativen und/oder quantitativen Daten handeln. Durch diese Methode können Usability-Probleme und Erfahrungen der befragten Personen gesammelt werden.",
    manual: [
      "Wählen sie eine geeignete Zielgruppe und erstellen sie einen passenden Fragebogen, welches an ihr Ziel angepasst ist.",
      "Führen sie nach der Erstellung einen Pre-Test, um den Fragebogen auf Verständlichkeit und Zeitaufwand zu testen.",
      "Kontaktieren sie ihre potenzielle Zielgruppe und führen sie den Test durch.",
      "Stehen sie dabei für Fragen zur Verfügung.",
      "Werten sie die Umfrage aus und Dokumentieren sie diese.",
      
    ],
    materials: ["Fragebogen"],
    time: "1-2 Personentage",
    online: true,
  },
  {
    projectphase: "evaluation",
    name: "Heuristische Evaluation",
    difficulty: "mittel",
    description:
    "Bei dieser Methode werden Systeme durch Usability-Experten auf Abweichungen gegen die Heuristiken getestet, wobei es sich um Evaluationskriterien handelt. Mit dieser Methode werden Konzeptideen verbessert und Lösungen für Design-Probleme ermittelt.",
    manual: [
      "Wählen sie einen Evaluationsexperten, die Heuristiken und den Teil des Systems, welches untersucht werden soll.",
      "Wählen sie ihre Heuristiken z.B. „10 goldene Regeln für GUI-Design.",
      "Prinzipien für Heuristiken können aus Normen und Standards stammen.",
      "Die Usability-Experten gehen die gewählten Heuristiken durch und werten diese aus.",
      "Bei der Auswertung werden die Schwachstellen und dessen schwere gewertet und dann priorisiert.",
      
    ],
    materials: ["Vorlagen für Heuristische Evaluationen"],
    time: "mindestens einen Personentag",
    online: false,
  },
  {
    projectphase: "evaluation",
    name: "Usability Test",
    difficulty: "hart",
    software: ["Maze"],
    description:
    "Bei dieser Methode werden fertige Produkte oder Prototypen von realen Anwendern, welche dem späteren Endanwender entsprechen, getestet. Das zu entwickelndes Endprodukt muss hierbei nicht vollständig ausgereift sein.",
    manual: [
      "Wählen sie die geeignete Nutzergruppe und den Teil des Systems aus, welches sie untersuchen möchten.",
      "Erstellen sie einen Ablaufplan, welcher die Einverständniserklärungen für die Teilnehmer, Hinweise für den Moderator und Testaufgaben beinhaltet.",
      "Erheben sie durch Fragebögen die wichtigsten Daten wie z.B. soziodemografische Daten, Vor Erfahrung mit dem System, Messung der Usability/User Experience und führen sie einen Pre-Test durch.",
      "Beim Test begrüßt der Moderator die Nutzer und führt ein Briefing durch, wo die Nutzer Instruktionen zum System erhalten.",
      "Die Nutzer denken während des Tests laut, damit der Moderator die Gedanken dokumentieren und nachvollziehen kann.",
      "Die Daten werden durch Videoaufzeichnungen oder Beobachtungsbögen dokumentiert.",
      "Nach dem Usability-Test werden die gesammelten Daten ausgewertet und die Dokumentation erstellt.",
      
    ],
    materials: ["Vorlagen für Heuristische Evaluationen"],
    time: "5 Personentage",
    online: true,
  },
];

// {
//     projectphase: "",
//     name: "",
//     difficulty: "",
//     description: "",
//     manual: [""],
//     materials: [""],
//     time: "",
//   },
