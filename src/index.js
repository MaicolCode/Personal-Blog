import express from 'express'
import morgan from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './Routes/user.js'
import adminRouter from './Routes/admin.js'
import methodOverride from 'method-override'
import { notFoundRoute } from './middlewares/notFoundRoute.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url)) // Obtener ruta absoluta

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

app.use('/', indexRouter)
app.use('/admin', adminRouter)
app.use(notFoundRoute)

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000')
})
