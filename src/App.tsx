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
import TooltipPage from "./docs/pages/tooltip";
import ModalPage from "./docs/pages/modal";
import TabsPage from "./docs/pages/tabs";
import ProgressPage from "./docs/pages/progress";
import SkeletonPage from "./docs/pages/skeleton";
import ToastPage from "./docs/pages/toast";
import PaginationPage from "./docs/pages/pagination";
import ConfirmPage from "./docs/pages/confirm";
import HomePage from "./docs/pages/home";
import FileUploadPage from "./docs/pages/file-upload";
import FileDropzonePage from "./docs/pages/file-dropzone";
import Test from "./docs/pages/test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
      <Route path="/docs/tooltip" element={<TooltipPage />} />
      <Route path="/docs/modal" element={<ModalPage />} />
      <Route path="/docs/tabs" element={<TabsPage />} />
      <Route path="/docs/progress" element={<ProgressPage />} />
      <Route path="/docs/skeleton" element={<SkeletonPage />} />
      <Route path="/docs/toast" element={<ToastPage />} />
      <Route path="/docs/pagination" element={<PaginationPage />} />
      <Route path="/docs/confirm" element={<ConfirmPage />} />
      <Route path="/docs/fileUpload" element={<FileUploadPage />} />
      <Route path="/docs/fileDropzone" element={<FileDropzonePage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
