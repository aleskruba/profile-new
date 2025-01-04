"use client"
import React from 'react'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { styles } from './style';
import { useEffect, useState } from "react";


export const MyCVCZ = () => { 
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    // Retrieve the note from local storage
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
      setNote(savedNote);
    }

    // Clean up the note on window close
    const handleWindowClose = () => {
      localStorage.removeItem("note");
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleWindowClose);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
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
                <Text style={styles.leftTextContainerTitleText} >KONTAKT</Text>
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
                        <Text style={styles.leftTextContainerTitleTextInner } >Brno, Česká republika</Text>
                     </View>
                     <View style={styles.leftInfoContainerInner}>
                      <Image src='/globe.png' style={styles.icons} />
                        <Text style={styles.leftTextContainerTitleTextInner } >www.dokram.com</Text>
                     </View>
        
            
            </View>

            <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >VZDĚLÁNÍ</Text>
              </View>
              <View style={styles.leftInfoContainer}>
      
                <Text style={styles.leftTextContainerTitleTextInner } >1992 -1996</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >Gymnázium J.G.Mendela</Text>
      
             <View style={styles.leftInfoContainerEducation}>
                <Text style={styles.leftTextContainerTitleTextInner } >1996 -1998</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >VUT Brno, Stavební fakulta</Text>
                <Text style={styles.leftTextContainerTitleTextInnerred } >nedokonceno</Text>

             </View>

              </View>

              <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >CERTIFIKÁTY</Text>
              </View>
              <View style={styles.leftInfoContainer}>
              <Text style={styles.leftTextContainerTitleTextInner } >- META Frontend 2024</Text>
              <Text style={styles.leftTextContainerTitleTextInner } >- META Backend 2024</Text>

              </View>

              <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >DOVEDNOSTI</Text>
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
                <Text style={styles.leftTextContainerTitleTextInner } >Ostatní</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- Git</Text>
                <Text style={styles.leftTextContainerTitleTextInner } >- Docker</Text>

              </View>
              <View style={styles.leftTextContainerTitle}>
                <Text style={styles.leftTextContainerTitleText} >JAZYKY</Text>
              </View>
              <View style={styles.leftInfoContainer}>
              <Text style={styles.leftTextContainerTitleTextInner } >- Čeština</Text>
              <Text style={styles.leftTextContainerTitleTextInner } >- Angličtina</Text>
              <Text style={styles.leftTextContainerTitleTextInner } >- Španělština</Text>
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
          <Text style={styles.rightTextContainerTitleText} >PROFIL</Text>
          </View>
              <Text style={styles.rightTextContainerContentText}>Jsem 46letý amatérský full-stack vývojář zaměřující se na vývoj webových aplikací. S programováním jsem začal před několika lety, když jsem se naučil základy Pythonu, JavaScriptu, CSS a postupně jsem se seznámil s knihovnami jako React.js a frameworky jako Next.js, Express.js, Flask, Django.
              Ačkoliv ještě nemám profesionální zkušenosti s vývojem webových aplikací, jsem velmi motivovaný a neustále se učím nové technologie a techniky. Mým cílem je růst v tomto oboru a využít své dovednosti k vytváření kvalitních webových aplikací. Hledám příležitost, kde se mohu plně věnovat webovému vývoji a posunout svou kariéru na vyšší úroveň.
        </Text>
        <Text style={styles.rightTextContainerContentText}>
        Po celoživotní kariéře v oblasti dopravy a logistiky jsem se rozhodl plně přejít na webový vývoj. Jsem samouk a během své kariéry jsem vytvořil několik osobních projektů, při kterých jsem uplatnil své dovednosti v oblasti designu a vývoje aplikací, což mi pomohlo dále růst.   </Text>


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
        Jako koordinátor logistiky (nebo dispečer) jsem byl zodpovědný za komunikaci s zákazníky a dodavateli, zajišťování hladkého průběhu operací v rámci logistického procesu. Organizoval jsem domácí doručení balíků a plné nákladní dopravy, optimalizoval trasy a řídil harmonogramy, abych zajistil včasné a efektivní dodávky. Má role zahrnovala koordinaci mezi interními týmy a externími partnery za účelem splnění požadavků zákazníků a řešení jakýchkoli logistických výzev. Dále jsem zajišťoval, že veškerá dokumentace byla přesná a aktuální, což přispívalo k plynulému fungování dodavatelského řetězce.        </Text>
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
        Jako logistický manažer ve společnosti PLASTOCHEM spol. s r.o. jsem byl zodpovědný za dohled nad přepravou zboží společnosti a zajišťování včasných a nákladově efektivních dodávek. Hrával jsem klíčovou roli při optimalizaci procesu dodavatelského řetězce, koordinaci s dodavateli a řízení interních logistických operací. Kromě toho jsem úspěšně založil oddělení dopravy a přepravy, kde jsme organizovali přepravní služby pro externí klienty, což přispělo k generování příjmů a rozšíření logistických služeb společnosti. V roce 2015 došlo ke sloučení společnosti PLASTOCHEM se švýcarskou společností Omya, a v důsledku toho bylo naše oddělení dopravy a přepravy uzavřeno.        </Text>
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

        Více než 10 let jsem se věnoval dopravě a logistice ve freight forwardingové společnosti DOKRAM s.r.o., kde jsem zodpovědný za širokou škálu činností, včetně organizace a koordinace přeprav, vyjednávání s dodavateli a zákazníky. Kromě toho působím také jako majitel společnosti. Dále se starám o IT infrastrukturu společnosti, včetně správy malých sítí, instalace a konfigurace softwaru a správy webových stránek.            </Text>
        </View>

        </View>
        </View>
        </Page>
      </Document>

  
  )

}

