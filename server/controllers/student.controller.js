const studentModel = require('../models/student.model.js')

async function getStudents(req,res){
    try {
        const students = await studentModel.find()
        res.json(students);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

async function insertStudents(req,res){
    // const studentsData  = [
    //     {
         
    //       "student_name": "Arpit Sandip Borawake",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Computer Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
        
    //       "student_name": "Hemant Durdhawale",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Computer Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Tohid Amin Shaikh",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Yafai Fahad Abdulrab",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Vaibhav Narayan Game",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Komal Shantaram Surade",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Electrical Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Bhavesh Pradip Kedare",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Harpreet Gurmeet Singh Matharu",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Electrical Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
         
    //       "student_name": "Sangale Siddharth Kailas",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
         
    //       "student_name": "Bhushan Prakash More",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Aditya Prabhakar Dhotre",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Computer Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Pranali Ashok Chaudhari",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Computer Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
          
    //       "student_name": "Snehal Namdeo Chobe",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Information Technology",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
       
    //       "student_name": "Soham Babasaheb Suryawanshi",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Information Technology",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
         
    //       "student_name": "Kakade Prajwal Babasaheb",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Computer Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
         
    //       "student_name": "Sanket Suresh Ingale",
    //       "university_name": "Selected for Mitacs Glob Link",
    //       "department": "Civil Engineering",
    //       "internship_or_ms": "Internship",
    //       "year": "2020-21"
    //     },
    //     {
      
    //       "student_name": "Mr. Sanket Ingale",
    //       "university_name": "University of Windsor – Windsor",
    //       "department": "Civil",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
      
    //       "student_name": "Mrs. Vaishnavi Vinod Naikwade",
    //       "university_name": "University de Montreal",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
    //       "sr_no": 3,
    //       "student_name": "Mrs. Vaishnavi Vinod Naikwade",
    //       "university_name": "University Laval - Quebec",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
      
    //       "student_name": "Mrs. Vaishnavi Vinod Naikwade",
    //       "university_name": "University of New Brunswick",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
         
    //       "student_name": "Mrs. Rutuja Ganage",
    //       "university_name": "IIVP",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
          
    //       "student_name": "Mr. Ansari Mohammed Anas",
    //       "university_name": "IIVP",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
          
    //       "student_name": "Mrs. Dnyaneshwari Kale",
    //       "university_name": "IIVP",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
          
    //       "student_name": "Mr. Tejas Kshirsagar",
    //       "university_name": "IIVP",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
         
    //       "student_name": "Mr. Omkar Shirsath",
    //       "university_name": "IIVP",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
          
    //       "student_name": "Mr. Om Sabane",
    //       "university_name": "IIVP",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
         
    //       "student_name": "Mr. Aditya Ukride",
    //       "university_name": "IIVP",
    //       "department": "Mechatronics",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
        
    //       "student_name": "Mr. Parth Pangavhane",
    //       "university_name": "IIVP",
    //       "department": "ECE",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
         
    //       "student_name": "Mr. Shubham Halwai",
    //       "university_name": "IIVP",
    //       "department": "Electrical",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
         
    //       "student_name": "Mr. Om Pagar",
    //       "university_name": "IIVP",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2021-22"
    //     },
    //     {
          
    //       "student_name": "Nakul Nibe",
    //       "university_name": "Memorial University, Canada",
    //       "department": "Mechatronics",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
          
    //       "student_name": "Nikita Pawar",
    //       "university_name": "University of Laval Quebec, Canada",
    //       "department": "ECE",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
         
    //       "student_name": "Parth Pangavhane",
    //       "university_name": "Simon Fraser University, Canada",
    //       "department": "ECE",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
          
    //       "student_name": "Shreyas Bhor",
    //       "university_name": "University of Manitoba, Canada",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
        
    //       "student_name": "Anas Ansari",
    //       "university_name": "National Taiwan University, Taiwan",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
       
    //       "student_name": "Amey Avhad",
    //       "university_name": "Cheng Ghun University, Taiwan",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
         
    //       "student_name": "Rucha Sadavarte",
    //       "university_name": "Jean Monet University, France",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
      
    //       "student_name": "Harshlini Pandhare",
    //       "university_name": "Jean Monnet University, France",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
          
    //       "student_name": "Chinmay Bitne",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
          
    //       "student_name": "Tejas Nikumbh",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
      
    //       "student_name": "Navnath Kate",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
         
    //       "student_name": "Utkarsha Deolalikar",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
        
    //       "student_name": "Hemasai Thota",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "ECE",
    //       "internship_or_ms": "Internship",
    //       "year": "2022-23"
    //     },
    //     {
         
    //       "student_name": "Chaintanya Tekane",
    //       "university_name": "McGill University, Canada",
    //       "department": "Computer",
    //       "internship_or_ms": "MS",
    //       "year": "2022-23"
    //     },
    //     {
          
    //       "student_name": "Vaishnvi Naikwade",
    //       "university_name": "University of Concordia, Canada",
    //       "department": "IT",
    //       "internship_or_ms": "MS",
    //       "year": "2022-23"
    //     },
    //     {
         
    //       "student_name": "Onkar Rahane",
    //       "university_name": "Illinois Institute of Technology, USA",
    //       "department": "Computer",
    //       "internship_or_ms": "MS",
    //       "year": "2022-23"
    //     },
    //     {
          
    //       "student_name": "Amey Rajesh Avhad",
    //       "university_name": "National Chung Cheng University",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Tejas Anil Nikumbh",
    //       "university_name": "BEIC",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Deepti Shivaji Khond",
    //       "university_name": "Athbasca University",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Krushna Dilip Gund",
    //       "university_name": "Mount Royal University Calgary",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {    "student_name": "Chandar Vaishnavi Chandrakant",
    //       "university_name": "Athabasca University",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Anushka Babasaheb Deokar",
    //       "university_name": "University of Calgary",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {    "student_name": "Rohit Kakasaheb Ingle",
    //       "university_name": "University of Manitoba",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
    //       "student_name": "Thota Hema Sai",
    //       "university_name": "Queen Mary University of London",
    //       "department": "ECE",
    //       "internship_or_ms": "MS",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Yash Pawar",
    //       "university_name": "University of Bristol",
    //       "department": "Mechatronics",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
        
    //       "student_name": "Navnath Sachin Kate",
    //       "university_name": "University of Greenwich",
    //       "department": "Mechanical",
    //       "internship_or_ms": "MS",
    //       "year": "2023-24"
    //     },
    //     {
       
    //       "student_name": "Pratik Ashok Mane",
    //       "university_name": "University of Bristol",
    //       "department": "Mechatronics",
    //       "internship_or_ms": "MS",
    //       "year": "2023-24"
    //     },
    //     {
        
    //       "student_name": "Tejal Anil Tambe",
    //       "university_name": "Urfu University",
    //       "department": "SACS chemistry",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Prafull Sandip Nile",
    //       "university_name": "URFU Russia",
    //       "department": "SACS chemistry",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Sumit Sanjay Deokar",
    //       "university_name": "URFU",
    //       "department": "SACS chemistry",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Thombare Swapnal Prashant",
    //       "university_name": "Urfu University",
    //       "department": "SACS chemistry",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Mali Vaibhav Madhukar",
    //       "university_name": "URFU, Russia",
    //       "department": "SACS chemistry",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Shevkar Pooja Bhaupatil",
    //       "university_name": "Rural Federal University",
    //       "department": "SACS Microbiology",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Darshan Annasaheb Chaudhari",
    //       "university_name": "URAL Federal University",
    //       "department": "PGDM, SBS",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Shaikh Jaid Arafat",
    //       "university_name": "Ural Federal University",
    //       "department": "MBA",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Shewale Akshada Yuvraj",
    //       "university_name": "UrFU, Russia",
    //       "department": "MBA",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Chinmay Omkar Bitne",
    //       "university_name": "Arizona State University",
    //       "department": "IT",
    //       "internship_or_ms": "MS",
    //       "year": "2023-24"
    //     },
    //     {
        
    //       "student_name": "Thorat Vishal Ramesh",
    //       "university_name": "Ural Federal University, Russia",
    //       "department": "Management",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Manurkar Shankar Ananda",
    //       "university_name": "Ural Federal University",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Sujata Subhash Mandale",
    //       "university_name": "Ural Federal University",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Deokar Mansi Anil",
    //       "university_name": "National Chung Cheng University, Chiayi",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Sanskruti Santosh Gambhire",
    //       "university_name": "National Taiwan University of Science and Technology",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Bhaskar Akanksha Vikram",
    //       "university_name": "National Changuha University of Education",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Alok Arvind Pandey",
    //       "university_name": "Tainan University of Technology",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Ghige Onkar Dipak",
    //       "university_name": "National Kaohsiung University of Science and Technology",
    //       "department": "Electrical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Om Rajendra Deokar",
    //       "university_name": "Taipei Medical University, Taiwan",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
    //           "student_name": "Sakshi Chaudhari",
    //       "university_name": "National Chung Cheng University, Chiayi",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Md Aijaj Yunus Pathan",
    //       "university_name": "Tainan University of Technology",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
      
    //       "student_name": "Prasad Dadasaheb Tupake",
    //       "university_name": "National Chung Cheng University",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Wabale Vishal Valmik",
    //       "university_name": "National Changhua University",
    //       "department": "ECE",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Pagare Nishant Balasaheb",
    //       "university_name": "NCKU",
    //       "department": "Pharmaceutical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
    //           "student_name": "Amey Rajesh Avhad",
    //       "university_name": "National Chung Cheng University",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
    //          "student_name": "Tupake Prasad Dadasaheb",
    //       "university_name": "National Chung Cheng University, Chiayi",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Nikita Rajendra Bhawar",
    //       "university_name": "National Chung Cheng University",
    //       "department": "Computer",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Turakane Prajakta Sandip",
    //       "university_name": "National Chung King University",
    //       "department": "Chemistry",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
      
    //       "student_name": "Vishal Dnyaneshwar Kekan",
    //       "university_name": "National Chung Cheng University, Chiayi",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
      
    //       "student_name": "Nakul Vijay Nibe",
    //       "university_name": "Bristol University, UK",
    //       "department": "Mechatronics",
    //       "internship_or_ms": "MS",
    //       "year": "2023-24"
    //     },
    //     {
         
    //       "student_name": "Sanskruti Santosh Gambhire",
    //       "university_name": "Ural Federal University",
    //       "department": "Mechanical",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Sanskruti Vinayak Jawale",
    //       "university_name": "Summer University",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
    //           "student_name": "Shruti Laxman Khandagale",
    //       "university_name": "Ural Federal University",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2023-24"
    //     },
    //     {
          
    //       "student_name": "Mr. Samartha Kadu",
    //       "university_name": "National Chung Cheng University",
    //       "department": "ECE",
    //       "internship_or_ms": "Internship",
    //       "year": "2024-25"
    //     },
    //     {
    //           "student_name": "Mr. Siddharth Dhirde",
    //       "university_name": "National Chung Cheng University",
    //       "department": "ECE",
    //       "internship_or_ms": "Internship",
    //       "year": "2024-25"
    //     },
    //     {
         
    //       "student_name": "Mr. Pratham Gade",
    //       "university_name": "National Chung Cheng University",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2024-25"
    //     },
    //     {
          
    //       "student_name": "Mr. Aditya Kandalkar",
    //       "university_name": "National Chung Cheng University",
    //       "department": "IT",
    //       "internship_or_ms": "Internship",
    //       "year": "2024-25"
    //     }
    //   ]
      try {
        const result = await studentModel.insertMany(studentsData);
        res.status(201).json({
            message: 'Students data successfully added',
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={getStudents,insertStudents}