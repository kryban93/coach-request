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
}
