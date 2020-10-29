
// let project_folder = require("path").basename(__dirname);
// let source_folder = "#src";

// let fs = require('fs');

// let path = {
// 	build: {
// 		html: project_folder + "/",
// 		css: project_folder + "/css/",
// 		js: project_folder + "/js/",
// 		img: project_folder + "/img/",
// 		fonts: project_folder + "/fonts/",
// 		libs: project_folder + "/libs/",
// 	},
// 	src: {
// 		html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
// 		css: source_folder + "/scss/style.scss",
// 		js: source_folder + "/js/script.js",
// 		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
// 		fonts: source_folder + "/fonts/*.ttf",
// 		libs: source_folder + "/libs/**/*.{js,css}",
// 	},
// 	watch: {
// 		html: source_folder + "/**/*.html",
// 		css: source_folder + "/scss/**/*.scss",
// 		js: source_folder + "/js/**/*.js",
// 		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
// 	},
// 	clean: "./" + project_folder + "/"
// }

// let { src, dest } = require('gulp'),
// 	gulp = require('gulp'),
// 	browsersync = require("browser-sync").create(),
// 	fileinclude = require("gulp-file-include"),
// 	del = require("del"),
// 	scss = require("gulp-sass"),
// 	autoprefixer = require("gulp-autoprefixer"),
// 	group_media = require("gulp-group-css-media-queries"),
// 	clean_css = require("gulp-clean-css"),
// 	rename = require("gulp-rename"),
// 	uglify = require("gulp-uglify-es").default,
// 	imagemin = require("gulp-imagemin"),
// 	webp = require('gulp-webp'),
// 	webphtml = require('gulp-webp-html'),
// 	webpcss = require("gulp-webpcss"),
// 	svgSprite = require('gulp-svg-sprite'),
// 	ttf2woff = require('gulp-ttf2woff'),
// 	ttf2woff2 = require('gulp-ttf2woff2'),
// 	fonter = require('gulp-fonter');

// function browserSync(params) {
// 	browsersync.init({
// 		server: {
// 			baseDir: "./" + project_folder + "/"
// 		},
// 		port: 3000,
// 		notify: false
// 	})
// }

// function html() {
// 	return src(path.src.html)
// 		.pipe(fileinclude())
// 		.pipe(webphtml())
// 		.pipe(dest(path.build.html))
// 		.pipe(browsersync.stream())
// }

// function css() {
// 	return src(path.src.css)
// 		.pipe(
// 			scss({
// 				outputStyle: "expanded"
// 			})
// 		)
// 		.pipe(
// 			group_media()
// 		)
// 		.pipe(
// 			autoprefixer({
// 				grid: true,
// 				overrideBrowserslist: ["last 5 versions"],
// 				cascade: true
// 			})
// 		)
// 		.pipe(webpcss())
// 		.pipe(dest(path.build.css))
// 		.pipe(clean_css())
// 		.pipe(
// 			rename({
// 				extname: ".min.css"
// 			})
// 		)
// 		.pipe(dest(path.build.css))
// 		.pipe(browsersync.stream())
// }

// function js() {
// 	return src(path.src.js)
// 		.pipe(fileinclude())
// 		.pipe(dest(path.build.js))
// 		.pipe(
// 			uglify()
// 		)
// 		.pipe(
// 			rename({
// 				extname: ".min.js"
// 			})
// 		)
// 		.pipe(dest(path.build.js))
// 		.pipe(browsersync.stream())
// }

// function images() {
// 	return src(path.src.img)
// 		.pipe(
// 			webp({
// 				quality: 70
// 			})
// 		)
// 		.pipe(dest(path.build.img))
// 		.pipe(src(path.src.img))
// 		.pipe(
// 			imagemin({
// 				progressive: true,
// 				svgoPlugins: [{ removeViewBox: false }],
// 				interlaced: true,
// 				optimizationLevel: 3 // 0 to 7
// 			})
// 		)
// 		.pipe(dest(path.build.img))
// 		.pipe(browsersync.stream())
// }

// function fonts() {
// 	src(path.src.fonts)
// 		.pipe(ttf2woff())
// 		.pipe(dest(path.build.fonts));
// 	return src(path.src.fonts)
// 		.pipe(ttf2woff2())
// 		.pipe(dest(path.build.fonts));
// };

// function libs() {
// 	return src(path.src.libs)
// 		.pipe(dest(path.build.libs));
// }

// gulp.task('otf2ttf', function () {
// 	return src([source_folder + '/fonts/*.otf'])
// 		.pipe(fonter({
// 			formats: ['ttf']
// 		}))
// 		.pipe(dest(source_folder + '/fonts/'));
// })

// // gulp.task('svgSprite', function () {
// // 	return gulp.src([source_folder + '/iconsprite/*.svg'])
// // 		.pipe(svgSprite({
// // 			mode: {
// // 				stack: {
// // 					sprite: "../icons/icons.svg",  //sprite file name
// // 					example: true
// // 				}
// // 			},
// // 		}
// // 		))
// // 		.pipe(dest(path.build.img))
// // })

