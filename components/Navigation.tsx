import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.hash === '#/';

  return (
    <nav className="css-j9f0op" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="css-j9f0op" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ 
          textDecoration: 'none',
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: '600',
          letterSpacing: '0.05em'
        }}>
          KYO MATIAS
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none',
              color: isHome ? '#a78bfa' : 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'color 0.2s'
            }}
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            style={{ 
              textDecoration: 'none',
              color: location.hash === '#/about' ? '#a78bfa' : 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'color 0.2s'
            }}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
