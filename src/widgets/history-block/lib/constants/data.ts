import Mercury from '@shared/assets/mercury.svg?react';
import Venus from '@shared/assets/venus.svg?react';
import Earth from '@shared/assets/earth.svg?react';
import Mars from '@shared/assets/mars.svg?react';
import Jupiter from '@shared/assets/jupiter.svg';
import Saturn from '@shared/assets/saturn.svg?react';
import Uranus from '@shared/assets/uranus.svg?react';
import Neptune from '@shared/assets/neptune.svg?react';

export const DATA = [
  {
    id: 1,
    title: 'Меркурий',
    icon: Mercury,
    events: [
      {
        year: '1631',
        description: 'Пьер Гассенди впервые зафиксировал прохождение Меркурия по диску Солнца.',
      },
      { year: '1974', description: 'Mariner 10 передал первые детальные снимки поверхности.' },
    ],
  },
  {
    id: 2,
    title: 'Венера',
    icon: Venus,
    events: [
      { year: '1761', description: 'Ломоносов открыл атмосферу планеты.' },
      { year: '1970', description: 'Первая мягкая посадка на поверхность («Венера-7»).' },
      { year: '1990', description: 'Начало глобального картирования аппаратом Magellan.' },
      { year: '2006', description: 'Запуск Venus Express для изучения парникового эффекта.' },
    ],
  },
  {
    id: 3,
    title: 'Земля',
    icon: Earth,
    events: [
      { year: '1961', description: 'Первый полет человека в космос (Юрий Гагарин).' },
      {
        year: '1968',
        description: 'Снимок «Восход Земли», изменивший мировое восприятие экологии.',
      },
      { year: '1990', description: 'Снимок Pale Blue Dot с расстояния 6 миллиардов км.' },
    ],
  },
  {
    id: 4,
    title: 'Марс',
    icon: Mars,
    events: [
      { year: '1877', description: 'Открытие спутников Фобос и Деймос.' },
      {
        year: '1971',
        description: '«Марс-3» — первая (хоть и краткая) передача данных с поверхности.',
      },
      { year: '1997', description: 'Sojourner — первый успешный марсоход на планете.' },
      { year: '2012', description: 'Посадка Curiosity в кратере Гейл.' },
      { year: '2021', description: 'Первый полет вертолета Ingenuity в разреженной атмосфере.' },
    ],
  },
  {
    id: 5,
    title: 'Юпитер',
    icon: Jupiter,
    events: [
      { year: '1610', description: 'Галилей открыл 4 крупнейших спутника.' },
      { year: '1979', description: 'Voyager 1 обнаружил слабые кольца вокруг гиганта.' },
      { year: '1995', description: 'Зонд Galileo вошел в атмосферу Юпитера.' },
    ],
  },
  {
    id: 6,
    title: 'Сатурн',
    icon: Saturn,
    events: [
      { year: '1655', description: 'Открытие Титана и разгадка природы колец.' },
      { year: '1981', description: 'Voyager 2 сделал снимки сложной структуры колец.' },
      { year: '2004', description: 'Cassini начал многолетнюю миссию в системе Сатурна.' },
      { year: '2017', description: 'Финал миссии: погружение Cassini в атмосферу планеты.' },
    ],
  },
  {
    id: 6,
    title: 'Уран',
    icon: Uranus,
    events: [
      { year: '1781', description: 'Вильям Гершель случайно открыл планету, приняв её за комету.' },
      { year: '1986', description: 'Единственный визит земного аппарата (Voyager 2).' },
    ],
  },
  {
    id: 6,
    title: 'Нептун',
    icon: Neptune,
    events: [
      { year: '1846', description: 'Открытие «на кончике пера» (математический расчет).' },
      { year: '1989', description: 'Обнаружение Большого темного пятна.' },
      {
        year: '2011',
        description: 'Завершение первого полного оборота вокруг Солнца с момента открытия.',
      },
    ],
  },
];
