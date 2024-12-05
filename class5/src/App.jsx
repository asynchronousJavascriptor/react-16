import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
    {
      name: "Arjun Mehta",
      city: "Delhi",
      age: 25,
      techSkills: ["JavaScript", "React", "Node.js"],
      description:
        "A full-stack developer passionate about building scalable web applications and learning new technologies.",
    },
    {
      name: "Sneha Kapoor",
      city: "Mumbai",
      age: 28,
      techSkills: ["Python", "Django", "Machine Learning"],
      description:
        "Data scientist with expertise in ML models, analytics, and backend web development using Python frameworks.",
    },
    {
      name: "Rahul Sharma",
      city: "Bangalore",
      age: 23,
      techSkills: ["Java", "Spring Boot", "Kotlin"],
      description:
        "Backend developer skilled in Java-based microservices and developing Android applications with Kotlin.",
    },
    {
      name: "Ananya Roy",
      city: "Kolkata",
      age: 26,
      techSkills: ["HTML", "CSS", "JavaScript"],
      description:
        "Frontend developer focusing on creating interactive and responsive websites with a modern design aesthetic.",
    },
    {
      name: "Vikas Reddy",
      city: "Hyderabad",
      age: 30,
      techSkills: ["AWS", "Docker", "Kubernetes"],
      description:
        "DevOps engineer specializing in cloud deployment, containerization, and automating CI/CD pipelines for agile workflows.",
    },
  ];

  return (
    <div className='bg-blue-200 gap-10 justify-center items-start h-screen flex flex-wrap p-8'>
      {users.map(function(elem,idx){

        return <Card key={idx} user={elem} />
      })}
    </div>
  )
}

export default App