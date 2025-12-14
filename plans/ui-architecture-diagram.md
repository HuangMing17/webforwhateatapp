# Sơ Đồ Kiến Trúc UI Upgrade

## 1. Component Hierarchy

```mermaid
graph TD
    A[Website Root] --> B[Navigation]
    A --> C[Hero Section]
    A --> D[Features Section]
    A --> E[How It Works]
    A --> F[Screenshots]
    A --> G[Testimonials]
    A --> H[CTA Section]
    A --> I[Footer]
    
    B --> B1[Logo]
    B --> B2[Menu Items]
    B --> B3[Theme Toggle]
    B --> B4[Mobile Toggle]
    
    C --> C1[Background Effects]
    C --> C2[Hero Content]
    C --> C3[Hero Image]
    C --> C4[Scroll Indicator]
    
    C1 --> C1A[Gradient Orbs]
    C1 --> C1B[Particles]
    
    C2 --> C2A[Badge]
    C2 --> C2B[Title]
    C2 --> C2C[Subtitle]
    C2 --> C2D[CTA Buttons]
    C2 --> C2E[Stats]
    
    D --> D1[Feature Card 1]
    D --> D2[Feature Card 2]
    D --> D3[Feature Card 3]
    D --> D4[Feature Card 4]
    
    D1 --> D1A[Icon Wrapper]
    D1 --> D1B[Title]
    D1 --> D1C[Description]
    D1 --> D1D[Hover Overlay]
    
    E --> E1[Timeline Item 1]
    E --> E2[Timeline Item 2]
    E --> E3[Timeline Item 3]
    E --> E4[Timeline Item 4]
    
    F --> F1[Swiper Container]
    F1 --> F1A[Slides]
    F1 --> F1B[Navigation]
    F1 --> F1C[Pagination]
    
    G --> G1[Testimonial Card 1]
    G --> G2[Testimonial Card 2]
    G --> G3[Testimonial Card 3]
    
    I --> I1[Wave Divider]
    I --> I2[Footer Columns]
    I --> I3[Social Links]
    I --> I4[Back to Top]
```

## 2. Animation Flow

```mermaid
sequenceDiagram
    participant User
    participant Page
    participant AOS
    participant JS
    
    User->>Page: Load Website
    Page->>JS: Initialize
    JS->>AOS: Setup Animations
    JS->>Page: Apply Theme
    
    User->>Page: Scroll Down
    Page->>AOS: Trigger Animations
    AOS->>Page: Fade In Elements
    
    User->>Page: Hover Feature Card
    Page->>JS: Mouse Enter Event
    JS->>Page: Apply 3D Transform
    
    User->>Page: Click Theme Toggle
    Page->>JS: Toggle Event
    JS->>Page: Switch Theme
    JS->>Page: Save to LocalStorage
    
    User->>Page: Click Mobile Menu
    Page->>JS: Toggle Menu
    JS->>Page: Slide In Animation
    
    User->>Page: Scroll to Top
    Page->>JS: Show Back to Top Button
    User->>Page: Click Back to Top
    JS->>Page: Smooth Scroll to Top
```

## 3. CSS Architecture

```mermaid
graph LR
    A[style.css] --> B[Variables]
    A --> C[Base Styles]
    A --> D[Components]
    A --> E[Utilities]
    A --> F[Animations]
    A --> G[Responsive]
    
    B --> B1[Colors]
    B --> B2[Typography]
    B --> B3[Spacing]
    B --> B4[Shadows]
    B --> B5[Transitions]
    
    C --> C1[Reset]
    C --> C2[Body]
    C --> C3[Container]
    
    D --> D1[Navigation]
    D --> D2[Hero]
    D --> D3[Features]
    D --> D4[Timeline]
    D --> D5[Carousel]
    D --> D6[Cards]
    D --> D7[Buttons]
    D --> D8[Footer]
    
    E --> E1[Display]
    E --> E2[Spacing]
    E --> E3[Text]
    E --> E4[Flex]
    E --> E5[Grid]
    
    F --> F1[Fade]
    F --> F2[Slide]
    F --> F3[Scale]
    F --> F4[Rotate]
    F --> F5[Bounce]
    
    G --> G1[Mobile]
    G --> G2[Tablet]
    G --> G3[Desktop]
    G --> G4[Large Desktop]
```

## 4. JavaScript Module Structure

```mermaid
graph TD
    A[main.js] --> B[Navigation Module]
    A --> C[Theme Module]
    A --> D[Animations Module]
    A --> E[Carousel Module]
    A --> F[Interactions Module]
    
    B --> B1[Sticky Header]
    B --> B2[Mobile Menu]
    B --> B3[Smooth Scroll]
    B --> B4[Active Link]
    
    C --> C1[Toggle Theme]
    C --> C2[Save Preference]
    C --> C3[Apply Theme]
    C --> C4[Detect System Theme]
    
    D --> D1[Initialize AOS]
    D --> D2[Scroll Animations]
    D --> D3[Number Counter]
    D --> D4[Text Reveal]
    
    E --> E1[Initialize Swiper]
    E --> E2[Autoplay Control]
    E --> E3[Navigation Setup]
    
    F --> F1[Button Ripple]
    F --> F2[Card Tilt]
    F --> F3[Back to Top]
    F --> F4[Form Validation]
```

## 5. Performance Optimization Flow

