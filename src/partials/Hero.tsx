import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, I'm <GradientText>Kevin</GradientText>
        </>
      }
      description={
        <>
          I am a{' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Principal Cloud Architect
          </a>{' '}
          specializing in{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Amazon Web Services
          </a>{' '}
          with a specific focus on{' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Infrastructure as Code (IaC) 
          </a>{' '}
          and{' '} 
          <a className="text-cyan-400 hover:underline" href="/">
          automation. 
          </a>{' '}
          I am gradually learning{' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Azure 
          </a>{' '}
          and{' '}
          <a className="text-cyan-400 hover:underline" href="/">
          Google Cloud Platform (GCP) 
          </a>{' '}
          experience to my resume, enjoying the challenges of being proficient{' '}
          across a broad range of technologies.{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/homan13psu/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.facebook.com/kmhoman13/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://linkedin.com/in/kevin-homan/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://youtube.com/@KevinHoman/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
