import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <React.Fragment>
      <View>
        <View style={styles.header}>
          {/* Icon */}
          <Image source={require('./assets/schedule.png')}/>
           {/* Title */}
          <Text>Danh sách tìm kiếm</Text>
        </View>
        {/* Image */}
        <View style={styles.recent__image__search}>
          <View>
            <Image 
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/wanda.jpg')}
            />
            <Text style={styles.recent__image__text}>Wanda</Text>
          </View>
          <View>
            <Image 
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/yasuo.jpg')}
            />
            <Text style={styles.recent__image__text}>Yasuo</Text>
          </View>
          <View>
            <Image 
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/captain.jpg')}
            />
            <Text style={styles.recent__image__text}>Captain</Text>
          </View>
          <View>
            <Image 
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/flash.jpg')}
            />
            <Text style={styles.recent__image__text}>Flash</Text>
          </View>
        </View>
      </View>
      {/* Footer */}
        <View style={styles.footer}>
          <Image source={require('./assets/group.png')}/>
          <Text>Gợi ý kết bạn</Text>
        </View>
        <ScrollView>
          {/* Friend: 1 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/strange.jpg')}
            />

            <View style={styles.footer__listFriend__content}>
              <Text>Strange</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
          {/* Friend: 2 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/suppergirl.jpg')}
            />
            
            <View style={styles.footer__listFriend__content}>
              <Text>Kara</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
          {/* Friend: 3 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/wonderwoman.jpg')}
            />
            
            <View style={styles.footer__listFriend__content}>
              <Text>Diana</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
          {/* Friend: 4 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/blackwidow.jpeg')}
            />
            <View style={styles.footer__listFriend__content}>
              <Text>Natasha</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
          {/* Friend: 5 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/strange.jpg')}
            />

            <View style={styles.footer__listFriend__content}>
              <Text>Strange</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
          {/* Friend: 6 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/suppergirl.jpg')}
            />
            
            <View style={styles.footer__listFriend__content}>
              <Text>Kara</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
          {/* Friend: 7 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/wonderwoman.jpg')}
            />
            
            <View style={styles.footer__listFriend__content}>
              <Text>Diana</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
          {/* Friend: 8 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/blackwidow.jpeg')}
            />
            <View style={styles.footer__listFriend__content}>
              <Text>Natasha</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
          {/* Friend: 9 */}
          <View style={styles.footer__listFriend}>
            <Image
              resizeMode='contain'
              style={styles.image} 
              source={require('./assets/blackwidow.jpeg')}
            />
            <View style={styles.footer__listFriend__content}>
              <Text>Natasha</Text>
              <Text>15 Bạn chung</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.footer__listFriend__button}>Kết bạn</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </React.Fragment> 
  )
}

export default App

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
  },
  recent__image__search:{
    flexDirection:'row', 
    display: 'flex', 
    justifyContent:'space-around',
    alignItems:'center',
  },
  recent__image__text:{
    fontSize:10,
    fontWeight:'900',
  },
  image:{
    width:50,
    height:50,
    borderRadius:125,
    borderWidth:1,
    borderColor:'gray',
    marginBottom:20,
    flexDirection:'row'
  },
  footer:{
    flexDirection:'row',
    alignItems:'center',
  },
  footer__listFriend:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  footer__listFriend__content:{
    flexDirection:'column',
  },
  footer__listFriend__button:{
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'#9932cc'
  }
})