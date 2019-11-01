import React from 'react';
import Section from './Section';
import SectionItem from './SectionItem';

/**
 * Показывает блок Columns под блоком поиска
 */
const Columns = () => {
  return (
    <div className="columns">
      <Section titleLink={{title: 'Lorem ipsum', href: '#'}}>
        <img src="https://info.weather.yandex.net/26009/2_white.ru.png?domain=by" alt="weather"/>
      </Section>
      <Section titleLink={{title: 'Lorem ipsum', href: '#'}}>
        <SectionItem type='frequented' description="О сталинках">
          <a href="#">Недвижимость</a>
        </SectionItem>
        <SectionItem type='frequented' description="Люстры и светильники">
          <a href="#">Маркет</a>
        </SectionItem>
        <SectionItem type='frequented' description="Привод от 4*4">
          <a href="#">Авто.ру</a>
        </SectionItem>
      </Section>
      <Section titleLink={{title: 'Lorem ipsum', href: '#'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde corrupti optio!
      </Section>
      <Section titleLink={{title: 'Lorem ipsum', href: '#'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde corrupti optio!
      </Section>
      <Section titleLink={{title: 'Lorem ipsum', href: '#'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde corrupti optio!
      </Section>
      <Section titleLink={{title: 'Lorem ipsum', href: '#'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde corrupti optio!
      </Section>
      <Section titleLink={{title: 'Lorem ipsum', href: '#'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde corrupti optio!
      </Section>
    </div>
  );
};

export default Columns;