import type { formTypes } from "./../../../components/coaches/coach-form/types";
export default {
	registerCoach(state: any, payload: formTypes) {
		state.coaches.push(payload);
	},
};
