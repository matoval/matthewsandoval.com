---
title: Using The web-voice-command npm Package I Just Published 
description: Using the web-voice-command npm package I just published 
date: '2023-06-04'
categories:
  - javascript
  - webdev
  - webspeech
  - voice
published: true
---

npm package: [web-voice-command](https://www.npmjs.com/package/web-voice-command)
The Web Speech API is an exciting glimpse into the future of the web. There are a ton of cool ideas I have for using voice to control the web. I will be build some in the next few weeks using the web-voice-command package that I just published. 

### Goal for this package
My goal is to make it easier to implement the Web Speech API. With this package installed you are able to integrate voice commands and voice-to-text in a few lines of code. *Web Speech only works in Chrome at the moment*

### How to use it
The package has four methods you can call. 

- setOptions: Used to set options.

- results: Returns all voice inputs.

- startStop: Used to start and stop listening.

- wordList: Returns only words you listed.

**setOptions()**
Default options are:
```javascript
  let options = {
    persistentListening: false,
    listenOnLoad: false,
    language: 'en-US',
  }

```
*setting language use BCP 47 Language Codes*

- ar-SA Arabic Saudi Arabia
- cs-CZ Czech Czech Republic
- da-DK Danish Denmark
- de-DE German Germany
- el-GR Modern Greek Greece
- en-AU English Australia
- en-GB English United Kingdom
- en-IE English Ireland
- en-US English United States
- en-ZA English South Africa
- es-ES Spanish Spain
- es-MX Spanish Mexico
- fi-FI Finnish Finland
- fr-CA French Canada
- fr-FR French France
- he-IL Hebrew Israel
- hi-IN Hindi India
- hu-HU Hungarian Hungary
- id-ID Indonesian Indonesia
- it-IT Italian Italy
- ja-JP Japanese Japan
- ko-KR Korean Republic of Korea
- nl-BE Dutch Belgium
- nl-NL Dutch Netherlands
- no-NO Norwegian Norway
- pl-PL Polish Poland
- pt-BR Portuguese Brazil
- pt-PT Portuguese Portugal
- ro-RO Romanian Romania
- ru-RU Russian Russian Federation
- sk-SK Slovak Slovakia
- sv-SE Swedish Sweden
- th-TH Thai Thailand
- tr-TR Turkish Turkey
- zh-CN Chinese China
- zh-HK Chinese Hong Kong
- zh-TW Chinese Taiwan
Use the setOptions function to change options.

```javascript
 webVoiceCommand.setOptions({
  persistentListening: true,
  listenOnLoad: true,
  language: 'ro-RO' //set language to ro-RO Romanian Romania
})
```
**results()**
The results method is used to get all voice inputs and will return multiple arrays with each array separated by pauses in voice inputs. 
```javascript
 webVoiceCommand.results(function(result){
  console.log(result)
})
``` 
With the voice input of "hello world" the results method will return:
```javascript
(2) ["hello", "world"]
```
**startStop()**
The startStop method is used to start and stop listening and is used with a DOM event. In this example we will use two buttons, one for start and another for stop. You can also use the same element as a toggle.
```html
<button value='start' onClick={handleClick}>Start</button>
<button value='stop' onClick={handleClick}>Stop</button>
```
Now we call the startStop method in the handleClick function. The first parameter is the number of DOM elements and the second is the value "start" or "stop".
```javascript
function handleClick(event) {
  webVoiceCommand.startStop(2, event.target.value)
}
```
This will turn listening on/off.

**wordList()**
The wordlist method is used with a list of words you want the user to use. It can be used with or without actionWords. actionWords are used to trigger lists of words to search through. I will show wordList with and without actionWords.

The wordlist method takes three parameters,
- words: Array of objects.
- withActions: A boolean.
- callback: Returns an array of matched words if you are not using actionWords or a single word if you are using actionWords. 

*with actionWords*

```javascript
const words = [
  {
    actionWord: {
      name: 'pick',
      options: [
        {
          word: 'blue',
          alternateWord: []
        }, 
        {
          word: 'red',
          alternateWord: []
        }, 
        {
          word: 'yellow',
          alternateWord: []
      }]
    }
  },
  {
    actionWord: {
      name: 'select',
      options: [
        {
          word: 'home',
          alternateWord: []
        },
        {
          word: 'about',
          alternateWord: []
        },
        {
          word: 'contact',
          alternateWord: []
        }
      ]
    }
  }
]

const withActions = true

webVoiceCommand.wordList(words, withActions, function(result) {
console.log(result)
})
```
With the voice input of "pick blue" the wordList method will return:
```javascript
blue
```
*without actionWords*

```javascript
const words = [
    {
      word: {
      name: 'red',
      alternateWord: []
      }
    },
    { 
      word: {
        name: 'blue',
        alternateWord: []
      }
    },
    {
      word: {
        name: 'yellow',
        alternateWord: []
      }
    }
  ]

const withActions = false

webVoiceCommand.wordList(words, withActions, function(result) {
console.log(result)
})
```
With the voice input of "red blue yellow" the wordList method will return:
```javascript
(3) ["red", "blue", "yellow"]
```
    
### Conclusion
I will be improving this package as feedback comes in and as I work with it more. My next article will be on a game I am building using the web-voice-command package. All game control inputs will be voice inputs. 
