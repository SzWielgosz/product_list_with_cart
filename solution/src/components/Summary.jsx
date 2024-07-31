import ReactModal from "react-modal";
import React from "react";
import styles from '../module-styles/Summary.module.css';

ReactModal.setAppElement("#root")

const Summary = ({ isOpen, onRequestClose, orderSummary, onNewOrder, totalPrice }) =>{
    return(
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Order Summary"
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <img src="assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed"></img>
            <div className={styles.modalHeader}>
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy the food!</p>
            </div>
                <div className={styles.modalBody}>
                    <ul>
                        {orderSummary.map((item, index) => (
                            <li key={index}>
                                <img src={item.imgSrc} alt={item.name} />
                                <div className={styles.summaryDetailsWrapper}>
                                    <div className={styles.summaryDetails}>
                                        <b>{item.name}</b> {item.quantity}x @${item.price}
                                    </div>
                                    <p>${parseFloat(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.modalFooter}>
                        <div className={styles.modalFooterTotalPrice}>
                            <p>Order total:</p>
                            <h2>${parseFloat(totalPrice).toFixed(2)}</h2>
                        </div>
                    <button onClick={onNewOrder}>Start new order</button>
                    </div>
            </div>
        </ReactModal>
    )
}

export default Summary;