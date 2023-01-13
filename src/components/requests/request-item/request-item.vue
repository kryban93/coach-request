<template lang="pug" src="./request-item.pug"></template>
<style scoped src="./request-item.css"></style>

<script lang="ts">
export default {
	props: ["email", "message"],
	computed: {
		emailLink() {
			return "mailto:" + this.email;
		},
	},
};
</script>
