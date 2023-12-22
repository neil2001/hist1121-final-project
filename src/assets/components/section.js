import React from "react";
import "./section.css";
import Title from "./title";
import Artifacts from "./artifacts";
import Citation from "./citation";
import Cite from "./cite";

const galleryCaptions = [
  'Jade box from the Victoria and Albert Museum (c. 1750)', // '1', 
  'Cusion covers from the Victoria and Albert Museum (c. 1700s)', // '2', 
  'Double vase from the Victoria and Albert Museum (c. 1760)', // '3', 
  'Jade buckle from the Victoria and Albert Museum (c. 1700s)', // '4', 
  'Lacquer box from the Victoria and Albert Museum (c. 1736)', // '5', 
  'Robe from the Victoria and Albert Museum (c. 1860)', // '6', 
  'Incense burner from the Victoria and Albert Museum (c. 1736)', // '7', 
  'Tunic from the Victoria and Albert Museum (c. 1800s)', // '8', 
  'Textile from the Victoria and Albert Museum (c. 1644)', // '9', 
  'Flask from the Victoria and Albert Museum (c. 1736)', // '10', 
  'Lidded bowl from the Victoria and Albert Museum (c. 1801)', // '11', 
  'Incense burner from the Victoria and Albert Museum (c. 1736)', // '12', 
  'Vessel from the Victoria and Albert Museum (c. 1736)', // '13', 
  'Bowl from the Victoria and Albert Museum (c. 1831)', // '14', 
  'Dish from the Victoria and Albert Museum (c. 1662)', // '15', 
  'Architectural Fitting from the Victoria and Albert Museum (c. 1747)', // '16', 
  'Altar vase from the British Museum (c. 1501)', // '17'
  'Jade vase from the Victoria and Albert Museum (c. 1700s) ', // '18',
  'Jade book storage box from the British Museum (c. 1748)', // 19
  'Buddha figure from the British Museum (c. 1614)', // 20
  'Jade seal from the British Museum (c. 1764)', // 21
  '"Dragon\'s Well", watercolor and pen drawing (c. 1780)', // 22
  'Incense burner from the Philadelphia Museum of Art (c. 1780)', // 23
  '"The Battle of the Animals", woven tapestry from the Ashmolean Museum (c. 1713)', // 24
  'Column base from the British Museum (c. 1644)', // 25
]

const ruinsCaptions = [
  'The eastern side of the main building of Xieqiqu', // '1', 
  'Main facade of the main building of Xieqiqu', // '2', 
  'View of the main building of Xieqiqu', // '3', 
  'The southern side of Xieqiqu', // '4', 
  'The panorama of Xieqiqu', // '5', 
  'The northern side of the main building of Xieqiqu', // '6', 
  'The garden gate', // '7', 
  'Music Pavilion of Xieqiqu', // '8', 
  'A corner of Haiyan Hall', // '9', 
  'A corner of Haiyan Hall', // '10', 
  'View of a garden scene', // '11', 
  'The western side of Haiyan Hall', // '12', 
]

