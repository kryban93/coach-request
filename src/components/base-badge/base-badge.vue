<template lang="pug" src="./base-badge.pug"></template>
<style scoped src="./base-badge.css"></style>

<script lang="ts">
export default {
	props: ["type", "title"],
	computed: {
		text(): string {
			return this.title.toUpperCase();
		},
	},
};
</script>
