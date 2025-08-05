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


*Main Form View*

![Main Form View](https://i.postimg.cc/BZRx959W/Screenshot-2025-08-05-234118.png)


*Focus Highlighting*

![Focus Highlighting](https://i.postimg.cc/QtbpZv30/Screenshot-2025-08-05-234557.png)


*Validation Failed States*

![Validation Failed States](https://i.postimg.cc/PJCNV7rL/Screenshot-2025-08-05-234231.png)

---


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


```

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

## 📄 License

This project is created for educational purposes as part of the Web Technology course curriculum.

---
