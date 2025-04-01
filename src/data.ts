export const links = [
  {
    href: "/",
    title: "Про мене",
    id: "1",
  },
  {
    href: "/",
    title: "Ми робимо",
    id: "2",
  },
  {
    href: "/",
    title: "До та після",
    id: "3",
  },
  {
    href: "/",
    title: "Відгуки",
    id: "4",
  },
  {
    href: "/",
    title: "Партнери",
    id: "5",
  },
  {
    href: "/",
    title: "Питання",
    id: "6",
  },
]

export const dataServices = [
  {
    title: "Ботулінотерапія",
    href: "/",
    id: "1",
  },
  {
    title: "Контурна пластика губ",
    href: "/",
    id: "2",
  },
  {
    title: "Контурна пластика губ",
    href: "/",
    id: "3",
  },
  {
    title: "Мезотерапія",
    href: "/",
    id: "4",
  },
  {
    title: "Контурна пластика обличчя",
    href: "/",
    id: "5",
  },
]

export const contactsData = [
  {
    id: "1",
    type: "address",
    title: "м.Київ, вул. Джона Маккейна, 26",
    href: "https://www.google.com/maps/search/?api=1&query=Київ,+Хрещатик+1",
  },
  {
    id: "2",
    type: "phone",
    title: "+38(050) 078-82-94",
    href: "tel:+380671234567",
  },
  {
    id: "3",
    type: "instagram",
    title: "Instagram",
    href: "https://www.instagram.com/beautica_kiev/",
  },
]

