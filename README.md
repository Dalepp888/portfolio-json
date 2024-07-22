# Template

## Example deploy

https://dalepp.netlify.app/

## Getting Started

```bash
npm install
npm run dev
# or
yarn
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

## How to use

You only need to work in the `data.json` file.
The file is inside the src/api/data.json folder.

## First section

The first section will have everything that has to do with personal data. You can modify it in the following properties. 
You can add the cover and profile photos to the profile folder inside the public folder, or you can use the direct internet link. 
Inside public/network, there are photos of social media icons that you can add, or you can download the ones you need and put them in that folder.
You should go to public/document and place your CV document there. Then, modify the path accordingly, and you'll be done with this section.

    "profile": Profile picture
    "cover": Cover photo
    "name": your name
    "user": your username
    "date": Date of creation
    "networks": Photo from networks and link
    "cv": CV Link

For example:

```js
 {
    "profile": "/profile/profile.png",
    "cover": "https://profile-assets.showwcase.com/5/1680918270029-IMG_0115.jpg",
    "name": "David Alejandro Pèrez",
    "user": "@dalepp6",
    "date": "July 2024",
    "networks": [
        {"photo": "/network/twitter.png", "link": "https://erickdevup.netlify.app/"},
        {"photo": "/network/linkedin.png", "link": "https://erickdevup.netlify.app/"},
        {"photo": "/network/github.png", "link": "https://erickdevup.netlify.app/"}
    ],
    "cv": "/document/CVDalepp.pdf"
}
```

### Second Section

Just fill in info with a little personal information

For example:

```js
    {
      "info": "Hello! My name is David, my specialty is frontend development. I'm very good at minimalist design, although I like to go a little further. If you're looking for a frontend developer, look no further. I'm the person you need! "
    }
```

### Third section

In this section, you will provide information about your work experience. The image you use depends on the company or the job you did. You can save the image in public/enterprises, and the link is for learning more about your work at that company.

For example:

```js
"experience": [
        {"occupation": "Web Developer", 
        "date": "December 2023 - Present", 
        "img":"/enterprises/freelance.png", 
        "link": , 
        "name": "Freelancer"}
    ]
```

### Section Four

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
Fill in the fields as in the following example

## Learn More
```js
    "education": "Computer Engineering",
    "school": "UNICA",
    "dateschool": "september 2022 - Present",
```

## Fifth Section

In this section, you can include as many projects as you want. The first thing to keep in mind is a photo of the project, which you can save in public/project. Then, you should provide the link to your project so it can be viewed, and lastly, a brief description

For example:

```js
    "projects":[
        {"img": "/project/BlogD.PNG", 
        "link": "https://historydalepp.netlify.app/",
        "name":"BlogDalepp",
        "description":"Here I showcase many of my experiences as a programmer and I give you some advice based on my mistakes and successes"},
        {"img": "/project/plantilla.png", 
        "link": , 
        "name":"Template",
        "description":"Create your own portfolio easily: beautiful, simple, and without leaving out any important information."}
    ]
```

## Sixth Section

Finally, let's list our skill stack. Inside public/stack, there are many programming logos that you can use in this section, but if you need any others, you can add them

For example:

```js
    "photostack": ["/stack/html.png", 
                   "/stack/css.png", 
                   "/stack/js.png", 
                   "/stack/react.png", 
                   "/stack/tailwind.png", 
                   "/stack/nextjs.png", 
                   "/stack/ts.png"
    ]
```

## Seventh Section

In this section we are going to change the SEO ofyour portfolio. for that I created an SEO section in jfor that I created an SEO section in json

For example:

```js
    "SEO": {
            "title": "David Alejandro",
            "author": "David",
            "keywords": ["Template de portafolio", "Personalizable", "Fácil de usar", "Next.js", "Crear portafolio",
                         "Easy setup", "Portafolio profesional", "Desarrolladores"],
            "description": "Crea tu portafolio profesional con nuestro template fácil de personalizar. Desarrollado con Next.js y Tailwind CSS, integra tus datos 
                            rápidamente usando JSON. Ideal para desarrolladores y diseñadores."
    }    ]
```

In this section we are going to change the SEO ofyour portfolio. for that I created an SEO section in jfor that I created an SEO section in json
