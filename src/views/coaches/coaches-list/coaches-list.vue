<template lang="pug" src="./coaches-list.pug"></template>

<script lang="ts">
import type { Coach } from "../../../store/modules/coaches/types";
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
};
</script>
