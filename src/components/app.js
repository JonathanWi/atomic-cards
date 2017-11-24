import React, { Component } from 'react';
import ReactGoogleSheetConnector from "react-google-sheet-connector"
import Content from './content';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ReactGoogleSheetConnector 
            apiKey='AIzaSyC-TuIFSYuF1LqDQpxm_olaCfl4qJLd-Q4'
            spreadsheetId='1usDQD5lyawfnsOwxa4pAc568C3aIQRBsR2_XKSUMuQ4'
            spinner={ <div className="loading-spinner"/> } >
            <Content />
        </ReactGoogleSheetConnector>
      </div>
    );
  }
}
