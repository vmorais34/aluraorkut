import styled from "styled-components";

const MainGrid = styled.main`
display: grid;
width: 100%;
padding: 16px;
grid-gap: 10px;
margin 0 auto
max-width: 500px;
.profileArea {
  display:none;
  @media(min-width: 860px) {
    display:block
  }
}

@media screen and (min-width: 860px)  {
  max-width: 1110px;
  grid-template-areas: "profileArea welcomeArea profileRelationsArea";
  grid-template-columns: 160px 1fr 312px;
}
`;

export default MainGrid;
