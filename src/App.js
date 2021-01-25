import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>vhelper.com</h3>
        <h4>Please upload a PDF of a business bank statement dated within the last 3 months</h4>
        <h5>The statement should contain the name and CEO of your organisation and dates of the transactionspp</h5>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;