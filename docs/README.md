# Documentation

## Typescript

### Basic Types - [Ref](https://www.typescriptlang.org/docs/handbook/basic-types.html)
```js
# Boolean 
let isDone: boolean = false;

# Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

# String 
let color: string = "blue";

# Array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

# Tuple 
let x: [string, number];

# Enum 
enum Color {
  Red,
  Green,
  Blue,
}

```

## The Main Styles: Interface vs Type - [Ref](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript)
### Interface Style
```js
interface {
    x: number
    y: number
}

interface SetPoint {
  (x: number, y: number): void;
}

```

### Type Alias Style

```js
type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;

```

### Type Alias Style Extras
```js
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

```


## Tailwind 
### Installation Guide [Official](https://tailwindcss.com/docs/installation) / [Nuxt Module](https://tailwindcss.nuxtjs.org/)

### Editor Setup [Ref](https://tailwindcss.com/docs/editor-setup)

### Core Concepts [Ref](https://tailwindcss.com/docs/utility-first)

#### Utility First 
"Normal"
```svelte
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

Tailwind Style 
```svelte
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```


In essence, Tailwind provides utility classes like: 

- flexbox
- padding
- margin 
- max-width
- background color
- border radius 
- box-shadow
- width
- height 
- space-between 
- font size, text color and font weights 
- and many many more


##### Why Bother?

- no need to think of class names 
- css keeps growing. With the utilities approach, you just reuse utilities 
- no fear when making changes to your css. Tailwind classes are local, whereas css is global 

##### Inline Styles are the same...no?
- Tailwind gives design constrants and a design system. Example p-1 doesnt mean padding with 1 px, it means 0.25rem (4px)
- Responsive design. Tailwind has responsive utilities so no need for media queries 
- Hover, focus and other states. Inline styles can’t target states like hover or focus,

#### Hover, Focus and Other States [Ref](https://tailwindcss.com/docs/hover-focus-and-other-states)

Refer to docs :-)

#### Responsive Design 

| Breakpoint prefix | Minimum width | CSS                                |
|-------------------|---------------|------------------------------------|
| sm                | 640px         | @media (min-width: 640px) { ... }  |
| md                | 768px         | @media (min-width: 768px) { ... }  |
| lg                | 1024px        | @media (min-width: 1024px) { ... } |
| xl                | 1280px        | @media (min-width: 1280px) { ... } |
| 2xl               | 1536px        | @media (min-width: 1536px) { ... } |
|                   |               |                                    |

```vue
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
```

#####  Mobile First 
'Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the sm: prefixed version. Don’t think of sm: as meaning “on small screens”, think of it as “at the small breakpoint“.'

```vue
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```

#### Reusing Styles 

##### Multi Cursor Editing 
##### Loops
##### Defining Components 


### It's just CSS! 

Check out their [docs](https://tailwindcss.com/docs) 

And just do Ctrl + K and whatever CSS property you are interested in :-)

## Nuxt - [Ref](https://nuxt.com/)

[Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode) - Quality of life plugin for Nuxt
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) and [Volar Takeover Mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode) - Language support for Vue 3 with Typescript

### What is it? - [Ref](https://nuxt.com/docs/getting-started/introduction)

### SSR Simplified - [Ref](https://nuxt.com/docs/guide/concepts/rendering)

#### Universal Rendering
In essence, you get a full HTML page on page load because Nuxt ran the JS (Vue.js) code in a server environment. Then...the client (browser) downloads the JS and the client (browser) interprets it again and Vue.js takes control of the document and enables interactivity 

Making the static HTML page interactive is called "Hydration"

![SSR](./images/ssr.svg) 

#### Client Side Rendering 
![CSR](./images/csr.svg) 

### Writing SSR Friendly Code [Ref](https://vuejs.org/guide/scaling-up/ssr.html#writing-ssr-friendly-code)

#### Component Lifecycle
- Since there are no dynamic updates, lifecycle hooks such as onMounted or onUpdated will NOT be called during SSR and will only be executed on the client.
- You should avoid code that produces side effects that need cleanup in setup() or the root scope of <script setup>. An example of such side effects is setting up timers with setInterval
- In client-side only code we may setup a timer and then tear it down in onBeforeUnmount or onUnmounted

#### How to run on only the server 

```vue
if(process.server) {...}
```

#### How to Run only on the client 
```vue
if(process.client) {...}
# onMounted has the added benefit that it guarentees  that the DOM is available
onMounted(()=> {....})
```

#### Access to Platform-Specific API

- Universal code cannot assume access to platform-specific APIs, so if your code directly uses browser-only globals like **window** or **document**, they will throw errors when executed in Node.js, and vice-versa.


### Components [Ref](https://nuxt.com/docs/guide/directory-structure/components)

### Composables [Ref](https://nuxt.com/docs/guide/directory-structure/composables) and [Composables in Depth](https://vuejs.org/guide/reusability/composables.html) and [VueUse](https://vueuse.org/) / [VueUse Install](https://vueuse.org/guide/#nuxt)

### Layouts [Ref](https://nuxt.com/docs/guide/directory-structure/layouts) and [Slots](https://vuejs.org/guide/components/slots.html)

### Pages [Ref](https://nuxt.com/docs/guide/directory-structure/pages)

### Utils [Ref](https://nuxt.com/docs/guide/directory-structure/utils)

### Stores [Setup Stores](https://pinia.vuejs.org/core-concepts/#Setup-Stores) and [Pinia Install](https://pinia.vuejs.org/ssr/nuxt.html)

### Nuxt Core Concepts 

#### Data Fetching - [Ref](https://nuxt.com/docs/getting-started/data-fetching)

#### SEO - [Ref](https://nuxt.com/docs/getting-started/seo-meta)

#### Deployments - [Ref](https://nuxt.com/docs/getting-started/deployment)

### Cool Packages and Modules [Ref](https://nuxt.com/modules)

#### Image Optimization - [Ref](https://image.nuxtjs.org/)

#### Icon - [Ref](https://nuxt.com/modules/icon)

#### DaisyUI - [Ref](https://daisyui.com/)

#### Tailwind Typography - [Ref](https://tailwindcss.com/docs/typography-plugin)