import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import imgImage1 from "figma:asset/e723a3a921b7364a9fd5c9987650e639e5e37b99.png";
import imgImage2 from "figma:asset/4c364980273eb285a6b98bd2ce5d58313866c189.png";
import imgImage3 from "figma:asset/385737d7a5d62e174796a599ef23edf3d6bc4011.png";

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: {
    role: string;
    duration: string;
    technologies: string[];
    status: string;
  };
  features: string[];
  challenges: string;
  outcome: string;
}

const projectsData: Record<string, ProjectData> = {
  boost: {
    title: 'BOOST',
    subtitle: '3D Story-Driven Racing Game',
    description: 'A 3D story-driven racing game developed in Unity 6. A passion project that features in-house developed elements, representing a first project for a first challenge.',
    image: imgImage1,
    details: {
      role: 'Full-Stack Game Developer & 3D Artist',
      duration: 'Ongoing Development',
      technologies: ['Unity 6', 'C#', 'Blender', 'Shader Graph', 'Unity Input System'],
      status: 'In Development'
    },
    features: [
      'Immersive story-driven gameplay mechanics',
      'Custom-built racing physics system',
      'In-house 3D asset creation and animation',
      'Dynamic weather and lighting systems',
      'Cinematic cutscenes and narrative elements',
      'Original soundtrack and sound design'
    ],
    challenges: 'Building a racing game from scratch required developing custom physics systems and vehicle controls that feel responsive while maintaining cinematic storytelling. Balancing performance with visual fidelity in Unity 6 presented unique optimization challenges.',
    outcome: 'BOOST represents a significant milestone in technical game development skills, showcasing the ability to manage complex systems and create engaging player experiences from concept to execution.'
  },
  bunny: {
    title: 'BUNNY',
    subtitle: '3D Horror Chase Experience',
    description: 'A 3D Horror Chase game developed in Unity. Players take on the role of a student council member investigating a murder case that unfolds in an abandoned hotel.',
    image: imgImage2,
    details: {
      role: 'Game Developer & Level Designer',
      duration: '6 Months',
      technologies: ['Unity', 'C#', 'Blender', 'FMOD', 'Post-Processing'],
      status: 'Completed'
    },
    features: [
      'Atmospheric horror environment design',
      'AI-driven chase mechanics and enemy behavior',
      'Investigation and puzzle-solving gameplay',
      'Immersive audio design and ambient soundscapes',
      'Multiple endings based on player choices',
      'Environmental storytelling through detailed level design'
    ],
    challenges: 'Creating tension and fear while maintaining engaging gameplay required careful balancing of enemy AI behavior, sound design, and pacing. Optimizing the detailed abandoned hotel environment for smooth performance was technically demanding.',
    outcome: 'Successfully delivered a complete horror experience that demonstrates proficiency in atmospheric design, AI programming, and narrative integration in game development.'
  },
  todapay: {
    title: 'TODAPAY',
    subtitle: 'Digital Tricycle Booking Platform',
    description: 'EMCommute Transportech Co. A startup application that focuses on digitalizing tricycle booking, bringing modern transportation solutions to traditional commuting methods.',
    image: imgImage3,
    details: {
      role: 'Full-Stack Developer, Application Designer, UI/UX Designer, Head of Project, Tester.',
      duration: '3 Months',
      technologies: ['Unity 6 Android [Application Engine], Figma [Design, UI/UX], Jetbrains Rider [Programming] '],
      status: 'Alpha Testing'
    },
    features: [
      'Real-time tricycle location tracking',
      'Seamless booking and payment integration',
      'Driver and passenger rating system',
      'Route optimization and fare calculation',
      'Push notifications for ride updates',
      'Analytics dashboard for drivers'
    ],
    challenges: 'Integrating real-time location tracking with reliable performance in areas with poor connectivity. Designing an intuitive interface for diverse user demographics, including those less familiar with digital platforms.',
    outcome: 'Created a functional MVP that addresses real transportation needs in the local community, demonstrating skills in mobile development, API integration, and user-centered design.'
  }
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #1a0b2e 0%, #16001e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Project not found</h2>
          <Link to="/" style={{ color: '#a78bfa', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #1a0b2e 0%, #16001e 100%)',
      paddingTop: '80px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Back Button */}
        <Link 
          to="/" 
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            marginBottom: '2rem',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          <div>
            <div style={{ 
              fontSize: '0.875rem',
              color: '#a78bfa',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>
              {project.details.status}
            </div>
            <h1 style={{ 
              fontSize: '3rem',
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              {project.title}
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '2rem'
            }}>
              {project.subtitle}
            </p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.8'
            }}>
              {project.description}
            </p>
          </div>

          <div style={{ 
            borderRadius: '12px',
            overflow: 'hidden',
            aspectRatio: '16/10',
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }}>
            <img 
              src={project.image} 
              alt={project.title}
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Project Details */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div>
            <div style={{ 
              fontSize: '0.75rem',
              color: '#a78bfa',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.5rem'
            }}>
              Role
            </div>
            <div style={{ color: 'white' }}>{project.details.role}</div>
          </div>
          <div>
            <div style={{ 
              fontSize: '0.75rem',
              color: '#a78bfa',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.5rem'
            }}>
              Duration
            </div>
            <div style={{ color: 'white' }}>{project.details.duration}</div>
          </div>
          <div>
            <div style={{ 
              fontSize: '0.75rem',
              color: '#a78bfa',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.5rem'
            }}>
              Technologies
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {project.details.technologies.map((tech, index) => (
                <span 
                  key={index}
                  style={{ 
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'rgba(167, 139, 250, 0.1)',
                    color: '#a78bfa',
                    borderRadius: '4px',
                    fontSize: '0.875rem'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem',
            color: 'white',
            marginBottom: '2rem',
            letterSpacing: '0.05em'
          }}>
            Key Features
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {project.features.map((feature, index) => (
              <div 
                key={index}
                style={{ 
                  padding: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                <div style={{ 
                  width: '2rem',
                  height: '2rem',
                  backgroundColor: 'rgba(167, 139, 250, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a78bfa',
                  marginBottom: '1rem'
                }}>
                  {index + 1}
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Outcome */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{ 
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ 
              color: '#a78bfa',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.875rem'
            }}>
              Challenges
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.8'
            }}>
              {project.challenges}
            </p>
          </div>
          <div style={{ 
            padding: '2rem',
            backgroundColor: 'rgba(167, 139, 250, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(167, 139, 250, 0.2)'
          }}>
            <h3 style={{ 
              color: '#a78bfa',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.875rem'
            }}>
              Outcome
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.8'
            }}>
              {project.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
