# content-visibility

Enables user agent to skip element's rendering work, including layout and painting, untill needed 

- initial load faster
- faster interaction on screen content

### Key Concepts

> CSS Containment

- Isolate parts of DOM subtree so browser can optimise rendering by ignoring external state
- ```contain``` property tells type of containment (size, layout, style, paint)

> Containment types

- ```size``` - The element’s box can be sized without inspecting descendants
- ```layout``` -  inner layout does not affect external layout
- ```style``` - global sytles in it are contained
- ```paint``` - Descendants cannot visually overflow the container

#### content-visibility

- contains containment automatically for auto - enables layout , style, paint containment
- when off screen , size containment to skip rendering descendants,  as element comes near view port it resumes - JIT

## Benefits
> Rendering Time  Saving 

in blogs etc

> Assessibility 

unlike  visibility hidden, these are in DOM and in assessibilty tree. So still searchable and navigable even if off screen 

use  aria-hidden true to prevent clutter - ie to use it like display hidden

> contain-intrinsic-size

to avoid layout jumps due to 0 height of off screen. It tells placeholders size to occupy space

> content-visibility :   hidden

provides control to keep content unrendered but cached for quick revel, useful for vertual scollers or SPA, differing from display none or visibilty hidden


## Note

```display : none```

- when element completely removed from layout and space should collapse

```visibility : hidden```

- for temporary hiding animations, or element space need to mantained

```content-visibility: hidden or auto```

- for performance optimisation of large , off-screen content


 