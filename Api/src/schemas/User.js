var mongooseUser = require("../index.ts").mongooseUser;
var userSchema = new mongooseUser.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
    },
    numberPhone: {
      type: Number,
      default: "123-456",
    },
    tag: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
var User = new mongooseUser.model("user", userSchema);
//User.create({ name: "Tomi", email: "algo@gmail.com", numberPhone: 135135, tag: ["queseyo"] });
module.exports = { User: User };
