import React, { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/fishrifle/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {repos.map((repo) => (
          <div className="card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || 'No description provided.'}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
