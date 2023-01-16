import type { GlobalState } from "./../../types";
import type { ActionContext } from "vuex";

export interface Request {
	coachId: string;
	userEmail: string;
	message: string;
}

export interface RequestsStoreTypes {
	requests: Request[];
}

export type RequestsContext = ActionContext<RequestsStoreTypes, GlobalState>;
