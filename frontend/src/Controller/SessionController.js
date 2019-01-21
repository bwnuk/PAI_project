const sessionKey = 'JESSIONID';
const usernameKey = 'username';
const roles = 'roles';

const ROLE_USER = 'ROLE_USER';
const ROLE_ADMIN = 'ROLE_ADMIN';

export default {
    getError(error) {
        return error.message + ' ' + error.error;
    },

    clear() {
        sessionStorage.clear();
    },

    setSession(userInfoDto) {
        sessionStorage.setItem(sessionKey, sessionKey + '=' + userInfoDto.sessionId);
        sessionStorage.setItem(usernameKey, userInfoDto.username);
        sessionStorage.setItem(roles, userInfoDto.roles);
    },

    getSession() {
        return sessionStorage.getItem(sessionKey);
    },

    getUsername() {
        return sessionStorage.getItem(usernameKey);
    },

    isAdmin() {
        return this.isLogged() && sessionStorage.getItem(roles).includes(ROLE_ADMIN);
    },

    isUser() {
        return this.isLogged() && sessionStorage.getItem(roles).includes(ROLE_USER);
    },

    isLogged() {
        return sessionStorage.getItem(sessionKey) !== null && sessionStorage.getItem(usernameKey) !== null;
    }
};