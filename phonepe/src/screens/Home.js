import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../utils/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Images from '../utils/images';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.purple} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.headrer2}>
          <View style={styles.headerLeftView}>
            <View>
              <Image source={Images.userIcon} style={styles.userIcon} />
              <Image source={Images.flagIcon} style={styles.flagIcon} />
            </View>
            <View style={styles.menuView}>
              <View style={styles.headerMenu}>
                <Text style={styles.homeText}>Home</Text>
                <Image
                  source={Images.downIcon}
                  style={styles.downIcon}
                  tintColor={Colors.white}
                />
              </View>
              <Text style={styles.address}>Sector 26, Chandigarh, India</Text>
            </View>
          </View>
          <View style={styles.headerRightView}>
            <Image source={Images.qrCodeIcon} style={styles.icons} />
            <Image
              source={Images.bellIcon}
              style={[styles.icons, {marginHorizontal: moderateScale(15)}]}
            />
            <Image source={Images.helpIcon} style={styles.icons} />
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.updateCard}>
          <View style={styles.updateTopView}>
            <Image source={Images.logoIcon} style={styles.logo} />
            <View>
              <Text style={styles.updateTitle}>App Update Available</Text>
              <Text style={styles.updateMessage}>
                {
                  'We needs to fixed some issue and add some cool features in this app'
                }
              </Text>
            </View>
          </View>
          <View style={styles.updateBtnView}>
            <Text style={styles.later}>LATER</Text>
            <TouchableOpacity style={styles.update}>
              <Text style={styles.updateText}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image source={Images.bannerImg} style={styles.banner} />
        <View style={styles.moneyTransferCard}>
          <Text style={styles.heading}>Money Transfers</Text>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image source={Images.usersIcon} style={styles.icons} />
              </View>
              <Text style={styles.transferText}>{'To Mobile Number'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image source={Images.bankIcon} style={styles.icons} />
              </View>
              <Text style={styles.transferText}>{'To Bank\n UPI ID'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image source={Images.selfIcon} style={styles.icons} />
              </View>
              <Text style={styles.transferText}>{'To Self Account'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image source={Images.bank2Icon} style={styles.icons} />
              </View>
              <Text style={styles.transferText}>{'To Check Balance'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.otherOptions}>
          <TouchableOpacity style={styles.otherOptionsTab}>
            <Image source={Images.walletIcon} style={styles.icons} />
            <Text style={styles.otherOptionsText}>PhonePe Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherOptionsTab}>
            <Image source={Images.giftIcon} style={styles.icons} />
            <Text style={styles.otherOptionsText}>Reward</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherOptionsTab}>
            <Image source={Images.referIcon} style={styles.icons} />
            <Text style={styles.otherOptionsText}>Refer & Get 100</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rechargAndBills}>
          <Text style={styles.heading}>Recharge & Pay Bills</Text>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.rechargeCard}>
                <Image source={Images.mobileIcon} style={styles.rechargeIcons} />
              </View>
              <Text style={styles.transferText}>{'Mobile Recharge'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.rechargeCard}>
                <Image source={Images.dthIcon} style={styles.rechargeIcons} />
              </View>
              <Text style={styles.transferText}>{'DTH'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.rechargeCard}>
                <Image source={Images.lightIcon} style={styles.rechargeIcons} />
              </View>
              <Text style={styles.transferText}>{'Electricity'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.rechargeCard}>
                <Image source={Images.creditcardIcon} style={styles.rechargeIcons} />
              </View>
              <Text style={styles.transferText}>{'Credit Card\n Payment'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.rechargeCard}>
                <Image source={Images.mobileIcon} style={styles.rechargeIcons} />
              </View>
              <Text style={styles.transferText}>{'Mobile Recharge'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.rechargeCard}>
                <Image source={Images.dthIcon} style={styles.rechargeIcons} />
              </View>
              <Text style={styles.transferText}>{'DTH'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.rechargeCard}>
                <Image source={Images.lightIcon} style={styles.rechargeIcons} />
              </View>
              <Text style={styles.transferText}>{'Electricity'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.rechargeCard}>
                <Image source={Images.creditcardIcon} style={styles.rechargeIcons} />
              </View>
              <Text style={styles.transferText}>{'Credit Card\n Payment'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  header: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: Colors.purple,
    justifyContent: 'flex-end',
  },
  headrer2: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  headerLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: scale(40),
    height: scale(40),
  },
  flagIcon: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    right: -moderateScale(3),
    bottom: moderateScale(0),
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: scale(10),
  },
  menuView: {
    marginLeft: moderateScale(15),
    alignSelf: 'center',
  },
  headerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeText: {
    fontSize: moderateScale(18),
    color: Colors.white,
    fontWeight: '600',
  },
  downIcon: {
    width: scale(16),
    height: scale(16),
    marginLeft: moderateScale(5),
  },
  address: {
    color: Colors.white,
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: scale(24),
    height: scale(24),
    tintColor: Colors.white,
  },
  updateCard: {
    width: '94%',
    borderRadius: moderateScale(5),
    alignSelf: 'center',
    marginTop: verticalScale(10),
    backgroundColor: Colors.white,
  },
  updateTopView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: moderateScale(15),
    marginTop: moderateScale(20),
  },
  logo: {
    width: scale(30),
    height: scale(30),
  },
  updateTitle: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    marginLeft: moderateScale(10),
  },
  updateMessage: {
    fontSize: moderateScale(16),
    width: '60%',
    fontWeight: '600',
    marginLeft: moderateScale(10),
    color: Colors.gray,
  },
  updateBtnView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginVertical: moderateScale(15),
    alignItems: 'center',
    marginRight: moderateScale(20),
  },
  later: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.purple,
  },
  update: {
    backgroundColor: Colors.purple,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    marginLeft: moderateScale(20),
    borderRadius: moderateScale(20),
  },
  updateText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: Colors.white,
  },
  banner: {
    width: '94%',
    height: verticalScale(130),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  moneyTransferCard: {
    width: '94%',
    height: moderateScale(150),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginTop: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  heading: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
  },
  transferView: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(20),
  },
  transferTab: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferCard: {
    width: scale(36),
    height: scale(36),
    borderRadius: moderateScale(10),
    backgroundColor: Colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferText: {
    marginTop: moderateScale(5),
    fontWeight: '600',
    textAlign: 'center',
  },
  otherOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
    marginTop: moderateScale(10),
    alignSelf: 'center',
  },
  otherOptionsTab: {
    width: '31%',
    height: verticalScale(60),
    borderRadius: moderateScale(18),
    backgroundColor: Colors.blueShed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherOptionsText: {
    color: Colors.white,
    fontWeight: '600',
    marginTop: moderateScale(10),
  },
  rechargAndBills: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(5),
    marginTop: moderateVerticalScale(10),
    alignSelf: 'center',
    // height: verticalScale(300),
    width: '94%',
    marginBottom: moderateVerticalScale(20)
  },
  rechargeIcons: {
    width: scale(30),
    height: scale(30),
    tintColor: Colors.purple
  },
  rechargeCard: {
    width: scale(36),
    height: scale(36),
    borderRadius: moderateScale(10),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
