# Giulio Unterwegs

Website für **Giulio Unterwegs**: Koch Giulio besucht Cafés, Bistros und Restaurants in Frankfurt, Aziel Timur filmt.
Statische Seite für GitHub Pages, gleiche Formensprache wie aziel.me (Schwarz, gebürstetes Gold, Inter Display + Golos Text).

## Struktur

```
index.html          Startseite: Hero, Zahlen, Über uns (Giulio + Aziel), Format, Folgen, Für Läden, Partner, Kontakt
links/index.html    Link-Seite für die Instagram-Bio (giulio-unterwegs.de/links/)
CNAME               eigene Domain für GitHub Pages: giulio-unterwegs.de
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

## Online stellen (GitHub Pages + Domain giulio-unterwegs.de)

1. Im Repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `/ (root)`** → Save.
2. Die Datei `CNAME` (Inhalt: `giulio-unterwegs.de`) liegt schon im Repo. Unter **Settings → Pages → Custom domain** steht die Domain dann automatisch drin.
3. Beim Domain-Anbieter (DNS-Einstellungen von giulio-unterwegs.de) eintragen:

   | Typ | Name / Host | Wert |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA (optional) | @ | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
   | CNAME | www | aziel111.github.io |

   **STRATO** (Domain liegt dort): Kunden-Login → Domains → Domainverwaltung → Zahnrad bei giulio-unterwegs.de → Reiter DNS → A-Record „verwalten“ → „Eigene IP-Adresse“. STRATO erlaubt nur **einen** A-Eintrag – `185.199.108.153` reicht. AAAA genauso mit `2606:50c0:8000::153`. CNAME geht bei STRATO nur für Subdomains: dafür erst die Subdomain `www` anlegen.

   Alte A-Einträge für `@` (z. B. Parkseite des Anbieters) ersetzen. **MX-Einträge für die E-Mail info@giulio-unterwegs.de nicht anfassen.**
4. Nach einigen Minuten bis Stunden zeigt GitHub unter Settings → Pages „DNS check successful“. Dann **„Enforce HTTPS“** anhaken.
5. Empfohlen: Domain im GitHub-Profil unter **Settings → Pages → Verified domains** bestätigen, damit niemand sonst sie für eine eigene Seite nutzen kann.

Die alte Adresse `aziel111.github.io/giulio-unterwegs` leitet danach automatisch auf `giulio-unterwegs.de` weiter.

## Neue Folge eintragen

In `index.html` im Abschnitt `<!-- FOLGEN -->` steht eine Vorlage als Kommentar.
Einen Platzhalter-`<li>` durch die Vorlage ersetzen und ausfüllen:

- `data-video` = YouTube-ID (bei `youtube.com/shorts/ABC123` ist es `ABC123`)
- `data-format="hoch"` für Shorts/Reels (9:16), weglassen für normale Videos
- Vorschaubild hochkant (z. B. 720 × 1280) als `assets/img/folge-01.jpg` ablegen

Das Video wird erst nach dem Klick von YouTube geladen (Datenschutz).

## Schnell anpassen

- **E-Mail**: überall `info@giulio-unterwegs.de` (Startseite, Link-Seite, Impressum, Datenschutz).
- **Instagram**: Hauptkanal ist `giulio_unterwegs` (Folgen-Link, „Per Instagram schreiben“, Kontakt, Fußzeile, Impressum). Daneben im Kontakt: `pizzeriagiulio_ffm` und `aziel.timur` (Aziels Arbeits-Account; `aziel_timur` ist privat und wird hier nicht verlinkt).
- **Gründungsphase/kostenlos**: Abschnitt „Für Läden“ in `index.html`, Zeile mit `Gründungsphase`.
- Nach Änderungen an CSS/JS die Versionsnummer `?v=1` erhöhen, damit Browser die neue Datei laden.

## Link-Seite für Instagram

`links/index.html` ist die Seite für die Bio von @giulio_unterwegs: https://giulio-unterwegs.de/links/
Buttons ändern: In `links/index.html` jeweils einen `<li>…</li>`-Block kopieren und Text/Link anpassen.
