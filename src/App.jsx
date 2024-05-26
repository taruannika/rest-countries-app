import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { Typography } from "antd";

export default function App() {
  return (
    <div>
      <header className="w-full bg-slate-500 text-white">
        <div className=" lg:max-w-[1400px] mx-auto p-3 ">
          <Typography.Title
            style={{ color: "white" }}
            level={4}
            className="uppercase "
          >
            Countries{" "}
          </Typography.Title>
        </div>
      </header>
      <div className="w-full lg:max-w-[1400px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </div>
    </div>
  );
}
