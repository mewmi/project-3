import api from "./api";

export const login = (email, password) =>
  api.post("/login", { email, password }).then((response) => response.data);

export const signup = (email, password, name) =>
  api
    .post("/signup", { email, password, name })
    .then((response) => response.data);

export const verify = (storedToken) =>
  api
    .get("/verify", {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);
