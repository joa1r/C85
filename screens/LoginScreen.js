import { createSwitcNavigator, createAppContainer} from "react-native";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppSwitcNavigator = createSwitcNavigator(
   {
    Login: {screen: LoginScreen},
    BottomTab: {screen: BottomTabNavigator},
    },
    {
     initialRouteName: "Login"
    }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

constructor(props) {
    super(props);
    this.state ={
        email: "",
        password: ""
    };
};

 handleLogin = (email, password) => {
    firebase
     .auth
     .singInWithEmail(email, password)
     .thern(() =>{
        this.props.navigation.navigate("BottomTab")
      })
      .catch(erro =>{
        Alert.alert(error.message);
      });
 
 };


