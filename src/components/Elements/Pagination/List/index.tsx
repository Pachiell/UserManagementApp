import { useMemo } from "react";
import { makePaginationList } from "@/utils/makePaginationList";

type Data = {
  [key: string]: string;
};

export default function PaginationList({
  targetList,
  pageIdx,
  contents,
}: {
  targetList: Data[];
  pageIdx: number;
  contents: Array<{
    titlle: string;
    propName: string;
    widthRatio: number;
  }>;
}) {
  const pagenationList = useMemo(
    () => makePaginationList(targetList, 10),
    [targetList],
  ) as Data[][];

  return (
    <div>
      {pagenationList[pageIdx].map((pagenation) => (
        <div
          key={pagenation.formatId}
          className="my-2 flex h-16 w-full cursor-pointer items-center rounded-lg border-2 border-gray-400 bg-white px-6 text-gray-400"
        >
          {contents.map((content) => (
            <div
              key={content.propName}
              style={{ width: `${content.widthRatio}%` }}
            >
              <p className="text-sm">{content.titlle}</p>
              <p className="text-lg font-bold text-gray-900">
                {pagenation[content.propName]}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
