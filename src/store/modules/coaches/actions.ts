import type { formTypes } from "./../../../components/coaches/coach-form/types";
export default {
	registerCoach(context: any, data: formTypes) {
		const coachData = {
			id: context.rootGetters.userId,
			firstName: data.first,
			lastName: data.last,
			description: data.desc,
			hourlyRate: data.rate,
			areas: data.areas,
		};

		context.commit("registerCoach", coachData);
	},
};
