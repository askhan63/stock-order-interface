import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDeferredValue } from 'react';
import './App.css';
import StockList from './componenets/StockList ';
const initialStockItems = [
  { id: 1, name: 'Item 1', quantity: 10, status: 'inStock' },
  { id: 2, name: 'Item 2', quantity: 2, status: 'lowStock' },
  { id: 3, name: 'Item 3', quantity: 0, status: 'outOfStock' },
];
//
function App() {
  const [stockItems, setStockItems] = useState(initialStockItems);
  const deferredStockItems = useDeferredValue(stockItems, { timeoutMs: 500 });
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setStockItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          quantity: Math.max(item.quantity - 1, 0),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <LanguageSwitcher />
      <h1>{t('List Item')}</h1>
      <StockList items={deferredStockItems} />
      <Developer/>
    </div>
  );
}
function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button className='btn p' onClick={() => changeLanguage('en')}>English</button>
      <button className='btn n' onClick={() => changeLanguage('ur')}>Urdu</button>
    </div>
  );
}
function Developer() {
  

  return (
    <div className='dev'>
      M Awais Khan
    </div>
  );
}


export default App;
