import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Coin from "./components/kripto/Coin";
// Special thanks to; https://www.youtube.com/watch?v=GHC7KrmO4oY&list=LL&index=13&t=36s 
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        
        
        console.log("gud job!");
      })
      .catch((error) => console.log("fucked up here."));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="header">
        
        <h1 className="brand">kripto</h1>
        
        <form>
          <input
            className="inputField"
            type="text"
            onChange={handleChange}
            placeholder="Search coins"
          />
        </form>
      </div>
      <div className="coinsContainer">
        {filteredCoins.map((coin) => {
          return (
            <Coin
               key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
