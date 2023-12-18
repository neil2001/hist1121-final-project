import React from "react";
import "./section.css";
import Title from "./title";
import Artifacts from "./artifacts";

const Section = () => {
  return (
    <div id="home" className="content">

      <Title />

      <div className="textContent">
      <h1 id="title">The Old Summer Palace</h1>
      <h2 id="introduction">Introduction</h2>
      <p>
        Throughout the 18th and 19th centuries, the emperors of the Qing dynasty 
        constructed Yuanmingyuan, an extensive palace and garden complex around 5 
        miles northwest of the Forbidden City in Beijing. Spanning over 850 acres, 
        the Yuanmingyuan featured lakes, streams, ponds, and fountains in what is 
        widely considered to be the pinnacle of Chinese imperial garden and palace 
        design. Among the elaborate architecture, the palace complex also housed 
        innumerable sculptures, vases, robes, and other treasures. 
      </p>
      <p>
        Once the paradigm of Chinese imperial opulence, the Yuanmingyuan, is now a 
        set of ruins known as the Old Summer Palace. Its destruction came in 1860, 
        marking the end of the Second Opium War. In early October of 1860, a coalition 
        of British and French soldiers captured the Yuanmingyuan. Upon receiving news 
        that the Qing government had imprisoned, tortured, and killed an Anglo-French 
        delegation, the order was given to destroy the Yuanmingyuan in retaliation. 
        For over three days, nearly 4,000 British soldiers participated in the destruction 
        and looting of the Yuanmingyuan. The event marked a severe blow to imperial China, 
        and is a defining moment in the Century of Humiliation China suffered at the hands of 
        western powers. Yet, this was only the first of several major destructive events 
        surrounding the Yuanmingyuan. Further destruction of the Yuanmingyuan occurred in 1900, 
        when forces of the Eight-Nation Alliance invaded Beijing, and during the Cultural 
        Revolution of the 1960s and 1970s.
      </p>
      <p>
        Today, the ruins of the Yuanmingyuan serve as a reminder of China's tumultuous transition 
        away from imperial rule. Though much of the palace is virtually unrecognizable, the Western 
        mansions still retain several pillars and foundations and several waterways still flow into 
        a few restored gardens. However, these ruins truly provide a gaze into China's early modern history.
      </p>

      <h2 id="history-and-construction">History and Construction</h2>
      
      <p>
      Construction of the Yuanmingyuan began in 1707, originally as a gift from the Kangxi emperor to one of his sons, the future Yongzheng Emperor. Following Kangxi's reign, Yongzheng would expand the garden in 1925, introducing many of the lakes and waterways featured in the compound today. Among the amenities he introduced was the “Courtyard of Universal Happiness”, which simulated a mock village featuring eunuchs portraying shopkeepers. Decades later, the Qianlong Emperor succeeded Yongzheng and undertook an additional expansion of the Yuanmingyuan, which saw the construction of the Western mansions. During this period, the palace complex became the primary residence for the Emperor and his family, with the Forbidden City being reserved for more formal events.
      </p>
      <div className="imageRow">
        <div className="image">
          <img src={require("../images/history/emperor-residence.jpeg")} alt="" />
          <div className="caption">Your Image Caption</div>
        </div>
        <div className="image">
          <img src={require("../images/history/halls.jpeg")} alt="" />
          <div className="caption">Your Image Caption</div>
        </div>
        <div className="image">
          <img src={require("../images/history/bridge.jpeg")} alt="" />
          <div className="caption">Your Image Caption</div>
        </div>
      </div>
      

      <h2 id="second-opium-war">The Second Opium War</h2>
      <p>
      In 1856, Second Opium War began due to enduring conflicts between China and Britain over Chinese port access and legalization over the opium trade. The decade following the First Opium War of the 1840s saw Western powers seeking to capitalize on lucrative Chinese markets. China's loss during the First Opium War meant Qing officials were coerced into signing unequal treaties with England, France, and the US. Many of these treaties contained renegotiation clauses that were valid after 12 years, and by the mid 1850s, France and the US had signed new treaties with China granting them increased privileges within the country. Following suit, the British sought to exercise the most favored country clause from the 1942 Treaty of Nanking. Their increased demands from the Qing government included allowing British merchant companies to openly operate across China, legalizing the opium trade, cracking down on piracy, and other political demands. 
      </p>
      <p>
      Chinese government sentiment regarding these treaties was one that could be described as appeasement, signing them in order to satisfy foreign nations. The Qing throne also benefited from a tribute system which required foreign traders to provide a tribute to the emperor and acknowledge the authority of China's ruler. However, Western powers quickly strayed from these stipulations, taking full advantage of China's ports without providing tribute.
      </p>
      
      <div className="text-image-container">
        <div className="text">
        <p>
        Qing enforcement of these treaties was equally lax, with the government refusing to accept and uphold various aspects of these agreements that saw China drawing the short straw. Eventually, tensions surrounding these practices led to violence. Following the infamous Arrow Incident in which the Qing Government seized a British cargo ship and held its crew captive, the British began attacking Chinese forts in Guangzhou and Tianjin, marking the start of the Second Opium War.
        </p>
        <p>
        The first major engagement of the Second Opium War saw a British force assisted by French and American soldiers take Canton (Guangzhou) in 1867. Following the battle, the Western powers proposed the Treaty of Tianjin, which would open up additional coastal ports, allow for inland travel, and force China to pay reparations. The Qing government refused to ratify the treaty, thereby prolonging the war.
        </p>
        <p>
        As the war progressed into 1859, the joint British, French, and American force pushed inland, taking all of Tianjin by the end of August, 1860. The following month, the Qing government kidnapped a delegation of British and French officers. Simultaneously, Western forces began encroaching on Beijing, winning major battles and devastating Chinese armies. The advance forced the Xianfeng Emperor to flee the city, designating his brother, Prince Gong to undertake peace talks with the Western powers. By October 6th, Western forces reached the Yuanmingyuan and began to loot the premises. During this engagement, the Qing government had tortured and killed 19 members of the captured delegation. News of this incident reached the British on October 8th, setting the scene for the destructive events to follow. The decision to burn the Yuanmingyuan was intended as both a retaliatory measure as well as to discourage the Qing government from using kidnapping as a means of bargaining. Furthermore, Beijing was spared so that the punishment would more directly affect the Emperor and his ensemble who perpetrated the kidnapping. British commander Lord Elgin sought to deal a resounding blow to the Xianfeng Emperor's pride and to challenge the sovereignty of the Qing dynasty, justifying the action as a fitting punishment for the cruelty of the imperial government.
        </p>
        <p>
          On October 18, 1860, British commander Lord Elgin gave the order to raze the Yuanmingyuan, mobilizing over 3,500 soldiers to initiate three days of burning and destruction that left only 13 structures intact. Additionally, extensive amounts of looting took place, with French and British soldiers seizing countless valuables, many dating back to the Shang and Zhou dynasties up to 3,600 years ago. Looting of the Yuanmingyuan occurred in two waves. The first saw French soldiers initially engage in looting on their arrival to the Yuanmingyuan on October 5th. Afterwards, the events preceding October 18th involved primarily British soldiers ransacking the Yuanmingyun's buildings for valuables. The looting saw British and French soldiers collecting copious amounts of gold, porcelain, jade, and bronze treasures, as well as western gifts, furs, and other clothing. Items that could not be carried were burned along with the structures in the subsequent fires. 
          </p>
          <p>
          Within China, Yuanmingyuan treasures were sold on the black market, with many artifacts ending up in nearby Chinese marketplaces where commoners purchased them for their homes. However, much of the tragedy surrounding the looting of the Yuanmingyuan is the extradition of countless artifacts back to Europe. Upon their return, European luxury markets were flooded with Chinese goods, which were auctioned off or gifted to museums, private collectors, and royalty. Queen Victoria and Emperor Napoleon III were personally presented with a plethora of looted Chinese treasures, with Queen Victoria even receiving a Pekingese dog named “Looty”. Details surrounding these treasures and the debates regarding their return to China are elaborated on in the next section.
          </p>
          <p>
          The decimation of the Yuanmingyuan by western forces resonates as a defining moment in China's “Century of Humiliation”, as following the burning of the Yuanmingyuan, Prince Gong agreed to ratify the Treaty of Tianjin during the Convention of Peking on October 24, officially ending the Second Opium War and granting the British the following privileges:
          </p>
          <ol>
            <li>China's signing of the Treaty of Tianjin</li>
            <li>Opening Tianjin as a trade port</li>
            <li>Cede No.1 District of Kowloon (south of present-day Boundary Street) to Britain</li>
            <li>Freedom of religion established in China</li>
            <li>British ships were allowed to carry indentured Chinese to the Americas</li>
            <li>Indemnity to Britain and France increasing to 8 million taels of silver apiece</li>
            <li>Legalization of the opium trade</li>
          </ol>
        </div>
        <div className="image">
        <img src={require("../images/opium-war/taking-fort.jpeg")} alt="" />
          <div className="caption">Your Image Caption</div>
          <img src={require("../images/opium-war/qing-justice.jpeg")} alt="" />
          <div className="caption">Your Image Caption</div>
          <img src={require("../images/opium-war/looting.jpeg")} alt=""/>
          <div className="caption">Your Image Caption</div>
          <img className="imgsmall" src={require("../images/opium-war/looty.webp")} alt=""/>
          <div className="caption">Your Image Caption</div>
        </div>
      </div>
      
      
      
      <p>
        The fate of the Yuanmingyuan characterizes the relationship of China and the west during the age of imperialism. , resulting in the exploitation of China as a exotic market for the west, satisfying western demand for Chinese luxury goods.
      </p>
      <p>
      In many ways, the Qing Empire's refusal to recognize the industrial and military prowess of western powers contributed to its downfall. For instance, their use of the tribute system as a means of implying Chinese superiority served as a form of self denial over their shortcomings. Chinese interactions with foreigners between the First and Second Opium wars reflect this 
      </p>
      <p>
      It is difficult to conjecture what the fate of China would have been if the British had captured the Xianfeng Emperor during the Second Opium War. In addition, early in the war, the British advance on Beijing was impeded by a lack of manpower as Britain focused their resources on suppressing the Sepoy Rebellion in India. Though China was never fully colonized, Britain's imperialist intentions and economic goals with China were clear. Through the exploitative treaties that opened Chinese cities and ports and legalized the opium trade, China's role as a massive market for Indian opium and source of exotic goods, all facilitated by British companies, clearly lays out the reasons for Britain's actions.
      </p>

      <h2 id="artifacts">Artifacts</h2>
      <Artifacts directory={'artifacts'} descriptions={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']} />

      <h2 id="continued-destruction">Continued Destruction and Degradation From 1860-1976</h2>
      <p>
      After the destruction of the Old Summer Palace in 1860, the ruins would lay relatively dormant until 1900. In 1873, Yongzhi Emperor first proposed the rebuilding of the Old Summer Palace but after 9 months, materials and money ran out and the project was abandoned in favor of renovations to the largely intact New Summer palace. Aside from this reconstruction attempt, the ruins were largely left alone and continued to degrade naturally.
      </p>
      <p>
      The next instance of destruction came during the Boxer rebellion. In 1900 during the allied occupation of Beijing, allied troops burned a large number of trees within the abandoned complex. In this second instance of razing, many of the buildings that had survived since 1860 fell victim to western destruction efforts. This episode would mark the last instance Western imperial forces would contribute to the destruction of the ruins.
      </p>
      

      <div className="text-image-container">
        <div className="text">
          <p>
          Prior to the Mao era, while the Old Summer Palace was officially designated a national park in 1924, it continued to encounter human degradation. During the warlord period from 1916-1928, the Old Summer Palace was repeatedly looted for marble, tile, and other precious stones to fund military efforts. While the degree of destruction was nothing akin to the destruction wrought by Western forces, it marked the beginning of the Chinese-led destruction of the Old Summer Palace.
          </p>
          <p>
            While there is limited scholarly research flushing out the details regarding the destruction of the Old Summer Palace during the Cultural revolution, there is general consensus that both the local farmers and Red Guard vandalized the Old Summer Palace. As part of the “Four Olds” movement that sought to eradicate Old ideas, cultural customs, and habits from Chinese society, public sites associated with antiquity such as the cemetery of Confucius and Old Summer Palace were targets of Red Guard activity. The Red Guard was a student-led paramilitary social movement mobilized by Mao Zedong which led the destruction efforts of cultural and historical artifacts. Historical sites were systematically destroyed due to their perceived hindrance to cultural evolution and the Old Summer Palace represented both the splendors of the Qing dynasty, as well as the shame of the century of humiliation, making it a compelling target.
          </p>
        </div>
        <div className="image">
          <img src={require("../images/modern/red_guard.png")} alt=""/>
          <div className="caption">Your Image Caption</div>
        </div>
      </div>
      
      <p>
      Diving deeper into the lack of scholarship regarding the destruction of the Old Summer Palace during the Cultural Revolution, Chinese writers have accused the state of covering up Chinese led destruction efforts. Writing that  “the Yuanmingyuan is exclusively attributed to the actions of the British and French and to a lesser extent the attack in 1900 by expeditionary forces sent to quell the Boxer Rebellion” (Fanning the flames). The lack of scholarship may be an intentional result of State narrative building. Logically, this makes sense. While the Cultural Revolution's destruction is largely acknowledged, suppressing its narrative when associated with the Old Summer Palace allows for the complex to obtain a clearer narrative of tragedy and shame. However, to fully understand the tenuous history of the Old Summer Palace, acknowledging it as a place of both Chinese and Western destruction brings critical nuance to its status as a monument of shame and anger. 
      </p>
      <p>
      Aside from the Cultural Revolution's negative impact on the Old Summer Palace, productivity efforts originating from the Great Leap Forward transformed the area, further contributing to historical and cultural loss. As part of the Great Leap Forward, production teams slowly began to encroach upon the Old Summer Palace's grounds and “cut down trees, flatten[ed] hills” amongst other land reclamation projects. With land readily available for construction, the local community built schools, factories, and houses on the Palace's original ground. Particularly troubling for modern interpreters was the construction of graves and garbage heaps near the center of the original Old Summer Palace grounds. Especially as there was no government oversight of the abandoned complex, the local community was left to transform the ruins as they saw fit. Aside from the more organized efforts exhibited during the Great Leap Forward, local farmers also began encroaching upon the abandoned fields as well, using the imperial gardens to cultivate their own fruit and vegetable plots. During the Mao period, the Old Summer Palace's once hollowed gourds simply became a means for production, and by 1980, 60% of the area had been converted to farmland, villages, schools, and factories. 
      </p>
      <p>
      While the reclamation of the Old Summer Palace into usable land is unfortunate. Historians largely regard it as excusable given the cultural and industrial demands during the period. Rather, it was the responsibility of the government to protect the Old Summer Palace and other historical sites during this period, but their inability led to the continued destruction of irreplaceable historical and cultural artifacts. 
      </p>
      <p>
      Understanding the history of the Old Summer Palace after 1860 contributes to a more complex understanding of the Palace's representation of historical tragedy. While Western violence is rightfully the dominant narrative, failure by the Chinese state to adequately protect the complex during the Imperial and Mao era also played an important role in the Old Summer Palace's current state. While the Chinese state might seek to ignore the negative impact of the cultural revolution of the complex, both the violent destruction of culture by the red guard, as well as the conversion of the complex into usable land have further reduced the Old Summer Palace's ruins into historical oblivion. 
      </p>
      <p>
      As modern interpreters, the history of the Old Summer Palace and its continued destruction during the 20th century reveals the importance of cultural preservation from the state level as well as the vulnerability of historical sites in places of conflict. While the destruction of the Old Summer Palace in 1860 and 1900 was largely unavoidable, the State had the opportunity to protect the ruins from further incursion during the 20th century. However, due to the constant fighting during the imperial period, it is understandable that the state could not devote the resources to protect the complex. This leads to the second important conclusion, that in regions of conflict, historical sites are extremely vulnerable to destruction, especially due to their cultural significance. However on a local level, citizen advocacy can have a powerful effect on preservation efforts. Educating the local community about the historical significance of the Old Summer Palace may have prevented its conversion to workable land and may have motivated the state to protect the area. And similarly for everyday readers, becoming invested in the local history within your community is an important task to preserving historical monuments just like the Old Summer Palace. 
      </p>


      <h2 id="modern-perspective">Modern Perspective</h2>
      <p>
      Today, the Old Summer Palace, also known as the Yuanmingyuan Park, is a national park for public and tourist use. While proposals for the Palace's reconstruction have been floated around, the ruins remain largely untouched and serve as a reminder of western imperial evil for the Chinese public. 
      </p>
      <p>
      Starting in 1873, Yongzhi Emperor first proposed the rebuilding of the Old Summer Palace but after 9 months, materials and money ran out and the project was abandoned in favor of renovations to the largely intact New Summer palace.
      </p>
      <p>
      Then during the 1920s the Beijing city government designated most imperial government public park status. While the Old Summer Palace was given this status, the government faced numerous other issues and the complex was largely neglected.
      </p>
      <p>
      Under Mao's rule, a new slate of historical sights were granted protection, but this time, the Old Summer Palace was not included within the list. The ruins, now having endured both the destruction in 1860 as well as another episode of destruction in 1900 during the boxer rebellion, were largely thought of as useless and lacking cultural and aesthetic value to the state. In 1951, Zhou Enlai's explicit request to preserve the complex was one of the only political forces stopping the complete destruction and repurposing of the Old Summer Palace Ruins.
      </p>
      <p>
      With the termination of the Cultural Revolution, the Administrative Department of the Yuanmingyuan was founded and became the first agency to oversee the ruins. Slowly during the 1980, the Yuanmingyuan agency began sifting through the rubble and cleaning up over 100 years of destruction and negligence. One of the major initiatives of the early work of the Yuanmingyuan agency was removing rubble, but also reorganizing major stone fragments and returning them to their original positions. 
      </p>

      <div className="text-image-container">
        <div className="text">
        <p>
          In 1983 three major construction projects were approved. A Relics Park was approved as well as the renovation of the Fuhai and the reorganization of the Xiyang Lou. The Relics Park now serves as the Old Summer Palace's entrance while renovations of the Fuhai cleaned up the shore and water supply of Fuhai Lake, one of the central bodies of water within the complex. Both these efforts demonstrate the government's desire to renovate the Old Summer Palace into a public space.  Finally the Xiyang Lou refers to the western mansion located in the northern part of the complex. Known as western manions due to their European architectural style, the reorganization of the Xiyang Lou was a much more difficult task due to the ambiguous goals behind reorganization. 
        </p>

        <p>
      In 1984 the government's vision for the Old Summer Palace was finally crystalized. Rather than focusing on rebuilding the complex, cultural and political leaders decided that the Old Summer Palace should serve as a place for memorialization, education, and tourism. Focusing on depiction the history of the Old Summer Palace, officials decided to limit restoration efforts and focus on preserving the existing ruins, while making the park more accessible to visitors. Of the Old Summer Palace's many structures, the Flower Maze located within the Xiyang Lou is the only fully restored structure.
      </p>
        </div>
        <div className="image">
          <img src={require("../images/modern/courtyard.png")} alt=""/>
          <div className="caption">Your Image Caption</div>
        </div>
      </div>
      
      

      <div className="text-image-container">
        <div className="text">
        <p>
        For modern visitors, visiting the Old Summer Palace is a deeply interactive experience. In many sections of the complex, visitors are left in the midst of rubble, a deeply jarring reminder of the extent of western destruction. Rather than viewing the ruins from afar, in some places, visitors are free to touch the still-standing structures and thread their way through the maze of stone and architecture. Moreover, the construction of the Relics museum offers both historical background and intellectual stimulation for visitors to learn from. Fulfilling the park's goal as a education vessel, visitors can contextualize their experience amongst the ruins with the help of the museum, where both artifacts and a historical documentary is shown.  
        </p>
        <p>
      Outside of the Old Summer Palace's status as a physical park, the ruins contain deeply symbolic meanings for Chinese citizens. As a jarring reminder of national humility and foreign evil, debates surrounding the thousands of looted artifacts frequently attract media attention. As early as 2000, the Chinese government has made an effort to lobby for the return of stolen artifacts and the halting of their continued auction, As China's geopolitical power has increase throughout the 2000's the state has taken a larger role in demanding the return of priceless artifacts such as actively approaching and entering various museums included the Metropolitan Museum of Art in NYC. While both locating and returning stolen artifacts is a slow process, major progress has been made such as the return of seven marble columns from KODE museum in Norway in October 2023. 
      </p>
        </div>
        <div className="image">
          <img src={require("../images/modern/maze.png")} alt="" />
          <div className="caption">Your Image Caption</div>
        </div>
      </div>

      
      
      <p>
      Largely speaking however, it is expected that the majority of smaller artifacts such as the ones highlighted within this project will remain away from their origins in China. Due to both the sheer number of artifacts floating around in private and public collections as well as the government's focus on larger more instrumental pieces such as the marble columns and zodiac heads, seeking the return of these artifacts is much less a priority. 
      </p>
      <p>
      To conclude, it is our belief that if artifacts cannot be returned to their original location, they deserve to be enjoyed digitally within our website. Moreover, learning about the history behind the Old Summer Palace and what makes the ruins such an impactful and symbolic spaces, brings rightful attention to the tragic destruction of art, life, and culture during the Palace's 1860 destruction. We may never find or learn about some of the most valuable artifacts whisked away from the Old Summer Palace, but we can take the time to learn it's significance and devote proper reverence to its history. 
      </p>
      <h2 id="bibliography">Bibliography</h2>
      </div>
    </div>
  );
};

export default Section;
