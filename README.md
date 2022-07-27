<h1>@ohif/extension-dicom-ecg</h1>
Extension to view electrocardiograms at https://github.com/OHIF Viewer.</br>
Thanks to the author https://github.com/jap1968 in his project https://github.com/jap1968/dcm-waveform since it is an adaptation of what has been done.</br>
Tested in OHIF version 4.12.25 onwards</br>
Currently it works:</br>
<ul>
  <li><strong>Sop12LeadECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.1', --> YES</strong></li>
  <li><strong>GeneralECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.2', --> YES</strong></li>
  <li><strong>AmbulatoryECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.3', --> NO SUPPORT</strong></li>
  <li><strong>HemodynamicWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.2.1', --> NO SUPPORT</strong></li>
</ul>

<h3>Installation</h3>
<ol>
  <li>Add files on @ohif/extensions</li>
  <li>Import OHIFDicomECGExtension from '@ohif/extension-dicom-ecg'; in @ohif/platform/viewer/src/index.js</li>
  <li>Finally in dependencies add "c3": "^0.7.20" in package.json OHIF project, and update whit yarn install</li>
</ol>

<h3>Results</h3>
<img src="https://user-images.githubusercontent.com/86238895/179733736-843699c2-9527-4a68-8e3f-bc841bcd1346.png" />
![image](https://user-images.githubusercontent.com/86238895/179733736-843699c2-9527-4a68-8e3f-bc841bcd1346.png)
