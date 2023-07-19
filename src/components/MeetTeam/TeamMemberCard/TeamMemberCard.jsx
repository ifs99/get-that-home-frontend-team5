import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import IconLink from "../../ui/IconLink";

const StyledTeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
  gap: 1rem;
`;

const MemberName = styled.div`
  color: #000;
  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IconsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

function TeamMemberCard({ image, name, github_url, linkedin_url }) {
  return (
    <StyledTeamMemberCard>
      <img src={image} alt={`${name} image`} />
      <MemberName>{name}</MemberName>
      <IconsWrapper>
        <IconLink href={github_url} target="_blank" Icon={<AiFillGithub />} />
        <IconLink
          href={linkedin_url}
          target="_blank"
          Icon={<AiOutlineLinkedin />}
        />
      </IconsWrapper>
    </StyledTeamMemberCard>
  );
}

export default TeamMemberCard;
