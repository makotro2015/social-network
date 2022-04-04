const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: false,
    //   fullName: "Alena Komaro",
    //   status: "I am happy!",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   fullName: "Lena Komaro",
    //   status: "I am lucky!",
    //   location: { city: "Dnepr", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   fullName: "Elena Komaro",
    //   status: "I am hungry!",
    //   location: { city: "Tomsk", country: "Russia" },
    // },
    // {
    //   id: 4,
    //   followed: false,
    //   fullName: "Eva Komaro",
    //   status: "I am crazy!",
    //   location: { city: "Omsk", country: "Russia" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });
export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId });
export const setUsersAC = (users) => ({ type: "SET-USERS", users });

export default usersReducer; 
