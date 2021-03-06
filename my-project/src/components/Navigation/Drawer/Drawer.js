import React, {Component} from 'react';
import './Drawer.css';
import {NavLink} from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
/*
const links = [
  { to: "/", label: "Список", exact: true },
  { to: "/auth", label: "Авторизация", exact: false },
  { to: "/quiz-creator", label: "Создать тест", exact: false }
];*/

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose();
  }

  renderLinks = (links) => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const links = [
      { to: "/", label: "Список", exact: true }
    ];

    if(this.props.isAuthenticated) {
      links.push({ to: "/quiz-creator", label: "Создать тест", exact: false });
      links.push({ to: "/logout", label: "Выйти", exact: false });
    } else {
      links.push({ to: "/auth", label: "Авторизация", exact: false });
    }

    const list = this.renderLinks(links);
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
