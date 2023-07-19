import styled from "@emotion/styled";

const CreateAccountSection = styled.section`
  background: rgba(244, 143, 177, 0.15);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 820px;
  padding-top: 4rem;
  padding-bottom: 4rem;
  gap: 2rem;
`;
const Text = styled.span`
  color: var(--dark-gray, #373737);
  text-align: center;

  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.25px;
`;

function CreateAccount() {
  return (
    <CreateAccountSection>
      <Container>
        <Text>
          Getting someone to rent your apartment has never been this easy
        </Text>
        <button>CREATE AN ACCOOUNT NOW</button>
      </Container>
    </CreateAccountSection>
  );
}

export default CreateAccount;
