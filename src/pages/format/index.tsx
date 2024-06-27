import { useState, memo } from "react";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PageLoading,
  Title,
  PaginationList,
  PaginationButton,
  SearchBox,
  StandardButton,
} from "@/components/Elements";
import { Wrapper } from "@/components/Layouts";

// todo::get format apiが完了次第apiから呼び出す
import { formatList as formatListMock } from "@/_mock/format";

const FaRectangleList = memo(() => <FontAwesomeIcon icon={faRectangleList} />);

export default function Format() {
  // todo::get format apiが完了次第除去
  const isLoading = false;
  const formatList = formatListMock;
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Wrapper>
      {!isLoading ? (
        <div className="h-full">
          <div className="h-[5%]">
            <Title
              title="フォーマット"
              subTitle="フォーマット一覧"
              iconEl={<FaRectangleList />}
            />
          </div>
          {formatList.length ? (
            <div className="flex h-[95%] w-[95%] items-center justify-center">
              <div className="h-full w-full">
                <div className="flex h-[10%] w-full items-center justify-center">
                  <div className="my-5 h-12 w-[85%]">
                    <SearchBox />
                  </div>
                  <div className="ml-3 h-12 w-[15%]">
                    <StandardButton text="新規作成" />
                  </div>
                </div>
                <div className="h-[80%] w-full overflow-auto px-2">
                  <PaginationList
                    targetList={formatList}
                    pageIdx={currentPage}
                    contents={[
                      {
                        titlle: "フォーマット名",
                        propName: "formatName",
                        widthRatio: 60,
                      },
                      {
                        titlle: "作成日",
                        propName: "createdAt",
                        widthRatio: 20,
                      },
                      {
                        titlle: "更新日",
                        propName: "updatedAt",
                        widthRatio: 20,
                      },
                    ]}
                  />
                </div>
                <div className="h-[10%] pt-5">
                  <PaginationButton
                    pageCount={formatList.length / 10}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-[95%] w-full items-center justify-center">
              <div>
                <p>フォーマットを作成してください</p>
                <div className="m-3 h-12">
                  <StandardButton text="新規作成" />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <PageLoading />
      )}
    </Wrapper>
  );
}

FaRectangleList.displayName = "FaRectangleList";
