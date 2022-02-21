import {  useSelector } from "react-redux";
import { TablaBodyEdit } from "./TablaBodyEdit";

export const TablaBodyEdit2 = () => {
  const { events } = useSelector((state) => state.event);

  return (
    <>
      <div className="tabla data_tabla">
        <h3>Productos</h3>

        {events.map((event) => (
          <TablaBodyEdit event={event} key={event.id} />
        ))}
      </div>
    </>
  );
};
