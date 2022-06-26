import "./App.scss";
import React, { lazy, Suspense, useEffect } from "react";
import { createPortal } from "react-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { themeActions } from "./store/theme-slice";
import Radium, { StyleRoot } from "radium";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const Projects = lazy(() => import("./pages/Projects/Projects"));
const Home = lazy(() => import("./pages/Home/Home"));
const Project = lazy(() => import("./pages/Project/Project"));
const About = lazy(() => import("./pages/About/About"));
const Now = lazy(() => import("./pages/Now/Now"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(themeActions.getThemeFromLocalStorage());
    dispatch(themeActions.changeTheme());
  }, [dispatch]);
  return (
    <StyleRoot>
      <div className="App">
        {createPortal(
          <div className="gradient-inner"></div>,
          document.getElementById("gradient-outer")
        )}

        <Navigation />

        {/* <LoadingScreen /> */}

        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects/" element={<Projects />}></Route>
            <Route path="/projects/:projectId" element={<Project />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/now" element={<Now />} />
          </Routes>
        </Suspense>
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
