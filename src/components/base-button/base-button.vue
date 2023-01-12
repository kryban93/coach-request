<template lang="pug" src="./base-button.pug"></template>
<style scoped src="./base-button.css"></style>

<script lang="ts">
export default {
	props: {
		link: {
			type: Boolean,
			required: false,
			default: false,
		},
		to: {
			type: String,
			required: false,
			default: "/",
		},
		mode: {
			type: String,
			required: false,
			default: null,
		},
	},
};
</script>
