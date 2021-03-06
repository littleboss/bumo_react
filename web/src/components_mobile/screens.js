import {Navigation} from "react-native-navigation";
import Home from "./Home.mobile";
import TagType from "./TagType";
import Login from "./Login";
import Register from "./Register";
import PaintingDetail from "./PaintingDetail";
import TagDetail from "./TagDetail";
import TagTypeDetail from "./TagTypeDetail";
import UserPainting from "./UserPainting";
import Me from "./Me";
import Comment from "./Comment";
import Like from "./Like";
import User from "./User";
import PaintingModal from "./PaintingModal";
import FindPainting from "./FindPainting";
import TagTypePainting from "./TagTypePainting";
import EditMe from "./EditMe";
import SearchResultNew from "./SearchResultNew";
import CameraImage from "./CameraImage";

export function registerScreens(store, Provider){
  Navigation.registerComponent('bumo.FindPainting',()=>FindPainting, store, Provider);
  Navigation.registerComponent('bumo.TagTypePainting',()=>TagTypePainting, store, Provider);
  Navigation.registerComponent('bumo.Home',()=>Home, store, Provider);
  Navigation.registerComponent('bumo.TagType',()=>TagType, store, Provider);
  Navigation.registerComponent('bumo.Login',()=>Login, store, Provider);
  Navigation.registerComponent('bumo.Register',()=>Register, store, Provider);
  Navigation.registerComponent('bumo.PaintingDetail', ()=>PaintingDetail, store, Provider);
  Navigation.registerComponent('bumo.TagTypeDetail', ()=>TagTypeDetail, store, Provider);
  Navigation.registerComponent('bumo.UserPainting', ()=>UserPainting, store, Provider);
  Navigation.registerComponent('bumo.TagDetail', ()=>TagDetail, store, Provider);
  Navigation.registerComponent('bumo.Me', ()=>Me, store, Provider);
  Navigation.registerComponent('bumo.Comment',()=>Comment, store, Provider);
  Navigation.registerComponent('bumo.Like',()=>Like, store, Provider);
  Navigation.registerComponent('bumo.User',()=>User, store, Provider);
  Navigation.registerComponent('bumo.PaintingModal',()=>PaintingModal, store, Provider);
  Navigation.registerComponent('bumo.EditMe',()=>EditMe, store, Provider);
  Navigation.registerComponent('bumo.SearchResultNew', ()=>SearchResultNew, store, Provider);
  Navigation.registerComponent('bumo.CameraImage', ()=>CameraImage, store, Provider);

}
