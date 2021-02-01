import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Modal,
  TouchableHighlight,
  TextInput,
  Easing
} from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Block, Text, theme } from "galio-framework";
import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { connect } from 'react-redux'
import { addBio } from '../actions/user'
import { bindActionCreators } from 'redux'
const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    modalVisible: false,
    bio: "",
    daysCompleted: 0,
  }

}
  calculateDaysCompleted(progress) {
    let res = 0;
    for (let i = 0, j = progress.length; i < j; i += 1) {
        if (progress[i] === true) {
          res += 1;
        }
    }
    return res
  }

  componentDidMount() {
    let days = this.calculateDaysCompleted(this.props.user.progress)
    this.setState({daysCompleted: days})
    this.setState({bio: this.props.user.bio})
  }

  shouldComponentUpdate(nextProps, nextState) {
    let currentDays = this.calculateDaysCompleted(nextProps.user.progress)
    if(this.state.daysCompleted !== currentDays) {
      this.setState({daysCompleted: currentDays})
      return true
    }
    else {
      return false
    }
}

  /* componentDidUpdate(prevProps) {
    let currentDays = this.calculateDaysCompleted(this.props.user.progress)
    if(this.state.daysCompleted !== currentDays) {
      this.setState({daysCompleted: currentDays})
    }
  } */

  handleBio = () => {
    this.setState({modalVisible: false})
    this.props.addBio(this.state.bio)
  }
  render() {
    console.log("render")
    console.log(this.state)
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={"always"}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>

                  <Block row space="between">
                    <Block middle>

                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                    {`${this.props.user.firstname} ${this.props.user.lastname}`}
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "center" }}
                    >
                    
                      {`${this.props.user.bio}`}
                      </Text>
                          <Modal
                          animationType="slide"
                          transparent={true}
                          visible={this.state.modalVisible}
                          onRequestClose={() => {
                          Alert.alert("Modal has been closed.");
                        }}
                      >
                      <Block top>
                        <Block middle style={styles.modalView}>
                        <Block width={width * 0.7} height={height * 0.3}>
                          <TextInput
                            placeholder="  Write something here"
                            style={styles.input}
                            textAlignVertical={'top'} 
                            value={this.state.bio}
                            multiline
                            onChangeText={bio => this.setState({bio: bio})}
                          />
                    </Block>
                          <Block bottom row>
                          <Block left>
                          <TouchableHighlight

                            style={{ ...styles.submitButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                              this.handleBio()
                            }}
                          >
                            <Text style={styles.textStyle}>Submit</Text>
                          </TouchableHighlight>
                          </Block>
                          <Block right>
                          <TouchableHighlight
                            style={{ ...styles.cancelButton, backgroundColor: "#FF0000" }}
                            onPress={() => {
                              this.setState({modalVisible: false})
                            }}
                          >
                            <Text style={styles.textStyle}>Cancel</Text>
                          </TouchableHighlight>
                          </Block>
                          </Block>

                        </Block>
                      </Block>
                    </Modal>
                    <Block middle style={styles.nameInfo}>
                      <Button onPress={() => this.setState({modalVisible: true})}><Text style={styles.textStyle}>Edit Bio</Text></Button>
                    </Block>
                    <Block style={styles.registerContainer}>
                    <Block style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}>
                    <Text center bold size={22} color="#32325D" style={{marginTop: 10}}>
                        Your Progress
                     </Text>
                     </Block>
                    <Block middle style={{marginTop: 15}}>
                    <Text bold size={19} color="#32325D">
                        {`${this.state.daysCompleted} / ${this.props.user.progress.length}`}
                      </Text>
                      <Text bold size={19} color="#32325D">
                        Days Completed
                      </Text>
                    </Block>
                    <Block middle style={{marginTop: 50}}>
                    <AnimatedCircularProgress
                        key={1}
                        size={120}
                        width={15}
                        fill={Math.ceil((this.state.daysCompleted*100)/this.props.user.progress.length)}
                        tintColor="green"
                        onAnimationComplete={() => console.log('Complete')}
                        backgroundColor="#3d5875">
                          {
                            (fill) => (
                              <Text size={30}>
                                {`${Math.ceil((this.state.daysCompleted*100)/this.props.user.progress.length)}%`}
                              </Text>
                            )
                          }
                    </AnimatedCircularProgress>
                    </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  registerContainer: {
    marginTop: 20,
    width: width * 0.9,
    height: height * 0.4,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    submitButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: 75,
      marginRight: 120
    },
    cancelButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: 75
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input: {
      margin: 15,
      height: height * 0.25,
      width: width * 0.69,
      borderColor: 'gray',
      borderWidth: 1,
   },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addBio }, dispatch)
}

const mapStateToProps = state => {
	return {
    user: state.user
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

