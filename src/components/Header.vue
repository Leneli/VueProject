<template lang="pug">
	header.header
		div
			p LOGO

		div
			Nav

		div
			phone
			talk
</template>


<script>
import Nav       from "@/components/Nav";
import phone     from "@/components/elements/PhoneLink";
import talk      from "@/components/elements/Talk";

export default {
	name: "Header",
	components: {
		Nav,
		phone,
		talk
	}
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {
		background: rgb(151, 151, 212);
	}
</style>