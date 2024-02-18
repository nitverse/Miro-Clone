"use client";
import { FC } from "react";
import EmptyBoards from "./EmptyBoards";
import EmptyFavorite from "./EmptyFavorite";
import { EmptySearch } from "./EmptySearch";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList: FC<BoardListProps> = ({orgId , query}) => {
    const data = []; //TODO: change to api call

    if(!data.length && query.search){
        return <EmptySearch />
    }

    if(!data.length && query.favorites){
        return <EmptyFavorite />
    }

    if(!data.length){
        return <EmptyBoards />
    }
  return (
    <div>
        {JSON.stringify(query)}
    </div>
  );
};

export default BoardList;
