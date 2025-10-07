# GlobalLogistics Pro - Customs Clearance & Container Shipping Website

A modern, professional website for customs clearance and container shipping services built with Next.js 14, featuring interactive tracking, quote calculators, and comprehensive service information.

## 🚀 Features

### Interactive Components
- **Real-time Shipment Tracking** - Track shipments with live status updates and timeline visualization
- **Quote Calculator** - Multi-step form with dynamic pricing and service comparison
- **Service Portfolio** - Interactive service cards with detailed information and process flows
- **Contact Forms** - Smart forms with validation and service-specific routing

### Design & User Experience
- **Modern Design** - Professional maritime-inspired color palette and typography
- **Responsive Layout** - Mobile-first design optimized for all devices
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Accessibility** - WCAG compliant with proper contrast ratios and keyboard navigation

### Technical Features
- **Next.js 14** - Latest React framework with App Router
- **TypeScript Ready** - Full TypeScript support for type safety
- **Performance Optimized** - Image optimization, code splitting, and lazy loading
- **SEO Friendly** - Meta tags, structured data, and semantic HTML
- **Progressive Enhancement** - Core functionality works without JavaScript

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Homepage
│   │   ├── layout.js          # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── services/          # Services page
│   │   ├── tracking/          # Shipment tracking page
│   │   └── contact/           # Contact & quote page
│   ├── components/            # React components
│   │   ├── layout/           # Layout components (Header, Footer)
│   │   ├── home/             # Homepage components
│   │   └── ui/               # Reusable UI components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   └── data/                 # Static data files
├── public/                   # Static assets
│   └── images/              # Images and media files
└── docs/                    # Documentation
```

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd globallogistics-pro
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design System

### Colors
- **Primary Navy**: `#1e3a8a` - Trust, stability, professionalism
- **Ocean Blue**: `#3b82f6` - Interactive elements, CTAs
- **Steel Gray**: `#64748b` - Secondary text, borders
- **Success Green**: `#10b981` - Positive status indicators
- **Warning Amber**: `#f59e0b` - Attention, pending states

### Typography
- **Primary Font**: Inter (Sans-serif) - Clean, modern, highly readable
- **Secondary Font**: JetBrains Mono (Monospace) - Technical data, tracking numbers

### Components
- **Buttons**: Primary, secondary, and outline variants with hover states
- **Cards**: Service cards, feature cards, and info cards with consistent styling
- **Forms**: Input fields, selects, textareas with validation states
- **Navigation**: Responsive header with mobile menu and smooth scrolling

## 📱 Pages & Features

### Homepage
- Hero section with animated background and typewriter effect
- Interactive shipment tracking widget
- Service overview with hover effects
- Quote calculator with multi-step form
- Statistics and testimonials sections
- Client logos and trust indicators

### Services Page
- Detailed service information with process flows
- Interactive service navigation
- Benefits and pricing information
- CTA sections for conversions

### Tracking Page
- Real-time shipment tracking interface
- Timeline visualization of shipment progress
- Cargo details and contact information
- Sample tracking data for demonstration

### Contact Page
- Multi-tab contact forms (quote and general inquiry)
- Office location information
- Contact methods and business hours
- FAQ section with common questions

## 🚀 Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Route-based code splitting for faster initial loads
- **Font Optimization**: Preloaded fonts with display: swap
- **Analytics Ready**: Google Analytics and conversion tracking setup
- **PWA Ready**: Service worker and manifest file structure

## 🛠 Technologies Used

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - Latest React with concurrent features
- **Tailwind CSS** - Utility-first CSS framework

### Animation & Interaction
- **Framer Motion** - Smooth animations and transitions
- **Typed.js** - Typewriter effects for hero text
- **React Hook Form** - Form handling and validation

### Data Visualization
- **ECharts.js** - Charts and data visualization
- **Leaflet** - Interactive maps for location services

### UI Components
- **Splide.js** - Carousels and sliders
- **Lucide React** - Consistent icon library

## 📊 Business Features

### Logistics Specific
- Shipment tracking with real-time updates
- Multi-modal service options (Sea, Air, Land)
- Customs clearance information
- Container shipping details
- Quote calculation system

### Conversion Optimized
- Clear value propositions
- Trust indicators and certifications
- Client testimonials and case studies
- Multiple contact methods
- Urgency-based pricing options

## 🔧 Customization

### Branding
- Update colors in `tailwind.config.js`
- Replace logo in Header component
- Modify typography in `globals.css`
- Update company information in layout files

### Content
- Replace images in `/public/images/`
- Update service information in components
- Modify testimonials and client data
- Customize contact information

### Functionality
- Connect to real tracking API
- Integrate with CRM system
- Add payment processing
- Implement user authentication

## 📈 SEO & Marketing

### SEO Features
- Meta tags and Open Graph tags
- Structured data markup
- XML sitemap generation
- Canonical URLs and redirects

### Analytics
- Google Analytics integration ready
- Conversion tracking setup
- Form submission tracking
- User behavior analytics

## 🔒 Security

- Input validation and sanitization
- HTTPS enforcement
- Content Security Policy headers
- Rate limiting for forms
- Secure cookie handling

## 📞 Support

For questions, issues, or custom development needs:

- **Email**: support@globallogisticspro.com
- **Phone**: +1 (310) 555-0123
- **Documentation**: See `/docs` folder for detailed guides

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the logistics industry by GlobalLogistics Pro.