<template lang="pug">
	#app.wrapper
		Header

		main.main
			router-view

		Footer
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
	name: "App",
	components: {
		Header,
		Footer
	}
};
</script>


<style lang="scss" src="@/styles/app.scss"></style>