## 2025-02-28 - [Form security]
**Vulnerability:** Forms lacking explicit type constraints (e.g. `type="tel"`, `maxLength`, `pattern`), missing `required` properties on critical fields, lacking `id` references in associated `label` attributes, and not handling submissions.
**Learning:** For application forms, always use correct HTML5 validation on inputs. Connect labels to their respective inputs with `htmlFor` matching the input `id`. Add visually clear indicators for mandatory fields, apply `required` validation, and control the form's state with `onSubmit` logic properly.
**Prevention:** Always follow secure standard HTML5 and React state management practices when adding forms to pages to ensure proper validation and avoid data leakage/manipulation.
