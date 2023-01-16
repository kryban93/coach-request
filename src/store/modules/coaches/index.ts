import type { Coach, CoachStoreTypes } from "./types";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
	namespaced: true,
	state: (): CoachStoreTypes => ({
		lastFetch: null,
		coaches: [],
	}),
	mutations,
	getters,
	actions,
};
