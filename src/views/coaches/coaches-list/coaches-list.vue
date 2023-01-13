<template lang="pug" src="./coaches-list.pug"></template>
<style scoped src="./coaches-list..css"></style>
<script lang="ts">
import type { Coach } from "@/store/modules/coaches/types";
import CoachItem from "@/components/coaches/coach-item/coach-item.vue";
import CoachFilter from "@/components/coaches/coach-filter/coach-filter.vue";
import type { Filters } from "@/components/coaches/coach-filter/types";
export default {
	computed: {
		isCoach(): boolean {
			return this.$store.getters["coaches/isCoach"];
		},
		filteredCoaches(): Coach[] {
			const coaches = this.$store.getters["coaches/coaches"];
			return coaches.filter((coach: Coach) => {
				if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
					return true;
				}
				if (this.activeFilters.backend && coach.areas.includes("backend")) {
					return true;
				}
				if (this.activeFilters.career && coach.areas.includes("career")) {
					return true;
				}
				return false;
			});
		},
		hasCoaches(): boolean {
			return this.$store.getters["coaches/hasCoaches"];
		},
	},
	data() {
		return {
			activeFilters: {
				frontend: true,
				backend: true,
				career: true,
			},
		};
	},
	components: { CoachItem, CoachFilter },
	methods: {
		setFilters(updatedFilters: Filters) {
			this.activeFilters = updatedFilters;
		},
		loadCoaches() {
			this.$store.dispatch("coaches/loadCoaches");
		},
	},
	created() {
		this.loadCoaches();
	},
};
</script>
