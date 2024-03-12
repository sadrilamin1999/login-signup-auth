import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleUserSubmit = (e) => {
    e.preventDefault();
    createUser(user.email, user.password);

    setUser({
      // Resetting user state to empty values
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleUserSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
