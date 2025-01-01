# React Hook Form

Librairie permettant de gérer l'état d'un formulaire via des hooks.

### useForm

1 - [`useForm`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L19) fournit toutes les fonctions pour gérer le form.

2 - `useForm` peut être typé pour définir le type de données du formulaire.

3 - `useForm` peut prendre en paramètre les valeurs par défaut du formulaire.

4 - `useForm` les valeurs par défaut peuvent être envoyé par une fonction async.

### fonctions de useForm

1 - Pour suivre l'état d'un `form control`, utiliser [`register("field")`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L47).

2 - Pour valider un `form control` utiliser les options de validation [`register("field", {...options})`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L48).

3 - Pour soumettre le form, utiliser [`handleSubmit()`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L19) avec une [`callback`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L29).

4 - Pour accéder aux erreurs du form, utiliser la prop `errors` dérivée de [`formState`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L27).

5 - Pour faire des traitements post-submit, utiliser [`isSubmitSuccessful`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L36).

6 - Pour faire des traitement pendant le submit, utiliser [`isSubmitting`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L97).

7 - [`isDirty`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/SimpleForm.tsx#L96) se base sur les `defaultValues`.

### Nested forms & arrays

1 - Il est possible de gérer des formes complexes de données avec `register()`.

- Pour les arrays, utiliser la syntaxe [`register("arrayField.0.prop")`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/DynamicForm.tsx#L24).

- Pour les object, utiliser la syntaxe [`register("nested.field")`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/NestedForm.tsx#L24).

- Pour des champs dynamiques appartenant au même array field, utiliser le hook [`useFieldArray()`](https://github.com/cberkane/react-theory/blob/master/packages/hook-form/src/forms/DynamicForm.tsx#L12).

- `useFieldArray()` est obligatoirement associé à un champ du formulaire. Le champ doit être un tableau.
