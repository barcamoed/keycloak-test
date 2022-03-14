import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/",
 realm: "rizwan-realm",
 clientId: "react-auth",
});

export default keycloak;