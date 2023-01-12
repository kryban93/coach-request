import type { Coach, StateTypes } from "./types";

export default {
	coaches(state: StateTypes): Coach[] {
		return state.coaches;
	},
	hasCoaches(state: StateTypes): boolean {
		return state.coaches && state.coaches.length > 0;
	},
};
