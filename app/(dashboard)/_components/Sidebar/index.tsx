import React from "react";
import NewButton from "./NewButton";
import List from "./List";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] h-full w-[60px] left-0 p-3 flex flex-col gap-y-4 bg-indigo-800 text-white">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
