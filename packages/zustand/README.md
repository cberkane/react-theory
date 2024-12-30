# Zustand

Bibliotèque de state management "atomique".

1 - Créer un store grâce à la fonction [`create()`](https://github.com/cberkane/react-theory/blob/master/packages/zustand/src/store/todo.store.ts#L12).

- la fonction `create()` prend en paramètres une callback qui fournit un `setter` à la manière d'un `useState()`.

- le callback `create()` doit renvoyer l'état et les fonctions permettant d'intéragir avec l'état.
