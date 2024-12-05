---
title: "Hooks in React: Explained"
category: "blog"
date: "20-11-2024"
image: "image/react.webp"
repo: ""
liveSite: ""
tags: ["React", "Help"]
---

React hooks are functions that let you "hook into" React state and lifecycle features in functional components. Introduced in React 16.8, they enable you to use state and other React features without writing class components.

In this blog post, we’ll go through each of the commonly used React hooks and provide basic examples to illustrate their functionality.

---

## 1. `useState`

The `useState` hook lets you add state to a functional component.

### Example:
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 2. `useEffect`

The `useEffect` hook allows you to perform side effects in your components, such as data fetching or updating the DOM.

In React (or any programming context), a side effect refers to any operation that affects something outside the scope of the current function or computation. In React components, side effects are actions that interact with the outside world or modify the component's environment, rather than simply returning a value.

### Example:
```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array means this effect runs once

  return <p>Time: {seconds}s</p>;
}
```

---

## 3. `useContext`

The `useContext` hook provides a way to access values from a context without using `Context.Consumer`.

### Example:
```javascript
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}
```

---

## 4. `useReducer`

The `useReducer` hook is an alternative to `useState` for managing more complex state logic.

### Example:
```javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

---

## 5. `useRef`

The `useRef` hook lets you persist a mutable value across renders or directly access a DOM element.

### Example:
```javascript
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

---

## 6. `useMemo`

The `useMemo` hook memoizes a value to avoid unnecessary recalculations.

### Example:
``` javascript
import React, { useState, useMemo } from 'react';

function ExpensiveComputation({ num }) {
  const compute = (n) => {
    console.log('Computing...');
    return n * 2;
  };

  const memoizedValue = useMemo(() => compute(num), [num]);

  return <p>Computed value: {memoizedValue}</p>;
}

function App() {
  const [num, setNum] = useState(5);

  return (
    <div>
      <button onClick={() => setNum((prev) => prev + 1)}>Increase</button>
      <ExpensiveComputation num={num} />
    </div>
  );
}
```

---

## 7. `useCallback`

The `useCallback` hook memoizes a function so that it doesn't get re-created on every render.

### Example:
```javascript
import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} />
    </div>
  );
}
```

## 8. `useLayoutEffect`

Similar to `useEffect`, but it fires synchronously after DOM mutations.

### Example:
```javascript
import React, { useRef, useLayoutEffect } from 'react';

function Box() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    boxRef.current.style.color = 'red';
  }, []);

  return <div ref={boxRef}>This text will be red</div>;
}
```

## Conclusion

React hooks are powerful tools that simplify state and lifecycle management in functional components. With these hooks, you can create cleaner and more efficient React applications. Experiment with them in your projects to get a deeper understanding of their use cases.

