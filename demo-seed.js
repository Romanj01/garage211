export const DEMO_KIND='detailing';
export function seed(){return {
  "settings": {
    "name": "ГАРАЖ 211",
    "tagline": "Ремонт и детейлинг в Ногинске. Согласуем работы и подберём время визита.",
    "address": "Московская область, Богородский городской округ, Ногинск",
    "phone": "+7 (903) 780-74-47",
    "open": "09:00",
    "close": "18:00",
    "step": 30,
    "defaultDuration": 120,
    "capacity": 1,
    "days": [
      1,
      2,
      3,
      4,
      5,
      6,
      0
    ],
    "heroImage": "/car-studio.png",
    "heroLeftText": "ГАРАЖ 211 · НОГИНСК",
    "heroLeftVisible": true,
    "heroRightText": "ИЛЛЮСТРАЦИЯ",
    "heroRightVisible": true,
    "portfolioLabelText": "ДЕМО-ПРИМЕР",
    "portfolioLabelVisible": true
  },
  "services": [
    {
      "id": "diagnostics",
      "name": "Диагностика автомобиля",
      "description": "Обсудим симптомы и согласуем перечень проверок до начала работ.",
      "price": 0,
      "duration": 60
    },
    {
      "id": "maintenance",
      "name": "Техническое обслуживание",
      "description": "Замена масла, фильтров и регламентные работы по согласованию.",
      "price": 0,
      "duration": 90
    },
    {
      "id": "brakes",
      "name": "Тормоза и ходовая",
      "description": "Осмотр, поиск неисправностей и согласование необходимого ремонта.",
      "price": 0,
      "duration": 120
    },
    {
      "id": "wash",
      "name": "Детейлинг-мойка",
      "description": "Уход за кузовом, колёсами и внешними деталями автомобиля.",
      "price": 0,
      "duration": 90
    },
    {
      "id": "polish",
      "name": "Полировка кузова",
      "description": "Подбор обработки с учётом состояния лакокрасочного покрытия.",
      "price": 0,
      "duration": 240
    },
    {
      "id": "ceramic",
      "name": "Защитные покрытия",
      "description": "Подбор защиты кузова после осмотра и подготовки поверхности.",
      "price": 0,
      "duration": 360
    },
    {
      "id": "interior",
      "name": "Химчистка салона",
      "description": "Очистка обивки, пластика и труднодоступных участков салона.",
      "price": 0,
      "duration": 180
    }
  ],
  "portfolio": [
    {
      "id": "p4",
      "title": "Понять причину",
      "category": "Диагностика автомобиля",
      "car": "Иллюстрация диагностики в мастерской",
      "image": "/work-diagnostics.png",
      "demo": true
    },
    {
      "id": "p1",
      "title": "Глубина цвета",
      "category": "Полировка и защитное покрытие",
      "car": "Иллюстрация результата ухода за кузовом",
      "image": "/car-studio.png",
      "demo": true
    },
    {
      "id": "p2",
      "title": "Точность в каждой детали",
      "category": "Полировка кузова",
      "car": "Иллюстрация процесса работы",
      "image": "/work-polish.png",
      "demo": true
    },
    {
      "id": "p3",
      "title": "Чистота изнутри",
      "category": "Химчистка салона",
      "car": "Иллюстрация ухода за интерьером",
      "image": "/work-interior.png",
      "demo": true
    }
  ],
  "reviews": [],
  "promos": [],
  "customers": [],
  "bookings": []
};}
