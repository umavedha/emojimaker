# Project Overview
Use this guide to build a web app where users can give a text prompt to generate emoji using model hosted
on Replicate.
 
# Feature requirements
- We will use Next.js, Shadcn, Supabase, Clerk
- Create a form where users can enter their prompt and by clicking on a button should call the replicate
model to generate emoji
- Have a nice UI & Animation when the emoji is blank or generating
- Display all the images ever generated in the grid
- When hover on each emoji image, an icon for like and download should be shown.
 
# Relevant Docs
# How to use replicate emoji generate model

Set the REPLICATE_API_TOKEN environment variable

export REPLICATE_API_TOKEN=r8_Bt0**********************************

Visibility

Copy
Learn more about authentication

Install Replicate’s Node.js client library

npm install replicate

Copy
Learn more about setup
Run 0xtuba/archillect-lora using Replicate’s API. Check out the model's schema for an overview of inputs and outputs.

import Replicate from "replicate";
const replicate = new Replicate();

const input = {
    prompt: "small empty room with many computer screens in the style of ARCHLLCT, grayscale"
};

const output = await replicate.run("0xtuba/archillect-lora:599ad8df6667caa3ab865345dcb0f98b673a4e4505a8ffc2eea52bd8ba152b42", 

input:{
        width:1024,
        height:1024,
        prompt:"A TOK emoji of a man",
        refine:no_refiner,
        scheduler:K_EULER,
        lora_scale:0.6,
        num_outputs:1,
        guidance_scale:7.5,
        apply_watermark:false,
        high_noise_frag:0.8,
        negative_prompt:"",
        prompt_strength:0.8,
        num_inference_steps:50
    }

);
console.log(output)

# Current file structure

.
├── app
│   ├── fonts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── components
│       └── ui
│           ├── button.tsx
│           ├── card.tsx
│           └── input.tsx
├── lib
│   └── utils.ts
├── node_modules
├── requirements
│   └── frontend-instructions.md
├── .env.local
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

# Rules
- All new components should go in ./components and be named like example-component.tsx unless otherwise specified
- All pages go in emojimaker/app