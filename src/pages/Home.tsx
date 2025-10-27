import { Link } from 'react-router-dom';
import imgImage from "figma:asset/cb0478454199fbc4540aead9f9911e3b411573ff.png";
import imgImage1 from "figma:asset/e723a3a921b7364a9fd5c9987650e639e5e37b99.png";
import imgImage2 from "figma:asset/4c364980273eb285a6b98bd2ce5d58313866c189.png";
import imgImage3 from "figma:asset/385737d7a5d62e174796a599ef23edf3d6bc4011.png";

function Text() {
  return (
    <div className="css-7js8wp css-eagkq5 css-v27th6" data-name="Text">
      <div className="css-3g3vf9 css-hn57i2 css-v27th6 css-vkpzlc">
        <h2 className="css-8zr56v css-ydwdby">KYO MATIAS</h2>
      </div>
      <div className="css-94haug css-hoaqrl css-v27th6 css-vkpzlc">
        <p className="css-8zr56v css-i8wmi">Full-Stack Indie Game Developer | 3D Artist | Video Producer</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="css-7llhst css-hv01ud" data-name="Content">
      <div className="css-j9f0op css-riie9k">
        <div className="css-7js8wp css-dyo2v8 css-ntwgxc">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="css-40w5vn css-u87nn3 css-v27th6" data-name="Hero 1">
      <div aria-hidden="true" className="css-wc1msa css-wivng" data-name="Image" role="presentation">
        <img alt="" className="css-9unj7x css-ez8men css-r0azwh css-trglf0" src={imgImage} />
      </div>
      <Content />
    </section>
  );
}

function Text1() {
  return (
    <div className="css-7js8wp css-v27th6 css-xwptil" data-name="Text">
      <div className="css-96v7ph css-l1xo53 css-v27th6 css-vkpzlc">
        <h5 className="css-8zr56v css-ydwe2n">BOOST</h5>
      </div>
      <div className="css-1yptbg css-jlwmx6 css-v27th6 css-vkpzlc">
        <p className="css-8zr56v css-i8wmi">A 3D story-driven racing game developed in Unity 6. A passion projects that features In-house developed elements. a first project for a first challenge.</p>
      </div>
    </div>
  );
}

function Boost() {
  return (
    <li className="css-5tpl2f css-7js8wp css-ro970o" data-name="Boost">
      <Link to="/project/boost" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', cursor: 'pointer' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div aria-hidden="true" className="css-1oxkje css-hjpdqr css-v27th6" data-name="Image" role="presentation">
          <img alt="" className="css-9unj7x css-ez8men css-qxs0us css-r0azwh css-trglf0" src={imgImage1} />
        </div>
        <Text1 />
      </Link>
    </li>
  );
}

function Text2() {
  return (
    <div className="css-7js8wp css-v27th6 css-xwptil" data-name="Text">
      <div className="css-96v7ph css-l1xo53 css-v27th6 css-vkpzlc">
        <h5 className="css-8zr56v css-ydwe2n">BUNNY</h5>
      </div>
      <div className="css-1yptbg css-jlwmx6 css-v27th6 css-vkpzlc">
        <p className="css-8zr56v css-i8wmi">A 3D Horror Chase game developed in Unity. You play as the student council figuring out a murder case that takes place in an abandoned hotel.</p>
      </div>
    </div>
  );
}

function Bunny() {
  return (
    <li className="css-5tpl2f css-7js8wp css-ro970o" data-name="Bunny">
      <Link to="/project/bunny" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', cursor: 'pointer' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div aria-hidden="true" className="css-1oxkje css-v27th6 css-vnzzfl" data-name="Image" role="presentation">
          <img alt="" className="css-9unj7x css-ez8men css-qxs0us css-r0azwh css-trglf0" src={imgImage2} />
        </div>
        <Text2 />
      </Link>
    </li>
  );
}

function Text3() {
  return (
    <div className="css-7js8wp css-v27th6 css-xwptil" data-name="Text">
      <div className="css-96v7ph css-l1xo53 css-v27th6 css-vkpzlc">
        <h5 className="css-8zr56v css-ydwe2n">TODAPAY</h5>
      </div>
      <div className="css-1yptbg css-jlwmx6 css-v27th6 css-vkpzlc">
        <p className="css-8zr56v css-i8wmi">{`A Startup application that focuses on digitalizing Tricycle booking.  `}</p>
      </div>
    </div>
  );
}

function Todapay() {
  return (
    <li className="css-5tpl2f css-7js8wp css-ro970o" data-name="TODAPAY">
      <Link to="/project/todapay" style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', cursor: 'pointer' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div aria-hidden="true" className="css-1oxkje css-v27th6 css-vnzzfl" data-name="Image" role="presentation">
          <img alt="" className="css-9unj7x css-ez8men css-qxs0us css-r0azwh css-trglf0" src={imgImage3} />
        </div>
        <Text3 />
      </Link>
    </li>
  );
}

function FeatureCards() {
  return (
    <div className="css-5knerd css-v27th6" data-name="Feature cards 1">
      <div className="css-5xuf0a css-j9f0op">
        <ul className="css-7js8wp css-srexo2 css-v27th6">
          <li className="css-8bh8if css-bhht40" style={{ "--transform-inner-width": "694", "--transform-inner-height": "300" } as React.CSSProperties}>
            <div className="css-ayg824 css-dyglrz css-edc7e7">
              <div className="css-bit005 css-m3o9si css-u3ozh4 css-yofbhi">
                <p className="css-8zr56v css-i8wmi">PROJECTS</p>
              </div>
            </div>
          </li>
          <Boost />
          <Bunny />
          <Todapay />
        </ul>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="css-9cinb3 css-busxrg css-j9f0op" data-name="Desktop" style={{ paddingTop: '80px' }}>
      <Hero />
      <FeatureCards />
    </div>
  );
}
