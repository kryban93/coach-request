export interface ContactFormTypes {
	email: InputElementTypes<string>;
	message: InputElementTypes<string>;
	formIsValid: boolean;
}

export interface InputElementTypes<T> {
	value: T;
	isValid: boolean;
}
