# Zustand

Bibliotèque de state management "atomique".

1 - Créer un store grâce à la fonction [`create()`](https://github.com/cberkane/react-theory/blob/master/packages/zustand/src/store/todo.store.ts#L12).

- `create()` peut être typée. Le typage doit correspondre au state qu'on veut gérer localement.

- `create()` prend en paramètres un [callback](https://github.com/cberkane/react-theory/blob/master/packages/zustand/src/store/todo.store.ts#L12), qui dispose d'un argument `set`.

- `set` permet de modifier l'état du store créé. Il est possible de modifier l'état soit [directement](https://github.com/cberkane/react-theory/blob/master/packages/zustand/src/store/todo-api.store.ts#L16), soit à partir de [l'état précédent](https://github.com/cberkane/react-theory/blob/master/packages/zustand/src/store/todo-api.store.ts) grace à une callback.

- `create()` doit refléter [l'état initial](https://github.com/cberkane/react-theory/blob/master/packages/zustand/src/store/todo.store.ts#L13) et les [fonctions](https://github.com/cberkane/react-theory/blob/master/packages/zustand/src/store/todo.store.ts) qui permettent d'interagir avec cet état.
