import type { formTypes } from "./../../../components/coaches/coach-form/types";
export default {
	registerCoach(state: any, payload: formTypes) {
		state.coaches.push(payload);
	},
	setCoaches(state: any, payload: any) {
		state.coaches = payload;
	},
	setFetchTimestamp(state: any) {
		state.lastFetch = new Date().getTime();
	},
};
