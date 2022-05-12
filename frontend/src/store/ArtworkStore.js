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
      {
        id: 3,
        name: "Sunny day",
        price: 25000,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
      },
      {
        id: 4,
        name: "August",
        price: 25000,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
      },
      {
        id: 5,
        name: "Sunny day",
        price: 25000,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
      },
      {
        id: 6,
        name: "August",
        price: 25000,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
      },
      {
        id: 7,
        name: "Sunny day",
        price: 25000,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
      },
      {
        id: 8,
        name: "August",
        price: 25000,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKQ_-pD8oaKkIH8P-F1OMkettXx3Wnqy8WpIxRLB16gCLhkqUM",
      },
    ];
    this._techniques = [
      { id: 1, name: "WATERCOLOR" },
      { id: 2, name: "OIL" },
      { id: 3, name: "ACRILYC" },
      { id: 4, name: "PASTEL" },
    ];
    this._genres = [
      { id: 1, name: "Cityscape" },
      { id: 2, name: "Landscape" },
      { id: 3, name: "Portrait" },
      { id: 4, name: "Naturmort" },
      { id: 5, name: "Marine" },
    ];

    this._selectedGenre = {};
    this._selectedTechniq = {};

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

  setSelectedGenre(genre) {
    this._selectedGenre = genre;
  }

  setSelectedTechniq(techniq) {
    this._selectedTechniq = techniq;
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

  get selectedGenre() {
    return this._selectedGenre;
  }
  get selectedTechniq() {
    return this._selectedTechniq;
  }
}
