import { Mail, Github, Linkedin, Youtube } from 'lucide-react';
import imgImage from "figma:asset/cb0478454199fbc4540aead9f9911e3b411573ff.png";

export function About() {
  const skills = {
    'Game Development': ['Unity', 'C#', 'Game Design', 'Physics Systems', 'AI Programming'],
    '3D Art': ['Blender', '3D Modeling', 'Texturing', 'Animation', 'Shader Development'],
    'Full-Stack Development': ['React', 'Node.js', 'MongoDB', 'TypeScript', 'REST APIs'],
    'Video Production': ['Video Editing', 'Motion Graphics', 'Sound Design', 'Color Grading']
  };

  const experience = [
    {
      title: 'Indie Game Developer',
      period: '2023 - Present',
      description: 'Creating immersive gaming experiences with focus on narrative-driven gameplay and innovative mechanics.'
    },
    {
      title: '3D Artist & Animator',
      period: '2022 - Present',
      description: 'Designing and animating 3D assets for games and interactive media projects.'
    },
    {
      title: 'Full-Stack Developer',
      period: '2023 - Present',
      description: 'Building web and mobile applications with modern frameworks and technologies.'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #1a0b2e 0%, #16001e 100%)',
      paddingTop: '80px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Hero Section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ 
              fontSize: '0.875rem',
              color: '#a78bfa',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>
              About Me
            </div>
            <h1 style={{ 
              fontSize: '3rem',
              color: 'white',
              marginBottom: '1.5rem',
              letterSpacing: '0.05em'
            }}>
              KYO MATIAS
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '2rem'
            }}>
              Full-Stack Indie Game Developer | 3D Artist | Video Producer
            </p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              I'm a multidisciplinary creator passionate about bringing interactive experiences to life. 
              With expertise spanning game development, 3D art, and full-stack programming, I blend 
              technical skills with creative vision to build engaging digital experiences.
            </p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.8'
            }}>
              My work focuses on creating immersive narratives and intuitive user experiences, 
              whether it's through indie games, web applications, or visual content.
            </p>
          </div>

          <div style={{ 
            borderRadius: '12px',
            overflow: 'hidden',
            aspectRatio: '4/5',
            maxWidth: '400px',
            margin: '0 auto',
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }}>
            <img 
              src={imgImage} 
              alt="Kyo Matias"
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem',
            color: 'white',
            marginBottom: '2rem',
            letterSpacing: '0.05em'
          }}>
            Skills & Expertise
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div 
                key={category}
                style={{ 
                  padding: '2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 style={{ 
                  color: '#a78bfa',
                  marginBottom: '1.5rem',
                  fontSize: '1.125rem'
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {skillList.map((skill, index) => (
                    <div 
                      key={index}
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        paddingLeft: '1rem',
                        position: 'relative'
                      }}
                    >
                      <span style={{ 
                        position: 'absolute',
                        left: 0,
                        color: '#a78bfa'
                      }}>
                        •
                      </span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem',
            color: 'white',
            marginBottom: '2rem',
            letterSpacing: '0.05em'
          }}>
            Experience
          </h2>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {experience.map((exp, index) => (
              <div 
                key={index}
                style={{ 
                  padding: '2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderLeft: '4px solid #a78bfa'
                }}
              >
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <h3 style={{ 
                    color: 'white',
                    fontSize: '1.25rem'
                  }}>
                    {exp.title}
                  </h3>
                  <span style={{ 
                    color: '#a78bfa',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6'
                }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div style={{ 
          padding: '3rem',
          backgroundColor: 'rgba(167, 139, 250, 0.05)',
          borderRadius: '12px',
          border: '1px solid rgba(167, 139, 250, 0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2rem',
            color: 'white',
            marginBottom: '1rem',
            letterSpacing: '0.05em'
          }}>
            Let's Connect
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Interested in collaborating or discussing a project? Feel free to reach out through any of these channels.
          </p>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <a 
              href="mailto:contact@kyomatias.dev" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(167, 139, 250, 0.1)',
                color: '#a78bfa',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '1px solid rgba(167, 139, 250, 0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={20} />
              Email
            </a>
            <a 
              href="https://github.com/kyomatias" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(167, 139, 250, 0.1)',
                color: '#a78bfa',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '1px solid rgba(167, 139, 250, 0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/kyomatias" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(167, 139, 250, 0.1)',
                color: '#a78bfa',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '1px solid rgba(167, 139, 250, 0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://youtube.com/@kyomatias" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(167, 139, 250, 0.1)',
                color: '#a78bfa',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '1px solid rgba(167, 139, 250, 0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Youtube size={20} />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
