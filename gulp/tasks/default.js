// Подключаем gulp
var gulp = require('gulp');

// Стандартный таск
// Сначала тестируем что бы не упали с ошибкой, собираем sass, затем сжимает картинки и js, после этого запускает ватчеры
gulp.task('default', ['sass', 'images', 'js', 'watch']);