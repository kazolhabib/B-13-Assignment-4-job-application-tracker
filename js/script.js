
let total = [
  {
    "id": 1,
    "company": "Mobile First Corp",
    "role": "React Native Developer",
    "type": "Remote • Full-time",
    "salary": "$130,000 - $175,000",
    "status": "NOT APPLIED",
    "description": "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
  },
  {
    "id": 2,
    "company": "TechStream Solutions",
    "role": "Frontend Engineer",
    "type": "On-site • Full-time",
    "salary": "$90,000 - $120,000",
    "status": "NOT APPLIED",
    "description": "Design and implement highly performant user interfaces using React and Tailwind CSS for our enterprise clients."
  },
  {
    "id": 3,
    "company": "CloudScale AI",
    "role": "Backend Developer",
    "type": "Remote • Contract",
    "salary": "$110,000 - $150,000",
    "status": "NOT APPLIED",
    "description": "Scale backend infrastructure using Node.js and AWS. Focus on building robust APIs for data-intensive applications."
  },
  {
    "id": 4,
    "company": "Creative Pixel Studio",
    "role": "UI/UX Designer",
    "type": "Hybrid • Full-time",
    "salary": "$85,000 - $115,000",
    "status": "NOT APPLIED",
    "description": "Create stunning visual designs and user experiences for mobile and web platforms. Proficiency in Figma is required."
  },
  {
    "id": 5,
    "company": "NextGen FinTech",
    "role": "Full Stack Developer",
    "type": "Remote • Full-time",
    "salary": "$140,000 - $190,000",
    "status": "NOT APPLIED",
    "description": "Develop and maintain end-to-end banking solutions. Experience with Next.js and PostgreSQL is highly preferred."
  },
  {
    "id": 6,
    "company": "SecureNet Systems",
    "role": "Cybersecurity Analyst",
    "type": "On-site • Full-time",
    "salary": "$125,000 - $160,000",
    "status": "NOT APPLIED",
    "description": "Protect our clients' digital assets by monitoring networks and implementing advanced security protocols."
  },
  {
    "id": 7,
    "company": "DataFlow Analytics",
    "role": "Data Scientist",
    "type": "Remote • Full-time",
    "salary": "$135,000 - $180,000",
    "status": "NOT APPLIED",
    "description": "Leverage machine learning models to derive insights from massive datasets and drive business decisions."
  },
  {
    "id": 8,
    "company": "AppForge Studio",
    "role": "Junior iOS Developer",
    "type": "Hybrid • Internship",
    "salary": "$50,000 - $70,000",
    "status": "NOT APPLIED",
    "description": "Help our core team build native iOS apps using Swift and SwiftUI. Great opportunity for career growth."
  }
];
let interview = [];
let rejected = [];
let currentTabs = 'all'

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count')
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const notAppliedBtn = document.querySelectorAll('.not-applied-btn');

const jobList = document.getElementById('job-list');

const mainContainer = document.querySelector('.main');


function calculateCounts() {
  totalCount.innerText = total.length; //8
  interviewCount.innerText = interview.length;
  rejectedCount.innerText = rejected.length;
}
calculateCounts();




allFilterBtn.addEventListener('click', function() {
  currentTabs = 'all';
  renderJobs();
});

interviewFilterBtn.addEventListener('click', function() {
  currentTabs = 'interview';
  renderInterview();
});

rejectedFilterBtn.addEventListener('click', function() {
  currentTabs = 'rejected';
  renderRejected();
 });

