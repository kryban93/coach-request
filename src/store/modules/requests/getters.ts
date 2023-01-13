export default {
	requests(state: any) {
		return state.requests;
	},
	hasRequests(state: any): boolean {
		return state.requests && state.requests.length > 0;
	},
};
