import { Routes, Route, Link } from "react-router-dom";

import Landing from "./components/Landing";

export default () => {
  return (
    <div className="w-screen h-screen overflow-auto">
      <div className="navbar z-50 bg-neutral md:px-16 sticky top-0">
        <div className="flex-1" />
        <Link path="/" className="btn">
          Me
        </Link>
        <Link className="btn">Skills</Link>
        <Link className="btn">Portfolio</Link>
        <Link className="btn">Get in touch</Link>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};
