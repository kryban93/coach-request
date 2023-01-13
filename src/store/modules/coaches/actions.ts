import type { formTypes } from "./../../../components/coaches/coach-form/types";
export default {
	async registerCoach(context: any, data: formTypes) {
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
		// const responseData = await response.json();

		if (!response.ok) {
			// TODO: error handling
		}

		context.commit("registerCoach", { id: userId, ...coachData });
	},
	async loadCoaches(context: any) {
		const response = await fetch(
			`https://coach-app-2808d-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`,
		);

		const responseData = await response.json();

		if (!response.ok) {
			// TODO: error handling
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
	},
};
