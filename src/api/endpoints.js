export const endpoints = {
  /** Авторизация */
  auth: {
    /** Получение токена по паре 'логин-пароль' */
    token: 'http://opencode.su/campus/uaa/oauth/token',
  },
  /** Финансы */
  finance: {
    /** Договор на обучение*/
    document: 'http://opencode.su/campus/integration/api/finance/document',
    /** Стипендия */
    scholarships: 'http://opencode.su/campus/integration/api/finance/stipend',
  },
  /** Расписание */
  timetable: {
    /** Поиск */
    search: 'http://opencode.su/campus/integration/api/timetable/search',
    /** Получение */
    get: 'http://opencode.su/campus/integration/api/timetable/get',
  },
  /** Анкетные вопросы */
  questionnaire: {
    /** Список новых анкет для пользователя */
    getAll: 'http://opencode.su/campus/questionnaire/api/questionnaire/getAllNewQuestionnaireIdByRespondent',
    /** Получение анкеты */
    get: 'http://opencode.su/campus/questionnaire/api/questionnaire/getViewById',
  },
  /** Пользователь */
  user: {
    /** Редактирование номера телефона */
    editPhoneNumber: 'http://opencode.su/campus/integration/api/users/edit/phoneNumber',
    /** Восстановить пароль */
    resetPassword: 'http://opencode.su/campus/integration/api/users/reset/password',
  },
  /** Корпуса общежития */
  buildings: {
    /** Получение */
    get: 'http://opencode.su/campus/integration/api/building',
  },
  /** Подразделения */
  departments: {
    /** Поиск по названию */
    searchByName: 'http://opencode.su/campus/integration/api/departments/searchByName',
  },
  /** Новости */
  news: {
    /** Новости, события, объявления, слайдер */
    getAll: 'http://opencode.su/campus/integration/api/news/all',
    /** Новости */
    getNews: 'http://opencode.su/campus/integration/api/news',
    /** События */
    getEvents: 'http://opencode.su/campus/integration/api/events',
    /** Объявления */
    getAdvertisements: 'http://opencode.su/campus/integration/api/advertisement',
    /** Слайдеры */
    getSliders: 'http://opencode.su/campus/integration/api/sliders',
  },
  /** Библиотека */
  library: {
    /** ??? */
    card: 'http://opencode.su/campus/integration/api/library/card',
    /** QR */
    qr: 'http://opencode.su/campus/library/card/qr',
    /** ??? */
    books: 'http://opencode.su/campus/library/book/me',
  },
  /** Персоналии */
  personality: {
    /** Поиск по сотрудникам */
    personalityUrl: 'http://opencode.su/campus/integration/api/employee',
  },
  questionnaires: {
    getAllQuestionnaires: 'http://opencode.su/campus/questionnaire/api/questionnaire/getAllQuestionnaireIdByRespondent',
    getQuestionnaire: 'http://opencode.su/campus/questionnaire/api/questionnaire/getViewById',
    saveAnswers: 'http://opencode.su/campus/questionnaire/api/answerVersion/createFull',
  }
};
