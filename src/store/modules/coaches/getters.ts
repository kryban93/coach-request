import type { globalStoreTypes } from "./../../types";
import type { Coach, CoachStoreTypes } from "./types";

export default {
	coaches(state: CoachStoreTypes): Coach[] {
		return state.coaches;
	},
	hasCoaches(state: CoachStoreTypes): boolean {
		return state.coaches && state.coaches.length > 0;
	},
	isCoach(
		_: CoachStoreTypes,
		getters: any,
		_2: globalStoreTypes,
		rootGetters: any,
	) {
		const coaches = getters.coaches;
		const userId = rootGetters.userId;

		return coaches.some((coach: Coach) => coach.id === userId);
	},
};
