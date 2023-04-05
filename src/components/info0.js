import React from 'react'
import Image from 'next/image'
import Studio from '../images/Studio1.png'
import Hero from '../images/hero1.png'



function Info() {
  return (
    <div
    style={{
      display:'grid',
      gridTemplateColumns:'1fr 1fr',
      paddingLeft:'10%',
      paddingRight:'10%',
      height:'70vh',
      backgroundColor: '#FAF7F0'
    }}
    >
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:100,
      paddingLeft: 100,


    }}>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}
  >

  <Image
    src={Hero}
    alt="Picture of the author"
    width={250}
    height={250}
    style={{
      marginTop:-125
    }}
  />

  <Image
    src={Studio}
    alt="Picture of the author"
    width={250}
    height={250}
    style={{
      marginLeft: -125,
     
    }}
  />
  </div>

</div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingTop: 100,
          width: '50%',
        }}
      >
        <div  
        style={{
        
          fontSize: 8,
          marginBottom: 10,
        }}
        >NILEONE STUDIOS</div>
        <div
        style={{
          fontSize: 22,
          fontWeight: 'semibold',
          marginBottom: 10,
        }}
        >Video, Audio and Podcast studios</div>
        <div
        style={{
          fontSize: 10,
          marginBottom: 10,
        }}
        >We have broadcast quality studio setups with proffesional
           equipment and lighting that deliver outstanding work
        </div>
        <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize:10 }}>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: '#F2C200', marginRight: '0.5rem' }}>✓</span>
            Various video Production Sets
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: '#F2C200', marginRight: '0.5rem' }}>✓</span>
            Stae of the Art Podcast studio 
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: '#F2C200', marginRight: '0.5rem' }}>✓</span>
            Audio studio with the latest Equipment
          </li>
        </ul>
           <button style={{
            backgroundColor: '#F2C200',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            Learn more
            <span style={{ marginLeft: '0.5rem' }}>➔</span>
          </button>


        </div>

    </div>
  )
}

export default Info