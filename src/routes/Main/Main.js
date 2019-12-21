import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'src/components/AppBar';
import NavigateButton from '../../components/NavigateButton';

function Main() {
  return (
    <>
      <AppBar title="Главная" />
      <section>
        <nav>
          <div style={{display:"flex",flexWrap:"wrap"}}>
              <NavigateButton to="/prometium" title="Красновский" text="Recharts" primaryColor="#512da8" />
              <NavigateButton to="/alword" title="Слепушко" text="react-color" primaryColor="#2196F3" />
              <NavigateButton to="/Lulusuzaku" title="Очеретная" text="⭐" primaryColor="#E91E63" />
              <NavigateButton to="/Justalgit" title="Ларин" text="🕵️‍♂️" primaryColor="#9C27B0" />
              <NavigateButton to="/Narcologer" title="Вельтищев" text="💂‍♂️" primaryColor="#F44336" />
              <NavigateButton to="/GlebSuvakin" title="Сувакин" text="🤔" primaryColor="#00796B" />
              <NavigateButton to="/Vezlim" title="Цепковский" text="👀" primaryColor="#4CAF50" />
              <NavigateButton to="/LegendCreoMod" title="Иваненко" text="😃" primaryColor="#795548" />
              <NavigateButton to="/StasPotapov" title="Потапов" text="😊" primaryColor="#CDDC39" />
          </div>
        </nav>
      </section>
    </>
  );
}

export default Main;
