# FULL STACK APPLICATION

- Name - EchoSound

- A platform that lets users create a profile and upload soundtracks, samples, podcasts.

- Profile - authentication, profile picture, profile name, profile tags
- Search engine
- Audio player
- Random soundtracks, samples, podcasts button.

## SERVER

### MODELS

- User - Julia

- Sound - Julia

### ENDPOINTS

- GET/sounds - Fetch all soundtracks, samples, podcasts - Joao
- GET/sounds/:id - get single sound - Joao
- GET/sounds/search?term= - search for single sound with certain name/term - Joao
- GET/sounds/songs - get only soundtracks- Joao
- GET/sounds/samples - get only samples - Joao
- GET/sounds/podcasts - get only podcasts - Joao
- POST/sounds - Post/upload a new sound - Joao
- PATCH/sounds/:id - Update a sound - Joao
- DELETE/sounds/:id - Delete a sound - Joao

- GET/profile/:id - Get single profile - Joao
- POST/profile/create - Create profile - Joao
- POST/profile/login - login to profile - Joao
- PATCH/profile/:id - Update a profile
- DELETE/profile/:id - Delete a profile

## CLIENT

### PAGES

- HomePage => - Julia
- UploadPage => - Julia
- ProfilePage => - Julia, edit button > edit page; delete button
- EditPage => - Soumia - profile
- DeletePage => - Soumia (button) <irrelevant
- SinglePage => > edit button, link to edit page; delete button
- AllSoundPage=> soundtracks,samples,Podcast - Soumia

### COMPONENTS

- NavBar
- DropdownMenu
- Tags
- SoundContent => render single sound
- SoundForm => create or update sound
- SoundButton => delete a sound
- SoundList => render multiple sounds

- ProfileContent => render profile
- ProfileForm => create or update profile
- ProfileButton => delete profile

### SERVICES

- soundLoadAll -> GET/sounds
- soundLoadSingle -> GET/sounds/:id
- soundSearch -> GET/sounds/search?term=
- songSingle -> GET/sounds/soundtracks
- samplesLoadSingle -> GET/sounds/samples
- podcastsLoadSingle -> GET/sounds/podcasts
- soundAdd -> POST/sounds
- soundUpdate -> PATCH/sounds/:id
- soundDelete -> DELETE/sounds/:id

- profileLoadSingle -> GET/profile/:id
- profileAdd -> POST/profile
- profileUpadte -> PATCH/profile/:id
- profileDelete -> DELETE/profile/:id

# WISHLIST

- Likes
- Playlists
- Following
- Sharing
- Reposting
- Randomize music quote
- Comments
- Dall-e-2

- Spotify API - https://developer.spotify.com/documentation/web-api/
- Song Quotes - https://everydaypower.com/song-quotes/