function renderJobs() {
  let jobList = document.getElementById('job-list');
  
  jobList.innerHTML = "";

  for (let job of total) {
    jobList.innerHTML += `
      <div job-id="${job.id}" class="bg-white p-6 rounded-lg border border-[#F1F2F4] shadow-md mb-4 hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-between items-start mb-5">
              <div class="">
                  <h3 class="job-title text-xl text-gray-700 font-bold mb-1">${job.company}</h3>
                  <p class="job-role text-base font-normal text-gray-600">${job.role}</p>
              </div>
              <div onclick="deleteJob(${job.id})" class="delete-btn w-8 h-auto cursor-pointer">
                  <img src="./icons/delete-icon.png" alt="delete">
              </div>
          </div>
          <p class="job-salary text-gray-600 mb-5"><span class="job-type">${job.type}</span> • <span class="job-salary-text">${job.salary}</span></p>
          <div class="applied-btn">
              <button class="btn btn-soft uppercase btn-primary mb-2">${job.status}</button>
              <p class="job-description mb-5 text-base text-gray-700">${job.description}</p>
          </div>
          <div class="flex gap-4">
              <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
              <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
          </div>
      </div>
    `;
  }
  const interviewButtons = document.querySelectorAll('.interview-btn');
  const rejectedButtons = document.querySelectorAll('.rejected-btn');

  interviewButtons.forEach(function(btn)  {
    btn.addEventListener('click', function(event) {
      if (event.target.classList.contains('interview-btn')) {
        const card = event.target.closest('.bg-white')
        const statusBtn = card.querySelector('.btn-soft');
        statusBtn.innerText = 'INTERVIEW';
        statusBtn.style.borderColor = '#22C55E';
        statusBtn.classList.remove('btn-primary');
        statusBtn.classList.add('btn-success');
        
        const jobTitle = card.querySelector('.job-title').innerText;
        const jobRole = card.querySelector('.job-role').innerText;
        const jobSalary = card.querySelector('.job-salary-text').innerText;
        const jobType = card.querySelector('.job-type').innerText;
        const jobDescription = card.querySelector('.job-description').innerText;

        const job = {
          company: jobTitle,
          role: jobRole,
          salary: jobSalary,
          type: jobType,
            status: 'INTERVIEW',
          description: jobDescription
        }
        interview.push(job);
        calculateCounts();
    }
    });
  });

  rejectedButtons.forEach(function(btn)  {
    console.log(btn);
    
    btn.addEventListener('click', function(event) {
        console.log("clicked");
        
         if (event.target.classList.contains('rejected-btn')) {
        const card = event.target.closest('.bg-white')
        const statusBtn = card.querySelector('.btn-soft');
        statusBtn.innerText = 'REJECTED';
        statusBtn.style.borderColor = '#EF4444';
        statusBtn.classList.remove('btn-primary');
        statusBtn.classList.add('btn-error');
        
        const jobTitle = card.querySelector('.job-title').innerText;
        const jobRole = card.querySelector('.job-role').innerText;
        const jobSalary = card.querySelector('.job-salary-text').innerText;
        const jobType = card.querySelector('.job-type').innerText;
        const jobDescription = card.querySelector('.job-description').innerText;

        const job = {
          company: jobTitle,
          role: jobRole,
          salary: jobSalary,
          type: jobType,
          status: 'REJECTED',
          description: jobDescription
        }
        rejected.push(job); 
        calculateCounts();
        renderRejected();   
            
      
  }});
  });
}

