<template lang="pug" src="./request-received.pug"></template>

<style scoped src="./request-received.css"></style>

<script lang="ts">
import RequestItem from "../../../components/requests/request-item/request-item.vue";

export default {
	components: {
		RequestItem,
	},
	data() {
		return {
			isLoading: false,
			error: null,
		};
	},
	computed: {
		receivedRequests() {
			return this.$store.getters["requests/requests"];
		},
		hasRequests() {
			return this.$store.getters["requests/hasRequests"];
		},
	},
	methods: {
		async loadRequests() {
			this.isLoading = true;
			try {
				await this.$store.dispatch("requests/fetchRequests");
			} catch (error: any) {
				// TODO: error types
				this.error = error || "Something failed";
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
		},
	},
	created() {
		this.loadRequests();
	},
};
</script>
