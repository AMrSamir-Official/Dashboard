import { ErrorOutlineOutlined } from "@mui/icons-material";

function Error() {
  return (
    <div className="text-red-500">
      <ErrorOutlineOutlined />
      <p>Oops! Something went wrong. </p>
    </div>
  );
}

export default Error;
