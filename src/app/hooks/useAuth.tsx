import Cookies from "universal-cookie";
import { TOKEN_NAME } from "../helpers/constants";
import useSWR from "swr";
import callApi from "../helpers/callApi";
import { useAppDispatch, useAppSelector } from ".";
import { selectUser, updateUser } from "../store/auth";

export default function useAuth() {
  // const cookie = new Cookies();
  // const token = cookie.get(TOKEN_NAME);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useSWR(TOKEN_NAME, () => {
    // return callApi().get("/user", {
    //   headers: {
    //     Authorization: token,
    //   },
    // });
    return callApi().get("/user");
  });
  // console.log(data, error);
  dispatch(updateUser(data?.data?.user));
  // const user = useAppSelector(selectUser);
  // console.log("useAuth->user:", user);

  return {
    user: useAppSelector(selectUser),
    error,
    loading: isLoading,
  };
}
