import React from "react";
import { PaginationPages } from "../components/Pagination/PaginationPages";
import { MiniNavBar } from "../components/MiniNavBar/MiniNavBar";
import "./gallery.css";
import GalleryContent from "../components/GalleryContent/GalleryContent";

export const Gallery = () => {
  return (
    <div>
      <MiniNavBar />
      <div className="all-images">
        <a href="/gallery">All works</a>
      </div>
      <PaginationPages />
      <GalleryContent />
    </div>
  );
};
