<template lang="pug" src="./coaches-list.pug"></template>
<style scoped src="./coaches-list..css"></style>
<script lang="ts">
import type { Coach } from "../../../store/modules/coaches/types";
import CoachItem from "../../../components/coaches/coach-item/coach-item.vue";
export default {
	computed: {
		filteredCoaches(): Coach[] {
			return this.$store.getters["coaches/coaches"];
		},
		hasCoaches(): boolean {
			return this.$store.getters["coaches/hasCoaches"];
		},
	},
	data() {
		return {};
	},
	components: { CoachItem },
};
</script>
