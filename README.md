![Adevinta](_src/assets/images/adevinta-nuevo-logo.jpg)

# Adevinta Frontend Challenge

## Instructions

With the next markup, you must create an accordion (JS / CSS) show only the contents of a section at a time. Sure to follow the SUIT convention when working with CSS.

```
<dl>
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 2</dt>
  <dd>
    <p>Section 2 Content...</p>
  </dd>
  <dt>Section 3</dt>
  <dd>
    <p>Section 3 Content...</p>
  </dd>
</dl>
```

### Conditions

- Use Sass for generate CSS
- Use ES6
- Use only Vanilla JS, without any JS framework
- Generate gh-page for publish

### Bonus

- Add new section with Ajax content

## Requirements

You have to install [Node.js](https://nodejs.org/) & [Gulp](https://gulpjs.com)

1. Download or clone the repository
2. Install local dependencies with `npm install`
3. Launch the kit with `gulp`
4. If you have some problems, install `gulp cli` with `npm install --global gulp-cli`

### Web server for the development

```
npm start
```

or in the project:

```
gulp
```

Launch a webserver with BrowserSync & some watchers are waiting for the files SCSS/JS/HMTL, in the folder **public/**, for update the browser when you want.

### Ready version for upload to production

For generate the foldes for production, you have to do this:

```
npm run docs
```

or in the project:

```
gulp docs
```

---

With this command you can generate the ready files for production and automatically upload to GitHub:

```
npm run push-docs
```

## Project structure

```
/
`- _src
   |- api
   |  |- data.json
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   `- templates
      `- partials

```

## Development with:

- HTML
- Sass
- JavaScript
- Gulp task automation
