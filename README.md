<h1>@ohif/extension-dicom-ecg</h1>
Extension to view electrocardiograms at https://github.com/OHIF Viewer.</br>
Thanks to the author https://github.com/jap1968 in his project https://github.com/jap1968/dcm-waveform since it is an adaptation of what has been done.</br>
Currently it works:</br>
<ul>
  <li><strong>Sop12LeadECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.1', --> YES</strong></li>
  <li><strong>GeneralECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.2', --> NO SUPPORT</strong></li>
  <li><strong>AmbulatoryECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.3', --> NO SUPPORT</strong></li>
  <li><strong>HemodynamicWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.2.1', --> NO SUPPORT</strong></li>
</ul>

<h3>Installation</h3>
<ol>
  <li>Add files on @ohif/extensions</li>
  <li>Import OHIFDicomECGExtension from '@ohif/extension-dicom-ecg'; in @ohif/platform/viewer/src/index.js</li>
  <li>Finally in dependencies add "c3": "^0.7.20"</li>
