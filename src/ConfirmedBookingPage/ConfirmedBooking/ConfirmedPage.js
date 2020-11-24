import React, { Component } from 'react'
import BookingInfo from './BookingInfo'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import DoneButton from './DoneButton'

export class ConfirmedPage extends Component {
    render(){
        return(
            <div style={styles.page}>
                <IoIosCheckmarkCircleOutline style={styles.icon}/>
                <text style={styles.text}>Booking confirmed!</text>
                <text style={{ color: 'white' }}>_____________________</text>
                    {/* View component to make the line would be better */}
                <BookingInfo />
                <DoneButton />
            </div>
        )
    }
}

const styles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100vh',
        padding: '50px',
        alignItems: 'center',
        backgroundColor: '#19C1B7',
    },
    icon: {
        position: 'relative',
        color: 'white',
        fontSize: '200px',
    },
    text: {
        position: 'relative',
        fontFamily: 'Source Serif Pro',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '24px',
        fontWeight: 'bold',
    }
}

export default ConfirmedPage;