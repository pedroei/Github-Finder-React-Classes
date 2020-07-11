import React from 'react';

const Alert = ({ alert }) => {
  return (
    // Podia substituir o '&&' por '?' e no fim por ': null'
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
