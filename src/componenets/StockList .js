import React from 'react';
import StockItem from './StockItem';

const StockList = ({ items }) => {
  return (
    <div className="stock-list">
      {items.map((item) => (
        <StockItem key={item.id} item={item} />
      ))} 
    </div>
  );
};

export default StockList;
