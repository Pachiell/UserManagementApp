import { memo } from "react";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";

const FaAnglesLeft = memo(() => <FontAwesomeIcon icon={faAnglesLeft} />);
const FaAnglesRight = memo(() => <FontAwesomeIcon icon={faAnglesRight} />);

export default function PaginationButton({
  pageCount,
  setCurrentPage,
}: {
  pageCount: number;
  setCurrentPage: (value: number) => void;
}) {
  return (
    <ReactPaginate
      className="flex items-center justify-center text-xl text-[#223A70]"
      pageCount={pageCount}
      previousLabel={
        <div className="mr-3">
          <FaAnglesLeft />
        </div>
      }
      nextLabel={
        <div className="ml-3">
          <FaAnglesRight />
        </div>
      }
      onPageChange={(e) => {
        setCurrentPage(e.selected);
      }}
      pageClassName="page-item border rounded-md bg-white border-[#2f519e] mx-1"
      pageLinkClassName="p-2"
      activeClassName="!bg-[#223A70] text-white"
    />
  );
}

FaAnglesLeft.displayName = "FaAnglesLeft";
FaAnglesRight.displayName = "FaAnglesRight";
