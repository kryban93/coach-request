<template lang="pug" src="./contact-coach.pug"></template>
<style scoped src="./contact-coach.css"></style>

<script lang="ts">
import type { ContactFormTypes } from "./types";

export default {
	data(): ContactFormTypes {
		return {
			email: {
				value: "",
				isValid: true,
			},
			message: {
				value: "",
				isValid: true,
			},
			formIsValid: true,
		};
	},
	methods: {
		validateForm() {
			if (this.email.value === "" || !this.email.value.includes("@")) {
				this.email.isValid = false;
				this.formIsValid = false;
			}
			if (this.message.value === "") {
				this.message.isValid = false;
				this.formIsValid = false;
			}
		},
		submitForm() {
			this.formIsValid = true;
			this.validateForm();

			if (!this.formIsValid) {
				return;
			}
			this.$store.dispatch("requests/contactCoach", {
				email: this.email.value,
				message: this.message.value,
				coachId: this.$route.params.id,
			});
			console.log(this.$store.getters["requests/requests"]);
			this.$router.replace("/coaches");
		},
	},
};
</script>
