import Vue from 'vue';
import getStoreKey from '@/utils/getStoreKey';
import httpApi from '@/utils/httpApi';

export default {
  state: {
    feeMap: {},
  },
  getters: {
    getFee: state => ({ fromChainId, fromTokenHash, toTokenHash, toChainId }) =>
      state.feeMap[getStoreKey({ fromChainId, fromTokenHash, toTokenHash, toChainId })],
  },
  mutations: {
    setFee(state, { params, value }) {
      Vue.set(state.feeMap, getStoreKey(params), value);
    },
  },
  actions: {
    async getFee({ commit }, { fromChainId, fromTokenHash, toTokenHash, toChainId }) {
      const fee = await httpApi.getFee({ fromChainId, fromTokenHash, toTokenHash, toChainId });
      commit('setFee', {
        params: { fromChainId, fromTokenHash, toTokenHash, toChainId },
        value: fee,
      });
    },
  },
};
