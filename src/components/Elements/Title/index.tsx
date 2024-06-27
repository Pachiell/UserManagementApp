import { memo } from "react";

export default function TitleComponent({
  title,
  subTitle,
  iconEl,
}: {
  title: string;
  subTitle: string;
  iconEl: JSX.Element;
}) {
  return (
    <div className="flex items-center text-2xl font-bold">
      <div className="mr-2">{iconEl}</div>
      <p>{title}</p>
      <p className="ml-3 text-xl text-gray-400">{`- ${subTitle} -`}</p>
    </div>
  );
}

export const Title = memo(TitleComponent);
