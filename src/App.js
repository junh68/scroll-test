import React, { Component } from 'react';

class App extends Component {
  render() {

    const numItems  = 200;
    const items = [];
    for (let i=0; i < numItems; i += 1) {
        items.push(<li key={i}>{i}</li>);
    }

    const height = 600;

    const divStyle = {
      position: 'fixed',
      left: 0,
      top: 0,
      width: 300,
      height,
      backgroundColor: '#DDD',
      textAlign: 'left',
      overflow: 'scroll',
      WebkitOverflowScrolling: 'touch',
    };

    const ulStyle = {
      WebkitPaddingStart: 0,
      WebkitMarginBefore: 0,
      WebkitMarginAfter: 0,
    };

    return (
        <div
          onScroll={(e)=>{
            const list = document.getElementById('list');
            const scrollTop = e.target.scrollTop;

            console.log(`${scrollTop + e.target.clientHeight }/${list.clientHeight}`);
            if (scrollTop + e.target.clientHeight === list.clientHeight) {
              e.target.style.webkitOverflowScrolling = 'auto';
            }
          }}
          style={divStyle}>
          <ul style={ulStyle} id='list'>
            {items}
          </ul>
        </div>
    );
  }
}

export default App;
