var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass');

var env,
	sassSources,
	sassStyle;

env = 'development';

if (env==='development') {
	sassStyle = 'expanded';
} else {
	sassStyle = 'compressed';
}

sassSources = ['dev/scss/gridlee.scss'];

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'dev/scss',
			css: 'production/css',
			style: sassStyle,
			require: ['breakpoint']
		})
		.on('error', gutil.log))
});

gulp.task('watch', function() {
  gulp.watch(['dev/scss/*.scss', 'dev/scss/*/*.scss'], ['compass']);
});

gulp.task('default', ['watch', 'compass']);
