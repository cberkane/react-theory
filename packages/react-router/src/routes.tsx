import { RouteObject } from "react-router-dom"
import Layout from "./Layout";
import Foo from "./pages/Foo";
import Bar from "./pages/Bar";

import { fetchPosts, fetchTodos } from "./api/fetch";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "foo",
                element: <Foo />,
                loader: () => fetchTodos(),
            },
            {
                path: "bar",
                element: <Bar />,
                loader: async () => {
                    return { posts: await fetchPosts().then(response => response.json()) };
                }
            },

        ]
    }
];

export default routes;