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

## 🚀 Installation & Setup  

Follow these steps to set up JobSphere on your local machine:  

### **Prerequisites**  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- [MongoDB](https://www.mongodb.com/) (Ensure the MongoDB service is running)  
- [Git](https://git-scm.com/)  

### **Clone the Repository**  
```bash
git clone https://github.com/your-username/JobSphere.git
cd JobSphere
```

### **Install Dependencies**  
```bash
npm install
```

### **Set Up Environment Variables**  
Create a `.env` file in the root directory and add the following:  
```env
PORT=4111
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### **Run the Application**  

#### **For Development Mode**  
```bash
npm run dev
```

#### **For Production Mode**  
```bash
npm start
```

### **Access the Application**  
Once the server is running, open your browser and visit:  
```bash
http://localhost:4111
```

