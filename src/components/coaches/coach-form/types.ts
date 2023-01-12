export interface formTypes {
	first: string;
	last: string;
	desc: string;
	rate: null | number;
	areas: string[];
}

export interface CoachFormTypes {
	firstName: InputElementTypes<string>;
	lastName: InputElementTypes<string>;
	description: InputElementTypes<string>;
	rate: InputElementTypes<number | null>;
	areas: InputElementTypes<string[]>;
	formIsValid: boolean;
}

export interface InputElementTypes<T> {
	value: T;
	isValid: boolean;
}
