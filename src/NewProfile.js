import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadList } from "./store/actions/ListActions";
import { v4 as uuidv4 } from "uuid";

const NewProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loadList({ id: uuidv4(), name, email, website }));
    setName("");
    setEmail("");
    setWebsite("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Website</p>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProfile;
