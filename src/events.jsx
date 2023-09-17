export const events = [
  {
    id: 6,
    title: " کلوپ تفریحات دریایی آکوواریوس ",
    imageUrl:
      "https://img.2ristpanel.com//1bb31642-291b-4378-9c11-018074f8cf5c.png",
    serviceProvider: "شرکت یک",
    isActive: true,
  },
  {
    id: 7,
    title: " کلوپ تفریحات دریایی فلایبورد ",
    imageUrl:
      "https://img.2ristpanel.com//8afb4ec6-dc3a-44ee-8c53-dc6400f6ee27.png",
    serviceProvider: "شرکت دو",
    isActive: true,
  },
  {
    id: 8,
    title: " کلوپ تفریحات دریایی سیشل ",
    imageUrl:
      "https://img.2ristpanel.com//c1734bcb-3811-419c-b092-31361e366d5e.png",
    serviceProvider: "شرکت سه",
    isActive: false,
  },
];

export const sequence = [
  {
    executeDateTime: "2023-09-16T00:00:00",
    sansList: [
      {
        id: 2,
        title: "سانس یک",
        description: "سانس یک",
        executeDateTime: "2023-09-16T10:00:00",
        fromDateTime: "2023-05-05T10:00:00",
        toDateTime: "2023-05-05T03:00:00",
        eventId: 6,
        event: null,
        sansTickets: null,
      },
      {
        id: 3,
        title: "سانس دو",
        description: "سانس دوم",
        executeDateTime: "2023-09-16T02:00:00",
        fromDateTime: "2023-05-05T04:00:00",
        toDateTime: "2023-05-05T05:00:00",
        eventId: 6,
        event: null,
        sansTickets: null,
      },
    ],
  },
  {
    executeDateTime: "2023-09-17T00:00:00",
    sansList: [
      {
        id: 4,
        title: "سانس یک",
        description: "سانس یک",
        executeDateTime: "2023-09-17T00:00:00",
        fromDateTime: "2023-09-17T00:00:00",
        toDateTime: "2023-05-05T00:00:00",
        eventId: 6,
        event: null,
        sansTickets: null,
      },
      {
        id: 5,
        title: "سانس دو",
        description: "سانس دوم",
        executeDateTime: "2023-09-17T00:00:00",
        fromDateTime: "2023-05-05T00:00:00",
        toDateTime: "2023-05-05T00:00:00",
        eventId: 6,
        event: null,
        sansTickets: null,
      },
    ],
  },
];
export const tickets = [
  {
    id: 4, //sent to server
    name: "سرویس شاتل",
    serviceId: 2,
    serviceTitle: "شاتل",
    servicePrice: 10000,
    commission: 23523300,
    discount: 0,
    capacity: 11,
    reservedTemporary: 4,
  },
  {
    id: 5,
    name: "سرویس بنانا",
    serviceId: 3,
    serviceTitle: "بنانا",
    servicePrice: 0,
    commission: 5656,
    discount: 10,
    capacity: 20,
    reservedTemporary: 0,
  },
];

export const cart = {
  id: 1,
  userFullName: "دیاکو محمودی",
  mobile: "09123456789",
  invoiceId: null,
  email: null,
  residenceLocation: null,
  description: null,
  createdAt: "2023-09-16T14:02:13.8312152",
  basketItems: [
    {
      id: 1,
      eventId: 6,
      eventTitle: "استخر و سونا مبین",
      tickets: [
        {
          id: 1,
          ticketId: 4,
          ticketTitle: "سرویس شاتل",
          sansTitle: "سانس دو",
          sansId: "5",
          count: 4, //sent to server
        },
      ],
    },
  ],
};
