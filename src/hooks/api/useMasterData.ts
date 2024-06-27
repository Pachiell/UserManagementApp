import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { client } from "@/api/axios";
import { loginUserInfoResponse, LoginUserInfoResponse } from "@/api/user";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setloginUserInfo } from "@/stores/auth/slice";

export const useMasterData = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isSuccess } = useQuery(["master-data"], () =>
    Promise.all([
      client
        .get<LoginUserInfoResponse>("/api/loginuser/")
        .then((res) => loginUserInfoResponse.parse(res.data)),
    ]),
  );

  useEffect(() => {
    if (data && isSuccess) {
      const loginUserInfo = data[0];
      dispatch(
        setloginUserInfo({
          userId: loginUserInfo.id,
          userName: loginUserInfo.username,
        }),
      );
    }
  }, [data, isSuccess, dispatch]);

  return {
    isLoading,
  };
};
