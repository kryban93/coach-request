<template lang="pug" src="./coach-form.pug"></template>
<style scoped src="./coach-form.css"></style>

<script lang="ts">
export default {
	emits: ["save-data"],
	data() {
		return {
			firstName: "",
			lastName: "",
			description: "",
			rate: null,
			areas: [],
		};
	},
	methods: {
		submitForm() {
			const formData = {
				first: this.firstName,
				last: this.lastName,
				desc: this.description,
				rate: this.rate,
				areas: this.areas,
			};
			console.log(formData);

			this.$emit("save-data", formData);
		},
	},
};
</script>
