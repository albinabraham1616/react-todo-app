import { useErrorBoundary } from "react-error-boundary";
import { Button } from "../Button/Button";
import { ErrorProps } from "./types";

function ErrorPage({ error }: ErrorProps) {
  const { resetBoundary } = useErrorBoundary();
  return (
    <div className=" flex flex-col items-center mt-44 leading-10">
      <h2 className=" font-bold text-4xl">something went wrong</h2>
      <pre className=" text-red-500 text-4xl mt-4">{error.message}</pre>
      <Button
        onClick={resetBoundary}
        className=" bg-red-600 h-20 w-32 mt-10 text-2xl"
      >
        Refresh
      </Button>
    </div>
  );
}

export default ErrorPage;
