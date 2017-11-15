import React from 'react';
import Highlight from '../src/index';
// const ReactDOM = require('react-dom');
// const Highlight = require('../src/index');

class Docs extends React.Component {
  render() {
    return (
      <div>
        <Highlight>Some text</Highlight>
        <Highlight>{'<p>Some text</p>'}</Highlight>
        <Highlight className='js'>{'var a, b, c;\n c = a + b;'}</Highlight>
      </div>
    );
  }
}

export default Docs;