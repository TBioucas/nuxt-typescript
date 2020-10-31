import { GetterTree, ActionTree, MutationTree } from 'vuex';

export enum Actions {
  CHANGE_NAME = 'CHANGE_NAME',
}

export const state = () => ({
  things: [] as string[],
  name: 'Me',
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  name: (state) => state.name,
};

export const mutations: MutationTree<RootState> = {
  [Actions.CHANGE_NAME]: (state, newName: string) => (state.name = newName),
};

export const actions: ActionTree<RootState, RootState> = {
  fetchThings({ commit }) {
    commit(Actions.CHANGE_NAME, 'New name');
  },
};
