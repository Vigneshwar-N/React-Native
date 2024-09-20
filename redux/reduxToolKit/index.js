const store = require("./App/store");
const fetchUser = require("./App/features/user/userSlice").fetchUser;
store.dispatch(fetchUser());
