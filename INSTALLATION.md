## Installation
- Download the dicom-ecg extension, download OHIF-Viwer (https://github.com/OHIF/Viewers), inside OHIF-Viewer, in /extensions/ copy the dicom-ecg folder
- In the path of the OHIF-Viewer project, (ohif/platform/viewer/src/index.js) import the extension and add it to the file:
```js
  Import OHIFDicomECGExtension from '@ohif/extension-dicom-ecg'
  ...
  const appProps = {
      config,
      defaultExtensions: [
          ...
          OHIFDicomECGExtension, //Add
      ],
 ```
- Add the extension in OHIF-Viewer (platform/package.json) add the extension:
```js
  "dependencies": { 
      ...
      "@ohif/extension-dicom-ecg": "^1.0.2", //Add
  }
```
- Add c3 dependency in OHIF-Viewer (package.json):
```js
  "dependencies": {
      ...
      "c3": "^0.7.20" //Add
  },
```
- Finally update whit yarn install.

