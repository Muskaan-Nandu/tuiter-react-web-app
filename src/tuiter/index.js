import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import NotificationsScreen from "./notifications-screen";
import MessagesScreen from "./messages-screen";
import ProfileScreen from "./user/profile-screen";
import MoreScreen from "./more-screen";
import ListsScreen from "./lists-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import tuitInfoReducer from "./reducers/tuit-info-reducer";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import "./index.css";

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
    tuitInfo: tuitInfoReducer,
    user: authReducer
  }
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-1 col-sm-1">
            <NavigationSidebar />
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-11 col-sm-11">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/notifications" element={<NotificationsScreen />} />
              <Route path="/messages" element={<MessagesScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/lists" element={<ListsScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/more" element={<MoreScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Routes>
          </div>
          <div className="col-3 col-xxl-3 col-xl-3 col-lg-3 d-none d-lg-block">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;