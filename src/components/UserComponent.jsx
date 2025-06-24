import {useEffect, useState} from "react";

function UserComponent() {


    const [user, setUser] = useState()

    const fetchUser = async () => {
        const res = await fetch('https://opens-shift-test-git-abhay-dev.apps.rm2.thpm.p1.openshiftapps.com/api/employee')
        console.log(res)
    }

    useEffect(() => {
        fetchUser().catch((err) => console.log(err))
    },[])
    return (<>


    </>)
}

export default UserComponent