function renderInterview() {
  let jobList = document.getElementById('interview-job-list');



  if (interview.length === 0) {
    jobList.innerHTML = `
      <div class="no-jobs-available-card bg-white rounded border-[#F1F2F4] shadow-md flex flex-col justify-center items-center py-16 px-6 sm:py-20 sm:px-10">
                    <img class="mb-5" src="./icons/jobs.png" alt="jobs-icon">
                    <h3 class="text-xl text-gray-700 font-bold text-2xl mb-1">No jobs available</h3>
                    <p class="text-base text-gray-600 text-center">Check back soon for new job opportunities</p>
                </div>
    `;
    return;
  }

  
  jobList.innerHTML = "";

  for (let job of interview) {
    jobList.innerHTML += `
      <div job-id="${job.id}" class="bg-white p-6 rounded-lg border border-[#F1F2F4] shadow-md mb-4">
          <div class="flex justify-between items-start mb-5">
              <div class="">
                  <h3 class="job-title text-xl text-gray-700 font-bold mb-1">${job.company}</h3>
                  <p class="job-role text-base font-normal text-gray-600">${job.role}</p>
              </div>
              <div onclick="deleteJob(${job.id})" class="delete-btn w-8 h-auto cursor-pointer">
                  <img src="./icons/delete-icon.png" alt="delete">
              </div>
          </div>
          <p class="job-salary text-gray-600 mb-5"><span class="job-type">${job.type}</span> • <span class="job-salary-text">${job.salary}</span></p>
          <div class="applied-btn">
              <button class="btn btn-soft uppercase btn-primary mb-2">${job.status}</button>
              <p class="job-description mb-5 text-base text-gray-700">${job.description}</p>
          </div>
          <div class="flex gap-4">
              <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
              <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
          </div>
      </div>
    `;
  }
  const interviewButtons = document.querySelectorAll('.interview-btn');
  const rejectedButtons = document.querySelectorAll('.rejected-btn');

  interviewButtons.forEach(function(btn)  {
    btn.addEventListener('click', function(event) {
      if (event.target.classList.contains('interview-btn')) {
        const card = event.target.closest('.bg-white')
        const statusBtn = card.querySelector('.btn-soft');
        statusBtn.innerText = 'INTERVIEW';
        statusBtn.style.borderColor = '#22C55E';
        statusBtn.classList.remove('btn-primary');
        statusBtn.classList.add('btn-success');
        
        const jobTitle = card.querySelector('.job-title').innerText;
        const jobRole = card.querySelector('.job-role').innerText;
        const jobSalary = card.querySelector('.job-salary-text').innerText;
        const jobType = card.querySelector('.job-type').innerText;
        const jobDescription = card.querySelector('.job-description').innerText;

        const job = {
          company: jobTitle,
          role: jobRole,
          salary: jobSalary,
          type: jobType,
          status: 'INTERVIEW',
          description: jobDescription
        }
        interview.push(job);
    }
    });
  });

  rejectedButtons.forEach(function(btn)  {
    
    btn.addEventListener('click', function(event) {
        console.log("clicked");
        
         if (event.target.classList.contains('rejected-btn')) {
        const card = event.target.closest('.bg-white')
        const statusBtn = card.querySelector('.btn-soft');
        statusBtn.innerText = 'REJECTED';
        statusBtn.style.borderColor = '#EF4444';
        statusBtn.classList.remove('btn-primary');
        statusBtn.classList.add('btn-error');
        
        const jobTitle = card.querySelector('.job-title').innerText;
        const jobRole = card.querySelector('.job-role').innerText;
        const jobSalary = card.querySelector('.job-salary-text').innerText;
        const jobType = card.querySelector('.job-type').innerText;
        const jobDescription = card.querySelector('.job-description').innerText;

        const jobId = card.getAttribute('job-id');

        const job = {

          jobId: jobId,
          company: jobTitle,
          role: jobRole,
          salary: jobSalary,
          type: jobType,
          status: 'REJECTED',
          description: jobDescription
        }

        const existingIndex = rejected.findIndex(j => j.jobId === jobId);
        if (existingIndex !== -1) {
          rejected[existingIndex] = job;
        } else {
          rejected.push(job);
        }

        rejected.push(job); 
        calculateCounts();
        renderRejected();   
            
      
  }});
  });
}

