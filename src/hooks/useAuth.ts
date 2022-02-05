/* react */
import { useCallback, useState } from "react"
/* axios */
import axios from "axios";
/* react-router-dom */
import { useNavigate } from "react-router-dom";
/* types */
import { User } from "../types/User";
/* hooks */
import { useMessage } from "./useMessage";

/**
 * useAuth
 * @returns
 */
export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;

          showMessage({ title: "ログインしました", status: "success" })
          navigate("/home")
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" })
          setLoading(false)
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", status: "error" })
        setLoading(false)
      });
  }, [navigate, showMessage]);
  return { login, loading }
}
