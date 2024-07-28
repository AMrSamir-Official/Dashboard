import Board from "react-trello";
import { kanbanData, kanbanGrid } from "../../data/dummy";

const Kanban = () => {
  const data = {
    lanes: kanbanGrid.map((column) => ({
      id: column.keyField,
      title: column.headerText,
      cards: kanbanData
        .filter((task) => task.Status === column.keyField)
        .map((task) => ({
          id: task.Id,
          title: task.Summary,
          description: `ID: ${task.Id}`,
          label: task.Type,
          metadata: task,
        })),
    })),
  };

  const handleCardMove = (cardId, sourceLaneId, targetLaneId, position) => {
    console.log(
      `Move card ${cardId} from ${sourceLaneId} to ${targetLaneId} at position ${position}`
    );
    // Implement logic to update your data model or perform API calls here
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-800 text-white rounded-3xl">
      <div className="text-2xl mb-4">Kanban Board</div>
      <div style={{ height: "100%" }}>
        <Board
          data={data}
          draggable
          collapsibleLanes
          editable
          handleDragEnd={handleCardMove}
          style={{ backgroundColor: "#1f2937", color: "white" }}
          laneStyle={{
            backgroundColor: "#333",
            borderRadius: "8px",
            minWidth: "250px",
          }}
          cardStyle={{
            backgroundColor: "#444",
            color: "white",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
          tagStyle={{ backgroundColor: "#555", color: "white" }}
          laneHeaderStyle={{ backgroundColor: "#555", color: "white" }}
        />
      </div>
    </div>
  );
};

export default Kanban;
