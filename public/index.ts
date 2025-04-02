import { initApp } from '@kakaolemon/core'

/**
 * -----------------------------------------------------------
 * Registering the routes
 * -----------------------------------------------------------
 *
 * Begin to load all available routes under "routes/api"
 * directory.
 *
 */
import "../routes/api"

/**
 * -----------------------------------------------------------
 * Starting the application
 * -----------------------------------------------------------
 *
 * Begin to initialize the app, including registering all
 * the routes, prepare and serve the application under
 * registered port or port 9090 as default port
 *
 */
initApp()
