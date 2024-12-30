# React Router DOM

### Routing

1 - Définir un `RouteObject[]` dans un fichier [`routes.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx).

2 - Utiliser la méthode [`createBrowserRouter()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/App.tsx#L5) pour créer un <ins>router</ins> à la racine de l'application.

3 - Utiliser ce <ins>router</ins> dans un [`<RouterProvider />`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/App.tsx#L6).

4 - Définir un composant [`Layout.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/Layout.tsx), conteneur principal de toute l'application et de toutes les routes.

4 - Dans ce [`Layout.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/Layout.tsx#L6), il est possible de récupérer les informations de navigation fournies par le hook `useNavigation()`.

### Routing et data loading

1 - Associer un [`loader: handler()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx#L16) à une route.

2 - Pour récupérer les données après redirection, utiliser le hook [`useLoaderData()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Foo.tsx).

3 - Avec cette méthode, il est possible de gérer la phase de loading dans [`Layout.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/Layout.tsx).

### Routing et data loading asynchrone

1 - Associer [`loader: async handler()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx#L21) à une route.

2 - Pour récupérer les données de façon async, utiliser le hook [`useLoaderData()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Bar#L9.tsx).

3 - Pour gérer l'asynchronicité, ajouter un `<Suspense />` et un [`<Await />`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Bar.tsx#L14).
