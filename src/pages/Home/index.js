import React, { Component } from "react";
import "./index.scss";
import TradingViewChart from "../../components/TradingViewChart";

function getLocalLanguage() {
  return navigator.language.split('-')[0] || 'en'
}
export default class Home extends Component {
  constructor() {
    super();
    this.cOptions = {
      locale: getLocalLanguage(),
      debug: false,
      fullscreen: false,
      symbol: 'BNBUSDT',
      interval: '60',
      theme: 'dark',
      allow_symbol_change: true,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      autosize: true,
    }
  }

  render() {
    return (
      <div className="container">
        <div className="trading-chart">
          <TradingViewChart chartProperties={this.cOptions} />
        </div>
      </div>
    );
  }
}