```mermaid
graph LR
    A[Page Load] --> B{Critical CSS?}
    B -->|Yes| C[Inline in Head]
    B -->|No| D[Defer Load]
    
    A --> E{Images?}
    E -->|Above Fold| F[Eager Load]
    E -->|Below Fold| G[Lazy Load]
    
    A --> H{JavaScript?}
    H -->|Critical| I[Load First]
    H -->|Non-Critical| J[Defer/Async]
    
    A --> K{Fonts?}
    K --> L[Font Display Swap]
    K --> M[Preload Critical]
    
    A --> N{Animations?}
    N -->|Heavy| O[Reduce on Low-Power]
    N -->|Light| P[Always Enable]
    
    C --> Q[First Paint]
    F --> Q
    I --> Q
    M --> Q
    
    Q --> R[Interactive]
    D --> R
    G --> R
    J --> R
```

## 6. Responsive Breakpoint Strategy

```mermaid
graph TD
    A[Mobile First Design] --> B[Base: 320px - 639px]
    B --> C[SM: 640px - 767px]
    C --> D[MD: 768px - 1023px]
    D --> E[LG: 1024px - 1279px]
    E --> F[XL: 1280px - 1535px]
    F --> G[2XL: 1536px+]
    
    B --> B1[Single Column]
    B --> B2[Hamburger Menu]
    B --> B3[Stacked Layout]
    
    C --> C1[Single Column]
    C --> C2[Larger Text]
    
    D --> D1[2 Columns]
    D --> D2[Desktop Menu]
    D --> D3[Side by Side]
    
    E --> E1[3-4 Columns]
    E --> E2[More Spacing]
    
    F --> F1[Max Width 1280px]
    F --> F2[Optimal Layout]
    
    G --> G1[Max Width 1536px]
    G --> G2[Extra Padding]
```

## 7. Dark Mode Implementation

```mermaid
stateDiagram-v2
    [*] --> CheckSystem: Page Load
    CheckSystem --> Light: System is Light
    CheckSystem --> Dark: System is Dark
    CheckSystem --> Saved: Has Saved Preference
    
    Saved --> Light: Preference is Light
    Saved --> Dark: Preference is Dark
    
    Light --> Dark: User Toggles
    Dark --> Light: User Toggles
    
    Light --> SaveLight: Save to LocalStorage
    Dark --> SaveDark: Save to LocalStorage
    
    SaveLight --> Light
    SaveDark --> Dark
    
    Light --> ApplyLight: Apply Light Variables
    Dark --> ApplyDark: Apply Dark Variables
```

## 8. User Interaction Journey

```mermaid
journey
    title User Experience Journey
    section Landing
      See Hero Animation: 5: User
      Read Hero Content: 4: User
      View Stats: 4: User
    section Explore
      Scroll to Features: 5: User
      Hover Feature Cards: 5: User
      Read Feature Details: 4: User
    section Learn
      Scroll to How It Works: 4: User
      View Timeline: 5: User
      Understand Process: 5: User
    section Visualize
      Browse Screenshots: 5: User
      Swipe Through Carousel: 5: User
      See App Interface: 5: User
    section Trust
      Read Testimonials: 4: User
      See Ratings: 5: User
      Build Confidence: 5: User
    section Convert
      See CTA Section: 5: User
      Click Download Button: 5: User
      Install App: 5: User
```

## 9. File Structure

```
website/
├── index.html (Updated)
├── privacy-policy.html (Style Updates)
├── terms-of-service.html (Style Updates)
├── support.html (Style Updates)
├── delete-account.html (Style Updates)
├── css/
│   └── style.css (Complete Rewrite)
├── js/
│   └── main.js (Enhanced)
├── images/
│   ├── app-mockup.png (New)
│   ├── avatars/ (New)
│   │   ├── user-1.jpg
│   │   ├── user-2.jpg
│   │   └── user-3.jpg
│   └── screenshots/ (Existing)
│       ├── screen-1.png
│       ├── screen-2.png
│       └── screen-3.png
└── plans/
    ├── ui-upgrade-plan.md
    └── ui-architecture-diagram.md
```

## 10. Implementation Timeline

```mermaid
gantt
    title UI Upgrade Implementation Timeline
    dateFormat YYYY-MM-DD
    section Phase 1: Foundation
    CSS Variables Setup           :a1, 2024-01-01, 2h
    Typography System            :a2, after a1, 1h
    Dark Mode Infrastructure     :a3, after a2, 2h
    
    section Phase 2: Navigation
    Navbar Upgrade               :b1, after a3, 3h
    Mobile Menu                  :b2, after b1, 2h
    Theme Toggle                 :b3, after b2, 1h
    
    section Phase 3: Hero
    Hero Structure               :c1, after b3, 2h
    Hero Animations              :c2, after c1, 3h
    Gradient Effects             :c3, after c2, 2h
    
    section Phase 4: Components
    Feature Cards                :d1, after c3, 3h
    How It Works Timeline        :d2, after d1, 3h
    Screenshots Carousel         :d3, after d2, 3h
    Testimonials Section         :d4, after d3, 2h
    CTA Section                  :d5, after d4, 2h
    Footer Upgrade               :d6, after d5, 2h
    
    section Phase 5: Polish
    Scroll Animations            :e1, after d6, 2h
    Micro-interactions           :e2, after e1, 3h
    Mobile Optimization          :e3, after e2, 3h
    Performance Tuning           :e4, after e3, 2h
    Testing & Bug Fixes          :e5, after e4, 3h
```

---

**Tổng thời gian ước tính:** Khoảng 45-50 giờ làm việc cho một developer có kinh nghiệm.

**Lưu ý:** Sơ đồ này mang tính chất tham khảo và có thể điều chỉnh tùy theo tốc độ implement thực tế.