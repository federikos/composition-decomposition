import React from 'react';
import PropTypes from 'prop-types';

const news = [
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Путин путин путин путин путин', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'На Украине воскрес Степан Бандера', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Граждане не хотят как на Украине: Репортаж из Воронежа', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=l', title: 'Соцопрос: Решение бомбить Воронеж в ответ на зарубежные санкции одобря...', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=p', title: 'Путин путин путин путин путин', category: 'Сейчас в СМИ'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Путин путин путин путин путин', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Путин путин путин путин путин', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=d', title: 'Путин путин путин путин путин', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=d', title: 'Путин путин путин путин путин', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Путин путин путин путин путин', category: 'В Германии'},
  {pic: 'https://via.placeholder.com/22?text=r', title: 'Путин путин путин путин путин', category: 'Рекомендуем'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Путин путин путин путин путин', category: 'Рекомендуем'},
  {pic: 'https://via.placeholder.com/22?text=r', title: 'Путин путин путин путин путин', category: 'Рекомендуем'},
  {pic: 'https://via.placeholder.com/22?text=n', title: 'Путин путин путин путин путин', category: 'Рекомендуем'},
  {pic: 'https://via.placeholder.com/22?text=o', title: 'Путин путин путин путин путин', category: 'Рекомендуем'}
];

/** Отображает блок новостей*/
const NewsList = props => {
  return (
    <div>
      {
        news
          .filter(item => item.category === props.activeTab)
          .map((item, i) => (
              <div key={i}>
                <img src={item.pic} alt={item.title} />
                <a href='#' >{item.title}</a>
              </div>
            )
          )
      }
    </div>
  );
};

NewsList.propTypes = {
  /** Передает строку с активным разделом новостей */
  activeTab: PropTypes.string.isRequired,
};

export default NewsList;