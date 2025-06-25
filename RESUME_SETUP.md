# Resume Setup Instructions

## 📄 Adding Your Resume

To add your resume to the portfolio, you have two options:

### Option 1: PDF Resume (Recommended)
1. **Save your resume as `resume.pdf`**
2. **Place it in the `public` folder**: `/public/resume.pdf`
3. The resume will be viewable in the modal and downloadable

### Option 2: Image Resume (Alternative)
1. **Save your resume as `resume.jpg` or `resume.png`**
2. **Place it in the `public` folder**: `/public/resume.jpg`
3. **Update ResumeModal.tsx**:
   - Comment out the PDF iframe section
   - Uncomment the image section
   - Update the image path if needed

## 🎯 Current Features

### Resume Modal Includes:
- **Modal View**: Click resume icon to open modal
- **PDF Viewer**: Embedded PDF viewer (if using PDF)
- **Download Button**: Direct download functionality
- **Responsive Design**: Works on all screen sizes
- **Keyboard Navigation**: ESC to close, Tab navigation
- **Accessibility**: ARIA labels, screen reader friendly

### Resume Icon:
- **Document Icon**: Clean document icon in the dock
- **Hover Effects**: Same magnification as other dock icons
- **Focus States**: Keyboard accessible with orange focus ring

## 🔧 File Structure
```
public/
├── resume.pdf          # Your resume file (PDF format)
└── resume.jpg          # Alternative: image format

src/components/
├── ResumeModal.tsx     # Modal component for viewing resume
├── Icon.tsx            # Updated with resume icon
└── DockSkeleton.tsx    # Updated skeleton for 5 icons
```

## 📱 Usage
1. **Click** the document icon in the social dock
2. **View** resume in the modal
3. **Download** using the download button
4. **Close** by clicking outside, ESC key, or close button

## 🎨 Customization
- **Modal colors** can be changed in ResumeModal.tsx
- **Icon style** can be modified in the Icons.Resume component
- **Download filename** can be changed in the download attribute