// function fontsStyle(params) {
// 	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
// 	if (file_content == '') {
// 		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
// 		return fs.readdir(path.build.fonts, function (err, items) {
// 			if (items) {
// 				let c_fontname;
// 				for (var i = 0; i < items.length; i++) {
// 					let fontname = items[i].split('.');
// 					fontname = fontname[0];
// 					if (c_fontname != fontname) {
// 						fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
// 					}
// 					c_fontname = fontname;
// 				}
// 			}
// 		})
// 	}
// }

// function cb() {

// }

// function watchFiles(params) {
// 	gulp.watch([path.watch.html], html);
// 	gulp.watch([path.watch.css], css);
// 	gulp.watch([path.watch.js], js);
// 	gulp.watch([path.watch.img], images);
// }

// function clean(params) {
// 	return del(path.clean);
// }

// let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, libs), fontsStyle);
// let watch = gulp.parallel(build, watchFiles, browserSync);

// exports.fontsStyle = fontsStyle;
// exports.fonts = fonts;
// exports.images = images;
// exports.js = js;
// exports.css = css;
// exports.html = html;
// exports.build = build;
// exports.watch = watch;
// exports.default = watch;

//let replace = require('gulp-replace'); //.pipe(replace('bar', 'foo'))
let { src, dest } = require("gulp");
let fs = require('fs');
let gulp = require("gulp");
let browsersync = require("browser-sync").create();
let autoprefixer = require("gulp-autoprefixer");
let scss = require("gulp-sass");
let group_media = require("gulp-group-css-media-queries");
let plumber = require("gulp-plumber");
let del = require("del");
let imagemin = require("gulp-imagemin");
let uglify = require("gulp-uglify-es").default;
let rename = require("gulp-rename");
let fileinclude = require("gulp-file-include");
let clean_css = require("gulp-clean-css");
let newer = require('gulp-newer');

let webp = require('imagemin-webp');
let webpcss = require("gulp-webp-css");
let webphtml = require('gulp-webp-html');

let fonter = require('gulp-fonter');

let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');

let project_name = require("path").basename(__dirname);
let src_folder = "#src";

let path = {
	build: {
		html: project_name + "/",
		js: project_name + "/js/",
		css: project_name + "/css/",
		images: project_name + "/img/",
		fonts: project_name + "/fonts/",
		libs: project_name + "/libs/",
	},
	src: {
		favicon: src_folder + "/img/favicon.{jpg,png,svg,gif,ico,webp}",
		html: [src_folder + "/*.html", "!" + src_folder + "/_*.html"],
		js: src_folder + "/js/script.js",
		css: src_folder + "/scss/style.scss",
		images: [src_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}", "!**/favicon.*"],
		fonts: src_folder + "/fonts/*.ttf",
		libs: src_folder + "/libs/**/*.{js,css}",
	},
	watch: {
		html: src_folder + "/**/*.html",
		js: src_folder + "/**/*.js",
		css: src_folder + "/scss/**/*.scss",
		images: src_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
	},
	clean: "./" + project_name + "/"
};
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: "./" + project_name + "/"
		},
		notify: false,
		port: 3000,
	});
}
function html() {
	return src(path.src.html, {})
		.pipe(plumber())
		.pipe(fileinclude())
		.pipe(webphtml())
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream());
}
function css() {
	return src(path.src.css, {})
		.pipe(plumber())
		.pipe(
			scss({
				outputStyle: "expanded"
			})
		)
		.pipe(group_media())
		.pipe(
			autoprefixer({
				grid: true,
				overrideBrowserslist: ["last 5 versions"],
				cascade: true
			})
		)
		.pipe(webpcss(
			['.jpg', '.jpeg', '.png']
		))
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());
}
function js() {
	return src(path.src.js, {})
		.pipe(plumber())
		.pipe(fileinclude())
		.pipe(gulp.dest(path.build.js))
		.pipe(uglify(/* options */))
		.pipe(
			rename({
				suffix: ".min",
				extname: ".js"
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
function images() {
	return src(path.src.images)
		.pipe(newer(path.build.images))
		.pipe(
			imagemin([
				webp({
					quality: 75
				})
			])
		)
		.pipe(
			rename({
				extname: ".webp"
			})
		)
		.pipe(dest(path.build.images))
		.pipe(src(path.src.images))
		.pipe(newer(path.build.images))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3 // 0 to 7
			})
		)
		.pipe(dest(path.build.images))
}
function favicon() {
	return src(path.src.favicon)
		.pipe(plumber())
		.pipe(
			rename({
				extname: ".ico"
			})
		)
		.pipe(dest(path.build.html))
}
function libs() {
	return src(path.src.libs)
		.pipe(dest(path.build.libs));
}
function fonts_otf() {
	return src('./' + src_folder + '/fonts/*.otf')
		.pipe(plumber())
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(gulp.dest('./' + src_folder + +'/fonts/'));
}
function fonts() {
	src(path.src.fonts)
		.pipe(plumber())
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts))
		.pipe(browsersync.stream());
}
function fontstyle() {
	let file_content = fs.readFileSync(src_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(src_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(src_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
}
function cb() { }
function clean() {
	return del(path.clean);
}
function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.images], images);
}
let build = gulp.series(clean, fonts_otf, gulp.parallel(html, css, js, favicon, libs, images), fonts, gulp.parallel(fontstyle));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.js = js;
exports.favicon = favicon;
exports.libs = libs;
exports.fonts_otf = fonts_otf;
exports.fontstyle = fontstyle;
exports.fonts = fonts;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
