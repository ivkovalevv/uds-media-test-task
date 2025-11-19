import { useState, useEffect } from "react";

export const useFavourite = (cardId) => {
  const STORAGE_KEY = "favourite_cards";

  const [isFavourite, setIsFavourite] = useState(() => {
    const favourites = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[1]");
    return favourites.includes(cardId);
  });

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[1]");

    if (isFavourite) {
      if (!favourites.includes(cardId)) {
        const updatedFavourites = [...favourites, cardId];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavourites));
      }
    } else {
      const updatedFavourites = favourites.filter((id) => id !== cardId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavourites));
    }
  }, [isFavourite, cardId]);

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
  };

  return [isFavourite, toggleFavourite];
};
