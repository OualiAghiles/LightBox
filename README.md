# Carousel / Slider  responsive

> This plugin made with 
>    * Vanilla JavaScript
>    * Css Framwork tailwindCSS (not important)
>    * Sass Preprocessor
>    * Pug template engine
>    * Gulp as task runner
---

###  Required
* nodejs

>
>    visite [Nodejs](http://nodejs.org/) site to install
>

* Gulp in global

```
$ npm install gulp-cli -g

```


### Installation


```
$ cd 'to the folder cloned' 

$ npm i 
or
$ yarn

```



### Developpement Serve

```
$ gulp

```


### Serve the Fully Built & Optimized Site

```
$ gulp build

```
---
Structure on source file
------
>    visite [body scroll lock](https://github.com/willmcpo/body-scroll-lock#readme) site to details for the plugin

> src
>    - assets
>        1. img
>            - chevron.svg
>            - close.svg
>            - loader.svg
>        2. styles
>            - mainb.sass
>            - main.sass
>            - sass
>               - lightbox.sass (***minimum style to make the LightBox work correctly***)
>        3. scripts
>            - app.js
>            - plugins
>               - lightbox.js
>               - vendor
>                   * body-scroll-lock.js 
>            - touchMobile.js
>    - template
>       - index.pug    
>       - slider.pug

How to user
------

### Add link to the files
Add the Lightbox plugin js to the html file

Add the Lightbox plugin css to the html file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- styles of the slider -->
    <link rel="stylesheet" href="assets/styles/main.css">
    
    <!-- javascript plugin of the slider -->
    <script src="assets/scripts/slider.js" type="module" defer></script>
</head>
<body>
    
</body>
</html>

```
---
### Add link to the files
Minimal html structure

```HTML
<section>
    <!-- the root element of the LightBox class="gallerie" -->
    
    <div class="flex flex-wrap gallerie">
          <div class="w-full px-2">
            <h1 class="text-4xl text-blue-600 font-sans font-medium uppercase">Lightbox</h1>
          </div>
          
          <!-- the plugin check all links the href finish with png/jpg/jpeg/svg inside the gallerie -->
          <div class="card w-full px-2 mb-2 sm:w-1/2 md:w-1/3 xl:w-1/4"><a href="https://picsum.photos/id/237/800/800.jpg"><img src="https://picsum.photos/id/237/800/800" alt="" srcset=""></a></div>


          <div class="card w-full px-2 mb-2 sm:w-1/2 md:w-1/3 xl:w-1/4">...</div>
          <div class="card w-full px-2 mb-2 sm:w-1/2 md:w-1/3 xl:w-1/4">..</div>
          <div class="card w-full px-2 mb-2 sm:w-1/2 md:w-1/3 xl:w-1/4">..</div>
          <div class="card w-full px-2 mb-2 sm:w-1/2 md:w-1/3 xl:w-1/4">..</div>
          <div class="card w-full px-2 mb-2 sm:w-1/2 md:w-1/3 xl:w-1/4">..</div>
          <div class="card w-full px-2 mb-2 sm:w-1/2 md:w-1/3 xl:w-1/4">..</div>
          <div class="card w-full px-2 mb-2 sm:w-1/2 md:w-1/3 xl:w-1/4">..</div>
          
        </div>
</section>

```
---

### Init the plugin

Add script tag on html and call the class

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    ...
</head>
<body>
    ...

    <!-- call and init the class -->
    <script>
        // wait until the dom ready
        document.addEventListener('readystatechange', () => {
            // init the lightbox
            Lightbox.init()

        })
    </script>
</body>
</html>
````
---

##### Version
1.0

##### License
MIT