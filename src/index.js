import { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid/Grid';

export default class MuuriGrid extends Component {
  static propTypes = {
    node: PropTypes.node.isRequired,
    defaultOptions: PropTypes.object
  }

  constructor (props) {
    super(props);

    this.grid = new Grid(props.node, props.defaultOptions);
    this.getMethod = this.getMethod.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getItemMethod = this.getItemMethod.bind(this);
  }

  getMethod (method, param1, param2, param3, param4) {
    let result;

    switch (method) {
      case 'getElement':
        result = this.grid.getElement();
        break;
      case 'getItems':
        result = this.grid.getItems(param1);
        break;
      case 'refreshItems':
        result = this.grid.refreshItems(param1);
        break;
      case 'refreshSortData':
        result = this.grid.refreshSortData(param1);
        break;
      case 'synchronize':
        result = this.grid.synchronize();
        break;
      case 'layout':
        result = this.grid.layout(param1, param2);
        break;
      case 'add':
        result = this.grid.add(param1, param2);
        break;
      case 'remove':
        result = this.grid.remove(param1, param2);
        break;
      case 'show':
        result = this.grid.show(param1, param2);
        break;
      case 'hide':
        result = this.grid.hide(param1, param2);
        break;
      case 'filter':
        result = this.grid.filter(param1, param2);
        break;
      case 'sort':
        result = this.grid.sort(param1, param2);
        break;
      case 'move':
        result = this.grid.move(param1, param2, param3);
        break;
      case 'send':
        result = this.grid.send(param1, param2, param3, param4);
        break;
      case 'on':
        result = this.grid.on(param1, param2);
        break;
      case 'once':
        result = this.grid.once(param1, param2);
        break;
      case 'off':
        result = this.grid.off(param1, param2);
        break;
      case 'destroy':
        result = this.grid.destroy(param1);
        break;
      default:
        break;
    }

    return result;
  }

  getEvent (event, param1, param2, callback) {
    this.grid.on(event, (param1, param2) => {
      if (callback) {
        callback(param1, param2);
      }

      this.grid.synchronize();
    });
  }

  getItemMethod (method, item) {
    let result;

    switch (method) {
      case 'getGrid':
        result = item.getGrid();
        break;
      case 'getElement':
        result = item.getElement();
        break;
      case 'getWidth':
        result = item.getWidth();
        break;
      case 'getHeight':
        result = item.getHeight();
        break;
      case 'getMargin':
        result = item.getMargin();
        break;
      case 'getPosition':
        result = item.getPosition();
        break;
      case 'isActive':
        result = item.isActive();
        break;
      case 'isVisible':
        result = item.isVisible();
        break;
      case 'isShowing':
        result = item.isShowing();
        break;
      case 'isHiding':
        result = item.isHiding();
        break;
      case 'isPositioning':
        result = item.isPositioning();
        break;
      case 'isDragging':
        result = item.isDragging();
        break;
      case 'isReleasing':
        result = item.isReleasing();
        break;
      case 'isDestroyed':
        result = item.isDestroyed();
        break;
      default:
        break;
    }

    return result;
  }
}
