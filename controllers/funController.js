async function theBikes (req, res) {
res.render("./fun-stuff/abc", {things:"bike!"})
}

async function theCars (req, res) {
res.render("./fun-stuff/abc", {things:"car!"})
}

async function theHouse(req, res) {
res.render("./fun-stuff/abc", {things:"house!"})
}

module.exports = {theBikes, theCars, theHouse}