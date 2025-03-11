import React, { createContext, useEffect, useState } from 'react'
import api from '../../utils/api'

const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  // ! STATE'LER
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

  // API'den coinleri alan fonksiyon
  const fetchAllCoin = () => {
    api
      .get("/coins/markets", { params: { vs_currency: currency.name } })
      .then((response) => setAllCoin(response.data))
      .catch((error) => {
        alert("Coin verilerini alırken bir hata oluştu: " + error.message);
      });
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = { currency, allCoin, setCurrency };

  return (
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export { CoinContextProvider, CoinContext };
