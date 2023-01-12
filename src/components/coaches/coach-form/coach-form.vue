<template lang="pug" src="./coach-form.pug"></template>
<style scoped src="./coach-form.css"></style>

<script lang="ts">
import type { CoachFormTypes } from "./types";

export default {
	emits: ["save-data"],
	data(): CoachFormTypes {
		return {
			firstName: {
				value: "",
				isValid: true,
			},
			lastName: {
				value: "",
				isValid: true,
			},
			description: {
				value: "",
				isValid: true,
			},
			rate: {
				value: null,
				isValid: true,
			},
			areas: {
				value: [],
				isValid: true,
			},
			formIsValid: true,
		};
	},
	methods: {
		clearValidation(input: any) {
			// this[input].isValid = true;
		},
		validateForm() {
			this.formIsValid = true;

			if (this.firstName.value === "") {
				this.firstName.isValid = false;
				this.formIsValid = false;
			}
			if (this.lastName.value === "") {
				this.lastName.isValid = false;
				this.formIsValid = false;
			}
			if (this.description.value === "") {
				this.description.isValid = false;
				this.formIsValid = false;
			}
			if (!this.rate.value || this.rate.value < 0) {
				this.rate.isValid = false;
				this.formIsValid = false;
			}
			if (this.areas.value.length === 0) {
				this.areas.isValid = false;
				this.formIsValid = false;
			}
		},
		submitForm() {
			this.validateForm();

			if (!this.formIsValid) {
				return;
			}
			const formData = {
				first: this.firstName.value,
				last: this.lastName.value,
				desc: this.description.value,
				rate: this.rate.value,
				areas: this.areas.value,
			};
			this.$emit("save-data", formData);
		},
	},
};
</script>
