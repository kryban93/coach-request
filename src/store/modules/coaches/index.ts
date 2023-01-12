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
					areas: ["fe", "be", "carrer"],
					description: "Hello World",
					hourlyRate: 30,
				},
				{
					id: "c2",
					firstName: "Julie",
					lastName: "Jones",
					areas: ["fe", "carrer"],
					description: "Hello Lorem Ipsum dolor sit",
					hourlyRate: 30,
				},
			],
		};
	},
	mutations,
	getters,
	actions,
};
