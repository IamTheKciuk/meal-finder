import React from "react";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../context";

const Modal = () => {
    const { modal, showModal } = useGlobalContext();

    const image = modal.content;

    return (
        <div className="modal modal-image">
            <IoClose className="exit-icon" onClick={() => showModal()} />
            <div className="img-wrapper">
                <img src={image} alt="modal" />
            </div>
        </div>
    );
};

export default Modal;
