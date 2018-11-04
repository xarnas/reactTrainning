//import Raven from "raven-js";

function init() {
  //Raven.config("https://df35892c18794d5b822afa88a36c9fb2@sentry.io/1311610", {
  // release: "1-0-0",
  // environment: "development-test"
  //}).install();
}
function log(error) {
  //Raven.captureException(error);
  console.log(error);
}
export default {
  init,
  log
};
