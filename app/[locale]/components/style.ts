import { Document, Page, View, Text, Image, StyleSheet,Font  } from '@react-pdf/renderer';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

export const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: "Helvetica",
    backgroundColor: "#f7f7f7",
 
  },
  leftColumn: {
    width:'30%',
    backgroundColor: "#2c3e50",
    color:"#d5d8dc"
  },
  leftContainer : {
    width:"100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarView: {
    marginTop:'20px',
    alignItems: 'center', // Center the avatar in the parent view
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 55, // Slightly larger than the image to maintain roundness
    borderWidth: 5, // Border width
    borderColor: 'white',
    width: 110, // Include border width
    height: 110, // Include border width
  },
  avatar: {
    width: 100, // Image width
    height: 100, // Image height
    borderRadius: 50, // Make the image round
    objectFit: 'cover', 
  },
  leftTextContainer:{
    marginTop:'20px',
    width: '100%', // Image width
    paddingLeft:'18px',
    paddingRight:'15px',
       textAlign:'left'
  },
  leftTextContainerTitle:{
    marginTop:'10px',
    borderBottom:'2px solid #d5d8dc',
    paddingBottom:'4px'
  },
  leftTextContainerTitleText:{
    fontFamily: 'Times-Roman',
    fontWeight:'bold',
    fontSize:'15px'
   },

   leftInfoContainer:{
    marginTop:'10px'
   },
   icons:{
    width: 18, // Include border width
    height: 18,
    marginRight:'8px'
  },
   leftInfoContainerInner:{
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    marginTop:'5px'
    
    
  },
  leftTextContainerTitleTextInner:{
      fontFamily:'Roboto',
      fontSize:'10px'
  },
  leftInfoContainerEducation:{
    marginTop:'10px'
  },
  leftTextContainerTitleTextInnerred:{
    color:'red',
    fontSize:'12px',
    fontStyle:'italic',
  },



  rightColumn: {
    width:'70%',
    backgroundColor: "#d5d8dc",

  },

  rightColumnNote:{
    padding:'5px',  
    height:'60px',
    color:'red'
  },

  rightColumnNoteText:{

    fontSize:'12px'
  
  },
  rightColumnContainer:{
    width:"100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:'15px',
    paddingRight:'15px'
  },

  rightColumNameWeb:{
    display: 'flex',

  },
  rightColumnName:{

     display:'flex',
    justifyContent: 'center',

  },
  rightColumnNameText: {
    fontFamily: 'Helvetica',
    fontSize: 32,  // Ensure this is a number without 'px'

  },
  rightColumnNameTextBold: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 32,  // Ensure this is a number without 'px'

  },
  rightColumnNameTextWeb:{
    fontFamily: 'Helvetica-Bold',
    fontSize: 12,
  },
  rightColumnProfile:{
    width:'100%',
    marginTop:'20px',
    borderBottom:'2px solid black',
    paddingBottom:'4px'
  },
  rightTextContainerTitleText:{
    fontFamily: 'Helvetica-Bold',
       fontSize:'15px'
  },rightTextContainerContentText:{
        marginTop:'4px',
        fontFamily: 'Roboto',
       fontSize:'10px'
  },rightColumnWorkExperience:{
    marginTop:'8px',
    paddingLeft:'15px',
    paddingRight:'15px',
    width:'100%'

  },rightColumnWorkExperienceCompany:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
  },rightColumnWorkExperienceCompanyText:{
    
    fontFamily: 'Helvetica-Bold',
    fontSize:'15px',
  },rightColumnWorkExperienceCompanyTextPosition:{
     fontFamily: 'Helvetica-Bold',
       fontSize:'11px'
  }
});