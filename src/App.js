import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Admin from "./pages/admin/Admin";
import AdminRooms from "./pages/admin/AdminRooms";
import AdminRoomCreate from "./pages/admin/AdminRoomCreate";
import AdminRoomDetail from "./pages/admin/AdminRoomDetail";
import AdminRoomEdit from "./pages/admin/AdminRoomEdit";
import AdminRoomDelete from "./pages/admin/AdminRoomDelete";
import Error from "./pages/Error";
import Nabar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nabar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/rooms" component={AdminRooms} />
          <Route exact path="/admin/rooms/create" component={AdminRoomCreate} />
          <Route exact path="/admin/rooms/:roomName" component={AdminRoomDetail} />
          <Route exact path="/admin/rooms/:roomName/edit" component={AdminRoomEdit} />
          <Route exact path="/admin/rooms/:roomName/delete" component={AdminRoomDelete} />
          <Route component={Error} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;