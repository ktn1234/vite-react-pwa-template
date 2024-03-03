import { BrowserRouter, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="*" element={<Navigate to={"/"} />} />
    </BrowserRouter>
  );
}

export default App;
