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
  libraryReducer: {
    requestLibrary: '',
    isLoadingRequestLibrary: false,
    requestNumber: '',
  },
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
    timetables: [],
    suggestions: [],
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
    personalities: [],
    personalitiesIsRefreshing: false,
  },
  questionnaires: {
    listQuestionnaires: [],
    questionnaires: {},
    answersId: [],
  },
  scratchBook: {
    dataScratchBook: {},
    isLoading: true,
  },
  wifi: {
    isLoadingWifi: true,
  }
};
