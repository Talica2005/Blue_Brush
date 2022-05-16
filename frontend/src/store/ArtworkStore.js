import { makeAutoObservable } from "mobx";

export default class ArtworkStore {
  //constructor is called when an object of this class is created
  constructor() {
    this._artworks = [];
    this._techniques = [];
    this._genres = [];
    this._selectedGenre = {};
    this._selectedTechniq = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 9;

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
    this.setPage(1); //first page by using genre
    this._selectedGenre = genre;
  }

  setSelectedTechniq(techniq) {
    this.setPage(1);
    this._selectedTechniq = techniq;
  }

  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
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
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
