# React Router DOM

### Routing

1 - Définir un `RouteObject[]` dans un fichier [`routes.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx).

2 - Ajouter un [`<RouterProvider />`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/App.tsx) à la racine de l'application.

3 - Utiliser la méthode `createBrowserRouter()` pour fournir le router au provider.

4 - Définir un composant [`Layout.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/Layout.tsx). Ce composant est le parent de toutes les routes.

4 - Dans ce [`Layout.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/App.tsx), il est possible de récupérer des information de navigation via le hook `useNavigation()`.

### Routing et data loading

1 - Associer un [`loader: handler()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx) à une route.

2 - Utiliser le hook [`useLoaderData()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Foo.tsx) dans le composant qui reçoit la donnée après le routing.

3 - Utiliser l'information de navigation dans le composant racine [`Layout.tsx`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/Layout.tsx) pour afficher un loader par exemple.

### Routing et data loading asynchrone

1 - Associer [`loader: async handler()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/routes.tsx#L21) à une route.

2 - Utiliser le hook [`useLoaderData()`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Bar.tsx) dans le composant qui reçoit la donnée de façon asynchrone.

3 - Pour gérer la réception de données asynchrones, ajouter un `<Suspense />` et un [`<Await />`](https://github.com/cberkane/react-theory/blob/master/packages/react-router/src/pages/Bar.tsx#L11).
