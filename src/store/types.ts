import type { CoachStoreTypes } from "./modules/coaches/types";
import type { RequestsStoreTypes } from "./modules/requests/types";
export interface globalStoreTypes {
	userId: string;
}

export interface GlobalState {
	coaches: CoachStoreTypes;
	requests: RequestsStoreTypes;
	userId: string;
}
