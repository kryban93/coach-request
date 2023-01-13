<template lang="pug" src="./request-received.pug"></template>

<style scoped src="./request-received.css"></style>

<script lang="ts">
import RequestItem from "../../../components/requests/request-item/request-item.vue";

export default {
	components: {
		RequestItem,
	},
	computed: {
		receivedRequests() {
			return this.$store.getters["requests/requests"];
		},
		hasRequests() {
			return this.$store.getters["requests/hasRequests"];
		},
	},
};
</script>
