import React from "react";
import { Routes, Route } from "react-router";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import GenderSelection from "./Pages/GenderSelectionPage/GenderSelection";
import GQuestion from "./Pages/GeneratedQuestionPage/GQuestion";
import QuizPage from "./Pages/QuizPage/QuizPage";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/generated-questionary" element={<QuizPage />} />
        <Route path="/generated-questionary-old" element={<GQuestion />} />
        <Route path="/" element={<GenderSelection />} />
        <Route path="*" element={<GenderSelection />} />
      </Routes>
    </div>
  );
}

export default App;
