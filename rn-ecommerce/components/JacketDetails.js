import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';




const JacketDetails = () => {
  return (
    <View style={styles.container}>
       <View style={styles.StarsTop}>   
          <Image style={styles.StarImg2}  source={require("../assets/roundedblack-arrow.png")} /> 
          <Image style={styles.StarImg1}  source={require("../assets/Cart.jpg")} />
       </View>
       <View style={styles.Image_Text}>
           <View>
              <Image style={styles.Image} source={require("../assets/redwomenjacket.jpg")} />
           </View> 
       </View>
       <View style={styles.starText_PR}>
          <Text style={styles.JacketText}>Red Women Jacket</Text>
            <View  style={styles.Stars}>
              <Text style={styles.ReviewText}>Review : </Text>
              <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
              <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
              <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
              <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
              <Image style={styles.StarImg}  source={require("../assets/L3.png")} /> 
            </View>
          <Text style={styles.JacketPrice}></Text>
          </View>
              <View style={styles.RendertText}>
                <Text style={styles.RendertText}>It is a long established fact that a render will be distracted by the readable content of a page.</Text>
              </View>
              <View style={styles.RendertText1}>
                <Text style={styles.RendertText2}>Matterial: 91% polyester, 9% elastane</Text>
              </View>
              <View style={styles.MainsizeTextContainer}>
                 <View style={styles.sizeTextContainer}>
                   <Text style={styles.sizeText}>XS</Text>
                 </View>
                 <View style={styles.sizeTextContainer}>
                   <Text style={styles.sizeText}>S</Text>
                 </View>
                 <View style={styles.sizeTextContainer}>
                   <Text style={styles.sizeText}>M</Text>
                 </View>
                 <View style={styles.sizeTextContainer}>
                     <Text style={styles.sizeText}>L</Text>
                 </View>
                 <View style={styles.sizeTextContainer}>
                   <Text style={styles.sizeText}>XL</Text>
                 </View>
              </View>
              <View style={styles.PriceButtonContainer}>
                  <View style={styles.buttonNext2}>
                     <Text style={styles.totalAmount}>Total Amount</Text>
                     <Text style={styles.TextPrice} >$110</Text>
                  </View>
                  <View>
                     <TouchableOpacity style={styles.buttonNext1}>
                       <Text style={styles.buttonnextText}>Add to Cart</Text>
                     </TouchableOpacity>
                  </View>  
              </View> 
    </View>
)
}

export default JacketDetails;



const styles = StyleSheet.create({
  TextPrice:{
    fontSize:30,
    fontWeight:"bold",
    color:"white"

  },

  totalAmount:{
    fontWeight:"bold",
    color:"#f0f8ff"

  },

  buttonNext1:{
    width:120,
    height:50,
    borderRadius:12,
    justifyContent:"center",
    backgroundColor:"#0000ff",
    alignSelf: "flex-end",
    marginHorizontal:15
  
  },

  buttonNext2:{
    flexDirection:"column",
    marginHorizontal:10,
    width:100,
    marginVertical:10,
    alignSelf: "flex-start",
  },

  container:{
      justifycontent:"center",
      backgroundColor:"#faf0e6",
      borderRadius:20,
      marginHorizontal:10,
      marginVertical:40
    },

    buttonnextText :{
      fontSize:16,
      marginVertical:5,
      justifyContent:"center",
     textAlign:"center",
      color:"white",
      fontWeight:"bold"
    },

    Image: {
      width:330,
      height:310,
      marginHorizontal:10,
      marginVertical:10,
      backgroundColor:"white",
     borderRadius:20,
      alignItems:"center",
   
  },

  Heading: {
      marginHorizontal: 10,
      marginTop:2,
      marginBottom:20,
  },

  HeadingText:{
      fontSize:20,
      fontWeight:"bold",
      marginHorizontal:20,
  },

  Image_Text:{
    width:340,
    height:340,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    marginHorizontal:20,
    borderRadius:20,
  },

  StarImg:{
   width:20,
   height:20,
  },

  StarImg2:{
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor:"white",
    alignSelf:"center"
   },

  StarImg1:{
    width:40,
    height:40,
    borderRadius:20,
   },

  Stars:{
    flexDirection:"row",
    marginVertical:5,
  },

  starText_PR:{
    justifyContent:"center",
    marginHorizontal:20,
    marginVertical:5,
  },
  JacketText:{
    fontSize:30,
    fontWeight:"bold",
  },

  JacketPrice:{
    fontSize:3,
    fontWeight:"bold",
    marginVertical:10,
    backgroundColor:"#6495ed",
    marginRight:290
  },

  StarsTop:{ 
    marginHorizontal:20,
    marginVertical:4,
    flexDirection:"row",
    justifyContent: 'space-between',
  },

  StarsTopArrow:{
    marginTop:10,
    marginHorizontal:10,
    alignSelf: "flex-start",
    alignItems:"flex-start",
    borderRadius:20
  },

  topbar_Text:{
    flexDirection:"row",
  },

  ReviewText:{
    fontSize:16,
    fontWeight:"bold",
    marginVertical:2
  },

  RendertText:{
    fontSize:14.9,
    fontWeight:"bold",
    marginHorizontal:10
  },

  RendertText2:{
    fontSize:14.9,
    color:"#6495ed",
    fontWeight:"bold",
    marginHorizontal:10,
    marginVertical:20,
    backgroundColor:"white"
  },

  RendertText1:{
    fontSize:14.9,
    color:"#6495ed",
    fontWeight:"bold",
    marginHorizontal:10,
    marginVertical:5,
    backgroundColor:"white"
  },

  RendertText3:{
    flexDirection:"row",
    width:50,
    height:50,
    fontSize:14.9,
    color:"#6495ed",
    fontWeight:"bold",
    marginHorizontal:10,
    marginVertical:20,
    
    backgroundColor:"white",
  },

  sizeText:{
   fontSize:12,
   textAlign:"center",
   justifyContent:"center",
   marginHorizontal:10,
   marginVertical:10,
    
  },

  sizeTextContainer:{
    flexDirection:"row",
    width:40,
    height:40,
    backgroundColor:"white",
    marginHorizontal:10,
    marginVertical:10,
  },

  MainsizeTextContainer:{
    flexDirection:"row",
    alignSelf:"center",
  },

  PriceButtonContainer:{
   backgroundColor:"#6495ed",
    width:320,
    height:80,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"space-between",
    alignSelf:"center",
    marginTop:10,
    marginBottom:30,
    flexDirection:"row"
  }
});