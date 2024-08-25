import React from 'react';

const Panel = () => {
  return (
    <div className="pannel">
      <div className="panel-all">
        <i className="fa-solid fa-bars"></i> All
      </div>
      <div className="pannel-opt">
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
      <div className="pannel-deals">Shop deals in Electronics</div>
    </div>
  );
};

export default Panel;
