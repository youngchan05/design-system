import { Route, Routes } from "react-router-dom";
import ButtonPage from "./docs/pages/button";
import InputPage from "./docs/pages/input";
import TextareaPage from "./docs/pages/textarea";
import CheckboxPage from "./docs/pages/checkbox";
import RadioPage from "./docs/pages/radio";
import SwitchPage from "./docs/pages/switch";
import SelectPage from "./docs/pages/select";
import BadgePage from "./docs/pages/badge";
import AvatarPage from "./docs/pages/avatar";
import TagPage from "./docs/pages/tag";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/docs/button" element={<ButtonPage />} />
      <Route path="/docs/input" element={<InputPage />} />
      <Route path="/docs/textarea" element={<TextareaPage />} />

      <Route path="/docs/checkbox" element={<CheckboxPage />} />
      <Route path="/docs/radio" element={<RadioPage />} />
      <Route path="/docs/switch" element={<SwitchPage />} />
      <Route path="/docs/select" element={<SelectPage />} />
      <Route path="/docs/badge" element={<BadgePage />} />
      <Route path="/docs/avatar" element={<AvatarPage />} />
      <Route path="/docs/tag" element={<TagPage />} />
    </Routes>
  );
}

export default App;
