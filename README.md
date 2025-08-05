# WT Lab Task 3 - Job Application Form

## 📋 Lab Requirements

### Requirements:

#### 1. HTML Form:

Create a job application form based on the provided sample design
Include fields for:

- Name
- Email
- Phone
- Password (for account creation)
- Experience Level (dropdown)
- Expected Salary
- Terms & conditions checkbox

#### 2. CSS:

- Include styles for focus states and validation feedback
- Create classes for highlighting focused fields and validation states
- Use a professional color scheme suitable for job applications
- Style the form attractively with a professional theme

#### 3. JavaScript Validation:

- All fields must be filled
- Name: Minimum 3 letters
- Email: Must be a valid email format
- Phone: Exactly 11 digits
- Password: Must contain at least one uppercase, one lowercase, one digit
- Experience Level: Must select one option from dropdown
  - Entry Level (0-2 years)
  - Mid Level (3-5 years)
  - Senior Level (6-10 years)
  - Executive (10+ years)
- Expected Salary: Must be a positive number
- Show validation errors using `alert()` events

#### 4. JavaScript DOM Manipulation:

- **Focus Highlighting**: Use `addEventListener` to add a CSS class that highlights the focused input field with a distinct border color or background
- **Real-time Validation Feedback**: Use `addEventListener` to add/remove CSS classes that show validation status (valid/invalid) as the user types. Highlight in red if a field has errors and doesn't pass validation.

### Folder Structure:

```
Mid Lab Task 3/
├── View/
│   └── task_3_form.html
├── CSS/
│   └── task_3_style.css
└── JS/
    └── task_3_valid.js
```

### Validation Rules Summary:

1. Name: At least 3 characters, letters only
2. Email: Valid email format
3. Phone: Exactly 11 digits
4. Password: At least 8 characters with uppercase, lowercase, and digit
5. Experience Level: One option must be selected
6. Expected Salary: Must be a positive number
7. Terms & Conditions: Must be checked

### Time Limit:

2 hours

### Submission:

- Push your completed work to GitHub
- Create a new repository named 'WT Lab Task 3'
- Show all git commands from repo initialization to pushing

### Reference

