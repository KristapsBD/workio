import React from 'react';

import InfoSection, { InfoSectionProps } from './components/InfoSection';

const sections: InfoSectionProps[] = [
  {
    primary: true,
    reverse: false,
    lightMode: false,

    buttonLabel: 'Get Started',
    topLineText: 'We Care to help',
    headingText: 'Connecting workers with employers using machine learning',
    subtitleText:
      'We help teens in finding work and offer workforce outsourcing for businesses.',

    imageAlt: 'Credit Card',
    imageUrl: require('./assets/agree.svg'),
  },
  {
    primary: true,
    reverse: true,
    lightMode: true,

    buttonLabel: 'Learn More',
    topLineText: 'Access Anywhere',
    headingText: 'Browse for work & submit help requests with any device',
    subtitleText:
      'It does not matter whether you use laptop, tablet or phone. Workio works great on all. Now you can be aware of potential job opportunities or get help wherever you are.',

    imageAlt: 'Vault',
    imageUrl: require('./assets/responsive.svg'),
  },
  {
    primary: true,
    reverse: false,
    lightMode: false,

    buttonLabel: 'Learn More',
    topLineText: 'Simplify Finding Work',
    headingText: 'Find the best work opportunities',
    subtitleText:
      'Just add your skills and previous experience. We will find the best job opportunities for you, using the power of machine learning.',

    imageAlt: 'Vault',
    imageUrl: require('./assets/volunteer.jpg'),
  },
  {
    primary: true,
    reverse: true,
    lightMode: true,

    buttonLabel: 'Sign Up Now',
    topLineText: 'Self Improvement',
    headingText: 'Gather reviews and gain experience',
    subtitleText:
      'With our unique rating system each teen can rate the workplace environment and every employer can review the helpers work quality.',

    imageAlt: 'Vault',
    imageUrl: require('./assets/rate.svg'),
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <InfoSection {...sections[0]} />
      <InfoSection {...sections[1]} />
      <InfoSection {...sections[2]} />
      <InfoSection {...sections[3]} />
    </>
  );
};

export default HomePage;
