import { makeAutoObservable } from "mobx";

export default class ArtworkStore {
  //constructor is called when an object of this class is created
  constructor() {
    this._artworks = [
      {
        id: 1,
        name: "Sunny day",
        price: 25000,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
      },
      {
        id: 2,
        name: "August",
        price: 25000,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
      },
    ];
    this._techniques = [
      { id: 1, name: "Watercolor" },
      { id: 2, name: "Oil" },
    ];
    this._genres = [
      { id: 1, name: "Cityscape" },
      { id: 2, name: "Landscape" },
    ];

    // makeAutoObservable monitors changes in variables
    makeAutoObservable(this);
  }
  setTechniques(techniques) {
    this._techniques = techniques;
  }
  setGenres(genres) {
    this._genres = genres;
  }
  setArtworks(artworks) {
    this._artworks = artworks;
  }

  get techniques() {
    return this._techniques;
  }
  get genres() {
    return this._genres;
  }
  get artworks() {
    return this._artworks;
  }
}
