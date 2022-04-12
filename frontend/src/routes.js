import { Admin } from "./pages/Admin";
import { Artwork } from "./pages/Artwork";
import { Auth } from "./pages/Auth";
import { Cart } from "./pages/Cart";
import { Shop } from "./pages/Shop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ArtworkGallery } from "./pages/ArtworkGallery";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";

import {
  ADMIN_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ARTWORK_ROUTE,
  SHOP_ROUTE,
  HOME_ROUTE,
  ABOUT_ROUTE,
  ARTWORK_GALLERY_ROUTE,
  CONTACT_ROUTE,
  GALLERY_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: CART_ROUTE,
    Component: Cart,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: ARTWORK_ROUTE + "/:id",
    Component: Artwork,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: ARTWORK_GALLERY_ROUTE + "/:id",
    Component: ArtworkGallery,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  {
    path: GALLERY_ROUTE,
    Component: Gallery,
  },
];
