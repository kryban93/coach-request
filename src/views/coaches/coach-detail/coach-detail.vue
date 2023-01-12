<template lang="pug" src="./coach-detail.pug"></template>

<style src="./coach-detail.css"></style>

<script lang="ts">
import type { Coach } from "@/store/modules/coaches/types";

export default {
	props: ["id"],
	data() {
		return {
			selectedCoach: null,
		};
	},
	computed: {
		fullName(): string {
			if (!this.selectedCoach) {
				return "";
			}
			return `${this.selectedCoach["firstName"]} ${this.selectedCoach["lastName"]}`;
		},
		contactLink() {
			return this.$route.path + "/" + this.id + "/contact";
		},
		areas() {
			if (!this.selectedCoach) {
				return [];
			}
			return this.selectedCoach["areas"];
		},
		rate() {
			if (!this.selectedCoach) {
				return "";
			}
			return this.selectedCoach["hourlyRate"];
		},
		description() {
			if (!this.selectedCoach) {
				return "";
			}
			return this.selectedCoach["description"];
		},
	},
	created() {
		this.selectedCoach = this.$store.getters["coaches/coaches"].find(
			(coach: Coach) => coach.id === this.id,
		);
	},
};
</script>
