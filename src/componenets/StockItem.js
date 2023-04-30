import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StockItem = ({ item }) => {
  const { name, quantity, status } = item;
  const { t } = useTranslation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (quantity === 0) {
      setMessage(t('outOfStock'));
    } else if (quantity < 5) {
      setMessage(t('lowStock'));
    } else {
      setMessage('');
    }
  }, [quantity, t]);

  return (
    <div className="stock-item">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Status: {t(status)}</p>
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default StockItem;
