"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Coin.css");
var Coin = function (_a) {
    var key = _a.key, name = _a.name, price = _a.price, symbol = _a.symbol, image = _a.image, priceChange = _a.priceChange;
    return (<div className="cryptoCoin">
      <img src={image} alt={"" + name} className="coinLogo"/>
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">${price.toLocaleString()}</p>

      {priceChange < 0 ? (<div className="priceContainerDOWN">
          <i className="fas fa-angle-down fa-2x"></i>
          <p className="priceChange">{priceChange.toFixed(3)}%</p>
        </div>) : (<div className="priceContainerUP">
          <i className="fas fa-angle-up fa-2x"></i>
          <p className="priceChange">{priceChange.toFixed(3)}%</p>
        </div>)}
    </div>);
};
exports["default"] = Coin;
