const sequelize = require("../database");
const { DataTypes } = require("sequelize"); // beskriver type string, int, array

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, //describe the fields of this model
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValu: "USER" },
});

const Cart = sequelize.define("cart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, //describe the fields of this model
});

const CartArtwork = sequelize.define("cart_artwork", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, //describe the fields of this model
});

const Artwork = sequelize.define("artwork", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, //describe the fields of this model
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER },
  img: { type: DataTypes.STRING },
});

const Techniq = sequelize.define("techniq", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, //describe the fields of this model
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Genre = sequelize.define("genre", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, //describe the fields of this model
  name: { type: DataTypes.STRING, allowNull: false },
});

const ArtworkInfo = sequelize.define("artwork_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, //describe the fields of this model
  instruction: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.STRING, allowNull: false },
});

const TechniqGenre = sequelize.define("techniq_genre", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// linking models together
User.hasOne(Cart); // connected one to one
Cart.belongsTo(User); // cart belongs to User

Cart.hasMany(CartArtwork);
CartArtwork.belongsTo(Cart);

Techniq.hasMany(Artwork);
Artwork.belongsTo(Techniq);

Genre.hasMany(Artwork);
Artwork.belongsTo(Genre);

Artwork.hasMany(CartArtwork);
CartArtwork.belongsTo(Artwork);

Artwork.hasMany(ArtworkInfo);
ArtworkInfo.belongsTo(Artwork);

//type of relationship between techniq and the genre.Many to many
Techniq.belongsToMany(Genre, { through: TechniqGenre });
Genre.belongsToMany(Techniq, { through: TechniqGenre });

//export model to another files
module.exports = {
  User,
  Cart,
  CartArtwork,
  Artwork,
  Techniq,
  Genre,
  ArtworkInfo,
  TechniqGenre,
};
