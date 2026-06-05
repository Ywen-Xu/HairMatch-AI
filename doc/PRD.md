# HairMatch AI V1.0 PRD

## Product Overview

HairMatch AI is a web application that allows users to preview different hairstyles on themselves in real time using their webcam.

The product helps users decide which hairstyle suits them before visiting a barber or salon.

The first version focuses on:

1. Real-time webcam preview
2. Hairstyle switching
3. Automatic hairstyle fitting
4. Hair color modification
5. Screenshot export

Advanced hair editing and hairstyle generation are intentionally excluded from V1.

---

# Product Goal

Allow users to answer the following question within 30 seconds:

"Which hairstyle looks best on me?"

---

# Target Users

### Primary Users

People considering:

* A haircut
* A hairstyle change
* Hair dyeing

### Typical Use Cases

* Trying different hairstyles before visiting a barber
* Comparing short and long hairstyles
* Testing different hair colors

---

# Core User Flow

1. User opens website
2. User grants webcam permission
3. Live camera feed appears
4. User selects a hairstyle
5. Hairstyle automatically fits user's head
6. User changes hair color
7. User captures screenshot
8. User saves image

---

# Functional Requirements

## Module 1: Webcam Preview

### Description

Display real-time webcam feed.

### Requirements

* Request camera permission
* Show live video
* Support desktop browsers
* Support mobile browsers

### Acceptance Criteria

* Camera opens within 3 seconds
* Video runs at minimum 20 FPS

---

## Module 2: Face Tracking

### Description

Detect user's face and head position.

### Requirements

Track:

* Face center
* Head width
* Head height
* Head rotation

### Acceptance Criteria

* Hairstyle follows head movement
* Hairstyle remains aligned during moderate movement

---

## Module 3: Hairstyle Library

### Description

Provide selectable hairstyle templates.

### Layout

Left Side:

Male Hairstyles

Right Side:

Female Hairstyles

### Initial Hairstyles

Male:

* Buzz Cut
* Crew Cut
* Textured Crop
* Korean Two-Block
* Wolf Cut

Female:

* Long Straight Hair
* Wavy Hair
* Bob Cut
* Curtain Bangs
* Shoulder-Length Hair

### Acceptance Criteria

* Clicking hairstyle immediately updates preview
* Switching takes less than 500ms

---

## Module 4: Hairstyle Overlay

### Description

Place selected hairstyle on user's head.

### Requirements

* Scale automatically
* Rotate with head movement
* Maintain natural position

### Acceptance Criteria

* Hairstyle remains visually attached to head
* No major clipping during normal movement

---

## Module 5: Hair Color Editor

### Description

Allow users to recolor selected hairstyle.

### Preset Colors

* Black
* Dark Brown
* Light Brown
* Blonde
* Silver
* Blue
* Pink

### Custom Colors

Color Picker Component

Support:

* HEX
* RGB

### Acceptance Criteria

* Color changes instantly
* No page refresh required

---

## Module 6: Screenshot Export

### Description

Save current hairstyle preview.

### Requirements

Capture:

* Webcam frame
* Hairstyle overlay
* Selected color

### Output

PNG

### Acceptance Criteria

* Download begins within 2 seconds
* Export resolution at least 1080p

---

# Non-Functional Requirements

## Performance

* Initial load under 5 seconds
* 20+ FPS on modern laptop
* 15+ FPS on modern mobile device

---

## Browser Support

Desktop:

* Chrome
* Edge
* Safari

Mobile:

* Chrome Android
* Safari iPhone

---

## Privacy

* No image upload required
* Camera processing runs locally
* User images are not stored

---

# Excluded From V1

The following features are intentionally excluded:

### Hair Painting Tool

Users cannot draw new hair.

### Partial Hair Coloring

No highlight or balayage editing.

### Hair Texture Editing

No curliness adjustment.

### AI Hairstyle Generation

No text-to-hairstyle generation.

### Undo / Redo System

Not required in V1.

### User Accounts

Not required in V1.

---

# Suggested Tech Stack

Frontend:

* Next.js
* React
* TypeScript

Face Tracking:

* MediaPipe FaceMesh

Rendering:

* Three.js
* React Three Fiber

Styling:

* TailwindCSS

State Management:

* Zustand

Deployment:

* Vercel

---

# Success Metrics

Metric 1:
User can try first hairstyle within 10 seconds.

Metric 2:
Average session duration > 2 minutes.

Metric 3:
User tries at least 5 hairstyles per session.

Metric 4:
Screenshot export rate > 20%.

---

# Future Versions

V2:

* Partial hair coloring
* Highlights
* Gradient coloring

V3:

* Hairstyle parameter adjustment
* Length slider
* Volume slider
* Bangs slider

V4:

* AI hairstyle generation
* AI hairstyle recommendation
* Face-shape analysis
* Salon recommendation