function renderRejected() {
  let jobList = document.getElementById('rejected-job-list');

    if (rejected.length === 0) {
    jobList.innerHTML = `
      <div class="no-jobs-available-card bg-white rounded border-[#F1F2F4] shadow-md flex flex-col justify-center items-center py-16 px-6 sm:py-20 sm:px-10">
                    <img class="mb-5" src="./icons/jobs.png" alt="jobs-icon">
                    <h3 class="text-xl text-gray-700 font-bold text-2xl mb-1">No jobs available</h3>
                    <p class="text-base text-gray-600 text-center">Check back soon for new job opportunities</p>
                </div>
    `;
    return;
  } 
  
  jobList.innerHTML = "";

  for (let job of rejected) {
    jobList.innerHTML += `
      <div job-id="${job.id}" class="bg-white p-6 rounded-lg border border-[#F1F2F4] shadow-md mb-4">
          <div class="flex justify-between items-start mb-5">
              <div class="">
                  <h3 class="job-title text-xl text-gray-700 font-bold mb-1">${job.company}</h3>
                  <p class="job-role text-base font-normal text-gray-600">${job.role}</p>
              </div>
              <div onclick="deleteJob(${job.id})" class="delete-btn w-8 h-auto cursor-pointer">
                  <img src="./icons/delete-icon.png" alt="delete">
              </div>
          </div>
          <p class="job-salary text-gray-600 mb-5"><span class="job-type">${job.type}</span> • <span class="job-salary-text">${job.salary}</span></p>
          <div class="applied-btn">
              <button class="status-btn btn btn-soft uppercase btn-primary mb-2">${job.status}</button>
              <p class="job-description mb-5 text-base text-gray-700">${job.description}</p>
          </div>
          <div class="flex gap-4">
              <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
              <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
          </div>
      </div>
    `;
  }
  const interviewButtons = document.querySelectorAll('.interview-btn');
  const rejectedButtons = document.querySelectorAll('.rejected-btn');

  interviewButtons.forEach(function(btn)  {
    btn.addEventListener('click', function(event) {
      if (event.target.classList.contains('interview-btn')) {
        const card = event.target.closest('.bg-white')
        const statusBtn = card.querySelector('.status-btn');
        statusBtn.innerText = 'INTERVIEW';
        statusBtn.style.borderColor = '#22C55E';
        statusBtn.classList.remove('btn-primary');
        statusBtn.classList.add('btn-success');
        
        const jobTitle = card.querySelector('.job-title').innerText;
        const jobRole = card.querySelector('.job-role').innerText;
        const jobSalary = card.querySelector('.job-salary-text').innerText;
        const jobType = card.querySelector('.job-type').innerText;
        const jobDescription = card.querySelector('.job-description').innerText;

        const job = {
          company: jobTitle,
          role: jobRole,
          salary: jobSalary,
            type: jobType,
        status: 'INTERVIEW',
          description: jobDescription
        }
        interview.push(job);
        calculateCounts();
    }
    });
  });

 rejectedButtons.forEach(function(btn)  {
    
    btn.addEventListener('click', function(event) {
        console.log("clicked");
        
         if (event.target.classList.contains('rejected-btn')) {
        const card = event.target.closest('.bg-white')
        const statusBtn = card.querySelector('.btn-soft');
        statusBtn.innerText = 'REJECTED';
        statusBtn.style.borderColor = '#EF4444';
        statusBtn.classList.remove('btn-primary');
        statusBtn.classList.add('btn-error');
        
        const jobTitle = card.querySelector('.job-title').innerText;
        const jobRole = card.querySelector('.job-role').innerText;
        const jobSalary = card.querySelector('.job-salary-text').innerText;
        const jobType = card.querySelector('.job-type').innerText;
        const jobDescription = card.querySelector('.job-description').innerText;
        const jobId = card.getAttribute('job-id');

        const job = {
          jobId: jobId,
          company: jobTitle,
          role: jobRole,
          salary: jobSalary,
          type: jobType,
          status: 'REJECTED',
          description: jobDescription
        }

        const existingIndex = rejected.findIndex(j => j.jobId === jobId);
        if (existingIndex !== -1) {
          rejected[existingIndex] = job;
        } else {
          rejected.push(job);
        }
        calculateCounts();
        renderRejected();   
            
  }});
  });
}
    renderJobs();
    
    