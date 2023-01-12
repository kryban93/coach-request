<template>
	<base-header></base-header>
	<router-view></router-view>
</template>

<style src="./styles/app.css"></style>

<script lang="ts">
import BaseHeader from "./components/base-header/base-header.vue";

export default {
	components: { BaseHeader },
};
</script>
