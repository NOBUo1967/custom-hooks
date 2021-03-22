import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "のぶお",
  email: "joadjofa.com",
  address: "Address"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
