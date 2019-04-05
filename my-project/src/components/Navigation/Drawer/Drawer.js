import React, {Component} from 'react';
import './Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [1, 2, 3, 4]

class Drawer extends Component {

  renderLinks = (links) => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>LInk {link}</a>
        </li>
      );
    });
  }

  render() {
    const list =this.renderLinks(links);
    const cls = ["drawer"];

    if(!this.props.isOpen) {
      cls.push("drawer-close");
    }

    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>
            {list}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    )
  }

}

export default Drawer;
