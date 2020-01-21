import React, { Component } from 'react';
import axios from 'axios';

import './challenge.scss';

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }
  componentDidMount() {
    axios
      .get('http://www.mocky.io/v2/5e2586602f00007f00ce2a7c')
      .then(res => {
        this.setState({ listData: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  recursiveSort(listData, parent_id) {
    let sortedData = [];
    for (const obj of listData) {
      if (obj.parent_id === parent_id) {
        var children = this.recursiveSort(listData, obj.id);

        if (children.length) {
          obj.children = children;
        }
        sortedData.push(obj);
      }
    }
    return sortedData;
  }

  recursiveRender = renderSort => (
    <ul>
      {renderSort &&
        renderSort.map(render => (
          <li>
            {render.label}
            {render && render.children && this.recursiveRender(render.children)}
          </li>
        ))}
    </ul>
  );

  render() {
    const { listData } = this.state;
    let renderSort = this.recursiveSort(listData, 0);

    return (
      <div className="list-wrapper">
        <ul>
          <p>List 1</p>
          {listData && listData.map(list => <li>{list.label}</li>)}
        </ul>
        <ul>
          <p>List 2</p>
          {this.recursiveRender(renderSort)}
        </ul>
      </div>
    );
  }
}
export default Challenge;
