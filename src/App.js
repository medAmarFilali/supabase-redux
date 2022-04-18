import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewProfile from "./NewProfile";
import ProfilesList from "./ProfilesList";
import { getProfiles, loadList } from "./store/actions/ListActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  return (
    <div>
      <NewProfile />
      <ProfilesList />
    </div>
  );
};

export default App;
