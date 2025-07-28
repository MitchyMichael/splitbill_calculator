import './App.css';
import profileImage from './assets/profile.jpg'; // <-- Tambahkan baris ini

function App() {
  const profile = {
    name: 'Michael Wijaya Sutrisna',
    title: 'Software Developer',
    description:
      'Saya adalah pengembang perangkat lunak yang memiliki fokus pada teknologi maritim, pengembangan web, desktop, dan solusi integrasi sistem.',
    skills: [
      'React, Next.js, Tailwind, TypeScript',
      'Python, PySide6, NumPy, Pandas',
      'C++, Qt, QML',
      'MySQL, PostgreSQL, SQLite',
      'Git, Docker, GitLab CI/CD',
    ],
    projects: [
      {
        name: 'iStow Campus Edition',
        desc: 'Simulasi stabilitas kapal dan perencanaan pemuatan untuk pelatihan kampus pelayaran.',
      },
      {
        name: 'ShipDM Platform',
        desc: 'Sistem manajemen data kapal terintegrasi SQLite dan backend API.',
      },
      {
        name: 'Midwife App',
        desc: 'Aplikasi layanan bidan digital dengan antrean, WhatsApp reminder, dan kontrol KB.',
      },
    ],
    footer: '© 2025 Nama Kamu. Dibuat dengan React + Vite',
  };

  return (
    <div className="container">
      <header>
        <img src={profileImage} alt="Profile" className="profile-img" />
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
      </header>

      <section>
        <h2>Tentang Saya</h2>
        <p>{profile.description}</p>
      </section>

      <section>
        <h2>Keahlian</h2>
        <ul>
          {profile.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Proyek</h2>
        {profile.projects.map((proj, idx) => (
          <div className="project" key={idx}>
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </section>

      <footer>
        <p>{profile.footer}</p>
      </footer>
    </div>
  );
}

export default App;
