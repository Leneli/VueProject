<template lang="pug">
	nav
		router-link(to="/candidates") Candidates 
		router-link(to="/clients") Employers
		router-link(to="/about") About us 
		router-link(to="/blog") Blog 
		router-link(to="/contacts") Contact 
</template>


<script>
export default {
	name: "Nav"
};
</script>
