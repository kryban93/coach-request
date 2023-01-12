<template lang="pug" src="./coach-filter.pug"></template>
<style scoped src="./coach-filter.css"></style>

<script lang="ts">
import type { Filters } from "./types";

export default {
	emits: ["change-filter"],
	data() {
		return {
			filters: {
				frontend: true,
				backend: true,
				career: true,
			} as Filters,
		};
	},
	methods: {
		setFilter(event: Event) {
			const target = event.target as HTMLInputElement;
			if (target) {
				const inputId = target.id;
				const isActive = target.checked;
				const updatedFilters = {
					...this.filters,
					[inputId]: isActive,
				};
				this.filters = updatedFilters;
				this.$emit("change-filter", updatedFilters);
			}
		},
	},
};
</script>
