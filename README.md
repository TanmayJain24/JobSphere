# JobSphere

**JobSphere** is a dynamic job portal designed to bridge the gap between job seekers and employers. The platform allows job seekers to create profiles, search for job opportunities based on various filters, and apply for positions. Job seekers can also view their dashboard of applied jobs. Employers can create profiles, post job listings, manage and track applicants, and view applicant information and resumes.

## Key features include:
- **User Authentication**: with role-based access control, ensuring secure management of user profiles.
- **Dynamic Job Posting System**: where employers can add, edit, and manage job listings.
- **User Dashboard**: provides job seekers with insights into their list of applied jobs, while employers can track the number of applicants for each job posting.
- **Search and Filtering functionalities**: for optimized job discovery and application management.
- **Responsive UI/UX Design**: ensuring a seamless experience across both desktop and mobile platforms.

## Screenshots & Preview  

### Homepage  
![Homepage](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/Home1.png)
![Homepage1](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/Home2.png)

### Job Categories
![Categories](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/Categories.png)

### Applicant and Employer View
![Applicant](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/ApplicantView.png)
![Employer](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/EmployeeView.png)

### List of Jobs
![JobList](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/JobList.png)

### List of Applications
![Applications](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/MyApplications.png)

### List of Postings
![Postings](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/MyPostings.png)

### Profile Page
![Profile Page](https://github.com/TanmayJain24/JobSphere/blob/main/public/images/Profile.png)

## Technologies Used:
- **Frontend**: HTML, CSS, Bootstrap, and JavaScript for a responsive and user-friendly interface.
- **Backend**: Node.js and Express.js for server-side logic and handling job-related requests.
- **Database**: MongoDB is used to store user profiles, job listings, and application data.
- **Authentication**: Implemented using Passport for session-based authentication and Bcrypt for securing user passwords.

## **Installation & Setup**
### **1. Clone the Repository**
```bash
git clone https://github.com/TanmayJain24/BlogBuzz.git
cd BlogBuzz
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Set Up Environment Variables**  
Create a `.env` file in the root directory and add:  
```
PORT=5000
SESSION_SECRET=your_secret_key
```

### **4. Run the Application**  
```bash
npm start
```
The application will be available at `http://localhost:4111`.

