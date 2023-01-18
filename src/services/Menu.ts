import http from "../libs/http";

export default {
  popular: async () => {
    const res = await http.get("/feeds/list", {
      params: {
        limit: 6,
        start: 0,
        tag: "list.recipe.popular",
      },
    });

    return res;
  },
  
}