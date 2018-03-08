import Vue    from "vue";
import Router from "vue-router";

// pages
import Home             from "@/pages/Home.vue";
import Error 			from "@/pages/404.vue";
import About            from "@/pages/about/About.vue";
import Blog             from "@/pages/blog/Blog.vue";
import BlogInner        from "@/pages/blog/BlogInner.vue";
import Candidates       from "@/pages/candidates/Candidates.vue";
import Survey           from "@/pages/candidates/Survey.vue";
import Recently         from "@/pages/candidates/Recently.vue";
import Clients          from "@/pages/clients/Clients.vue";
import Request          from "@/pages/clients/Request.vue";
import Find             from "@/pages/clients/Find.vue";
import Candidate        from "@/pages/clients/Candidate.vue";
import Login            from "@/pages/clients/Login.vue";
import Dashboard        from "@/pages/clients/Dashboard.vue";
import Contacts         from "@/pages/contacts/Contacts.vue";
import Industries       from "@/pages/industrie/Industries.vue";
import IndustriesInner  from "@/pages/industrie/IndustriesInner.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/error",
			name: "error",
			component: Error
		},
		{
			path: "/about",
			name: "about",
			component: About
		},
		{
			path: "/blog",
			name: "blog",
			component: Blog
		},
		{
			path: "/post",
			name: "blogPost",
			component: BlogInner
		},
		{
			path: "/candidates",
			name: "candidates",
			component: Candidates
		},
		{
			path: "/survey",
			name: "survey",
			component: Survey
		},
		{
			path: "/recently",
			name: "recently",
			component: Recently
		},
		{
			path: "/clients",
			name: "clients",
			component: Clients
		},
		{
			path: "/request",
			name: "request",
			component: Request
		},
		{
			path: "/find",
			name: "find",
			component: Find
		},
		{
			path: "/candidate",
			name: "candidate",
			component: Candidate
		},
		{
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: Dashboard
		},
		{
			path: "/contacts",
			name: "contacts",
			component: Contacts
		},
		{
			path: "/industries",
			name: "industries",
			component: Industries
		},
		{
			path: "/article",
			name: "industriesInner",
			component: IndustriesInner
		}
	]
});