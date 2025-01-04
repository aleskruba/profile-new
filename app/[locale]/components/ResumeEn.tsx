"use client"
import React from 'react'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { styles } from './style';
import { useEffect, useState } from "react";


export const MyCV = () => { 
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    const savedNote = localStorage.getItem("note"); // Retrieve the note from local storage
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);
    return(
        <Document>
        <Page size="A4" style={styles.page}>
        

          <View style={styles.leftColumn}>
             <View style={styles.leftContainer}>

            <View style={styles.avatarView}>
                <Image src="/man.png" style={styles.avatar} />
            </View>

             <View style={styles.leftTextContainer}>
                <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >CONTACT</Text>
              </View>
            <View style={styles.leftInfoContainer}>

                     <View style={styles.leftInfoContainerInner}>
                      <Image src='/phonered.png' style={styles.icons} />
                        <Text style={styles.leftTextContainerTitleTextInner } > +420 728 949 062</Text>
                     </View>

                     <View style={styles.leftInfoContainerInner}>
                      <Image src='/emailwhite.png' style={styles.icons} />
                        <Text style={styles.leftTextContainerTitleTextInner } >aleskruba@seznam.cz</Text>
                     </View>

                     <View style={styles.leftInfoContainerInner}>
                      <Image src='/redpoint2.png' style={styles.icons} />
                        <Text style={styles.leftTextContainerTitleTextInner } >Brno, Czechia</Text>
                     </View>
                     <View style={styles.leftInfoContainerInner}>
                      <Image src='/globe.png' style={styles.icons} />
                        <Text style={styles.leftTextContainerTitleTextInner } >www.dokram.com</Text>
                     </View>
        
            
            </View>

            <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >EDUCATION</Text>
              </View>
              <View style={styles.leftInfoContainer}>
      
                <Text style={styles.leftTextContainerTitleTextInner } >1992 -1996</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >Gymnázium J.G.Mendela</Text>
      
             <View style={styles.leftInfoContainerEducation}>
                <Text style={styles.leftTextContainerTitleTextInner } >1996 -1998</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >VUT Brno, Stavební fakulta</Text>
                <Text style={styles.leftTextContainerTitleTextInnerred } >unfinished </Text>

             </View>

              </View>

              <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >CERTIFICATES</Text>
              </View>
              <View style={styles.leftInfoContainer}>
              <Text style={styles.leftTextContainerTitleTextInner } >- META Frontend 2024</Text>
              <Text style={styles.leftTextContainerTitleTextInner } >- META Backend 2024</Text>

              </View>

              <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >SKILLS</Text>
              </View>
              <View style={styles.leftInfoContainer}>
                <Text style={styles.leftTextContainerTitleTextInner } >Frontend</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- JavaScript</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- TypeScript</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- React JS</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- Next JS</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- CSS/Tailwind</Text>
              </View>
              <View style={styles.leftInfoContainer}>
                <Text style={styles.leftTextContainerTitleTextInner } >Backend</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- Express JS</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- Django</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- Flask</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- SQL</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- MongoDB</Text>
              </View>
              <View style={styles.leftInfoContainer}>
                <Text style={styles.leftTextContainerTitleTextInner } >Others</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- Git</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- Docker</Text>

              </View>
              <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >LANGUAGES</Text>
              </View>
              <View style={styles.leftInfoContainer}>
              <Text style={styles.leftTextContainerTitleTextInner } >- Czech</Text>
              <Text style={styles.leftTextContainerTitleTextInner } >- English</Text>
              <Text style={styles.leftTextContainerTitleTextInner } >- Spanish</Text>
              </View>
            </View>

            </View>
          </View>


          <View style={styles.rightColumn}>

          <View style={styles.rightColumnNote}>
              <Text style={styles.rightColumnNoteText}>{note}</Text>
        
          </View>
          <View style={styles.rightColumnContainer}>

          <View style={styles.rightColumnName}>
          <View style={styles.rightColumnName}>
               <Text style={styles.rightColumnNameText}>Aleš <Text style={styles.rightColumnNameTextBold}>KRUBA</Text></Text>
          </View>
          <Text style={styles.rightColumnNameTextWeb}>FULL-STACK DEVELOPER</Text>
          </View>


          <View style={styles.rightColumnProfile}>
          <Text style={styles.rightTextContainerTitleText} >PROFILE</Text>
          </View>
              <Text style={styles.rightTextContainerContentText}>I am a 46-year-old amateur full-stack developer focusing on web application development. I started programming a few years ago when I learned the basics of Python, JavaScript, CSS, and gradually became familiar with libraries like React.js and frameworks like Next.js, Express.js, Flask, Django.
          Although I don’t have professional experience in web development yet, I am highly motivated and continuously learning new technologies and techniques. My goal is to grow in this field and utilize my skills to create high-quality web applications. I am looking for an opportunity to fully dedicate myself to web development and take my career to the next level.
        </Text>
        <Text style={styles.rightTextContainerContentText}>
          Following a lifelong career in transportation and logistics, I decided to fully transition into web development. I am self-taught and during my career, I have created several personal projects where I applied my skills in design and application development, which helped me grow further.        </Text>


        <View style={styles.rightColumnProfile}>
          <Text style={styles.rightTextContainerTitleText} >WORK EXPERIENCE</Text>
          </View>

          
        <View style={styles.rightColumnWorkExperience}>
        <View style={styles.rightColumnWorkExperienceCompany}>
        <Text style={styles.rightColumnWorkExperienceCompanyText} >DHL</Text>
        <Text style={styles.rightColumnWorkExperienceCompanyText} >1998 - 2004</Text>
        </View>
        <Text style={styles.rightColumnWorkExperienceCompanyTextPosition} >Logistics referent</Text>
        </View>

        <View style={styles.rightColumnWorkExperience}>
        <Text style={styles.rightTextContainerContentText}>
        As a Logistics Coordinator (or Dispatcher), I was responsible for communicating with customers and suppliers, ensuring smooth operations within the logistics process. I organized domestic parcel deliveries and full truck transports, optimizing routes and managing scheduling to ensure timely and efficient deliveries. My role involved coordinating with both internal teams and external partners to meet customer requirements and handle any logistical challenges. Additionally, I ensured that all documentation was accurate and up to date, contributing to seamless supply chain operations
        </Text>
        </View>
        
        <View style={styles.rightColumnWorkExperience}>
        <View style={styles.rightColumnWorkExperienceCompany}>
        <Text style={styles.rightColumnWorkExperienceCompanyText} >PLASTOCHEM spol s.r.o.</Text>
        <Text style={styles.rightColumnWorkExperienceCompanyText} >2004 - 2015</Text>
        </View>
        <Text style={styles.rightColumnWorkExperienceCompanyTextPosition} >Logistics manager</Text>
        </View>

        <View style={styles.rightColumnWorkExperience}>
        <Text style={styles.rightTextContainerContentText}>
        As the Logistics Manager at PLASTOCHEM spol s r.o., I was responsible for overseeing the transportation of the company’s goods, ensuring timely and cost-effective deliveries. I played a key role in optimizing the supply chain process, coordinating with suppliers, and managing internal logistics operations. Additionally, I successfully established the Freight Forwarding department, where we organized transportation services for external clients, contributing to revenue generation and expanding the company’s logistics services.In 2015, PLASTOCHEM merged with the Swiss company Omya, and as a result, our Transport and Freight Forwarding department was closed. 
        </Text>
        </View>

        <View style={styles.rightColumnWorkExperience}>
        <View style={styles.rightColumnWorkExperienceCompany}>
        <Text style={styles.rightColumnWorkExperienceCompanyText} >DOKRAM s.r.o.</Text>
        <Text style={styles.rightColumnWorkExperienceCompanyText} >2015 - PRESENT</Text>
        </View>
        <Text style={styles.rightColumnWorkExperienceCompanyTextPosition} >CEO, IT Administrator</Text>
        </View>


        <View style={styles.rightColumnWorkExperience}>
        <Text style={styles.rightTextContainerContentText}>
        For over 10 years, I have been involved in transportation and logistics at the freight forwarding company DOKRAM s.r.o., where I am responsible for a wide range of activities, including organizing and coordinating shipments, negotiating with suppliers and customers. In addition, I also serve as the company owner. Furthermore, I manage the company's IT infrastructure, including maintaining small networks, installing and configuring software, and managing websites.        </Text>
        </View>

        </View>
        </View>
        </Page>
      </Document>

  
  )

}


