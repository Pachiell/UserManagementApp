import { ReactNode } from "react";
import { Side, Main } from "@/components/Layouts";

type Props = { children: ReactNode; isShowSideMenu?: boolean };

export default function Wrapper({ children, isShowSideMenu }: Props) {
  return (
    <div className="flex h-[100vh]">
      {isShowSideMenu && (
        <div className="w-[18%]">
          <Side />
        </div>
      )}
      <div className={`${isShowSideMenu ? "w-[82%]" : "w-[100%]"}`}>
        <Main>{children}</Main>
      </div>
    </div>
  );
}

Wrapper.defaultProps = {
  isShowSideMenu: true,
};
