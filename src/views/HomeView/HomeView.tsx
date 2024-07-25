import { UserList } from "../../components/UserList/UserList";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { BiUserPlus } from "react-icons/bi";
import { PublicRoutes } from "../../models/routes";

const HomeView = () => {
  return (
    <Container>
      <Header
        buttonTitle="Add new user"
        icon={<BiUserPlus />}
        navigation={PublicRoutes.NEW_USER}
      />
      <UserList />
    </Container>
  );
};
export default HomeView;
