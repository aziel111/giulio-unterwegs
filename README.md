# Giulio Unterwegs

Website für **Giulio Unterwegs**: Koch Giulio (Xhulio Hackaj) besucht Cafés, Bistros und Restaurants in Frankfurt, Aziel Timur filmt.
Statische Seite für GitHub Pages, gleiche Formensprache wie aziel.me (Schwarz, gebürstetes Gold, Inter Display + Golos Text).

## Struktur

```
index.html          Startseite: Hero, Zahlen, Über uns (Giulio + Aziel), Format, Folgen, Für Läden, Partner, Kontakt
impressum.html      Impressum (gelb markierte Stellen vor dem Livegang prüfen!)
datenschutz.html    Datenschutzerklärung
favicon.svg         Icon im Browser-Tab
robots.txt
.nojekyll           sagt GitHub Pages: Dateien 1:1 ausliefern
assets/
  css/style.css     das komplette Design (eine Datei)
  js/main.js        Menü, Scroll-Effekte, YouTube-Player (lädt erst nach Klick)
  fonts/            Inter Display, Golos Text (SIL Open Font License, Lizenzen liegen bei)
  img/              Fotos, Ornament, og.jpg (Vorschaubild für WhatsApp/Instagram-Links)
```

## Online stellen (GitHub Pages)

1. Auf github.com ein neues Repository anlegen, z. B. `giulio-unterwegs` (Public).
2. Alle Dateien aus diesem Ordner hochladen (inkl. `.nojekyll`) – per „Add file → Upload files“ oder per Git.
3. Im Repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `/ (root)`** → Save.
4. Nach 1–2 Minuten ist die Seite unter `https://aziel111.github.io/giulio-unterwegs/` erreichbar.

**Eigene Domain** (z. B. giulio-unterwegs.de): Datei `CNAME` mit dem Domainnamen anlegen, beim Domain-Anbieter die DNS-Einträge für GitHub Pages setzen und in `index.html` die drei Adressen bei `canonical`, `og:url` und `og:image` anpassen.

## Neue Folge eintragen

In `index.html` im Abschnitt `<!-- FOLGEN -->` steht eine Vorlage als Kommentar.
Einen Platzhalter-`<li>` durch die Vorlage ersetzen und ausfüllen:

- `data-video` = YouTube-ID (bei `youtube.com/shorts/ABC123` ist es `ABC123`)
- `data-format="hoch"` für Shorts/Reels (9:16), weglassen für normale Videos
- Vorschaubild hochkant (z. B. 720 × 1280) als `assets/img/folge-01.jpg` ablegen

Das Video wird erst nach dem Klick von YouTube geladen (Datenschutz).

## Schnell anpassen

- **E-Mail**: überall `contact@aziel.me` – mit „Suchen & Ersetzen“ in `index.html`, `impressum.html`, `datenschutz.html` tauschen.
- **Instagram**: `pizzeriagiulio_ffm` und `aziel_timur` – sobald es einen eigenen Kanal für Giulio Unterwegs gibt, hier eintragen.
- **Gründungsphase/kostenlos**: Abschnitt „Für Läden“ in `index.html`, Zeile mit `Gründungsphase`.
- Nach Änderungen an CSS/JS die Versionsnummer `?v=1` erhöhen, damit Browser die neue Datei laden.
