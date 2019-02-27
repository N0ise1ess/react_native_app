export default {
  authReducer: {
    token: null,
    errorMessage: null,
    authLoading: false,
    sendEmailLoading: false,
    errorText: '',
    isFirstStepResetPassword: true,
    userStatus: 'guest',
  },
  libraryReducer: {},
  newsReducer: {
    newsPage: 1,
    updatePage: 1,
    eventPage: 1,
  },
  financeReducer: {
    payments: [],
    scholarships: [],
  },
  timetableReducer: {
    timeTableLoading: false,
    errorCode: null,
  },
  departmentReducer: {
    departments: [],
  },
  loadingScreen: {
    progress: 0,
    isLoaded: false,
    text: 'Загрузка...',
  },
  personalityReducer: {
    searching: false,
    personalities: []
  }
};
