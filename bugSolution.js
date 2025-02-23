```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct conditional rendering logic outside useEffect
    // or using conditional logic to prevent the side effects
    
  }, []); // Empty dependency array - runs only once after the first render
  
  useEffect(() => {
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count > 0]); // Avoids rerunning effect unnecessarily

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```