const citations = [
  `Lee, Haiyan. “The Ruins of Yuanmingyuan: Or, How to Enjoy a National Wound.” Modern 
China 35, no. 2 (2009): 155-90. http://www.jstor.org/stable/27746912.`
,
`Ho, Denise Y. “Revolutionizing Antiquity: The Shanghai Cultural Bureaucracy in the Cultural 
Revolution, 1966-1968.” The China Quarterly, no. 207 (2011): 687-705. http://www.jstor.org/stable/41305263.`
,
`Gao, Lei, and Marc Treib. “Making and Remaking the Yuanmingyuan.” Future Anterior: 
Journal of Historic Preservation, History, Theory, and Criticism 3, no. 1 (2006): 10-23. http://www.jstor.org/stable/25834984.`
,
`Weatherley, Robert D., and Ariane Rosen. “Fanning the Flames of Popular Nationalism: The 
Debate in China over the Burning of the Old Summer Palace.” Asian Perspective 37, no. 1 (2013): 53-76. http://www.jstor.org/stable/42704818.
`
,
`Fotopoulos, Annetta. “Understanding the Zodiac Saga in China: World Cultural Heritage, 
National Humiliation, and Evolving Narratives.” Modern China 41, no. 6 (2015): 603-30. http://www.jstor.org/stable/24575596.
`
,
`Rujivacharakul, Vimalin. “How to Map Ruins: Yuanming Yuan Archives and Chinese 
Architectural History.” Getty Research Journal, no. 4 (2012): 91-108. 
http://www.jstor.org/stable/41413134.`
,
`Chao, Loretta, and Kelly Crow. 2009. “Chinese Applaud Art Dealer Who Refuses to Honor Bids.” The Wall Street Journal, March 4, 2009. https://www.wsj.com/articles/SB123610861077721441.
`
,
`Feng, Bree. 2014. “Despite Frigid Relations, Chinese Relics Coming Home from Norway.” Sinosphere Blog. February 9, 2014. https://archive.nytimes.com/sinosphere.blogs.nytimes.com/2014/02/09/despite-frigid-relations-chinese-relics-coming-home-from-norway/.
`
,
`
Melikian, Souren, and International Herald Tribune. 2000. “Auction Houses Add Insult to Injury.” The New York Times, May 6, 2000, sec. Style. https://www.nytimes.com/2000/05/06/style/IHT-auction-houses-add-insult-to-injury.html.
`
,
`Opoku, Kwame. 2016. “Chinese Purchase of Chinese Looted Artifacts: An Example for Other States? | Pambazuka News.” Www.pambazuka.org. March 5, 2016. https://www.pambazuka.org/governance/chinese-purchase-chinese-looted-artifacts-example-other-states.
`
,
`Xi, Chen. 2019. “Chinese Tycoon Stanley Ho Donates Recovered Qing Dynasty Zodiac Bronze Head to National Museum of China - Global Times.” Www.globaltimes.cn. Global Times. November 14, 2019. https://www.globaltimes.cn/content/1170050.shtml#:~:text=The%20Pig%20zodiac%20head%20he.
`
,
`Xi, Chesn. 2023. “Seven Artifacts Returned to Yuanmingyuan, Marking Significant Progress in Repatriation of Relics Lost Overseas.” Global Times. Global Times. October 13, 2023. https://www.globaltimes.cn/page/202310/1299808.shtml.
`
,
`“Collections Online | British Museum.” n.d. Www.britishmuseum.org. Accessed December 19, https://www.britishmuseum.org/collection/term/BIOG887.
`,
`“Collections Online | British Museum.” n.d. Www.britishmuseum.org. Accessed December 19, 2023. https://www.britishmuseum.org/collection/term/BIOG122138.
`,
`“Collections Online | British Museum.” n.d. Www.britishmuseum.org. Accessed December 19, 2023. https://www.britishmuseum.org/collection/term/BIOG160043.
`,
`“Vase.” 2005. Victoria & Albert Museum. March 31, 2005. https://collections.vam.ac.uk/item/O110722/vase-unknown/.
`,
`“Cushion Cover.” 2005. Victoria & Albert Museum. June 25, 2009. https://collections.vam.ac.uk/item/O457553/cushion-cover-unknown/
`,
`U.S. Department of State, history.state.gov/milestones/1830-1860/china-2. Accessed 20 Dec. 2023.`,
'Lillian M. Li. "Opium War: The Final Act". MIT Visualizing Cultures, visualizingcultures.mit.edu/garden_perfect_brightness_03/ymy3_essay01.html. Accessed 20 Dec. 2023.',
'Lillian M. Li. "Plundering Paradise". MIT Visualizing Cultures, visualizingcultures.mit.edu/garden_perfect_brightness_03/ymy3_essay02.html. Accessed 20 Dec. 2023.',
'Lillian M. Li. "Collecting Loot". MIT Visualizing Cultures, visualizingcultures.mit.edu/garden_perfect_brightness_03/ymy3_essay03.html. Accessed 20 Dec. 2023.',
`Barme, Geremie (June 1996). "The Garden of Perfect Brightness, a Life in Ruins". East Asian History. Retrieved 13 March 2016.`,
`Li, Lillian. "The Garden of Perfect Brightness - 1: The Yuanmingyuan as Imperial Paradise (1700-1860)". MIT Visualizing Cultures. Massachusetts Institute of Technology. Retrieved 9 March 2013.
`,
`Hahn, Thomas. n.d. “Ernst Ohlmer - Ernst Ohlmer Worked in China for Almost 46 Years as a Professional Photographer at First, and Then as a Customs Officer.” Photographyofchina.com. Accessed December 20, 2023.`,
`Porter, Maj Gen Whitworth (1889). History of the Corps of Royal Engineers Vol I. Chatham: The Institution of Royal Engineers.`,
]

const imageSources = [
  `“Jade Box.” 2004. Victoria & Albert Museum. August 26, 2004. 
https://collections.vam.ac.uk/item/O102828/-box-unknown/`,

`“Cushion Cover.” 2009. Victoria & Albert Museum. June 25, 2009. 
https://collections.vam.ac.uk/item/O486473/textile-unknown/`,

`“Double Vase.” 2004. Victoria & Albert Museum. August 25, 2004. 
https://collections.vam.ac.uk/item/O102809/double-vase-unknown/`,
`
“Buckle.” 2009. Victoria & Albert Museum. June 25, 2009. 
https://collections.vam.ac.uk/item/O493337/buckle-unknown/`,

`“Box.” 2009. Victoria & Albert Museum. June 25, 2009. 
https://collections.vam.ac.uk/item/O487061/box-unknown/
`,
`“Robe.” 2009. Victoria & Albert Museum. June 25, 2009. 
https://collections.vam.ac.uk/item/O486036/robe-unknown/
`,
`“Incense Burner.” 2005. Victoria & Albert Museum. September 15, 2005
https://collections.vam.ac.uk/item/O116703/incense-burner-unknown/
`,
`“Tunic.” 2009. Victoria & Albert Museum. June 25, 2009. 
https://collections.vam.ac.uk/item/O486418/tunic-unknown/
`,
`“Textile.” 2009. Victoria & Albert Museum. June 25, 2009. 
https://collections.vam.ac.uk/item/O491806/textile-unknown/
`,
`“Flask.” 2009. Victoria & Albert Museum. June 25, 2009. 
https://collections.vam.ac.uk/item/O498921/flask-unknown/
`,
`“Lidded Bowl.” 2009. Victoria & Albert Museum. March 23, 2005. 
https://collections.vam.ac.uk/item/O110619/lidded-bowl-unknown/
`,
`“Incense Burner.” 2009. Victoria & Albert Museum. June 25, 2009. 
https://collections.vam.ac.uk/item/O497704/incense-burner-unknown/
`,
`“Vessel.” 1999. Victoria & Albert Museum. December 15, 1999. 
https://collections.vam.ac.uk/item/O12640/vessel-unknown/
`,
`“Bowl.” 2000. Victoria & Albert Museum. February 8, 2000.
https://collections.vam.ac.uk/item/O22840/bowl-unknown/
`,
`“Dish.” 2003. Victoria & Albert Museum .March 14, 2003.
https://collections.vam.ac.uk/item/O76747/dish-unknown/
`,
`“Architectural Fitting.” 2005. Victoria & Albert Museum. February 7, 2005.
https://collections.vam.ac.uk/item/O109046/architectural-fitting-unknown/
`,
`“Altar-Vase; Lid | British Museum.” n.d. The British Museum. 
https://www.britishmuseum.org/collection/object/A_1889-0507-23.
`,
`“Vase.” 2005. Victoria & Albert Museum. March 31, 2005
https://collections.vam.ac.uk/item/O110722/vase-unknown/
`,
`“Book; Storage Box | British Museum.” n.d. Www.britishmuseum.org. Accessed December 20, 
2023. https://www.britishmuseum.org/collection/object/A_As-3573_1.
`,
`“Incense Burner.” n.d. Philadelphia Museum of Art. Accessed December 20, 2023. 
https://philamuseum.org/collection/object/37621.
`,
`“The Battle of the Animals.” n.d. Ashmolean Museum. Accessed December 20, 2023. 
https://www.ashmolean.org/collections-online#/item/ash-object-351269.
`,
`“Dragon's Well” n.d. National Army Museum. Accessed December 20, 2023. 
https://collection.nam.ac.uk/detail.php?acc=1963-10-290-1
`
]

