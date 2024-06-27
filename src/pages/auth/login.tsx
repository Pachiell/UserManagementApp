import { useState } from "react";
import { useLogin } from "@/hooks/api";

export default function Login() {
  const { mutate } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (localStorage.getItem("JWT") === "SESSION-TIME-OUT") {
    // eslint-disable-next-line no-alert
    alert("セッション期限が切れました。");
    localStorage.removeItem("JWT");
  }

  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div className="flex flex-col">
        <p>ログイン画面</p>
        <input
          className="border-2"
          placeholder="ユーザーネーム"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border-2"
          placeholder="パスワード"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-50 m-2 rounded bg-sky-500 px-3 text-white"
          type="submit"
          onClick={() =>
            mutate({
              username,
              password,
            })
          }
        >
          ログイン
        </button>
      </div>
    </div>
  );
}
