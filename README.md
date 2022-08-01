<h1>@ohif/extension-dicom-ecg</h1>
Extension to view electrocardiograms at https://github.com/OHIF Viewer.</br>
Thanks to the author https://github.com/jap1968 in his project https://github.com/jap1968/dcm-waveform since it is an adaptation of what has been done.</br>
Tested in OHIF version 4.12.25 onwards</br>
Currently it works:</br>
<ul>
  <li><strong>Sop12LeadECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.1', --> YES</strong></li>
  <li><strong>GeneralECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.2', --> YES</strong></li>
  <li><strong>AmbulatoryECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.3', --> NO SUPPORT</strong></li>
  <li><strong>HemodynamicWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.2.1', --> YES</strong></li>
</ul>

<a href="https://github.com/ArturRod/dicom-ecg/blob/main/INSTALLATION.md"><strong>Installation Guide</strong></a>

<h3>Results</h3>
<img src="https://user-images.githubusercontent.com/86238895/181750762-2f1b451a-aa0f-4cda-b4e5-a0be9284fb90.png" />
- Video: https://user-images.githubusercontent.com/86238895/181758822-2a971043-1213-43dc-91cc-485038f73953.mp4

<h3>Features</h3>
Generate the graph instead of using the c3 library (since it takes time to load), generate a canvas with the most personalized graph and actions such as scrolling or others.
Calibrate Sop12LeadECGWaveformStorage and GeneralECGWaveformStorage to make it look good.
<a href="https://github.com/OHIF/Viewers/pull/2854"><strong>OHIF VIEWER - ECG</strong></a>

