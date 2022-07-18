# @ohif/extension-dicom-ecg
Extension to view electrocardiograms at https://github.com/OHIF Viewer.
Thanks to the author https://github.com/jap1968 in his project https://github.com/jap1968/dcm-waveform since it is an adaptation of what has been done.
Currently it works:
  -Sop12LeadECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.1', --> YES 
  -GeneralECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.2', --> NO SUPPORT
  -AmbulatoryECGWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.1.3', --> NO SUPPORT
  -HemodynamicWaveformStorage: '1.2.840.10008.5.1.4.1.1.9.2.1', --> NO SUPPORT
