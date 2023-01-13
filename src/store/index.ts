import type { globalStoreTypes } from "./types";
import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index";
import requestsModule from "./modules/requests/index";

const store = createStore({
	modules: {
		coaches: coachesModule,
		requests: requestsModule,
	},
	state() {
		return {
			userId: Date.now().toString(),
		};
	},
	getters: {
		userId(state: globalStoreTypes) {
			return state.userId;
		},
	},
});

export default store;
