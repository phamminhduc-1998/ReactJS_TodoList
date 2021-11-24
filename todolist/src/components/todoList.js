import React, { useState } from 'react'

const TodoList = () => {

    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {

        // get data to local storage
        const storageJobs = JSON.parse(localStorage.getItem('jobs')); // Get data từ local storage với key là jobs sau đó chuyển thành array
        return storageJobs ?? []; // Nếu storage có data thì trả về mảng data, còn không thì trả về mảng rỗng
    });

    console.log(job);
    console.log(jobs);

    const handleSubmit = () => {
        // setJobs(prev => [...prev, job]);

        setJobs(prev => {
            const newAraayJob = [...prev, job];
            // save to local storage
            const jsonJobs = JSON.stringify(newAraayJob); // Chuyển array thành chuỗi
            localStorage.setItem('jobs', jsonJobs); // Lưu chuỗi vào local storage với key là jobs

            return newAraayJob;
        })
        setJob('');
    }
    return (
        <div style={{ padding: 30 }}>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Todo</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
