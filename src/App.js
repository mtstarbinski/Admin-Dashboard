import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./pages/Overview/Overview";
import SamplePage from "./pages/SamplePages/SamplePage";

function App() {

  return (
    <Routes>
      {/* Nav bar is on base path because every path needs the nav. */}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Overview/>}/>
        <Route path=":path" element={<SamplePage />}/>
      </Route>
    </Routes>
  );
}

export default App;

// Option 2: Create a page in React using a bar chart, table and one visualization of your choice.
