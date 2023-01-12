<template lang="pug" src="./coach-register.pug"></template>

<style src="./coach-register.css"></style>

<script lang="ts">
import type { formTypes } from "@/components/coaches/coach-form/types";
import CoachForm from "../../../components/coaches/coach-form/coach-form.vue";
export default {
	components: { CoachForm },
	data() {
		return {};
	},
	methods: {
		saveData(data: formTypes) {
			this.$store.dispatch("coaches/registerCoach", data);
			this.$router.replace("/coaches"); // can't go back to form if You use "replace" instead of "push"
			console.log(this.$store.getters["coaches/coaches"]);
		},
	},
};
</script>
