import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const TeamMemberWrapper = styled.div`
  margin: 2em;
  padding: 1em;
  border: 1px solid black;
`;

const TeamMember = ({ member }) => {
  return (
    <TeamMemberWrapper>
      <GatsbyImage image={getImage(member.file)} alt={member.header} />
      <h1>{member.header}</h1>
      <p>{member.subheader}</p>
      {member.social.homepage && <p>ホームページ: {member.social.homepage}</p>}
      {member.social.twitter && <p>Twitter: {member.social.twitter}</p>}
      {member.social.github && <p>GitHub: {member.social.github}</p>}
      {member.social.instagram && <p>Instagram: {member.social.instagram}</p>}
      {member.social.youtube && <p>YouTube: {member.social.youtube}</p>}
    </TeamMemberWrapper>
  );
};

export default TeamMember;
