This is my first React project made for learning purpose.
This React application allows users to manage their contacts, providing functionalities to add, display, and remove contacts, with persistent storage.

Functionalities

Users can add new contacts by entering their name and email address in the input fields provided. The "AddContact" component is used for this purpose which also ensures that no empty field is submitted.

I have used browser's local storage to store conatct data.

Different react Hooks are used.

"useState" hook is used to synchronized changes in contact list with local storage

Each contact is assigned a unique identifier generated using the uuid library.

Users can delete contact by clicking the delete icon.

The removeContact function filters out the contact with the specified ID and updates the contact list.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
