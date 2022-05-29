import React from "react";
import "./App.css";
import EventComponent from "./events/EventComponent";
// import Parent from "./Props/Parent";
// import GuestList from "./State/GuestList";
import UserSearch from "./State/UserSearch";

function App() {
  return (
    <div>
      <h1>Hi There</h1>
      {/* <Parent />
      <GuestList /> */}
      <UserSearch />
      <EventComponent />
    </div>
  );
}

export default App;
