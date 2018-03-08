<template lang="pug">
	div
		div Azimuth is an equal opportunity employer. 
		div © Copyright Azimut {{ getYear() }}, All Rights Reserved 
</template>

<script>


export default {
	name: "copyright",
	methods: {
		getYear: function() {
			var today = new Date();
			var year = today.getFullYear();

			return year;
		}
	}
};
</script>
