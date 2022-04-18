import { supabase } from "../../supabaseClient";
export const LOAD_DATA = "LOAD_DATA";
export const DELETE_ITEM = "DELETE_ITEM";

export const loadList = (data) => {
  return {
    type: "ADD_ITEM",
    payload: data,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const getProfiles = () => async (dispatch) => {
  try {
    const { data, error } = await supabase.from("profiles").select();
    if (error) {
      console.log(error);
    }

    dispatch({ type: LOAD_DATA, payload: data });
  } catch (err) {
    console.log(err);
  }
};
