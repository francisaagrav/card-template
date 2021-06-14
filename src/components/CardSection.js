import styled from 'styled-components';

export default function CardSection({ data }) {
  return (
    <Container>
      {data.map((card) => (
        <Card>
          <CardTitle>Model: {card.title}</CardTitle>
          <CardBody>Count: {card.middleNumber}</CardBody>
          <Divider />
          <CardFooter>Percent Complete: {card.bottomNumbers}%</CardFooter>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 250px;
  margin: 0.5rem 0;
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
`;

const CardBody = styled.div`
  margin: 1rem 0;
`;
const Divider = styled.div`
  border-top: 1px solid lightgray;
  margin-left: -1rem;
  margin-right: -1rem;
`;
const CardFooter = styled.div`
  margin-top: 1rem;
`;
