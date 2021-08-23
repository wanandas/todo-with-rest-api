import axios from "axios";

export interface IUser {
  username: string;
  password: string;
}

interface Iresponsive {
  token: string;
}

export async function postLogin({ user }: { user: IUser }) {
  try {
    const res = await axios.post(
      "https://candidate.neversitup.com/todo/users/auth",
      {
        username: user.username,
        password: user.password,
      }
    );
    localStorage.setItem("access-token", res.data.token);
    return [res.data as Iresponsive, null];
  } catch (error) {
    return [null, error];
  }
}
