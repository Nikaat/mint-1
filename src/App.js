import React from "react";
import { Routes, Route } from "react-router";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import GenderSelection from "./Pages/GenderSelectionPage/GenderSelection";
// import GQuestion from "./Pages/GeneratedQuestionPage/GQuestion";
import QuizPage from "./Pages/QuizPage/QuizPage";
import Checkout from "./Pages/Checkout/Checkout";

// import TitleFade from "./Components/TitleFade/TitleFade";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/generated-questionary" element={<QuizPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<GenderSelection />} />
        {/* <Route
          path="/"
          element={
            <TitleFade
              texts={[
                "سلام",
                "به مینت خوش آمدید",
                "در حال تحلیل شرایط شما هستیم",
                "نتایج به زودی آماده می شود",
                "لطفا صبور باشید...",
              ]}
            />
          }
        /> */}
        <Route path="*" element={<GenderSelection />} />
      </Routes>
    </div>
  );
}

export default App;
