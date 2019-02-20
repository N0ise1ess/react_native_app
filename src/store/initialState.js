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
  newsReducer: {},
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
};
