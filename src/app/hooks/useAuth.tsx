import Cookies from "universal-cookie";
import { TOKEN_NAME } from "../helpers/constants";
import useSWR from "swr";
import callApi from "../helpers/callApi";

export default function useAuth() {
  const cookie = new Cookies();
  const token = cookie.get(TOKEN_NAME);
  const { data, error } = useSWR(TOKEN_NAME, () => {
    // return callApi().get("/user", {
    //   headers: {
    //     Authorization: token,
    //   },
    // });
    return callApi().get("/user");
  });

  console.log(data, error);
  return {
    user: data?.data?.user,
    error,
    loading: error == undefined && data == undefined,
  };
}
