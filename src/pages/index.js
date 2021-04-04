import * as React from 'react';
import TeamMembersWrapper from '../components/TeamMembers';

const IndexPage = () => {
  return (
    <>
      <title>Home Page</title>
      <div>
        Over 40 Web Club
        <br />
        <span>— わたしは学び続けます。あなたもご一緒に</span>
        <span role='img' aria-label='Party popper emojis'>
          😊{' '}
        </span>
      </div>
      <TeamMembersWrapper />
    </>
  );
};

export default IndexPage;
