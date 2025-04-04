/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()                 // Loads up the /.env file

// NEW - TBD - Moved to routes/static.js
// const router = express.Router()
// router.use(express.static("public"))
// END - TBD

const app = express()
// Exported from routes/static
const static = require("./routes/static")
// const funRoutes = require("./routes/allFunRoutes")

// const exampleController = require("./controllers/exampleController")
const baseController = require("./controllers/baseController")
const inventoryRoute = require("./routes/inventoryRoute")
const Util = require("./utilities")
const utilities = require("./utilities/")

// app.use(router)
app.use(static)

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

// NEW - TBD
app.get('/', baseController.buildHome);

// app.use("/fun", funRoutes );

// router.get("/fun/bike", async function (req, res) {
//   res.render("./fun-stuff/abc", {things:"great!"})
// })

// router.get("/fun/car", async function (req, res) {
//   res.render("./fun-stuff/abc", {things:"great!"})
// })

// router.get ("/fun/house", async function (req, res) {
//   res.render("./fun-stuff/abc", {things:"great!"})
// })

// END - TBD

/* ***********************
 * Routes
 *************************/
// app.use(static)
// Index route
app.get("/", utilities.handleErrors(baseController.buildHome))
// Inventory routes - uses inventoryRoute.js file
app.use("/inv", inventoryRoute)
//--------------------------------------------------
// File Not Found Route - must be last route in list
//--------------------------------------------------
app.use(async (req, res, next) => {
  next({status: 404, message: 'Sorry, we appear to have lost that page.'})
})

/* ************************
 * Express Error Handler
 * Place after all other middleware
 *************************/ 
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  // if(err.status == 404){message = err.message}
  // else {message = 'Oh no! There was a crash. Maybe try a different route?'}
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message: err.message,
    nav
  })
})

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

//--- Start Simple Testing - TBD

//---   End Simple Testing

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})