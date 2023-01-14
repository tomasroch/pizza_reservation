import React, { useState } from "react";
import { clearUserCookie, getUserCookie, setUserCookie } from "./SessionCookies";

const UserContext = React.createContext({
    user: null,
    setUser: () => { }
});

function UserContextProvider(props) {
    const [user, setUser] = useState(getUserCookie())

    const loginUser = (data) => {
        setUser(data)
        setUserCookie(data)
    }

    const logoutUser = () => {
        setUser(null)
        clearUserCookie()
    }

    const getUserRole = () => {
        return user.role
    }

    const values = { user, loginUser, logoutUser, getUserRole }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }