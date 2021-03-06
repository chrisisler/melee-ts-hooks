# melee-ts-hooks
SPA for exploring SSBM frame data. Built with TS and React hooks.

# Objectives

## General

- [ ] Get just **ONE** character into the system first. This is so we know it can work.
- [ ] Build web scraper for getting data from the wiki sites since it seems there aren't any ready-made CSV/Google sheet files of the frame data available.
OR
- [ ] Input data into a JSON file BY HAND (oh boy).

### Example of data to scrape
    https://www.ssbwiki.com/hitstun
    https://www.ssbwiki.com/Shieldstun

<h1><img src="https://lingtalfi.com/services/pngtext?color=000099&size=28&text=Chris&fbclid=IwAR3qk6w0lJpQYHj4Lav3_550XSrTGZLBvoYJsE7eZx9WBu3rr3cpq9wIo6o" alt="Chris"title="Chris"></h1>

- [x] Setup Typescript React, prettify and github.
- [ ] Rendering a centered box.
- [ ] More cool stuff.

<h1><img src="https://lingtalfi.com/services/pngtext?color=aa5522&size=28&text=Ryan&fbclid=IwAR3qk6w0lJpQYHj4Lav3_550XSrTGZLBvoYJsE7eZx9WBu3rr3cpq9wIo6o" alt="Ryan" title="Ryan"></h1>

- [x] Send link (l0l).
- [ ] Pull CSV of melee frame data (or even worse: go generate yourself).
- [ ] Setup rough HTML for the layout (no css).
- [ ] Discuss how we are going to import the data to our project.
- [ ] Character select screen.

Potential sites for data

* https://liquipedia.net/smash/Fox/Frame_Data
* use this: https://smashboards.com/threads/stratocasters-hitbox-system-new-download-link.283973/

### Formatting the frame data from online

Copy the data from the form and place it into a new empty json file.
Then peform the following regexs on the file


**Regex for converting title of moves**

    \n\n(.+)$\n\n

    \n},\n"$1":\n{\n

**Add quotation marks around key**

    ^([a-zA-Z0-9 \\(\\)]+):(?!")

    "$1":

**Add ":" to keys that are missing the ":"**

    ("[a-zA-Z 0-9-]*") 

    $1: 

**Add quotation marks around value**

    : (.+)
or
    : (?!")(.+)

    : "$1",

**Add information data**

    ^(?!")(?!})(?!{)(?! )(.+)
    
    "Information": "$1",

**Remove commas on last element of objects**

    "(,)\n}

    "\n}

