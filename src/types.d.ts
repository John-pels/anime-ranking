export type iAnime = {
  aired: iAired;
  airing: boolean;
  approved: boolean;
  background: string;
  broadcast: iBroadCast;
  demographics: iSubAnime;
  duration: string;
  episodes: number;
  explicit_genres: Array<unknown>;
  favorites: number;
  genres: Array<iSubAnime>;
  images: iImages;
  licensors: Array<iSubAnime>;
  mal_id: number;
  members: number;
  popularity: number;
  producers: Array<iSubAnime>;
  rank: number;
  rating: string;
  score: number;
  scored_by: number;
  season: string;
  source: string;
  status: string;
  studios: Array<iSubAnime>;
  synopsis: string;
  themes: Array<unknown>;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: Array<string>;
  titles: Array<iTitle>;
  trailer: iTrailer;
  type: string;
  url: string;
  year: number;
};

type iAired = {
  from: string;
  prop: {
    from: iDate;
    to: iDate;
  };
  string: string;
  to: string;
};

type iDate = {
  day: number;
  month: number;
  year: number;
};

type iBroadCast = {
  day: string;
  string: string;
  time: string;
  timezone: string;
};

type iSubAnime = {
  mal_id: number;
  name: string;
  type: string;
  url: string;
};

type iImage = {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
};

type iImages = {
  jpg: iImage;
  webp: iImage;
};

type iTitle = {
  title: string;
  type: string;
};
interface iLargeImage extends iImage {
  maximum_image_url: string;
  medium_image_url: string;
}

type iTrailer = {
  embed_url: string;
  images: iLargeImage;
  url: string;
  youtube_id: string;
};

export interface iChart {
  year: number;
  rank: number;
  title: string;
}

export type iToolTip = {
  chartType: unknown;
  color: string;
  dataKey: string;
  fill: string;
  fillOpacity: number;
  formatter: unknown;
  name: string;
  payload: iChart;
  stroke: string;
  type: unknown;
  unit: unknown;
  value: number;
};
