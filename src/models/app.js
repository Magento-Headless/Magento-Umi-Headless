const model = {
  namespace: 'app',
  state: {
    countries: [],
    currency: null,
    loading: false,
    storeConfig: null,
  },
  reducers: {
    saveStoreConfig(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default model;
