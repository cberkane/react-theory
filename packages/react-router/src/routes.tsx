import { Navigate, RouteObject } from "react-router-dom"
import Layout from "./Layout";
import Foo from "./pages/Foo";
import Bar from "./pages/Bar";

import { fetchPosts, fetchTodos } from "./api/fetch";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <>
            <p>Erroring out...</p>
        </>,
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
            {
                path: "*",
                element: <Navigate to="/404" replace />
            }
        ]
    }
];

export default routes;