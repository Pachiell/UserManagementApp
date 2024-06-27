import { useAppSelector } from "@/hooks/useAppSelector";
import { useMasterData } from "@/hooks/api";
import { PageLoading } from "@/components/Elements";
import { Wrapper } from "@/components/Layouts";

export default function Home() {
  const { isLoading } = useMasterData();

  const { userInfo } = useAppSelector((state) => state.auth);

  return (
    <Wrapper>
      {!isLoading ? (
        <div>
          <p>home</p>
          <p>ID:{userInfo.userId}</p>
          <p>USERNAME:{userInfo.userName}</p>
        </div>
      ) : (
        <PageLoading />
      )}
    </Wrapper>
  );
}
