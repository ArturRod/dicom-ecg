import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OHIFComponentPlugin from './OHIFComponentPlugin.js';
import DicomECGViewport from './DicomECGViewport';

class OHIFDicomECGViewport extends Component {
  static propTypes = {
    studies: PropTypes.object,
    displaySet: PropTypes.object,
    viewportIndex: PropTypes.number,
    viewportData: PropTypes.object,
    activeViewportIndex: PropTypes.number,
    setViewportActive: PropTypes.func,
  };

  state = {
    rawEcg: false,
    error: false,
  };

  static id = 'DicomECGViewport';

  static init() {
    console.log('DicomECGViewport init()');
  }

  static destroy() {
    console.log('DicomECGViewport destroy()');
  }

  render() {
    const {
      viewportData,
      setViewportActive,
      viewportIndex,
      activeViewportIndex,
    } = this.props;
    const { error, rawEcg } = this.state;
    const { id, init, destroy } = OHIFDicomECGViewport;
    const pluginProps = { id, init, destroy };

    //Cargo la vista:
    return (
      <OHIFComponentPlugin {...pluginProps}>
        {!error && (
          <DicomECGViewport
            rawEcg={rawEcg}
            viewportData={viewportData}
            setViewportActive={setViewportActive}
            viewportIndex={viewportIndex}
            activeViewportIndex={activeViewportIndex}
          />
        )}
        {error && <h2>{JSON.stringify(error)}</h2>}
      </OHIFComponentPlugin>
    );
  }
}

export default OHIFDicomECGViewport;
