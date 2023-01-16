import { iAnime, iChart } from "./types";

export const filterChartData = (data: Array<iAnime>) => {
  let newArray: Array<iChart> = [];
  data.forEach(({ rank, title, aired }) => {
    let newAnime = { year: aired.prop.from.year, rank, title };
    newArray.push(newAnime);
  });

  return newArray;
};
