import React, {useState} from "react";

export const Modal = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Создать новую комнату</button>
            {isOpen &&
                <div className='modal-overlay'>

                    <div className='modal-block'>
                        <div className='modal-header'>
                            <input type="text" value='Введите название комнаты'/>
                            <div onClick={() => setIsOpen(false)}>
                                <button>X</button>
                            </div>
                        </div>

                        <div className='modal-footer'>
                            <button onClick={() => {}}>Создать комнату</button>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}