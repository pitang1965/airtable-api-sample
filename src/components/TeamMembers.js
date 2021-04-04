import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const TeamMembersWrapper = styled.div`
  color: purple;
`;

const TeamMembers = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(sort: { order: ASC, fields: data___Order }) {
        nodes {
          data {
            Name
            Bio
            Homepage_URL
            Twitter_username
            GitHub_username
            Instagram_username
            YouTube_username
            Photo {
              localFiles {
                childImageSharp {
                  gatsbyImageData(
                    width: 200
                    layout: FIXED
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  // GraphQLで取得したAirtableのデータを元のスターターの形式のオブジェクト配列に設定
  const teamMembers = [];
  data.allAirtable.nodes.map((node) => {
    teamMembers.push({
      file: node.data.Photo.localFiles[0],
      header: node.data.Name,
      subheader: node.data.Bio,
      social: {
        homepage: node.data.Homepage_URL,
        twitter: node.data.Twitter_username,
        github: node.data.GitHub_username,
        instagram: node.data.Instagram_username,
        youtube: node.data.YouTube_username,
      },
    });
  });

  return (
    <TeamMembersWrapper>
      {teamMembers.map((member) => (
        <TeamMember member={member} key={member.header} />
      ))}
    </TeamMembersWrapper>
  );
};

export default TeamMembers;
