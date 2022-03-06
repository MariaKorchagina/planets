import React, { Component } from 'react';
import venus from './pics/venus.jpg'
import mars from './pics/mars.jpg'
import mercury from './pics/mercury.jpg'
import earth from './pics/earth.jpg'
import jupiter from './pics/jupiter.jpg'
import saturn from './pics/saturn.jpg'
import uranus from './pics/uranus.jpg'
import neptune from './pics/neptune.jpg'

import './App.css';
class App extends Component {
  render() {
    return (
      <body>
        <h1>Планеты земной группы Марс и Венера</h1>
        <article class="article">
          <p> Планета Марс и Венера два небесных тела, наиболее похожие на Землю. Обе видны невооруженным глазом, и
            представляют собой два самых ярких объекта в ночном небе.</p>
          <p>Венера вращается на среднем расстоянии всего 108 млн. км от Солнца, а Марс 228 млн. км. Венера, подходит к Земле
            на 38 млн. км, и Марс только на 55,7 млн. км.</p>
          <p>С точки зрения размера, Венера почти близнец планеты Земля. Ее диаметр составляет 12104 км, что равно 95%
            диаметра Земли. Он гораздо меньше, его диаметр всего 6792 км. И опять же, с точки зрения массы, Венера почти
            близнец нашей планеты. Она имеет 81% от массы Земли, а красная планета только 10% от массы Земли.</p>

          <section class="allAboutPlanets">
            <div class="planet">
              <h3 class="nameDiffPlanets">Венера</h3>
              <img src={venus} className="diffPlanets" alt="Венера" />
              <p>Масса: 4.87×10²⁴ кг</p>
              <p>Средняя температура: 463 °C</p>
              <p>Спутники отсутствуют</p>
            </div>
            <div class="planet">
              <h3 class="nameDiffPlanets">Марс</h3>
              <img src={mars} className="diffPlanets" alt="Марс" />
              <p>Масса: 6.42×10²³ кг</p>
              <p>Средняя температура: -63,1 °C</p>
              <p>Спутники: Фобос, Деймос</p>
            </div>
          </section>

          <p>Климат у планет очень разный, и очень отличается от Земли. Температура на поверхности второй планеты от Солнца
            составляет в среднем 461 °C на всей поверхности. Это достаточно для того, чтобы расплавить свинец. В то время как
            средняя температура на Марсе -46 °C. Эта разница температур получается из-за того, что Венера ближе к Солнцу и
            имеет плотную атмосферу из двуокиси углерода. Атмосфера ее почти в 100 раз толще, чем атмосфера Земли, в то время
            как атмосфера на Марсе составляет 1% от нашей.</p>
          <p>Марс является наиболее изученной планетой в Солнечной системе. Были отправлены десятки миссий, включая
            орбитальные аппараты и марсоходы. Хотя многие миссии были провалены, было несколько успешных, в том числе
            работающих до сих пор. К Венере тоже было запущено много миссий, однако из-за агрессивных условий, мы смогли
            получить всего лишь несколько фотографий с поверхности.
            У Марса есть два спутника, Фобос и Деймос, а у Венеры спутников нет, как и нет колец у обоих планет.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HGel7goZl-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </article>

        <div class="other-planets">
          <h1>Другие планеты Солнечной системы и их краткие характеристики</h1>
          <div class="container">
            <div class="column-container">
              <div class="column-4 card-1">
                <p class="name-planet">Меркурий</p>
                <img src={mercury} className="planets-pics" alt="Меркурий" />
                <p>Масса: 3.33×10²³ кг</p>
                <p>Средняя температура: 67 °C</p>
              </div>
              <div class="column-4 card-2">
                <p class="name-planet">Земля</p>
                <img src={earth} className="planets-pics" alt="Земля" />
                <p>Масса: 5.97×10²⁴ кг</p>
                <p>Средняя температура: 14 °C</p>
              </div>
              <div class="column-4 card-3">
                <p class="name-planet">Юпитер</p>
                <img src={jupiter} className="planets-pics" alt="Юпитер" />

                <p>Масса: 1.9×10²⁷ кг</p>
                <p>Средняя температура: -108 °C</p>
              </div>
              <div class="column-4 card-4">
                <p class="name-planet">Сатурн</p>

                <img src={saturn} className="planets-pics" alt="Сатурн" />
                <p>Масса: 5.68×10²⁶ кг</p>
                <p>Средняя температура: -139 °C</p>
              </div>
              <div class="column-4 card-5">
                <p class="name-planet">Уран</p>

                <img src={uranus} className="planets-pics" alt="Уран" />
                <p>Масса: 8.68×10²⁵ кг</p>
                <p>Средняя температура: -197 °C</p>
              </div>
              <div class="column-4 card-6">
                <p class="name-planet">Нептун</p>
                <img src={neptune} className="planets-pics" alt="Нептун" />
                <p>Масса: 1.02×10²⁶ кг</p>
                <p>Средняя температура: -201 °C</p>
              </div>
            </div>
          </div>
        </div>
      </body>

    );
  }
}

export default App;