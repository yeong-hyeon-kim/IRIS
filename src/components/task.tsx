import React, { useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type StateSnapshot = {
  isDragging: boolean;
};

function Task({ isDragging }: StateSnapshot) {
  return (
    <>
      <footer>
        <div className="Copylight">
          <hr></hr>
          Copyright (c) {new Date().getFullYear()} IRIS.
        </div>
      </footer>
    </>
  );
}

export default Task;
