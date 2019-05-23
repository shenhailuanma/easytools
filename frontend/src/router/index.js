import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Snapshot from "@/components/Snapshot";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/snapshot",
      name: "Snapshot",
      component: Snapshot
    }
  ]
});
