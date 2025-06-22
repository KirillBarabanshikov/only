import { ITimeline } from '../types';

export const ALL_TIMELINES: ITimeline[] = [
  {
    title: 'Технологии',
    start: 1980,
    end: 1986,
    events: [
      {
        title: '1980',
        description:
          'Основана компания ARM — будущий лидер в производстве энергоэффективных процессоров.',
      },
      {
        title: '1981',
        description: 'IBM выпустила первый персональный компьютер IBM PC.',
      },
      {
        title: '1984',
        description: 'Apple представила Macintosh с графическим интерфейсом.',
      },
      {
        title: '1986',
        description: 'Выпущена первая версия Windows — Windows 1.0.',
      },
    ],
  },
  {
    title: 'Кино',
    start: 1987,
    end: 1991,
    events: [
      {
        title: '1987',
        description:
          'Выход культового боевика "Хищник" с Арнольдом Шварценеггером.',
      },
      {
        title: '1988',
        description:
          'Премьера "Кто подставил кролика Роджера?" — прорыв в анимации и кино.',
      },
      {
        title: '1990',
        description:
          'На экраны вышел "Один дома", ставший рождественской классикой.',
      },
      {
        title: '1991',
        description: 'Выход "Терминатора 2" — технический прорыв в CGI.',
      },
    ],
  },
  {
    title: 'Музыка',
    start: 1992,
    end: 1998,
    events: [
      {
        title: '1992',
        description: 'Nirvana выпускает "Nevermind", популяризируя гранж.',
      },
      {
        title: '1994',
        description: 'Умер Курт Кобейн, лидер Nirvana, символ 90-х.',
      },
      {
        title: '1996',
        description: 'Спайс Герлз выпускают хит "Wannabe" — взрыв поп-сцены.',
      },
      {
        title: '1998',
        description:
          'Запуск музыкального плеера Winamp, революция в цифровой музыке.',
      },
    ],
  },
  {
    title: 'Космос',
    start: 1999,
    end: 2005,
    events: [
      {
        title: '1999',
        description:
          'NASA запускает космический аппарат Stardust для сбора частиц кометы.',
      },
      {
        title: '2000',
        description:
          'Международная космическая станция принимает первых долгосрочных обитателей.',
      },
      {
        title: '2003',
        description: 'Китай запускает первого тайконавта в космос.',
      },
      {
        title: '2005',
        description:
          'Спускаемый аппарат "Хюйгенс" достиг Титана, спутника Сатурна.',
      },
    ],
  },
  {
    title: 'Политика',
    start: 2006,
    end: 2012,
    events: [
      {
        title: '2008',
        description:
          'Барак Обама избран первым афроамериканским президентом США.',
      },
      {
        title: '2010',
        description:
          'Начало Арабской весны — волны протестов на Ближнем Востоке.',
      },
      { title: '2011', description: 'Смерть Усамы бин Ладена в Пакистане.' },
      {
        title: '2012',
        description: 'Владимир Путин вновь избран президентом России.',
      },
    ],
  },
  {
    title: 'Игры',
    start: 2013,
    end: 2020,
    events: [
      {
        title: '2013',
        description:
          'Выход PlayStation 4 и Xbox One — новое поколение консолей.',
      },
      {
        title: '2016',
        description: 'Запуск Pokémon Go — начало массового AR-безумия.',
      },
      {
        title: '2017',
        description: 'Nintendo выпускает Switch — гибридную игровую консоль.',
      },
      {
        title: '2020',
        description:
          'Пандемия COVID-19 вызывает рост интереса к онлайн-играм, включая Among Us и Animal Crossing.',
      },
    ],
  },
] as const;
