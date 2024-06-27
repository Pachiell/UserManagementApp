import PropagateLoader from "react-spinners/PropagateLoader";

function PageLoading() {
  return (
    <div className="sweet-loading flex h-full w-full items-center justify-center">
      <PropagateLoader loading color="#223A70" />
    </div>
  );
}

export default PageLoading;
