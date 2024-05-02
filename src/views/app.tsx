import { Route, Routes } from "react-router-dom";
import BaseLayout from "@/views/components/layouts/BaseLayout";
import Home from "@/views/pages/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="" index element={<Home />} />
      </Route>
    </Routes>
  )
}
