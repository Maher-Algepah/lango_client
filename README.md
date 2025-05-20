# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Instalation
1. Clone the repo
2. npm i
3. you will need .env file, since it's a demo I can share it here:
```PORT=3000
MONGODB_URI=mongodb+srv://engouser:uc9O045mDcg5cmYF@cluster0.o2btz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=lango_super_secret_key_2024
JWT_EXPIRE=30d
```
4. npm run dev

You should see the following output in terminal:
![image](https://github.com/user-attachments/assets/de5dacd0-60c2-4ee9-8f33-ce37446a521d)
