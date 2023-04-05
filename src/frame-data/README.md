# Using this data with TypeScript

The idea so far is to just perform a run-through on the key-value pair
and render that in the front-end.

The data will be in neat (ish) JSON that may be consumed fairly generically.

## JSON Structure (generally)

```jsonc
  // falcon.json
  {
    "Jab 2": {                      // Move name
      "Total": "20",                // Total frames
      "Hit": "5-7",                 // Hit active frames
      "Window of the knee": "2-25", // More details may be here - up to you how to process...
      "Knee starts": "8",
      "Information": "Information example with single occurance" // Additional info (single occurance)
    },
    "Jab 3 (Knee/gentleman)": {     // Move name
      "Total": "32",                // Total frames
      "Hit": "6-12",                // Hit active frames
      "IASA": "23",                 // More details...
      "Rapid Jabs Start": "13",
      "NOTE": "to get the knee without the",
      "Information0": "jabs, don't interrupt either punch",   // Information with many occurances ( e.g. myJSON[`Information${i}`] )
      "Information1": "animation; instead, hit A after it's", // Info next line/index
      "Information2": "over."                                 // Info next line index...
    }
  // ...
  }
```
 
# Formatting the frame data from online

https://smashboards.com/threads/falco-hitboxes-and-frame-data.300397/#post-12428113

Copy the data from the form and place it into a new empty json file.
Then peform the following regexs on the file

I used VSCode Find and Replace functionality with RegEx option enabled.

Note: this may take some improvisation based on how the fourm's poster styled the text.
Here are some notes I found as I went through some characters:

- Captin Falcon: had to manually remove lots of `[/collapse]` like text and update the text to be similar to fox/marth
- Marth & Fox are basically the golden standard; so maybe try to match it up to those.
- If there is a `:` in the text, you may have to manually fix it at the end.
- Move names are best if they are surrounded (top & bottom) by empty lines.

**Init setup**

Go to https://smashboards.com/threads/stratocasters-hitbox-system-new-download-link.283973/ and pick a character you want to convert to JSON.

Copy the moves to a raw text file

Create a JSON file

Begin below transformations using regex (e.g. on VSCode)

**Regex for converting title of moves**

    VSCODE FIND: (ensure regex enabled)
    \n\n(.+)$\n\n

    VSCODE REPLACE:
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

Before performing this check - you may want to do a quick look through for move names
that should be object starters (`"MoveName": {`) instead of Information. (check beginning & end also)

    ^(?!")(?!\})(?!\{)(?! )(.+)
    
    "Information": "$1",

Then go in and manually set objects with multiple "Informations" to "InformationX" (0 starting++)

**Remove empty lines**

    \n^\n

    \n

**Remove commas on last element of objects**

    "(,)\n\}

    "\n}

**Final clean-up**

Some of the steps may have caused errors; so just eye-ball the JSON according to how the site 
is laid out and perform fixes as needed. I simply just used VSCode (with JSON errors showing up on 
right side of bar and went and fixed each one.)

This method is faster than manually typing a fresh JSON file;

TODO: make a script that gets 90% of the way there.