export const servicesData = [
  {
    id: 1,
    name: "Ботулінотерапія",
    price: 3200,
    imgUrl: "/services/botolin.webp",
    pageUrl: "/botulinoterapia",
    description:
      "Ботулінотерапія дарує видимий омолоджуючий ефект без хірургічного втручання. Ін'єкції краси розгладжують мімічні та кисетні зморшки, знімають гіпертонус м’язів, даруючи шкірі свіжий вигляд.",
    stages: [
      {
        id: 1,
        title: "Консультація з лікарем-косметологом",
        description:
          "Під час консультації лікар оцінює стан шкіри, визначає проблемні зони та обговорює можливі результати процедури. Також обговорюються ризики та протипоказання.",
      },
      {
        id: 2,
        title: "Підготовка до введення ін'єкцій",
        description:
          "Шкіра очищується та дезінфікується, визначаються точки введення препарату, щоб забезпечити оптимальний результат.",
      },
      {
        id: 3,
        title: "Введення ін'єкцій ботулотоксину",
        description:
          "Процедура виконується за допомогою тонких голок, які вводять препарат у визначені точки. Процедура триває 10-20 хвилин і майже безболісна.",
      },
      {
        id: 4,
        title: "Рекомендації після процедури",
        description:
          "Після процедури пацієнту надаються рекомендації щодо догляду за шкірою, щоб забезпечити найкращі результати та уникнути побічних ефектів.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Botox (США)",
        imgUrl: "/drugs/botox.webp",
        description:
          "Botox - це сертифікований препарат, який використовується для розслаблення м'язів обличчя, що допомагає усунути зморшки та попередити їх появу.",
        prices: {
          listingPrice: [
            {
              id: 1,
              title: "Лоб - міжбрів’я",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Лоб - міжбрів’я - очі",
              price: 6900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Міжбрів’я",
              price: 3500,
              newPrice: 2500,
            },
            {
              id: 4,
              title: "Очі",
              price: 2500,
              newPrice: null,
            },
            { id: 5, title: "Кролячі зморшки (носик)", price: 2500, newPrice: 2000 },
            { id: 6, title: "Звуження крил та серединки носика", price: 2000, newPrice: null },
            { id: 7, title: "Ясенна посмішка", price: 2500, newPrice: null },
            { id: 8, title: "Зморшки маріонетки (опущення кутів рота)", price: 2000, newPrice: null },
            { id: 9, title: "Підборіддя", price: 2000, newPrice: null },
            { id: 10, title: "Платизма (шия)", price: 6500, newPrice: null },
            { id: 11, title: "Гіпергідроз (підвищена пітливість)", price: 8300, newPrice: null },
            { id: 12, title: "Все обличчя (full face)", price: 11900, newPrice: null },
          ],
        },
      },
      {
        id: 2,
        title: "Dysport (Франція)",
        imgUrl: "/drugs/disport.webp",
        description:
          "Dysport - це високоякісний препарат, який використовується для корекції мімічних зморшок, забезпечуючи природний вигляд. Ефект триває до 6 місяців.",
        prices: {
          listingPrice: [
            {
              id: 1,
              title: "Лоб - міжбрів’я",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Лоб - міжбрів’я - очі",
              price: 6900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Міжбрів’я",
              price: 3500,
              newPrice: 2500,
            },
            {
              id: 4,
              title: "Очі",
              price: 2500,
              newPrice: null,
            },
            { id: 5, title: "Кролячі зморшки (носик)", price: 2500, newPrice: null },
            { id: 6, title: "Звуження крил та серединки носика", price: 2000, newPrice: null },
            { id: 7, title: "Ясенна посмішка", price: 2500, newPrice: null },
            { id: 8, title: "Зморшки маріонетки (опущення кутів рота)", price: 2000, newPrice: null },
            { id: 9, title: "Підборіддя", price: 2000, newPrice: null },
            { id: 10, title: "Платизма (шия)", price: 6500, newPrice: null },
            { id: 11, title: "Гіпергідроз (підвищена пітливість)", price: 8300, newPrice: null },
            { id: 12, title: "Все обличчя (full face)", price: 11900, newPrice: null },
          ],
        },
      },
      {
        id: 3,
        title: "Xeomin (Німеччина)",
        imgUrl: "/drugs/xenomin.avif",
        description:
          "Ксеомін (Xeomin), створений компанією Merz у Німеччині, виділяється завдяки своєму високому рівню очищення. Цей препарат містить чистий ботулотоксин типу А, що забезпечує низку унікальних переваг. Саме тому Ксеомін стає вибором багатьох зірок кіно та шоу-бізнесу.",
        prices: {
          listingPrice: [
            {
              id: 1,
              title: "Лоб - міжбрів’я",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Лоб - міжбрів’я - очі",
              price: 6900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Міжбрів’я",
              price: 3500,
              newPrice: 2500,
            },
            {
              id: 4,
              title: "Очі",
              price: 2500,
              newPrice: null,
            },
            { id: 5, title: "Кролячі зморшки (носик)", price: 2500, newPrice: null },
            { id: 6, title: "Звуження крил та серединки носика", price: 2000, newPrice: null },
            { id: 7, title: "Ясенна посмішка", price: 2500, newPrice: null },
            { id: 8, title: "Зморшки маріонетки (опущення кутів рота)", price: 2000, newPrice: null },
            { id: 9, title: "Підборіддя", price: 2000, newPrice: null },
            { id: 10, title: "Платизма (шия)", price: 6500, newPrice: null },
            { id: 11, title: "Гіпергідроз (підвищена пітливість)", price: 8300, newPrice: null },
            { id: 12, title: "Все обличчя (full face)", price: 11900, newPrice: null },
          ],
        },
      },
      {
        id: 4,
        title: "Lantox (Китай)",
        imgUrl: "/drugs/lantox.webp",
        description:
          "Lantox - доступний препарат ботулотоксину, який ефективно розгладжує зморшки та зменшує гіперактивність м'язів обличчя.",
        prices: {
          listingPrice: [
            {
              id: 1,
              title: "Лоб - міжбрів’я",
              price: 3000,
              newPrice: null,
            },
            {
              id: 2,
              title: "Лоб - міжбрів’я - очі",
              price: 4300,
              newPrice: null,
            },
            {
              id: 3,
              title: "Міжбрів’я",
              price: 1700,
              newPrice: null,
            },
            {
              id: 4,
              title: "Очі",
              price: 1700,
              newPrice: null,
            },
            { id: 5, title: "Кролячі зморшки (носик)", price: 1500, newPrice: null },
            { id: 6, title: "Звуження крил та серединки носика", price: 1500, newPrice: null },
            { id: 7, title: "Ясенна посмішка", price: 1500, newPrice: null },
            { id: 8, title: "Зморшки маріонетки (опущення кутів рота)", price: 1500, newPrice: null },
            { id: 9, title: "Підборіддя", price: 1500, newPrice: null },
            { id: 10, title: "Платизма (шия)", price: 5000, newPrice: null },
            { id: 11, title: "Гіпергідроз (підвищена пітливість)", price: 5000, newPrice: null },
            { id: 12, title: "Все обличчя (full face)", price: 9000, newPrice: null },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    name: "Контурна пластика губ",
    price: 3200,
    imgUrl: "/services/konturna_leaps.webp",
    pageUrl: "/konturna-plastika-gybu",
    description:
      "Контурна пластика губ забезпечує глибоке зволоження шкіри, покращує її текстуру, повертає пружність та здоровий блиск. Це ідеальне рішення для боротьби з ознаками старіння",
    stages: [
      {
        id: 1,
        title: "Консультація та аналіз стану шкіри",
        description:
          "Лікар визначає потребу у процедурі та обирає відповідний препарат, виходячи зі стану шкіри та побажань клієнта.",
      },
      {
        id: 2,
        title: "Підготовка до процедури",
        description: "Очищення шкіри, дезінфекція та нанесення анестетика для зниження дискомфорту.",
      },
      {
        id: 3,
        title: "Введення препарату гіалуронової кислоти",
        description: "Ін'єкції виконуються тонкою голкою в зони, які потребують зволоження та покращення тонусу.",
      },
      {
        id: 4,
        title: "Завершення та рекомендації",
        description: "Наноситься заспокійливий крем, лікар дає рекомендації по догляду за шкірою після процедури.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Restylane Vital (Швеція)",
        imgUrl: "/drugs/leapg",
        description: "Restylane Vital - препарат гіалуронової кислоти для зволоження та покращення структури шкіри.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4500,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4800,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5000,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Teosyal Redensity (Швейцарія)",
        imgUrl: "/drugs/leapg",
        description: "Teosyal Redensity - препарат для інтенсивного зволоження шкіри та боротьби з ознаками старіння.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5200,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12500,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 3,
        title: "Juvéderm Volite (США)",
        imgUrl: "/drugs/leapg",
        description:
          "Juvéderm Volite - інноваційний препарат для довготривалого зволоження шкіри та покращення її еластичності.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 5000,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 5300,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5500,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 13000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 4,
        title: "Filorga NCTF (Франція)",
        imgUrl: "/drugs/leapg",
        description: "Filorga NCTF - мезококтейль для інтенсивного живлення та регенерації шкіри.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4600,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5100,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12300,
              newPrice: null,
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    name: "Контурна пластика (губи)",
    price: 3200,
    imgUrl: "/services/face-plastic.webp",
    pageUrl: "/konturna-plastika-gybu",
    description:
      "Контурна пластика губ допомагає створити ідеальну форму та об’єм губ, зберігаючи природність. Процедура підкреслює індивідуальну красу без надмірного втручання.",
    stages: [
      {
        id: 1,
        title: "Консультація та вибір форми губ",
        description: "Лікар допомагає обрати форму та об'єм губ, які найкраще підійдуть до рис обличчя.",
      },
      {
        id: 2,
        title: "Підготовка до процедури",
        description: "Дезінфекція та нанесення анестетика для комфортного проведення ін'єкцій.",
      },
      {
        id: 3,
        title: "Введення філера",
        description: "Ін'єкції виконуються з урахуванням обраної форми та бажаного об'єму губ.",
      },
      {
        id: 4,
        title: "Рекомендації після процедури",
        description: "Лікар надає рекомендації по догляду за губами та уникненню можливих ускладнень.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Juvéderm Ultra Smile (США)",
        imgUrl: "/drugs/leapg",
        description: "Juvéderm Ultra Smile - препарат для створення виразних губ із натуральним об'ємом.",
        prices: {
          titlePrice: {
            zone: "Губи",
          },
          listingPrice: [
            {
              id: 1,
              title: "Верхня губа",
              price: 4500,
              newPrice: null,
            },
            {
              id: 2,
              title: "Нижня губа",
              price: 4500,
              newPrice: null,
            },
            {
              id: 3,
              title: "Повний об'єм",
              price: 9000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Teosyal Kiss (Швейцарія)",
        imgUrl: "/drugs/leapg",
        description: "Teosyal Kiss - інноваційний препарат для збільшення об'єму губ із довготривалим ефектом.",
        prices: {
          titlePrice: {
            zone: "Губи",
          },
          listingPrice: [
            {
              id: 1,
              title: "Верхня губа",
              price: 4600,
              newPrice: null,
            },
            {
              id: 2,
              title: "Нижня губа",
              price: 4600,
              newPrice: null,
            },
            {
              id: 3,
              title: "Повний об'єм",
              price: 9200,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 3,
        title: "Restylane Lip Volume (Швеція)",
        imgUrl: "/drugs/leapg",
        description: "Restylane Lip Volume - препарат для створення об'єму та чітких контурів губ.",
        prices: {
          titlePrice: {
            zone: "Губи",
          },
          listingPrice: [
            {
              id: 1,
              title: "Верхня губа",
              price: 4400,
              newPrice: null,
            },
            {
              id: 2,
              title: "Нижня губа",
              price: 4400,
              newPrice: null,
            },
            {
              id: 3,
              title: "Повний об'єм",
              price: 8800,
              newPrice: null,
            },
          ],
        },
      },
    ],
  },
  {
    id: 4,
    name: "Мезотерапія",
    price: 3500,
    imgUrl: "/services/mezoterapia.webp",
    pageUrl: "/mezoterapia",
    description:
      "Мезотерапія відновлює шкіру на клітинному рівні, насичуючи її необхідними вітамінами та мінералами. Це чудовий спосіб покращити тонус та колір шкіри, роблячи її більш здоровою та сяючою.",
    stages: [
      {
        id: 1,
        title: "Консультація",
        description: "Огляд шкіри лікарем, визначення необхідного коктейлю для мезотерапії відповідно до типу шкіри.",
      },
      {
        id: 2,
        title: "Підготовка шкіри",
        description: "Очищення та антисептична обробка, нанесення місцевого анестетика для комфорту пацієнта.",
      },
      {
        id: 3,
        title: "Введення коктейлю",
        description: "Ін'єкційне введення поживного коктейлю у необхідні ділянки шкіри.",
      },
      {
        id: 4,
        title: "Післяпроцедурний догляд",
        description: "Рекомендації по догляду за шкірою та уникненню сонця після процедури.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Filorga (Франція)",
        imgUrl: "/drugs/leapg",
        description:
          "Філорга – поживний коктейль із гіалуроновою кислотою для регенерації шкіри. Ефективний для боротьби зі зморшками та сухістю.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4500,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4800,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5000,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Revitacare (Франція)",
        imgUrl: "/drugs/leapg",
        description:
          "Коктейль Revitacare призначений для відновлення пружності шкіри та зменшення проявів пігментації.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5200,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12500,
              newPrice: null,
            },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    name: "Контурна пластика (обличчя)",
    price: 5500,
    imgUrl: "/services/konturna_leaps.webp",
    pageUrl: "/konturna-plastika-oblicha",
    description:
      "Контурна пластика обличчя дозволяє скоригувати риси обличчя, підкреслюючи їхню гармонію та індивідуальність. Процедура дарує чіткі контури та омолоджений вигляд без скальпеля.",
    stages: [
      {
        id: 1,
        title: "Консультація та аналіз форми обличчя",
        description: "Лікар проводить аналіз пропорцій обличчя та визначає необхідні зони корекції.",
      },
      {
        id: 2,
        title: "Підготовка до процедури",
        description: "Очищення шкіри, дезінфекція, нанесення місцевого анестетика для зниження дискомфорту.",
      },
      {
        id: 3,
        title: "Введення філера",
        description: "Ін'єкції проводяться у необхідні зони для створення чітких контурів та об'єму.",
      },
      {
        id: 4,
        title: "Рекомендації після процедури",
        description: "Поради лікаря щодо догляду за шкірою після процедури для досягнення найкращого результату.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Juvederm Voluma (США)",
        imgUrl: "/drugs/leapg",
        description: "Juvederm Voluma - ідеальний філер для відновлення об'єму та корекції форми обличчя.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Скулова зона",
              price: 6500,
              newPrice: null,
            },
            {
              id: 2,
              title: "Підборіддя",
              price: 5800,
              newPrice: null,
            },
            {
              id: 3,
              title: "Лінія нижньої щелепи",
              price: 7200,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 19000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Restylane Lyft (Швеція)",
        imgUrl: "/drugs/leapg",
        description: "Restylane Lyft - філер для чітких контурів та відновлення об'єму.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Скулова зона",
              price: 6300,
              newPrice: null,
            },
            {
              id: 2,
              title: "Підборіддя",
              price: 5700,
              newPrice: null,
            },
            {
              id: 3,
              title: "Лінія нижньої щелепи",
              price: 7100,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 18500,
              newPrice: null,
            },
          ],
        },
      },
    ],
  },
]

export const beforAfterData = [
  {
    id: 1,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_1.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 2,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_2.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 3,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_3.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 4,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_4.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 5,
    name: "",
    imgUrl: "before-after/gybu-placeholder.webp",
    slug: "",

  },
  {
    id: 6,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_5.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 7,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_6.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 8,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_7.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 9,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_8.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 10,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_9.webp`,
    slug: "konturna-plastika-gybu",
  },
  {
    id: 11,
    name: "",
    imgUrl: "before-after/gybu-placeholder.webp",
    slug: "",
  },
  {
    id: 12,
    name: "Контурна пластика губ",
    imgUrl: `before-after/gybu_11.webp`,
    slug: "konturna-plastika-gybu",
  },
]