import { AiOutlineLoading } from "react-icons/ai";

function Loader() {
  return (
    <div className="text-blue-500">
      <AiOutlineLoading />
      <p>Loadign...</p>
    </div>
  );
}

export default Loader;
