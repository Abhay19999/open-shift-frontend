import { useEffect, useState } from "react";

function UserComponent() {
    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        try {
            const res = await fetch('https://opens-shift-test-git-abhay-dev.apps.rm2.thpm.p1.openshiftapps.com/api/employee');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json(); // 👈 parse JSON
            console.log("Fetched users:", data);
            setUser(data); // 👈 store in state
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
               working fine
            </ul>
        </div>
    );
}

export default UserComponent;
