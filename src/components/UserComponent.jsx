import { useEffect, useState } from "react";

function UserComponent() {


    const fetchUser = async () => {
        try {
            const res = await fetch('https://opens-shift-test-git-abhay-dev.apps.rm2.thpm.p1.openshiftapps.com/api/employee');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            console.log("Fetched users:", res.body);

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
                Works
            </ul>
        </div>
    );
}

export default UserComponent;