const Section = () => {

  const bibliography = Array.from(citations, (citation, index) => (
    <Citation idx={index+1} text={citation} />));

  const imageBib = Array.from(imageSources, (citation, index) => (
    <Citation idx={index+1} text={citation} />));
  
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
        innumerable sculptures, vases, robes, and other treasures.<Cite src={23}/>
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
        western powers.<Cite src={4}/> Yet, this was only the first of several major destructive events 
        surrounding the Yuanmingyuan. Further destruction of the Yuanmingyuan occurred in 1900, 
        when forces of the Eight-Nation Alliance invaded Beijing, and during the Cultural 
        Revolution of the 1960s and 1970s.<Cite src={5}/>
      </p>
      <p>
        Today, the ruins of the Yuanmingyuan serve as a reminder of China's tumultuous transition 
        away from imperial rule. Though much of the palace is virtually unrecognizable, the Western 
        mansions still retain several pillars and foundations and several waterways still flow into 
        a few restored gardens. However, these ruins truly provide a gaze into China's early modern history.
      </p>
      <p>
      This website's goal is to memorialize the Old Summer Palace and argue that its destruction and subsequent looting is a historical tragedy. 
      In order to memorialize the Old Summer Palace, this website will tell the history of the Old Summer Palace's destruction and preservation efforts. 
      As part of this history telling, this website contains a digital gallery of photos taken directly after the 1860 burning of the Old Summer Palace to 
      visually depict the destruction of the Old Summer Palace. Finally, this website also contains a digital gallery of artifacts stolen from the Old Summer 
      Palace currently within museums across the world.  We believe that if artifacts cannot be returned to their central location, they deserve to be enjoyed 
      digitally within our website. 
      </p>

      <h2 id="history-and-construction">History and Construction</h2>
      
      <p>
      Construction of the Yuanmingyuan began in 1707, originally as a gift from the Kangxi emperor to one of his sons, the future Yongzheng Emperor. Following Kangxi's reign, Yongzheng 
      would expand the garden in 1825, introducing many of the lakes and waterways featured in the compound today. Among the amenities he introduced was the “Courtyard of Universal 
      Happiness”, which simulated a mock village featuring eunuchs portraying shopkeepers. Decades later, the Qianlong Emperor succeeded Yongzheng and undertook an additional expansion 
      of the Yuanmingyuan, which saw the construction of the Western mansions. During this period, the palace complex became the primary residence for the Emperor and his family, with 
      the Forbidden City being reserved for formal events.<Cite src={22}/> The Qianlong Emperor also commissioned a set of paintings known as the "Forty Scenes of the Yuanmingyuan" 
      depicting the palce complex as it stood in 1744. Below, several of these paintings are shown.<Cite src={23}/>
      </p>
      <div className="imageRow">
        <div className="image">
          <img src={require("../images/history/emperor-residence.jpeg")} alt="" />
          <div className="caption">Scene depicting the emperor's residence</div>
        </div>
        <div className="image">
          <img src={require("../images/history/halls.jpeg")} alt="" />
          <div className="caption">Scene depicting various government halls</div>
        </div>
        <div className="image">
          <img src={require("../images/history/bridge.jpeg")} alt="" />
          <div className="caption">Scene depicting bridge and pond</div>
        </div>
      </div>
      

      <h2 id="second-opium-war">The Second Opium War</h2>
      <p>
      In 1856, Second Opium War began due to enduring conflicts between China and Britain over Chinese port access and legalization over the opium trade. 
      The decade following the First Opium War of the 1840s saw Western powers seeking to capitalize on lucrative Chinese markets. China's loss during the 
      First Opium War meant Qing officials were coerced into signing unequal treaties with England, France, and the US. Many of these treaties contained renegotiation 
      clauses that were valid after 12 years, and by the mid 1850s, France and the US had signed new treaties with China granting them increased privileges within the 
      country.<Cite src={18} /> Following suit, the British sought to exercise the "most favored country" clause from the 1842 Treaty of Nanking. Their increased demands 
      from the Qing government included allowing British merchant companies to openly operate across China, legalizing the opium trade, cracking down on 
      piracy, and other political demands.<Cite src={19} />
      </p>
      <p>
      Chinese government sentiment regarding these treaties was one that could be described as appeasement, signing them in order to satisfy foreign nations. The Qing throne also 
      benefited from a tribute system which required foreign traders to provide a tribute to the emperor and acknowledge the authority of China's ruler. However, Western powers 
      quickly strayed from these stipulations, taking full advantage of China's ports without providing tribute.<Cite src={18}/>
      </p>

      <p>
        Qing enforcement of these treaties was equally lax, with the government refusing to accept and uphold various aspects of these agreements that saw China drawing the short straw. 
        Eventually, tensions surrounding these practices led to violence. Following the infamous Arrow Incident in which the Qing Government seized a British cargo ship and held its 
        crew captive, the British began attacking Chinese forts in Guangzhou and Tianjin, marking the start of the Second Opium War.<Cite src={18}/>
        </p>
      
      <div className="text-image-container">
        <div className="text">
        
        <p>
        The first major engagement of the Second Opium War saw a British force assisted by French and American soldiers take Canton (Guangzhou) in 1867. Following the battle, the Western powers proposed the Treaty of Tianjin, which would open up additional coastal ports, allow for inland travel, and force China to pay reparations. The Qing government refused to ratify the treaty, thereby prolonging the war.
        </p>
        <p>
        As the war progressed into 1859, the joint British, French, and American force pushed inland, taking all of Tianjin by the end of August, 1860. The following month, the 
        Qing government kidnapped a delegation of British and French officers. Simultaneously, Western forces began encroaching on Beijing, winning major battles and devastating 
        Chinese armies. The advance forced the Xianfeng Emperor to flee the city, designating his brother, Prince Gong to undertake peace talks with the Western powers. 
        By October 6th, Western forces reached the Yuanmingyuan and began to loot the premises. During this engagement, the Qing government had tortured and killed 19 members 
        of the captured delegation.<Cite src={18}/> News of this incident reached the British on October 8th, setting the scene for the destructive events to follow. The decision to burn the 
        Yuanmingyuan was intended as both a retaliatory measure as well as to discourage the Qing government from using kidnapping as a means of bargaining. Furthermore, Beijing 
        was spared so that the punishment would more directly affect the Emperor and his ensemble who perpetrated the kidnapping. British commander Lord Elgin sought to deal a 
        resounding blow to the Xianfeng Emperor's pride and to challenge the sovereignty of the Qing dynasty, justifying the action as a fitting punishment for the cruelty of 
        the imperial government.<Cite src={19} />
        </p>
        <p>
          On October 18, 1860, British commander Lord Elgin gave the order to raze the Yuanmingyuan, mobilizing over 3,500 soldiers to initiate three days of burning and destruction 
          that left only 13 structures intact. Additionally, extensive amounts of looting took place, with French and British soldiers seizing countless valuables, many dating back to 
          the Shang and Zhou dynasties up to 3,600 years ago. Looting of the Yuanmingyuan occurred in two waves. The first saw French soldiers initially engage in looting on their a
          rrival to the Yuanmingyuan on October 5th. Afterwards, the events preceding October 18th involved primarily British soldiers ransacking the Yuanmingyun's buildings for 
          valuables. The looting saw British and French soldiers collecting copious amounts of gold, porcelain, jade, and bronze treasures, as well as western gifts, furs, and other 
          clothing. Items that could not be carried were burned along with the structures in the subsequent fires.<Cite src={20}/>
          </p>
          <p>
          Within China, Yuanmingyuan treasures were sold on the black market, with many artifacts ending up in nearby Chinese marketplaces where commoners purchased them for their homes.
          However, much of the tragedy surrounding the looting of the Yuanmingyuan is the extradition of countless artifacts back to Europe. Upon their return, European luxury markets 
          were flooded with Chinese goods, which were auctioned off or gifted to museums, private collectors, and royalty. Queen Victoria and Emperor Napoleon III were personally 
          presented with a plethora of looted Chinese treasures, with Queen Victoria even receiving a Pekingese dog named “Looty”.<Cite src={21}/> Details surrounding these treasures and the debates 
          regarding their return to China are elaborated on in the next section.
          </p>
          <p>
          The decimation of the Yuanmingyuan by western forces resonates as a defining moment in China's “Century of Humiliation”, as following the burning of the Yuanmingyuan, 
          Prince Gong agreed to ratify the Treaty of Tianjin during the Convention of Peking on October 24, officially ending the Second Opium War and granting the British the 
          following privileges: <Cite src={18} />
          </p>
          
        </div>
        <div className="image">
        <img src={require("../images/opium-war/taking-fort.jpeg")} alt="" />
          <div className="caption">British soldiers taking a fort during the Second Opium War</div>
          <img src={require("../images/opium-war/qing-justice.jpeg")} alt="" />
          <div className="caption">Depiction of torture administered to British and French captives by the Qing government</div>
          <img src={require("../images/opium-war/looting.jpeg")} alt=""/>
          <div className="caption">Depiction of the looting of the Yuanmingyuan by French and British soldiers</div>
          <img className="imgsmall" src={require("../images/opium-war/looty.webp")} alt=""/>
          <div className="caption">Looty, the Pekingese presented to Queen Victoria</div>
        </div>
      </div>
      <ol>
            <li>China's signing of the Treaty of Tianjin</li>
            <li>Opening Tianjin as a trade port</li>
            <li>Cede No.1 District of Kowloon (south of present-day Boundary Street) to Britain</li>
            <li>Freedom of religion established in China</li>
            <li>British ships were allowed to carry indentured Chinese to the Americas</li>
            <li>Indemnity to Britain and France increasing to 8 million taels of silver apiece</li>
            <li>Legalization of the opium trade</li>
          </ol>
      <p>
        The fate of the Yuanmingyuan characterizes the relationship of China and the west during the age of imperialism--a clash between nation states seeking economic domination, 
        and a vast but largely unmodernized empire refusing to acknowledge the changing global dynamics. 
        In many ways, the Qing Empire's refusal to recognize the industrial and military prowess of western powers contributed to its downfall. For instance, their reliance on the 
        tribute system as a means of imposing Chinese superiority served as a form of self-denial over their military and industrial shortcomings. Chinese interactions with foreigners between the 
        First and Second Opium wars reflect this power imbalance. Following China's defeat at the hands of western military technology, the Qing Government clung to a belief over China's
        cultual superiority, signing unequal treaties under the pretenses of appeasement and upholding the tribute system. The Qing government's subsequent refusal to comply with these treaties
        once western countries stopped providing tributes marks a self-centered approach to policy. The violence that ensued and the destruction of the Yuanmingyuan thus stands not only as a blatant act of 
        humiliation to the Qing Dyansty and desecration of invaluable Chinese heritage by power hungry western powers, but also a reflection of Qing ideals that repressed China from 
        modernization for much of the 19th century.
      </p>
      <p>
      It is difficult to conjecture what the fate of China would have been if the British had captured the Xianfeng Emperor during the Second Opium War. Early in the war, 
      the British advance on Beijing was impeded by a lack of manpower as Britain focused their resources on suppressing the Sepoy Rebellion in India.<Cite src={25}/> Though China was never fully 
      colonized, Britain's imperialist intentions and economic goals with China were clear. Through the exploitative treaties that opened Chinese cities and ports and legalized the 
      opium trade, China's role as a massive market for Indian opium and source of exotic goods, all facilitated by British companies, clearly lays out the reasons for Britain's actions.
      </p>
      <h2 id="depicting-ruins">
        Depicting the Ruins
      </h2>
      <p>
      Photographed by Ernst Ohlmer, these 12 pictures are the earliest known visual record of the Old Summer Palace Ruins. Ernest was working as a customs officer at the time and took 
      these photos in 1873, 13 years after the destruction of the Old Summer Palace. While this set of photographs was originally published by Teng Gu in a 1933 book, 
      Ernst's Old Summer Palace photographs remained largely unknown prior to their display during Beijing's China Millennium Monument in 2010. Today, these images are 
      widely referenced and give a first hand glimpse into the condition of the Old Summer Palace during the late 19th century.
      </p>

      <Artifacts directory={'ruins'} name ={'ruins'} type={'jpeg'} descriptions={ruinsCaptions}/>
      {/* <Artifacts directory={'artifacts'} type={'png'} descriptions={galleryCaptions} /> */}


      <h2 id="artifacts">Artifacts</h2>
      <h3>How Were Artifacts Acquired?</h3>
      <p>
      When soldiers returned home from the Second Opium War, those involved in the looting and destruction of the Old Summer Palace also brought home their looted artifacts. 
      European fascination with East Asian culture promoted private and commercial collectors to seek out Chinese artifacts contributing to a small but vibrant market for items 
      stolen from the Old Summer Palace. It was within this market that hundreds of items originally in the Old Summer Palace swapped hands, often finding their ways into major 
      collectors' collections.
      </p>
      <p>
      Splitting the market into two, wealthy individuals were a major force within the market for Old Summer Palace artifacts. With both expertise and time, collectors such as 
      Henry Christy, Augustus Wollaston Frank, William Tayler, spent their time purchasing and curating their own collection of artifacts. Directly after the war, artifacts were 
      scattered amongst the soldiers and diplomats in China at the time, but private collectors began to condense the locus of artifacts into more concentrated pieces, many of 
      which would eventually matriculate to museums.

      </p>
      <p>
      Outside of individuals, commercial entities such  S. M. Franck & Co., a dealer in Chinese antiquities, and Spink & Son<Cite src={16}/>, 
      an auction house still active today, would scour the market and inquire about relevant artifacts. Again, much like private 
      collectors, large collections of Old Summer Palace artifacts would become centralized within their inventory. The commercial dealers within 
      the market often acted as a mediator between wealthy individuals, museums, and sellers. 

      </p>
      <h3>
      How Did Artifacts End up in Museums?
      </h3>
      <p>
      Generally speaking, museums received artifacts through purchase or donation. Museums would actively engage with commercial 
      auction houses and dealers establishing connections such as the Franck & Co.'s relationship with the 
      Victoria and Albert Museum.<Cite src={15}/> Museums would also be approached by individual collectors seeking to sell their artifacts. 
      For example, an embroidered cushion cover located in the Victoria and Albert Museum was purchased by the museum in 1886 
      from Mrs. Thurlbourn (26 Sturgeon Road, Walworth) for an undisclosed price.<Cite src={17}/> As with any market, many artifacts would pass 
      through the hands of numerous antique dealers and collectors before entering the museum collection.

      </p>
      <p>
      Aside from purchasing items, a large number of items were also donated. Henry Christy, and Augustus Wollaston Frank were 
      two private collectors who donated their collections to museums. Henry Christy was a banker who used his wealth to acquire 
      a large personal collection which he donated to the Victoria Albert and British Museum upon his death Numerous Old Summer 
      Palace pieces he had purchased prior to his death were included within his personal collection and are now on display in 
      both museums.<Cite src={14}/> Another private collector was August Woolaston Frank who worked for the British Museum. Using museum funds 
      and his personal fortune, 70,000 items are attributed to his efforts in the British museum.<Cite src={13}/> As just two of the many artifact 
      collectors during this period, Christy and Frank stand out due to the size of their collections as well as their direct 
      contributions to museum collections. 

      </p>
      <p>
      It could often take generations for items to make their way to museum collections. For example a Vase donated to the 
      Victoria and Albert Museum was originally owned by Sir Frederick Bruce, the brother of Lord Elgin. The vase was then 
      passed down to Robert Bruce, Frederick's nephew. Then Robert sold the vase to Spink & Son, an auction house, where it was 
      purchased by Phillip Craggs who donated it to the Victoria and Albert Museum.<Cite src={16}/> This winding tale illustrates the journey 
      many of these artifacts have traveled and explains why even today, new artifacts appear, more than 150 years after the 
      original destruction of the Old Summer Palace.

      </p>
      <h3>
      Gallery
      </h3>
      <p>
      The following gallery of Old Summer Palace Artifacts gives a glimpse into the volume of treasures stolen during the 1860 looting. Thousands of miles away from their place of origin, we hope you take the time to enjoy this digital gallery of priceless Chinese artifacts. 
      </p>

      <Artifacts directory={'artifacts'} name={'artifact'} type={'png'} descriptions={galleryCaptions} />

      <h2 id="continued-destruction">Continued Destruction and Degradation From 1860-1976</h2>
      <h3>Furthur Violent Destruction</h3>
      <p>
      After the destruction of the Old Summer Palace in 1860, the ruins would lay relatively dormant. 
      In 1873, Yongzhi Emperor first proposed the rebuilding of the Old Summer Palace but after 9 months, 
      materials and money ran out and the project was abandoned<Cite idx={1} src={6}/> in favor of renovations 
      to the largely intact New Summer palace. Aside from this reconstruction attempt, the ruins were largely 
      left alone and continued to degrade naturally.
      </p>
      <p>
      The next instance of destruction came during the Boxer rebellion. In 1900 during the allied occupation of Beijing, 
      allied troops burned a large number of trees within the abandoned complex. In this second instance of razing, 
      many of the buildings that had survived since 1860 fell victim to western destruction efforts<Cite idx={2} src={1}/>. This episode 
      would mark the last instance Western imperial forces would contribute to the destruction of the ruins.
      </p>
      <p>
          Prior to the Mao era, while the Old Summer Palace was officially designated a national park in 1924, it continued to degrade due to human intervention<Cite idx={3} src={3}/>. 
          Much of the looting is attributed to vandals who stole artifacts and precious materials in order to sell them for profit.<Cite src={20}/> Outside of individual vandals, 
          during the warlord period from 1916-1928, the Old Summer Palace was repeatedly looted for marble, tile, and other precious stones to fund military efforts.<Cite idx={4} src={1}/>. 
          While the degree of destruction was nothing akin to the destruction wrought by Western forces, it marked the beginning of the Chinese-led destruction of the Old Summer Palace.
          </p>
      <div className="text-image-container">
        <div className="text">
          <p>
            While there is limited scholarly research flushing out the details regarding the destruction of the Old Summer Palace 
            during the Cultural revolution, there is general consensus that both the local farmers and Red Guard vandalized the 
            Old Summer Palace. As part of the “Four Olds” movement that sought to eradicate Old ideas, cultural customs, and 
            habits from Chinese society, public sites associated with antiquity such as the cemetery of Confucius and the Old Summer 
            Palace were targets of Red Guard activity. The Red Guard was a student-led paramilitary social movement mobilized by 
            Mao Zedong which led the destruction efforts of cultural and historical artifacts. Historical sites were systematically 
            destroyed due to their perceived hindrance to cultural revolution<Cite idx={5} src={5}/> and the Old Summer Palace represented both the splendors 
            of the Qing dynasty, as well as the shame of the century of humiliation, making it a compelling target.
          </p>
        </div>
        <div className="image">
          <img src={require("../images/modern/red_guard.png")} alt=""/>
          <div id="red-guard" className="caption">Propaganda featuring the Red Guard</div>
        </div>
      </div>
      <p>
      Diving deeper into the lack of scholarship regarding the destruction of the Old Summer Palace during the Cultural Revolution, 
      Chinese writers have accused the state of covering up Chinese led destruction efforts. This is because, largely speaking, 
      “the Yuanmingyuan is exclusively attributed to the actions of the British and French and to a lesser extent the attack in 
      1900 by expeditionary forces sent to quell the Boxer Rebellion.”<Cite idx={6} src={4}/>. The lack of scholarship regarding 
      destruction of the Old Summer Palace during the Mao era may be an intentional result of the state's historical narrative 
      building efforts. While the Cultural Revolution's destruction of historical sites is largely acknowledged, suppressing its 
      narrative in context of  the Old Summer Palace allows the ruins to represent a clearer narrative of tragedy and shame. 
      However, to fully understand the tenuous history of the Old Summer Palace, acknowledging it as a place of Chinese and Western 
      destruction adds a layer of complexity to our interpretation of the ruins as representation of historical shame and anger.
      </p>
      <h3>Non-violent Destruction</h3>
      <p>
      Aside from the Cultural Revolution's negative impact on the Old Summer Palace, productivity efforts originating from the 
      Great Leap Forward (1958-1962) transformed the area, further contributing to historical and cultural loss. As part of the 
      Great Leap Forward, production teams slowly began to encroach upon the Old Summer Palace's grounds and “cut down trees, 
      flatten[ed] hills” amongst other land reclamation projects.<Cite idx={7} src={1}/>. With land readily available for construction, the 
      local community built schools, factories, and houses on the Palace's original ground. Particularly troubling for modern historians was the 
      construction of graves and garbage heaps near the center of the original Old Summer Palace grounds. Outside of the organized efforts during
      the Great Leap forward, due to the lack of government oversight prior to 1976, the local community was left to transform the ruins as they 
      saw fit. Local farmers began encroaching upon the abandoned fields, using the imperial gardens to cultivate their own fruit and vegetable 
      plots.<Cite idx={8} src={1}/>. During the Mao period, the Old Summer Palace's once hallowed grounds became a means for production, 
      and by 1980, 60% of the area had been converted to farmland, villages, schools, and factories. <Cite src={3}/>
      </p>
      <p>
      While the reclamation of the Old Summer Palace into usable land is unfortunate. Historians largely regard it as excusable given 
      the cultural and industrial demands during the period. Rather, it was the responsibility of the government to protect the Old 
      Summer Palace and other historical sites during this period, but their inability led to the continued destruction of 
      irreplaceable historical and cultural artifacts. 
      </p>
      <h3>Conclusion</h3>
      <p>
      Understanding the history of the Old Summer Palace after 1860 contributes to a more complex understanding of the Palace's representation of historical 
      tragedy. While Western violence is rightfully the dominant narrative, failure by the Chinese state to adequately protect the complex during the 
      Republican and Mao era also played an important role in the Old Summer Palace's current state. While the Chinese state might seek to ignore the 
      negative impact of the cultural revolution on the Old Summer Palace's ruins, both the violent destruction of culture by the Red Guard, as well 
      as the conversion of the complex into usable land have further reduced the Old Summer Palace's ruins into historical oblivion. 
      </p>
      <div className="text-image-container">
        <div className="text">
        
      <p>
      As modern interpreters, the history of the Old Summer Palace and its continued destruction during the 20th century reveals the importance of cultural 
      preservation from the state level. While the destruction of the Old Summer Palace in 1860 and 1900 was largely unavoidable, first the Nationalists and 
      then the Communists had the opportunity to protect the ruins from further incursion during the 20th century. Understanding the importance of government 
      action allows the history of the Old Summer Palace after 1900 to become a call to action. Educating the local community about the historical significance 
      of the Old Summer Palace may have prevented its conversion to workable land and may have motivated the state to protect the area. Similarly, by becoming 
      invested in the history of our own local communities, we can prevent similar lapses of policy that leave important historical sites left to degrade.
      </p>
        </div>
        <div className="image">
          <img src={require("../images/modern/ruins.png")} alt=""/>
          <div className="caption">Modern day view of the Yuanmingyuan ruins</div>
        </div>
      </div>

      <h2 id="modern-perspective">Modern Perspective</h2>
      <h3>Preservation Prior to 1976</h3>
      <p>
      Today, the Old Summer Palace, also known as the Yuanmingyuan Park, is a national park for public and tourist use. While proposals for the Palace's 
      reconstruction have been floated around, the ruins remain largely untouched and serve as a reminder of western imperial destruction for the Chinese public.
      </p>
      <p>
      Prior to Mao's rule, the imperial government designated the Old Summer Palace as a public park. However largely occupied with more pressing political 
      concerns<Cite src={3}/>, the Old Summer Palace was left untouched and the area was left undeveloped.
      </p>
      <p>
      Under Mao, a new collection of historical sites were granted protection, but this time, the Old Summer Palace was not included within the list.<Cite src={3}/> 
      The ruins, now having endured the destruction in 1860 and continued destruction 
      1900 during the Boxer rebellion, were largely thought of as useless and lacking cultural and aesthetic value to the state. 
      In 1951, Zhou Enlai's explicit request to preserve the complex was one of the only political forces stopping the complete 
      destruction and repurposing of the Old Summer Palace Ruins.<Cite src={3}/>
      </p>
      <h3>The Birth of the Administrative Department of the Yuanmingyuan (Old Summer Palace)</h3>
      
      <div className="text-image-container">
        <div className="text">
        <p>
      After enduring continued destruction during the Cultural Revolution, the 1976 death of Mao and the termination of the Cultural 
      Revolution led to the creation of the Administrative Department of the Yuanmingyuan. As the first government agency overseeing 
      the complex, during the 1980s, the Yuanmingyuan agency slowly began sifting through the rubble and cleaning up over 100 years of 
      destruction and negligence. Some of the major initiatives of the Yuanmingyuan agency included removing rubble, reorganizing major 
      stone fragments, and returning fragments to their original positions.<Cite src={3}/>
      </p>
        <p>
        In 1983 three major construction projects were approved: the construction of the Relics Park, the renovation of the Fuhai 
        (central lake), and the reorganization of the Xiyang Lou (western mansions). The Relics Park now serves as the Old Summer 
        Palace's entrance while renovations of the Fuhai cleaned up the shore and water supply of Fuhai Lake, one of the central 
        bodies of water within the complex. While both of these projects were approved prior to the crystallization of the goals 
        associated with the Old Summer Palace park, they demonstrate the government's desire to renovate the Old Summer Palace into 
        a public space. The lack of vision for the park, however, made renovations for the Xiyang Lou difficult.<Cite src={3}/> 
        The Xiyang Lou refers to the western style mansion located in the northern part of the Old Summer Palace and is the most 
        intact area of the complex. Debates surrounding the renovation or rebuilding of the Xiyang Lou due to its more structurally 
        sound nature were floated around and reorganization stalled due to the lack of administrative direction.
        </p>
        <p>
        Soon after in 1984, the government's vision for the Old Summer Palace was crystalized. Rather than focusing on rebuilding 
        the complex, cultural and political leaders decided that the Old Summer Palace should serve as a place for memorialization, 
        education, and tourism.<Cite src={3}/> In order for the park to best serve the community as a memorial, leaders decided to  focus on 
        depicting the history of the Old Summer Palace, by limiting restoration efforts and enabling viewers to experience the 
        extent of the ruins. Rather than rebuilding structures, the administrative department would focus on preserving the 
        existing ruins and making the park more accessible to visitors, transforming the Old Summer Palace from a park to a 
        full fledged tourist and historical attraction. Of the Old Summer Palace's many sections, only the natural features 
        such as the trees and lakes have been extensively renovated, and the Flower Maze located within the Xiyang Lou is one 
        of the only fully restored structures.<Cite src={3}/>
      </p>
      <p>
        For modern visitors, visiting the Old Summer Palace is a deeply interactive experience. In many sections of the complex, 
        visitors are left in the midst of rubble, a deeply jarring reminder of the extent of western destruction. Rather than 
        viewing the ruins from afar, in some places, visitors are free to touch the still-standing structures and thread their 
        way through the maze of stone and architecture<Cite src={1}/>. Moreover, the construction of the Relics museum offers both historical 
        background and intellectual stimulation for visitors to learn from. Fulfilling the park's goal as a education vessel, 
        visitors can contextualize their experience amongst the ruins with the help of the museum, where both artifacts and a 
        historical documentary is shown.<Cite src={1}/>  
        </p>
        </div>
        <div className="image">
          <img src={require("../images/modern/courtyard.png")} alt=""/>
          <div className="caption">Restored Yuanmingyuan courtyard</div>
          <img src={require("../images/modern/maze.png")} alt="" />
          <div className="caption">Restored maze near the Western Mansions</div>
          <img src={require("../images/modern/ruins-people.png")} alt="" />
          <div className="caption">Vistors among the ruins of the Western Mansions</div>
        </div>
      </div>
      
      <h3>The Symbolic Role of the Old Summer Palace</h3>
        <p>
        Outside of the Old Summer Palace's status as a physical park, the ruins contain deeply symbolic meanings for Chinese citizens. 
        As a reminder of national humility and foreign destruction, debates surrounding the thousands of looted artifacts frequently 
        attract media attention. Since the early 2000s, the Chinese government has made an effort to lobby for the return of stolen 
        artifacts and the halting of their continued auction.<Cite src={9}/> Especially as China's geopolitical power has increased throughout 
        the 2000's, the state has taken a larger role in demanding the return of priceless artifacts such as actively approaching 
        and entering various museums including the Metropolitan Museum of Art in NYC. Locating and returning stolen artifacts is 
        a slow process, with financial and logistical challenges impeding the process. For example, 7 marble columns originally 
        purchased in 2013 from the KODE<Cite src={8}/> in Norway were finally debuted in 2023, almost 10 years after the original repatriation 
        efforts began.<Cite src={12}/> However, largely speaking, the public sentiment over stolen artifacts has shifted to support the return 
        of artifacts from other locations of origin.
      </p>
      <p>
      The private sector has also taken initiative in the quest to retrieve stolen artifacts. For example, the 7 marble columns 
      were returned after Huang Nubo, a real estate developer, donated 1.6M USD to the KODE museum in Norway.<Cite src={10}/> In another case, 
      Cai Mingchao paid 28M Euros for two bronze zodiacs owned by the late French designer Yves Saint Laurent. Notably Cai refused 
      to pay the 28M Euros after winning the auction, engulfing the event in controversy.<Cite src={7}/> Other more traditional examples of 
      private sector intervention include Macau casino tycoon Stanley Ho's decision to pay 8.9M USD for the horse zodiac status 
      in 2007 before donating it back to the Chinese state shortly after.<Cite src={11}/> During the mid 20th century, Chinese citizens actively 
      contributed to the destruction of the Old Summer Palace's ruins, but today, some are willing to dole out huge sums of money 
      for the repatriation of the Palace's many stolen artifacts.
      </p>
      <p>
      While the Old Summer Palace and its stolen artifacts is an inherently historical and cultural issue, its prominence within 
      the media as well as the Chinese state's explicit agenda to locate and recall artifacts has given it a geopolitical dimension.
      Fighting for the return of artifacts is imbued with a sense of patriotism, and China actively uses the media to cultivate 
      nationalism and negatively depict foreign owners of Old Summer Palace artifacts.
      </p>
      <h2 id="epilogue">Epilogue</h2>
      <p>
      Despite the attention Old Summer Palace artifacts get within the media, it is expected that the majority of smaller artifacts such as the ones highlighted within this project will remain away from their origins in China. Due to both the sheer number of artifacts floating around in private and public collections as well as the government's focus on larger more instrumental pieces such as the marble columns and zodiac heads, seeking the return of these artifacts is much less a priority. 
      </p>
      <p>
      It is our belief that if artifacts cannot be returned to their original location, they deserve to be enjoyed in a centralized location, in this case within the digital gallery stored on our website. Aside from exploring the numerous artifacts, we believe that learning about the history behind the Old Summer Palace and what makes the ruins such an impactful and symbolic space, brings rightful attention to the tragic destruction of art, life, and culture during the Palace's 1860 destruction. We may never find or learn about some of the most valuable artifacts whisked away from the Old Summer Palace, but we can take the time to learn its significance and devote proper reverence to its history.       </p>
      <h2 id="bibliography">Bibliography</h2>
      <ol className="references">
        {bibliography}
      </ol>
      <h2 id="bibliography">Image References</h2>
      <ol className="references">
        {imageBib}
      </ol>
      <div className="footer"><p className="footerText">Remembering the Yuanmingyuan [2023]</p></div>
      </div>
    </div>
  );
};

export default Section;
