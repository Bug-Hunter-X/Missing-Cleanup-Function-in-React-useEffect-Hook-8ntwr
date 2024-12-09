```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [abortController, setAbortController] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setAbortController(controller);

    fetch('https://api.example.com/data', { signal: controller.signal })
      .then(response => response.json())
      .then(data => {
        if (!controller.signal.aborted) {
          setCount(data.count);
        }
      })
      .catch(error => {
        if (!controller.signal.aborted && error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      });

    return () => controller.abort();
  }, []);

  return <div>Count: {count}</div>;
}
```