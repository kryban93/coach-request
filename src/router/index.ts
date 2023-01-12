import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "../views/coaches/coach-detail/coach-detail.vue";
import CoachList from "../views/coaches/coaches-list/coaches-list.vue";
import CoachRegistration from "../views/coaches/coach-register/coach-register.vue";
import ContactCoach from "../views/requests/contact-coach/contact-coach.vue";
import RequestReceived from "../views/requests/request-received/request-received.vue";
import NotFound from "../views/not-found/not-found.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/coaches" },
		{ path: "/coaches", component: CoachList },
		{
			path: "/coaches/:id",
			component: CoachDetail,
			props: true,
			children: [{ path: "/contact", component: ContactCoach }],
		},
		{ path: "/register", component: CoachRegistration },
		{ path: "/requests", component: RequestReceived },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

export default router;
