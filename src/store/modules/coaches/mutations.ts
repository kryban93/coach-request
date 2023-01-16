import type { formTypes } from "./../../../components/coaches/coach-form/types";
import type { Coach, CoachStoreTypes } from "./types";
export default {
	registerCoach(state: any, payload: formTypes) {
		state.coaches.push(payload);
	},
	setCoaches(state: CoachStoreTypes, payload: Coach[]) {
		state.coaches = payload;
	},
	setFetchTimestamp(state: CoachStoreTypes) {
		state.lastFetch = new Date().getTime();
	},
};
