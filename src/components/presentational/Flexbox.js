import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-flow: ${props => props.type==='welcoming'? 'row nowrap' : 'row wrap'};
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 991px) {
    flex-flow: row wrap;
  }
`;

function Flexbox(props) {
  return (
    <Flex type={props.type}>
      {props.children}
    </Flex>
  );

}

export default Flexbox;
