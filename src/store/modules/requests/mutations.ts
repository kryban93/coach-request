export default {
	addRequest(
		state: any,
		payload: {
			coachId: string;
			email: string;
			message: string;
		},
	) {
		state.requests.push(payload);
	},
	setRequests(state: any, payload: any) {
		state.requests = payload;
	},
};
