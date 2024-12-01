import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="CloudFormation"
        description="Various examples of CloudFormation templates demonstrating how you can build infrastructure and applications in AWS."
        link="https://github.com/Homan13/cloudFormation/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'CloudFormation Templates',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>CloudFormation</Tags>
            <Tags color={ColorTags.LIME}>IaC</Tags>
            <Tags color={ColorTags.SKY}>YAML</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
