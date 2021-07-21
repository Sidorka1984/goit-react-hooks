// import { useState, useEffect, useRef } from 'react';
import { Component } from "react";
import styles from "./Clock.module.css";

export default class OldClock extends Component {
  state = {
    time: new Date(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("Это интервал каждые 1000ms " + Date.now());
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Эот метод вызывается перед размонтированием компонента");
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Текущее время: {this.state.time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={this.stop}>
          Остановить
        </button>
      </div>
    );
  }
}
