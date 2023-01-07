import api from "./api";

export const soundLoadSingle = (id) =>
  api.get(`/sounds/${id}`).then((response) => response.data);
export const soundLoadAll = () =>
  api.get(`/sounds`).then((response) => response.data);
export const songSingle = (id) =>
  api.get(`/sounds/soundtracks/${id}`).then((response) => response.data);
export const samplesLoadSingle = (id) =>
  api.get(`/sounds/samples/${id}`).then((response) => response.data);
export const podcastsLoadSingle = (id) =>
  api.get(`/sounds/podcasts/${id}`).then((response) => response.data);
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
