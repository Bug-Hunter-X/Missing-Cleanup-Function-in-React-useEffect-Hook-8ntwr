# Missing Cleanup Function in React useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a return statement in the cleanup function. This can lead to memory leaks and unexpected behavior.

## Bug

The `bug.js` file contains a component that fetches data using `useEffect`. However, it's missing the crucial `return` statement within the `useEffect` cleanup function. This means that any cleanup actions (like canceling network requests or clearing timers) won't be executed when the component unmounts.

## Solution

The `bugSolution.js` file shows the corrected version. The `return` statement ensures that any cleanup functions are executed when the component is unmounted, preventing memory leaks and improving the overall stability of the application.