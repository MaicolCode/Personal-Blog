export const notFoundRoute = (req, res, next) => {
  if (req.path.startsWith('/tinymce')) {
    return next() // Permite archivos estáticos de TinyMCE
  }
  res.status(404).render('404')
}
