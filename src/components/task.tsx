import React, { useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type StateSnapshot = {
  isDragging: boolean;
};

function Task({ isDragging }: StateSnapshot) {
  const grid = 8;
  const getItemStyle = (draggableStyle: any, isDragging: any) => ({
    // some basic styles to make the items look a bit nicer(아이템을 보기 좋게 만드는 몇 가지 기본 스타일)
    userSelect: "none",
    padding: grid * 2,
    marginBottom: grid,

    // change background colour if dragging(드래깅시 배경색 변경)
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables(드래그에 필요한 스타일 적용)
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
  });

  // using useCallback is optional
  const onBeforeCapture = useCallback((e: any) => {
    /*...*/
    console.log(e);
  }, []);
  const onBeforeDragStart = useCallback((e: any) => {
    /*...*/
    console.log(e);
  }, []);
  const onDragStart = useCallback((e: any) => {
    /*...*/
    console.log(e);
  }, []);
  const onDragUpdate = useCallback((e: any) => {
    /*...*/
    console.log(e);
  }, []);
  const onDragEnd = useCallback((e: any) => {
    // the only one that is required
    console.log(e);
  }, []);

  return (
    <>
      <div>
        <DragDropContext
          onBeforeCapture={onBeforeCapture}
          onBeforeDragStart={onBeforeDragStart}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  backgroundColor: isDragging ? "#9F81F7" : "#F781F3",
                }}
              >
                여기다 끌어넣을 수 있습니다!
                <Draggable key={"1"} draggableId={"1"} index={1}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={getItemStyle(
                          { background: "#00BFFF" },
                          isDragging
                        )}
                        {...provided.dragHandleProps}
                      >
                        {"내용"}
                      </div>
                    </div>
                  )}
                </Draggable>
                <Draggable key={"2"} draggableId={"2"} index={2}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={getItemStyle({ background: "#FF2" }, isDragging)}
                        {...provided.dragHandleProps}
                      >
                        {"내용"}
                      </div>
                    </div>
                  )}
                </Draggable>
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={"1"}>
          </Droppable>
        </DragDropContext> */}
      </div>
    </>
  );
}

export default Task;
