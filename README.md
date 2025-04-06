# 🌍 Multi-Country Sign-Up Flow (React + Zustand + Zod)

A dynamic, multi-step sign-up form built with React, Zustand for state management, and Zod for schema-based validation. The form dynamically changes fields per country and includes validation, image upload, local storage persistence, and navigation across steps.

---

## 🚀 Features

✅ Multi-step form  
✅ Dynamic fields based on country  
✅ Real-time validation (Zod + react-hook-form)  
✅ Local storage persistence (Zustand + middleware)  
✅ Image upload (with size/dimension limit)  
✅ Step navigation with progress control  
✅ Reusable form components  
✅ Country-specific schemas and validation  
✅ Clean Git history for each implementation step

---

## 🛠 Tech Stack

- React + TypeScript
- Zustand (with `persist`)
- React Hook Form
- Zod (for schema validation)
- Tailwind CSS (optional styling)
- Vite

---

## 🗂️ Project Structure

```
src/
├── assets/ # Static assets (images, fonts, etc.)
├── components/
│ ├── common/ # Reusable form components
│ │ ├── ArrowButton.tsx
│ │ ├── FormError.tsx
│ │ ├── FormField.tsx
│ │ ├── FormLayout.tsx
│ │ └── ImageUploader.tsx
│ └── signup/ # Step-wise form logic
│ ├── CountrySelector.tsx
│ ├── DynamicFormStep.tsx
│ ├── ReviewSubmit.tsx
│ ├── StepIndicator.tsx
│ └── UploadImage.tsx
├── config/
│ └── countryFormConfig.ts # Country-specific form field and validation config
├── pages/
│ └── SignUp.tsx # Page wrapper for the sign-up flow
├── store/
│ └── signupFormStore.ts # Zustand global state store
├── utils/
│ └── getStepSchema.ts # Schema builder from config
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/climax-coder/multi-country-signup.git
cd multi-country-signup

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# or
npm start
```
