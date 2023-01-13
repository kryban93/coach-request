<template lang="pug" src="./base-dialog.pug"></template>
<style scoped src="./base-dialog.css"></style>

<script lang="ts">
export default {
	props: {
		show: {
			type: Boolean,
			required: true,
		},
		title: {
			type: String,
			required: false,
		},
		fixed: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ["close"],
	methods: {
		tryClose() {
			if (this.fixed) {
				return;
			}
			this.$emit("close");
		},
	},
};
</script>
