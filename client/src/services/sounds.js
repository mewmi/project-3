import api from "./api";

export const soundLoadSingle = (id) =>
  api.get(`/sounds/${id}`).then((response) => response.data);
export const soundLoadAll = () =>
  api.get(`/sounds`).then((response) => response.data);
export const songLoadALL = (id) =>
  api.get(`/sounds/soundtracks`).then((response) => response.data);
export const samplesLoadALL = (id) =>
  api.get(`/sounds/samples`).then((response) => response.data);
export const podcastsLoadALL = (id) =>
  api.get(`/sounds/podcasts`).then((response) => response.data);
export const soundAdd = (sound) =>
  api.post(`/sounds`, sound).then((response) => response.data);
export const soundUpdate = (id, sound) =>
  api.patch(`/sounds/${id}`, sound).then((response) => response.data);
export const soundDelete = (id) =>
  api.delete(`/sounds/${id}`).then((response) => response.data);
export const soundSearch = (term) =>
  api.get(`/sounds/search?term=${term}`).then((response) => response.data);
export const soundLoadRandom = () =>
  api.get(`/sounds/random`).then((response) => response.data);
