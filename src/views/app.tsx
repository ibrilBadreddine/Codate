import { Route, Routes } from "react-router-dom";
import BaseLayout from "@/views/components/layouts/BaseLayout";
import Home from "@/views/pages/home";
import NotFound from "@/views/pages/errors";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="" index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
