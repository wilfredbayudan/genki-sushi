import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
      .then(res => res.json())
      .then(json => setCount(json.count))
  }, []);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/testing" element={<h1>Test Route</h1>} />
          <Route path="/" element={<h1>Page Count: {count}</h1>} />
        </Routes>
    </BrowserRouter>

  );

}

export default App;