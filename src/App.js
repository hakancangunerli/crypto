"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
require("./App.css");
var Coin_1 = require("./components/kripto/Coin");
// Special thanks to; https://www.youtube.com/watch?v=GHC7KrmO4oY&list=LL&index=13&t=36s 
function App() {
    var _a = react_1.useState([]), coins = _a[0], setCoins = _a[1];
    var _b = react_1.useState(""), search = _b[0], setSearch = _b[1];
    react_1.useEffect(function () {
        axios_1["default"]
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(function (res) {
            setCoins(res.data);
            console.log("gud job!");
        })["catch"](function (error) { return console.log("fucked up here."); });
    }, []);
    var handleChange = function (e) {
        setSearch(e.target.value);
    };
    var filteredCoins = coins.filter(function (coin) {
        return coin.name.toLowerCase().includes(search.toLowerCase());
    });
    return (<div>
      <div className="header">
        
        <h1 className="brand">kripto</h1>
        
        <form>
          <input className="inputField" type="text" onChange={handleChange} placeholder="Search coins"/>
        </form>
      </div>
      <div className="coinsContainer">
        {filteredCoins.map(function (coin) {
            return (<Coin_1.default key={coin.id} name={coin.name} price={coin.current_price} symbol={coin.symbol} image={coin.image} priceChange={coin.price_change_percentage_24h}/>);
        })}
      </div>
    </div>);
}
exports["default"] = App;
