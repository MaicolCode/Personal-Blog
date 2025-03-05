import tinymce from 'tinymce'

tinymce.init({
  selector: 'textarea#my-expressjs-tinymce-app',
  plugins: ['image', 'fullscreen', 'lists'],
  branding: false,
  menubar: false,
  toolbar:
    'undo redo | styles forecolor| styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | fullscreen | lists',
  statusbar: false
})
