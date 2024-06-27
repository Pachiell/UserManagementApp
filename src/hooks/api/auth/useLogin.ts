import { useMutation } from "@tanstack/react-query";
import { client } from "@/api/axios";
import { loginRequest, loginResponse } from "@/api/auth/login";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setIsLogin } from "@/stores/auth/slice";


export const useLogin = () => {
  const dispatch = useAppDispatch();
  

  const { mutate, isLoading } = useMutation(
    ({ username, password }: { username: string; password: string }) =>
      client
        .post("/authen/jwt/create", loginRequest.parse({ username, password }))
        .then((res) => loginResponse.parse(res.data)),
    {
      onSuccess: (data) => {
        localStorage.setItem("JWT", data.access);
        dispatch(setIsLogin({ isLogin: true }));
        // eslint-disable-next-line no-alert
        window.alert("login success");
      },
    }
  );

  return {
    mutate,
    isLoading,
  };
};
