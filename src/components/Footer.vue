<template lang="pug">
	footer.footer
		div
			Nav

		div
			phone
			mail
			socials

		div
			p LOGO
			copyright

</template>


<script>
import Nav       from "@/components/Nav";
import phone     from "@/components/elements/PhoneLink";
import mail      from "@/components/elements/MailLink";
import socials   from "@/components/elements/SocialLinks";
import copyright from "@/components/elements/Copyright";

export default {
	name: "Footer",
	components: {
		Nav,
		phone,
		mail,
		socials,
		copyright
	}
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer {
		background: #ccc;
		color: white;
	}
</style>