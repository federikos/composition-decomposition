import React from 'react';
import Tabs from '../../Tabs';
import Date from './Date';

const headerTabs = [
  {id: 1, title: 'Сейчас в СМИ'},
  {id: 2, title: 'В Германии'},
  {id: 3, title: 'Рекомендуем'},
];

const NewsHeader = props => {
  const {activeTab, handleTabChange} = props;
  return (
    <div className="news-header">
      <Tabs tabs={headerTabs} activeTab={activeTab} handleTabChange={handleTabChange} />
      <Date />
    </div>
  );
};

export default NewsHeader;