**Main Form View**
![Main Form View](https://i.postimg.cc/BZRx959W/Screenshot-2025-08-05-234118.png)

**Validation Failed States**
![Validation Failed States](https://i.postimg.cc/PJCNV7rL/Screenshot-2025-08-05-234231.png)

*Focus Highlighting*
![Focus Highlighting](https://i.postimg.cc/QtbpZv30/Screenshot-2025-08-05-234557.png)

---

## 📋 Project Overview

This project implements a comprehensive job application form with advanced JavaScript validation, real-time feedback, and professional styling. The form includes client-side validation, focus highlighting, and dynamic UI feedback to enhance user experience.

### Screenshots

## 🎯 Project Requirements

### HTML Form Features

- ✅ Name input field
- ✅ Email input field
- ✅ Phone number input field
- ✅ Password input field (for account creation)
- ✅ Experience Level dropdown with 4 options
- ✅ Expected Salary input field
- ✅ Terms & Conditions checkbox
- ✅ Professional styling and layout

### CSS Styling Features

- ✅ Professional color scheme suitable for job applications
- ✅ Focus state highlighting with distinct visual feedback
- ✅ Validation state classes (valid/invalid)
- ✅ Responsive form container with gradient background
- ✅ Modern border-radius and shadow effects
- ✅ Hover effects on submit button

### JavaScript Validation Rules

- ✅ **Name**: Minimum 3 characters, letters and spaces only
- ✅ **Email**: Valid email format validation
- ✅ **Phone**: Exactly 11 digits
- ✅ **Password**: Minimum 8 characters with uppercase, lowercase, and digit
- ✅ **Experience Level**: Must select one option from dropdown
- ✅ **Expected Salary**: Must be a positive number
- ✅ **Terms & Conditions**: Must be checked
- ✅ Real-time validation feedback as user types
- ✅ Form submission validation with alert messages

### JavaScript DOM Manipulation Features

- ✅ Focus highlighting using `addEventListener`
- ✅ Real-time validation feedback with CSS class manipulation
- ✅ Dynamic border colors and backgrounds for validation states
- ✅ Event-driven validation on input, change, and submit events

## 📁 Project Structure

```
MID_LAB/
├── View/
│   └── task_3_form.html     # Main HTML form
├── CSS/
│   └── task_3_style.css     # Styling and validation classes
├── JS/
│   └── task_3_valid.js      # Validation logic and DOM manipulation
└── README.md                # Project documentation
```

## 🚀 Features

### 1. Advanced Form Validation

- **Real-time validation**: Provides immediate feedback as users type
- **Pattern matching**: Uses regex for robust input validation
- **Visual feedback**: Color-coded validation states (green for valid, red for invalid)
- **Error accumulation**: Collects all validation errors for comprehensive feedback

### 2. User Experience Enhancements

- **Focus highlighting**: Focused fields get distinctive styling
- **Professional design**: Modern gradient backgrounds and clean typography
- **Responsive layout**: Form adapts to different screen sizes
- **Intuitive feedback**: Clear visual indicators for form state

### 3. Technical Implementation

- **Event-driven architecture**: Uses addEventListener for all interactions
- **Modular validation**: Separate validation functions for each field
- **CSS class manipulation**: Dynamic styling based on validation state
- **Form submission handling**: Prevents submission with validation errors

## 🎨 Design Elements

### Color Scheme

- **Primary**: Blue gradient (#2563eb to #1e40af)
- **Success**: Green (#10b981) for valid inputs
- **Error**: Red (#ef4444) for invalid inputs
- **Focus**: Bright green (#15ff00) for focused fields
- **Background**: White (#fff) form container on gradient background

### Typography

- **Font Family**: Segoe UI for modern, clean appearance
- **Responsive sizing**: Appropriate font sizes for different elements
- **Color hierarchy**: Dark colors for primary text, blue for headings

## 🔧 Technical Specifications

### Validation Patterns

```javascript
// Name: Letters and spaces, minimum 3 characters
/^[A-Za-z ]{3,}$/

// Email: Standard email format
/^[\w.-]+@[\w-]+\.[A-Za-z]{2,}$/

// Phone: Exactly 11 digits
/^\d{11}$/

// Password: 8+ chars with uppercase, lowercase, and digit
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
```

### Experience Level Options

1. **Entry Level** (0-2 years)
2. **Mid Level** (3-5 years)
3. **Senior Level** (6-10 years)
4. **Executive** (10+ years)

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/SagarBiswas-MultiHAT/WT_MID_LAB.git
   cd WT_MID_LAB
   ```

2. **Open the project**

   - Navigate to the project directory
   - Open `View/task_3_form.html` in your web browser
   - Or use a local server for best results

3. **For development with local server**

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP (if using XAMPP)
   # Place in htdocs folder and access via localhost
   ```

## 📖 Usage Instructions

1. **Fill out the form fields**:

   - Enter your full name (minimum 3 letters)
   - Provide a valid email address
   - Enter an 11-digit phone number
   - Create a secure password (8+ chars with mixed case and numbers)
   - Select your experience level from dropdown
   - Enter expected salary (positive number)
   - Check the terms & conditions checkbox

2. **Real-time feedback**:

   - Fields turn green when valid
   - Fields turn red when invalid
   - Focused fields have distinctive highlighting

3. **Form submission**:
   - Click "Apply" to submit
   - Any validation errors will be displayed in an alert
   - All fields must be valid to submit successfully

## 🧪 Testing

### Test Cases

1. **Name Validation**

   - ✅ Valid: "John Doe", "Alice Smith"
   - ❌ Invalid: "Jo", "123", "John123"

2. **Email Validation**

   - ✅ Valid: "user@domain.com", "test.email@company.org"
   - ❌ Invalid: "invalid-email", "user@", "@domain.com"

3. **Phone Validation**

   - ✅ Valid: "01234567890"
   - ❌ Invalid: "123456789", "12345678901", "abc1234567"

4. **Password Validation**
   - ✅ Valid: "Password123", "SecurePass1"
   - ❌ Invalid: "password", "PASSWORD", "Pass123"

## 🎯 Learning Objectives Achieved

- ✅ HTML form creation with various input types
- ✅ CSS styling with focus states and validation feedback
- ✅ JavaScript event handling and DOM manipulation
- ✅ Regular expression pattern matching
- ✅ Real-time form validation
- ✅ User experience design principles
- ✅ Professional web development practices

## 🔄 Git Workflow

### Repository Setup Commands

```bash
# Initialize repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Job application form with validation"

# Add remote origin
git remote add origin https://github.com/SagarBiswas-MultiHAT/WT_MID_LAB.git

# Push to GitHub
git push -u origin main
```

### Development Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Add feature: real-time validation feedback"

# Push changes
git push origin main
```

## 📝 Code Quality Features

- **Clean code structure**: Well-organized and commented
- **Separation of concerns**: HTML, CSS, and JS in separate files
- **Reusable functions**: Modular validation functions
- **Event-driven design**: Proper event listener implementation
- **Error handling**: Comprehensive validation error collection

## 🎨 Future Enhancements

- [ ] Add password strength indicator
- [ ] Implement file upload for resume
- [ ] Add form progress indicator
- [ ] Include accessibility improvements (ARIA labels)
- [ ] Add animation transitions for validation states
- [ ] Implement form data persistence with localStorage

## 👨‍💻 Author

**Sagar Biswas**

- GitHub: [@SagarBiswas-MultiHAT](https://github.com/SagarBiswas-MultiHAT)
- Repository: [WT_MID_LAB](https://github.com/SagarBiswas-MultiHAT/WT_MID_LAB.git)
- Course: Web Technology
- Lab: Mid Lab Task 3

## 📅 Development Timeline

- **Time Allocated**: 2 hours
- **Completion Status**: ✅ Completed
- **Key Milestones**:
  - HTML form structure: ✅
  - CSS styling and validation classes: ✅
  - JavaScript validation logic: ✅
  - Real-time feedback implementation: ✅
  - Testing and refinement: ✅

## 📄 License

This project is created for educational purposes as part of the Web Technology course curriculum.

---
