# React Router DOM

### Routing

1 - Dans un fichier [`routes.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx), définir un `RouteObject[]`.

2 - A la racine de l'application, créer un router avec [`createBrowserRouter()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/App.tsx#L5).

3 - Fournir le router grâce [`<RouterProvider />`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/App.tsx#L6).

4 - Définir [`Layout.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/Layout.tsx), le composant parent de toutes les routes.

4 - Il est possible de récupérer les infos de navigation via le hook [`useNavigation()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/Layout.tsx#L6).

### Routing et data loading

1 - Associer un [`loader: handler()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx#L16) à une route.

2 - Pour récupérer les données après redirection, utiliser le hook [`useLoaderData()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Foo.tsx).

3 - Il est possible de gérer la phase de loading dans [`Layout.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/Layout.tsx).

### Routing et data loading asynchrone

1 - Associer [`loader: async handler()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx#L21) à une route.

2 - Pour récupérer les données de façon asynchrone, toujours utiliser le hook [`useLoaderData()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Bar#L9.tsx).

3 - Pour gérer l'asynchronicité, ajouter les components [`<Suspense />` `<Await />`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Bar.tsx#L14).
