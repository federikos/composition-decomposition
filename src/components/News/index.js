import React, {useState} from 'react';
import NewsHeader from './NewsHeader';
import NewsList from './NewsList';
import Rates from './Rates';

/**
 * Показывает блок новостей
 */
const News = () => {
  const [activeTab, setActiveTab ] = useState('Сейчас в СМИ');
  const handleTabChange = (e) => {
    //...
    //setActiveTab(...)
  }

  return (
    <div>
      <NewsHeader activeTab={activeTab} handleTabChange={handleTabChange} />
      <NewsList activeTab={activeTab} />
      <Rates />
    </div>
  );
};

export default News;