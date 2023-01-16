import type { GlobalState } from "./../../types";
import type { ActionContext } from "vuex";

export interface Coach {
	id: string;
	firstName: string;
	lastName: string;
	areas: string[];
	description: string;
	hourlyRate: number;
}

export interface CoachStoreTypes {
	coaches: Coach[];
	lastFetch: number | null;
}

export type CoachesContext = ActionContext<CoachStoreTypes, GlobalState>;
