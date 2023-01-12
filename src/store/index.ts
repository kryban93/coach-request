import type { globalStoreTypes } from "./types";
import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index";

const store = createStore({
	modules: {
		coaches: coachesModule,
	},
	state() {
		return {
			userId: "c3",
		};
	},
	getters: {
		userId(state: globalStoreTypes) {
			return state.userId;
		},
	},
});

export default store;
