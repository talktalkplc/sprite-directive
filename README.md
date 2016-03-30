# Sprite Directive

Our sprite directive is compatible with the standard background-image sprite
technique, however the image renders within an **img** tag and requires an
alt tag.

We have developed this directive with the concept that a sprite is still an image
and therefore should be equally as accessible as any other image on the page,
regardless of how we're choosing to deliver it.

## Use

```html
<sprite img=".your-sprite" alt="Text that conveys the meaning of the image"></sprite>
```
