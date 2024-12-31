import express from 'express'
import morgan from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './Routes/user.js'
import adminRouter from './Routes/admin.js'
import methodOverride from 'method-override'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url)) // Obtener ruta absoluta

app.use(morgan())
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

// Configuracion lugar de almacenamiento de archivos

app.set('views', join(__dirname, 'views'))
// Configuracion de motor de plantillas
app.set('view engine', 'ejs')

app.use(express.static(join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/admin', adminRouter)

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000')
})
