import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import NotificationsScreen from "./notifications-screen";
import MessagesScreen from "./messages-screen";
import ProfileScreen from "./profile-screen";
import MoreScreen from "./more-screen";
import ListsScreen from "./lists-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import tuitInfoReducer from "./reducers/tuit-info-reducer";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, tuitInfo: tuitInfoReducer}});

function Tuiter() {
 return (
  <Provider store={store}>
   <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
           <Route path="/home" element={<HomeScreen/>} />
           <Route path="/explore" element={<ExploreScreen />} />
           <Route path="/notifications" element={<NotificationsScreen/>}/>
            <Route path="/messages" element={<MessagesScreen/>}/>
            <Route path="/bookmarks" element={<BookmarksScreen />}/>
            <Route path="/lists" element={<ListsScreen/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="/more" element={<MoreScreen/>}/>
         </Routes>
       </div>
       <div className="col-3">
          <WhoToFollowList/>
       </div>
     </div>
   </div>
   </Provider>
 );
}
export default Tuiter;