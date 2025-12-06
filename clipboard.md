https://online-clipboard.online/online-clipboard/

8075

https://vite.dev/guide/#scaffolding-your-first-vite-project

pnpm dev / npm run dev

<></> - React Fragment

// Rules for JSX

1. JSX elements must be properly closed.

-> <br>
HTML - OK | JSX - Not OK (<br />)

2. JSX expressions must have only one parent element.
   -> Use React Fragments <> </>

3. In JSX, use className instead of class for CSS classes.
   -> WHy? - class is a keyword in JavaScript.

4. In JSX, use htmlFor instead of for in label elements.
   -> WHy? - for is a keyword in JavaScript.

5. JavaScript expressions can be embedded in JSX using curly braces {}.

6. File must be named with .jsx or .tsx extension for JSX syntax support.

---

useState

import { useState } from "react";

const [stateVariable, setStateVariable] = useState(initialValue);

stateVariable = 10; // Not allowed
setStateVariable(10); // Correct way to update state

Why - To mantain immutability and trigger re-renders.

## Whenever we call setStateVariable, React knows that the state has changed and re-renders the component to reflect the new state.

Context API in react
