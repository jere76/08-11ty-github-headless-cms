---
title: Testing git as headless cms for 11ty
layout: base.njk
---

### Idée base
1- Créer un compte Github CAMP avec un repo Maison-Germaine-Tillon
	- Setup un gitpages [[Git - GitPages Quick tutorial fr]]
	- Setup custom domain
	- Setup Git to run build when code repo is updated (Github actions) https://maarten.be/blog/20220730/how-to-deploy-your-eleventy-website-to-github-pages-with-github-actions/
	
2- Dev en local avec 11ty <--> repo git du projet

3- Sur l'ordi d'AA:
	- Installer le dossier du site et le synchroniser sur le repo Github
	- Installer Obsidian et le plugin YAOS (Yet Another Obsidian Synchroniser via le terminal)
	- Ouvrir le dossier contenant les .md du site (et uniquement celui-ci) comme nouveau Vault
	>> AA n'aura alors accès qu'aux fichiers .md à modifier, et devra cliquer sur le bouton de synchro pour faire le commit/synchro des sources, qui devra ensuite être automatiquement buildé par github actions