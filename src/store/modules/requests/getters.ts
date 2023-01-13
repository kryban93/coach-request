export default {
	requests(state: any, _: any, _2: any, _3: any) {
		// const coachId = rootGetters.userId;
		//return state.requests.filter((req: any) => req.userId === coachId); return only messages for user
		return state.requests;
	},
	hasRequests(_: any, getters: any): boolean {
		return getters.requests && getters.requests.length > 0;
	},
};
