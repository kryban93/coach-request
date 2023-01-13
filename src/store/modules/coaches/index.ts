import type { Coach } from "./types";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
	namespaced: true,
	state() {
		return {
			lastFetch: null,
			coaches: [
				{
					id: "c1",
					firstName: "Max",
					lastName: "Schwax",
					areas: ["frontend", "backend", "career"],
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					hourlyRate: 30,
				},
				{
					id: "c2",
					firstName: "Julie",
					lastName: "Jones",
					areas: ["frontend", "career"],
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					hourlyRate: 20,
				},
			] as Coach[],
		};
	},
	mutations,
	getters,
	actions,
};
