import express from 'express'
import morgan from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './Routes/user.js'
import adminRouter from './Routes/admin.js'
import methodOverride from 'method-override'
import { notFoundRoute } from './middlewares/notFoundRoute.js'
import loginRouter from './Routes/login.js'
import dotenv from 'dotenv'

import cookieParser from 'cookie-parser'
import cors from 'cors'
import logoutRouter from './Routes/logout.js'

dotenv.config()
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url)) // Obtener ruta absoluta

const port = process.env.PORT || 3000

console.log(__dirname)

app.use(morgan())
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

// Configuracion lugar de almacenamiento de archivos

app.set('views', join(__dirname, 'views'))
// Configuracion de motor de plantillas
app.set('view engine', 'ejs')

// Uso del editor de texto TinyMCE
app.use('/tinymce', express.static(join(__dirname, 'node_modules', 'tinymce')))

app.use(express.static(join(__dirname, 'public')))

app.use(cors())
app.use(cookieParser())

app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/', indexRouter)
app.use('/admin', adminRouter)
app.use(notFoundRoute)

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
