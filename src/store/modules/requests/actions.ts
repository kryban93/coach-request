export default {
	async contactCoach(context: any, payload: any) {
		// TODO: update types
		const newRequest = {
			id: null,
			coachId: payload.coachId,
			userEmail: payload.email,
			message: payload.message,
		};

		const response = await fetch(
			`https://coach-app-2808d-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
			{
				method: "POST",
				body: JSON.stringify({
					userEmail: payload.email,
					message: payload.message,
				}),
			},
		);

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || "failed to send request");
			throw error;
		}

		newRequest.id = responseData.name;
		newRequest.coachId = payload.coachId;

		console.log(newRequest);
		context.commit("addRequest", newRequest);
	},
	async fetchRequests(context: any) {
		const coachId = context.rootGetters.userId;

		const response = await fetch(
			`https://coach-app-2808d-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`,
		);

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || "failed to fetch requests");
			throw error;
		}

		const requests = [];

		for (const key in responseData) {
			const request = {
				id: key,
				coachId: coachId,
				userEmail: responseData[key].userEmail,
				message: responseData[key].message,
			};
			requests.push(request);
		}

		context.commit("setRequests", requests);
	},
};
