import type { Coach, Store } from "./types";

export default {
	coaches(state: Store): Coach[] {
		return state.coaches;
	},
	hasCoaches(state: Store): boolean {
		return state.coaches && state.coaches.length > 0;
	},
};
