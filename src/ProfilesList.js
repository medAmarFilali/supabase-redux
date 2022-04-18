import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./store/actions/ListActions";

const ProfilesList = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  console.log(list);

  const handleDeleteItem = (e, id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      {list.length ? (
        list.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <p>{item.username}</p>
                <p>{item.website}</p>
              </div>
              <div>
                <button onClick={(e) => handleDeleteItem(e, item.id)}>
                  delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No profiles</p>
      )}
    </div>
  );
};

export default ProfilesList;
