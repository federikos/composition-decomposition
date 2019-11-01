import React from 'react';

/**
 * Показывает текущую дату
 */
const DateString = () => {
  return (
    <div>
      {new Date().toLocaleDateString()}
    </div>
  );
};

export default DateString;