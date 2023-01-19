import { getJwtCookie } from "../context/SessionCookies"

export const BASE_URL = 'http://localhost:8080/api/'

export function parseJwt() {
    const jwt = getJwtCookie()
    return "JWTPREFIX " + jwt
}