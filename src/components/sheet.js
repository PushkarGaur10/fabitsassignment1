import React, { useState } from 'react'
import styles from '../styles/sheet.module.css'
import cross from '../Assets/sheet/cross.png'
import fingerprint from '../Assets/icons/fingerprint.png'
import group from '../Assets/icons/Group.png'
import home from '../Assets/icons/home.png'
import car from '../Assets/icons/car.png'
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Sheet() {
  const [closed,setClosed] = useState(false)
  const [closed1,setClosed1] = useState(false)
  const [closed2,setClosed2] = useState(false)
  const [initial, setInitial] = useState(true)
  const [selectedoption, setSelectedoption] = useState('')
  const [page,setPage] = useState(1)
  const [pan,setPan] = useState(1)
  const [loading, setLoading] = useState(false)

  const Close = () => {
    setClosed(!closed)
  } 

  const changeloading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }

  return (
    <div>
    <div className={styles.grey}></div>
    {initial ?       
      <div className={!closed1 ? `${styles.icontainer}` : `${styles.icontainerdown}`}>
      <img onClick={()=> setClosed1(true)} className={styles.cross} src={cross} alt='crossed'/>
        <div className={styles.topcontainer}>
            <div className={styles.toptextcontainer}>
              <div className={styles.heading}>Fetching your PAN Details</div>
              <div className={styles.description}>Getting your PAN details by your chosen method</div>
            </div>
            <img className={styles.car} src={car} alt='car'/>
          </div>

        {page === 1 ? <div className={styles.bottomcontainer}>
            <div className={styles.questions}>
              <div className={styles.text1}>How much trading experience do you have?</div>
              <div className={styles.page}>1/2</div>
            </div>
            <ul className={styles.options}>
              <li className={selectedoption === 1 ? `${styles.selected}` : `${styles.notselected}`}
                  onClick = {()=>setSelectedoption(1)}>
                  <div className={styles.bold}>None</div><div className={styles.thin}>&lt;1Y</div>
              </li>
              <li className={selectedoption === 2 ? `${styles.selected}` : `${styles.notselected}`}
                  onClick = {()=>setSelectedoption(2)}>
                  <div className={styles.bold}>Beginner</div><div className={styles.thin}>1Y-3Y</div>
              </li>
              <li className={selectedoption === 3 ? `${styles.selected}` : `${styles.notselected}`}
                  onClick = {()=>setSelectedoption(3)}>
                  <div className={styles.bold}>Medium</div><div className={styles.thin}>3Y-5Y</div>
              </li>
              <li className={selectedoption === 4 ? `${styles.selected}` : `${styles.notselected}`}
                  onClick = {()=>setSelectedoption(4)}>
                  <div className={styles.bold}>Pro</div><div className={styles.thin}>&gt;5Y</div>
              </li>
            </ul>
            <button onClick={()=>setPage(2)} className={styles.btn}><div>Next</div><div><FaArrowRight /></div></button>
          </div> : <div className={styles.bottomcontainer}>
            <div className={styles.questions}>
              <div className={styles.text1}>Please enter your PAN details to complete verification</div>
              <div className={styles.page}>2/2</div>
            </div>
            <div className={styles.middlecontainer}>
              <div className={styles.verification}>Verification method</div>
              <div className={styles.options2}>
                <div onClick={()=> setPan(1)} className={pan === 1 ? `${styles.option2} ${styles.chosen}` : `${styles.option2}`}>Manual</div>
                <div onClick={()=> setPan(2)} className={pan === 2 ? `${styles.option2} ${styles.chosen}` : `${styles.option2}`}>Automatic</div>
              </div>
             {pan === 2 && <div className={styles.inputcontainer}>
                <label className={styles.label}>PAN Card Number</label>
                <input className={styles.input} placeholder='Enter Pan'/>
              </div>}
            </div>

            <div className={styles.backcontainer}>
              <div onClick={()=>setPage(1)} className={styles.back}><FaArrowLeft /></div>
              <button onClick={()=>[setInitial(false),setLoading(true),changeloading()]} className={styles.btn}><div>Complete</div><div><FaArrowRight /></div></button>
            </div>
            
          </div>
        }
      </div>
      :
      <div>
        {loading ? <div className={!closed ? `${styles.containerup} ${styles.background}` : `${styles.containerdown} ${styles.background}`}>
        <img className={styles.car1} src={car} alt='car'/>
          <div className={styles.textoverlay}>
            <img onClick={Close} className={styles.cross} src={cross} alt='crossed'/>
            <div className={styles.overlaytext}>
            </div>
            <div className={styles.topcontent}>
              <div className={styles.heading}>Fetching your PAN Details</div>
              <div className={styles.description}>Getting your PAN details by your chosen method</div>
            </div>      
          </div>
        </div> : <div className={!closed2 ? `${styles.infocontainer}` :`${styles.infocontainerdown}`}>
            <img onClick={()=>setClosed2(!closed2)} className={styles.cross} src={cross} alt='crossed'/>
            <div className={styles.toptextcontainer1}>
              <div className={styles.heading}>Verify your details</div>
              <div className={styles.description}>Aadhaar link found</div>
            </div>
            <div className={styles.cards}>

              <div className={styles.card}>
              <a href="https://www.linkedin.com/in/pushkar-gaur-962178184/" className={styles.link}>
                <div className={styles.cardflex1}>
                  <div className={styles.cardimgcontainer}><img className={styles.cardimg} src={group} alt='icons'/></div>
                  <div>
                    <div className={styles.cardpannumber}>CMRPMXXXXF</div>
                    <div className={styles.cardname}>ASHAR RAI MUJEEB</div>
                  </div>
                </div>
                <div className={styles.cardflex2}>
                  <div><div className={styles.cardlabel}>Fetched Via</div><div className={styles.cardlabel2}>NSDL</div></div>
                  <div><div className={styles.cardlabel}>Last Updated</div><div>24/04/2024</div></div>
                </div>
                </a>
              </div>

              <div className={styles.card}>
              <a href="https://www.linkedin.com/in/pushkar-gaur-962178184/" className={styles.link}>
                <div className={styles.cardflex1}>
                  <div className={styles.cardimgcontainer}><img className={styles.cardimg} src={fingerprint} alt='icons'/></div>
                  <div>
                    <div className={styles.cardpannumber}>Address</div>
                    <div className={styles.cardname}>Aadhaar<br/>UID</div>
                  </div>
                </div>
                <div className={styles.cardflex2}>
                  <div><div className={styles.cardlabel}>Fetched Via</div><div className={styles.cardlabel2}>Digio</div></div>
                  <div><div className={styles.cardlabel}>Date of Birth</div><div>18/10/1994</div></div>
                </div>
                </a>
              </div>

              <div className={styles.card}>
              <a href="https://www.linkedin.com/in/pushkar-gaur-962178184/" className={styles.link}>
                <div className={styles.cardflex1}>
                  <div className={styles.cardimgcontainer}><img className={styles.cardimg} src={home} alt='icons'/></div>
                  <div>
                    <div className={styles.cardpannumber}>Address</div>
                    <div className={styles.cardname}>16/2, 8 Jat Regiment, c/o 56 APO</div>
                  </div>
                </div>
                <div className={styles.cardflex2}>
                  <div><div className={styles.cardlabel}>Fetched Via</div><div className={styles.cardlabel2}>Digio</div></div>
                  <div><div className={styles.cardlabel}>Address Type</div><div>Correspondence</div></div>
                </div>
                </a>
              </div>

            </div>
        </div>}
      </div>

      }

      <div>
        <BiSolidUpArrowAlt onClick={()=> setClosed(false)} className={styles.up}/>
      </div>
    </div>
  )
}
