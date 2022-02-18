import { ApiError } from "../../interface/api";

interface ErrorProps {
  error: ApiError;
}

const CanvasError: React.FC<ErrorProps> = ({ error }) => (
  <div style={{ color: "red" }}>
    <p> Ups...something went wrong </p>
    {(error.status === 500 || error.status === 404) && (
      <p>Status message - {error.data.message}</p>
    )}
  </div>
);

export default CanvasError;
