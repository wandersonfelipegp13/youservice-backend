import { useAuth } from "../hooks/useAuth";

export function Home() {
    const { user } = useAuth();
    return <div>Welcome {user?.name}</div>;
}
