import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "0ca93344-d4dc-43d1-be1f-b09a6d443087",
  },
});

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },

  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
