<template lang="pug" src="./coach-item.pug"></template>
<style scoped src="./coach-item.css"></style>

<script lang="ts">
export default {
	props: ["id", "firstName", "lastName", "rate", "areas", "hourlyRate"],
	computed: {
		fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		},
		coachContactLink(): string {
			return this.$route.path + "/" + this.id + "/contact";
		},
		coachDetailsLink(): string {
			return this.$route.path + "/" + this.id;
		},
	},
};
</script>
