import type { Coach } from "./types";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
	namespaced: true,
	state() {
		return {
			coaches: [
				{
					id: "c1",
					firstName: "Max",
					lastName: "Schwax",
					areas: ["fe", "be", "career"],
					description: "Hello World",
					hourlyRate: 30,
				},
				{
					id: "c2",
					firstName: "Julie",
					lastName: "Jones",
					areas: ["fe", "career"],
					description: "Hello Lorem Ipsum dolor sit",
					hourlyRate: 20,
				},
			] as Coach[],
		};
	},
	mutations,
	getters,
	actions,
};
