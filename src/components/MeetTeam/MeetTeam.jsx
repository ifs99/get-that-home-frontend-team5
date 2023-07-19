import styled from "@emotion/styled";

import rossio_profile from "../../assets/teamphotos/rossio.png";
import italo_profile from "../../assets/teamphotos/italo.png";
import manuel_profile from "../../assets/teamphotos/manuel.png";
import crhistian_profile from "../../assets/teamphotos/crhistian.png";
import Title from "../ui/Title";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";

const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding-top: 64px;
  padding-bottom: 64px;
`;

const TeamWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

function MeetTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Rossio Lachos",
      profile_image: rossio_profile,
      linkedin_url: "https://www.linkedin.com/in/rlachos/",
      github_url: "https://github.com/rlachos",
    },
    {
      id: 2,
      name: "Manuel Aguilar",
      profile_image: manuel_profile,
      linkedin_url: "https://www.linkedin.com/in/manumaxaguilar/",
      github_url: "https://github.com/MaxAgui",
    },
    {
      id: 3,
      name: "Italo Flores",
      profile_image: italo_profile,
      linkedin_url: "https://pe.linkedin.com/in/italo-flores-2830b4210",
      github_url: "https://github.com/ifs99",
    },
    {
      id: 4,
      name: "Crhistian Turpo",
      profile_image: crhistian_profile,
      linkedin_url: "https://www.linkedin.com/in/crhistianturpo/",
      github_url: "https://github.com/CrhistianT7",
    },
  ];

  return (
    <TeamSection>
      <Title text="Meet the team" />
      <TeamWrapper>
        {teamMembers.map((member) => {
          return (
            <TeamMemberCard
              key={member.id}
              image={member.profile_image}
              name={member.name}
              github_url={member.github_url}
              linkedin_url={member.linkedin_url}
            />
          );
        })}
      </TeamWrapper>
    </TeamSection>
  );
}

export default MeetTeam;
