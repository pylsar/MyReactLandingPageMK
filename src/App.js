import React from "react";

import Header from "./components/Header/Header";
import AboutCard from "./components/AboutCard/AboutCard";
import SandwitchTitle from "./components/SandwitchTitle/SandwitchTitle";
import GameCard from "./components/GameCard/GameCard";
import MovieCard from "./components/MovieCard/MovieCard";
import Footer from "./components/Footer/Footer";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SandwitchTitle title="Mortal Combat vs Street Fighter" />
        <section className="about">
          <AboutCard
            title="Mortal Kombat"
            alt="Mortal Kombat"
            img="https://img.gta5-mods.com/q95/images/i-am-alive-protagonist-add-on/48cc87-mortal_kombat_x_7-wallpaper-1920x1080.jpg"
            descr="серия видеоигр в жанре файтинг, созданная Эдом Буном и Джоном Тобиасом. Игры этой серии изначально разрабатывались Midway Games для аркадных автоматов, а впоследствии были перенесены на другие платформы."
          />
          <AboutCard
            title="Street Figter"
            alt="Street Figter"
            img="https://cdn-ext.fanatical.com/production/product/original/c19c5926-58c1-49cd-bc00-bd5471ccd1fe.jpeg?w=1200"
            descr="Street Fighter (яп. ストリートファイター Суторито Фаита) — серия мультиплатформенных видеоигр в жанре файтинга, созданная компанией Capcom. Является одной из прародительниц жанра."
          />
        </section>
        <SandwitchTitle title="В Играх" />
        <section className="game">
          <GameCard
            src="https://upload.wikimedia.org/wikipedia/ru/b/b2/Sub-Zero-MK2011.jpg"
            alt="Mortal Combat"
            text="Оригинальная игра Mortal Kombat была разработана и выпущена компанией Midway для аркадных автоматов в 1992 году, а затем Probe Software и Acclaim Entertainment перенесли её на домашние игровые консоли и персональный компьютер. "
          />
          <GameCard
            src="https://www.eknightmedia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/ban23894_01.jpg"
            alt="Street Fighter"
            text="Первая игра серии, вышедшая на аркадных автоматах в 1987 году, была разработана командой во главе с Такаси Нисиямой и Хироси Мацумото. Революционная игра в жанре файтинга, до неё ничего подобного не было."
          />
        </section>
        <SandwitchTitle title="В Кино" />
        <section className="movie">
          <MovieCard
            year="1995"
            budget="$20 000 000"
            cash="$122 195 920"
            src="https://cdn-prod.mortalkombat.com/features/merch-bg.jpg"
            alt="Mortal Kombat"
          />
          <MovieCard
            year="1995"
            budget="$20 000 000"
            cash="$122 195 920"
            src="https://www.esportstalk.com/wp-content/uploads/2019/07/Street-Fighter-V-Tier-List.jpg"
            alt="Mortal Kombat"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
