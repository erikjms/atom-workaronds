### 0.31-0.35 Improved font change logic and changed font selection
* Use ASYNC APIs and more clever font logic that avoids lockups
* Made the font selection a little more focused
* Updated Readme and Changelog !!
### 0.30 Removed font width hack (let's see how it goes)
* Removed width hack due to issues on Atom 1.3 Beta
### 0.29 Tiny tweak
* Tweaked the delay to address rare problems
### 0.28 Removed proxy and tidied up
* Atom 1.0.13+ does not need workarounds for APM stability any more (removed)
* Correct minor issues with the docs
### 0.25-0.27 A couple of tweaks
* Renamed roboto fonts due to conflict with some themes
* Rectified some ill fated experiments
### 0.24 - A couple of tweaks
* Made the code a bit more robust
### 0.23 - Broke it !!
* Fix to broken plugin
### 0.22 - Built in proxy, more Roboto and fixes
* Added a proxy server to work around https://github.com/atom/atom/issues/7191  
  Basically drop a `.apmrc` in your ATOM_HOME with `proxy = http://localhost:33133`
* Added the thinner variants of the Roboto font
* Fixed a bug in the font naming

### 0.20-0.21 - Font replacement and tweaks
* Hack replaces dejavu as it is fundamentally the same but better
* Tweaked the readme

### 0.19 - Font changes
* Removed Code New Romman due to alignment issues (I hope fixed in next version)
* Removed Fira as I don;t really use it at all :-)
* Added Cutive and Roboto as they look nice

### 0.18 - Backed out TLS fixes as they do not appear to help that much
* Removed some code

### 0.17 - Further fix for Windows package lookup lockups
* Added a couple of extra flags

### 0.16 - Fix for Windows package lookup lockups
* Will be removed when fix makes it into Atom mainline

### 0.15 - Updated the description and required version
* Updated the package metadata to something more realistic

### 0.14 - Limiting myself to 10 favorite fonts
* A minor code tweak
* Added Code New Roman and removed Monofur and Anonymous Pro

### 0.11-0.13 - More tidy ups
* Minor tidy ups and tweaks

### 0.8-0.11 - More enhancements and tidy ups
* Tweaked font hack
* Fixed/updated the crappy readme
* Added Camingo Code (my new fave), as a font

### 0.7.0 - Atom 1.0 changes, enhancements and tidy ups
* Fixed to work on Atom 1.0
* General tidy up (Markdown, JS)
* Changed font width hack to deal reliably with more scenarios

### 0.6.0 - Minor fix and readme update
* The super-hacky font alignment tweak was unreliable at 25ms, now 100ms

### 0.5.0 - Tidy up and adjustments
* Tidied up the JavaScript to be JS Lint compliant

### 0.4.0 - More tidy ups and fonts (JS fix no longer required)
* Automatic Atom config backup
* Plugin now in pure JavaScript
* Font install workaround (fonts always work)
* 8 fonts avalable : 'anonymous', 'dejavu', 'inconsolata', 'liberation', 'monofur', 'pt',
  'srcpro light', 'srcpro', 'ubuntu'

### 0.3.0 - First proper release
* Tidied up plugin

### 0.2.0 - First Release
* Workaround for spotty Javascript issue
* DejaVuSans and LiberationMono fonts bundled
