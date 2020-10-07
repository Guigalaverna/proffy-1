import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";
import { AuthProvider } from "./contexts/auth";

function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routes;
