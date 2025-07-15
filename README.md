
# 📦 How to Consume the `emaratech-ui-css` Angular Library

This guide walks you through the steps required to install and use the `emaratech-ui-css` library in your Angular application — including how to access SCSS tokens and apply them in your components.

---

## ✅ 1. Install the Library

Use `npm` to install the library directly from the Git repository:

```bash
npm install git+https://github.com/fatmaamr22/rc-design-lib.git#master
```

---

## 🛠 2. Configure `angular.json` to Enable SCSS Token Imports

To allow your project to resolve SCSS paths from the library, you need to update `angular.json`:

```json
{
  "projects": {
    "your-app-name": {
      "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": [
                "node_modules/rc-token-lib/src/lib/scss/"
              ]
            }
          }
        }
      }
    }
  }
}
```


---

## 🎨 3. Import the SCSS Library Once in `styles.scss`

To expose all foundational tokens and styles globally:

```scss
// src/styles.scss
@forward "emaratech-ui-css";
```

This ensures all tokens and design foundations are available across the app.

---

## 🧩 4. Use Library Tokens in Component Styles

To use SCSS variables like colors, typography, and spacing in any component SCSS, import the library like this:

```scss
@use "emaratech-ui-css" as *;
```

Then you can directly use variables like:

```scss
.box3 {
  background-color: $violet-400;
  padding: $spacing-md;
}
```

---

## 🧪 5. Example – Using Library Utility Classes

You can also use predefined utility classes from the library directly in HTML:

```html
<p class="text-blue-primary text-xl-20px bold-700">
  Primary Bold 20px Text
</p>
```

---

## 🎯 6. Example – Using Library Variables in Component SCSS

Here’s a full example of how to style an element using SCSS tokens from the library:

```scss
@use "emaratech-ui-css" as *;

.box3 {
  background-color: $violet-400;
}
```


---

## ⚠️ Final Precaution

After completing all setup steps:

- 🔄 **Rebuild your Angular project** to ensure SCSS tokens and styles are correctly applied.
- ▶️ **Serve the project again using** `ng serve` or your preferred method.
- 👀 **Observe the changes** to verify the library styles and tokens are working as expected.

> This helps avoid issues caused by cached builds or incomplete style injection.
