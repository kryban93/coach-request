import type { CoachesContext } from "./types";
import type { formTypes } from "./../../../components/coaches/coach-form/types";
export default {
	async registerCoach(context: CoachesContext, data: formTypes) {
		const userId = context.rootGetters.userId;
		const coachData = {
			firstName: data.first,
			lastName: data.last,
			description: data.desc,
			hourlyRate: data.rate,
			areas: data.areas,
		};

		const response = await fetch(
			`https://coach-app-2808d-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
			{
				method: "PUT",
				body: JSON.stringify(coachData),
			},
		);
		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || "failed to register coach");
			throw error;
		}

		context.commit("registerCoach", { id: userId, ...coachData });
	},
	async loadCoaches(
		context: CoachesContext,
		payload: { forceRefresh: boolean },
	) {
		if (!payload.forceRefresh && !context.getters.shouldUpdate) {
			return;
		}

		const response = await fetch(
			`https://coach-app-2808d-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`,
		);

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || "failed to fetch");
			throw error;
		}

		const coaches = [];

		for (const key in responseData) {
			const coach = {
				id: key,
				firstName: responseData[key].firstName,
				lastName: responseData[key].lastName,
				description: responseData[key].description,
				hourlyRate: responseData[key].hourlyRate,
				areas: responseData[key].areas,
			};
			coaches.push(coach);
		}

		context.commit("setCoaches", coaches);
		context.commit("setFetchTimestamp");
	},
};
