import "./App.css";
import Table from "react-bootstrap/Table";
import Clock from "./Clock";

const App = function () {
  return (
    <Table striped bordered hover>
      <div className="card">
        <h1>World Clock</h1>
        <thead>
          <tr>
            <th>City</th>
            <th>Clock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Asia/Singapore</td>
            <td>
              {" "}
              <Clock timeZone="Asia/Singapore" />
            </td>
          </tr>
          <tr>
            <td>Asia/Seoul</td>
            <td>
              <Clock timeZone="Asia/Seoul" />
            </td>
          </tr>
          <tr>
            <td>America/New_York</td>
            <td colSpan={2}>
              <Clock timeZone="America/New_York" />
            </td>
          </tr>
          <tr>
            <td>Europe/Berlin</td>
            <td colSpan={2}>
              {" "}
              <Clock timeZone="Europe/Berlin" />
            </td>
          </tr>
        </tbody>
      </div>
    </Table>
  );
};
export default App;
