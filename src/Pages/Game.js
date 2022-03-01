import ButtonsGrid from "../Components/ButtonsGrid";
import {useEffect, useState} from "react";
import {getDuplicates} from "../Helpers/getDuplicates";
import {ANIMATION_DURATION, TIMEOUT} from "../Constants/Animation";
import Steps from "../Components/Steps";
import Header from "../Components/Header";
import Modal from "../Modal/Modal";
import Success from "../Components/Success";
import {randomIntFromInterval} from "../Helpers/randomintFromInterval";

function Game() {
    const [blocksCount, setBlocksCount] = useState(5)
    const [start, setStart] = useState(false)

    const [buttonsArray, setButtonsArray] = useState([randomIntFromInterval(1, 16)])
    const [checkedElement, setCheckedElement] = useState(0)
    const [permanentDisable, setPermanentDisable] = useState(true)
    const [mainColor, setMainColor] = useState("default")
    const [mainSteps, setMainSteps] = useState(0)

    const [modalIsOpen, setModalIsOpen] =useState(false)

    const onButtonClick = (numElement) => {
        if (buttonsArray[checkedElement] === numElement) {
            setCheckedElement(prev => prev + 1)
            if (checkedElement + 1 === buttonsArray.length) {
                setTimeout(() => setPermanentDisable(true), ANIMATION_DURATION * 1000)
                if (blocksCount === mainSteps + 1) {
                    setTimeout(() => {
                        Restart()
                        setModalIsOpen(true)
                    }, ANIMATION_DURATION * 1000)
                } else {
                    setTimeout(
                        () => ShowExamplesButtons("default",
                            () => setButtonsArray(prev => {
                                return [...prev, randomIntFromInterval(1, 16)]
                            }),
                            TIMEOUT(mainSteps + 2)))
                    setTimeout(() => setCheckedElement(0), TIMEOUT(2 * mainSteps))
                    setTimeout(() => setMainSteps(prev => prev + 1), TIMEOUT(2 * mainSteps))
                }
            }
            return true
        } else {
            buttonShowsError()
            setCheckedElement(0)
            setTimeout(() => setMainSteps(0), TIMEOUT(mainSteps + 1))
            return false
        }
    }

    const ShowExamplesButtons = (color, setFunction) => {
        setTimeout(() => setMainColor(color), ANIMATION_DURATION * 1000)
        setFunction()
    }

    const buttonShowsError = () => {
        const prevArray = buttonsArray
        setTimeout(() => setPermanentDisable(true), ANIMATION_DURATION * 1000)
        ShowExamplesButtons("error",
            () => setButtonsArray(prevArray))
        setTimeout(
            () => ShowExamplesButtons("default",
                () => setButtonsArray([randomIntFromInterval(1, 16)])),
            TIMEOUT(mainSteps + 1))
    }

    const Restart = () => {
        setStart(false)
        setButtonsArray([randomIntFromInterval(1, 16)])
        setCheckedElement(0)
        setPermanentDisable(true)
        setMainSteps(0)
    }

    useEffect(() => {
        start && setTimeout(() => setPermanentDisable(false), TIMEOUT(mainSteps + 2))
    }, [buttonsArray, start])

    return (
        <div className={"amongus"}>
            <Header
                blockCount={blocksCount}
                setBlockCount={setBlocksCount}
                setStart={setStart}
                restart={Restart}
                start={start}
            />
            <div className={"game-page"}>
                <div className={"game-page__item"}>
                    <Steps
                        maxSteps={blocksCount}
                        currentStep={mainSteps}
                        ErrorValidation={mainColor}
                    />
                    <ButtonsGrid
                        mainColor={mainColor}
                        isActiveBlock={false}
                        animationDelay={permanentDisable}
                        buttonsCombination={start && getDuplicates(buttonsArray)}
                    />
                </div>
                <div className={"game-page__item"}>
                    <Steps
                        maxSteps={mainSteps + 1}
                        currentStep={checkedElement - 1}
                        ErrorValidation={mainColor}
                    />
                    <ButtonsGrid
                        mainColor={mainColor}
                        onButtonClick={onButtonClick}
                        animationDelay={permanentDisable}
                        isActiveBlock={true}
                    />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                setIsOpen={setModalIsOpen}
            >
                <Success
                    setIsOpen={setModalIsOpen}
                />
            </Modal>
        </div>
    );
}

export default Game;
