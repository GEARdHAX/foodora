# Sidebar App

## Features

- **Dynamic Sidebar:** Expands on hover and collapses on mouse leave.
- **Recipe Favorites:** Displays favorite recipes stored in localStorage with vegetarian filter toggle.
- **Interactive UI:** Modern design with hover effects, icons, and smooth transitions.
- **Responsive Routing:** Easy navigation to Home, Search, Favorite, and Feedback sections.

## Tech Used and Main Concepts

- **React.js:** Component-based architecture for dynamic rendering.
- **React Router:** Enables seamless navigation between pages.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Fetch API:** To interact with the Spoonacular API for recipe data.
- **LocalStorage:** To store and retrieve user-selected favorite recipe IDs.
- **State Management:** `useState` and `useEffect` hooks for managing component states and API calls.

## API Description

- **Spoonacular API**:
  - **Endpoint:** `https://api.spoonacular.com/recipes/informationBulk`
  - **Key Parameters:**
    - `apiKey`: Authorization for API requests.
    - `ids`: Comma-separated recipe IDs fetched from localStorage.
    - `diet`: Optional parameter for vegetarian filtering.
  - **Response:** Returns an array of recipe objects containing details like title, image, and dietary information.

## Links

- **[Click here to visit the site](https://geardhax.github.io/foodora/)**
- **[Buy Me a Coffee](https://www.buymeacoffee.com/gearhax_yt)**

## Support the Project

Add the following widget code snippet to your site to include a "Buy Me a Coffee" button:

```html
<script
 data-name="BMC-Widget"
 data-cfasync="false"
 src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
 data-id="gearhax_yt"
 data-description="Support me on Buy me a coffee!"
 data-message=""
 data-color="#FF813F"
 data-position="right"
 data-x_margin="0"
 data-y_margin="28"
></script>
```
