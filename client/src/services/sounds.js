import api from './api'

export const soundLoadSingle = (id)=> api.get/(/sounds/${:id}).then((response)=> response.data);
export const soundLoadAll = ()=> api.get/(/sounds).then((response)=> response.data);

export const songSingle = (id)=> api.get/(/sounds/soundtracks).then((response)=> response.data);
export const samplesLoadSingle = (id)=> api.get/(/sounds/samples).then((response)=> response.data);
export const podcastsLoadSingle = (id)=> api.get/(/sounds/podcasts).then((response)=> response.data);
export const soundAdd = (sound)=> api.post('/sounds', sound).then((response)=> response.data);
export const soundUpdate = (id, sound)=> api.patch(`/sounds/${:id}`, sound).then((response)=> response.data);
export const soundDelete = (id)=> api.delete(`/sounds/${:id}`).then((response)=> response.data);

// review this search sesrvice, something is missing!
export const soundSearch = (id)=> api.get/(/sounds/search?term=).then((response)=> response.data);
