# 🚗 Car Rental Platform

Modern car rental platform built with Nuxt.js, Vue 3, and Firebase. Complete system for car listings, reservations, and user ratings with glassmorphism design.

## ✨ Features

- **Car Management**: Complete CRUD system for car listings
- **Status Workflow**: Draft → Published → Expired → Renewal cycle
- **Modern UI**: Glassmorphism design with responsive layout
- **Analytics**: View tracking and performance metrics
- **Authentication**: Firebase Auth integration
- **File Storage**: MinIO integration for car images
- **Real-time**: Live updates with Firebase Firestore

## 🏗️ Tech Stack

- **Frontend**: Nuxt.js 3, Vue 3, Tailwind CSS
- **Backend**: Firebase (Auth, Firestore, Functions)
- **Storage**: MinIO for file management
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ionrusu11/car-rental-app.git
   cd car-rental-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your Firebase and MinIO credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
car-rental-app/
├── components/          # Vue components
│   ├── car/            # Car-related components
│   ├── ui/             # Reusable UI components
│   └── auth/           # Authentication components
├── composables/        # Vue composables
├── pages/              # Nuxt pages (auto-routing)
├── server/             # Server-side API
├── middleware/         # Route middleware
└── utils/              # Utility functions
```

## 🎨 Design System

- **Glassmorphism**: Modern glass-like UI effects
- **Responsive**: Mobile-first approach
- **Accessibility**: ARIA compliant components
- **Dark/Light**: Theme support

## 📱 Key Pages

- **Homepage**: Car browsing with filters
- **My Cars**: Personal car management
- **Analytics**: Performance tracking
- **Car Details**: Detailed car information
- **Profile**: User management

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication, Firestore, and Storage
3. Add your configuration to `.env`

### MinIO Setup
1. Install MinIO server
2. Create access keys
3. Configure in `.env`

## 📊 Features Overview

### Car Management
- ✅ Add/Edit/Delete cars
- ✅ Image upload with MinIO
- ✅ Status management (Draft/Published/Expired)
- ✅ Auto-expiration after 5 days
- ✅ Renewal functionality

### Analytics
- ✅ View tracking
- ✅ Performance metrics
- ✅ Usage statistics
- ✅ User engagement data

### Authentication
- ✅ Email/Password login
- ✅ User profiles
- ✅ Protected routes
- ✅ Role-based access

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run generate
# Deploy dist/ folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Nuxt.js team for the amazing framework
- Firebase for backend services
- Tailwind CSS for styling utilities
- Vue.js community for inspiration

---

**Built with ❤️ by [ionrusu11](https://github.com/ionrusu11)**